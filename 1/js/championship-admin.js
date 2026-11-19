function initializeChampionshipAdmin() {
    if (typeof firebase === 'undefined' || typeof firebase.firestore !== 'function') return;

    const db = firebase.firestore();
    const auth = firebase.auth();
    const adminPanel = document.getElementById('championship-admin');
    const adminLink = document.getElementById('admin-nav-link');
    const adminStatus = document.getElementById('admin-status');
    const yearSelect = document.getElementById('admin-year');
    const saveButton = document.getElementById('save-championship-year');
    const importButton = document.getElementById('import-championship-defaults');
    const singleSeasonField = document.getElementById('admin-single-season-field');
    const firstHalfField = document.getElementById('admin-first-half-field');
    const secondHalfField = document.getElementById('admin-second-half-field');
    const collection = db.collection('championships');
    const expectedYearCount = Object.keys(seasonChampionData).length;

    [...teamHistoryData].sort((a, b) => b.year - a.year).forEach(({ year }) => {
        const option = document.createElement('option');
        option.value = String(year);
        option.textContent = `${year} 年`;
        yearSelect.appendChild(option);
    });

    function populateTeamSelect(id, year, selectedName) {
        const select = document.getElementById(id);
        const yearData = teamHistoryData.find(item => item.year === year);
        const names = [...new Set((yearData?.teams || []).filter(Boolean).map(team => team.name))];
        select.replaceChildren();
        const emptyOption = document.createElement('option');
        emptyOption.value = '';
        emptyOption.textContent = '選擇球隊';
        select.appendChild(emptyOption);
        names.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = getTeamDisplayName(name);
            select.appendChild(option);
        });
        select.value = names.includes(selectedName) ? selectedName : '';
    }

    function updateAdminEditor() {
        const year = Number(yearSelect.value);
        const record = seasonChampionData[year] || {};
        const singleSeason = year === 1998 || year === 1999;
        firstHalfField.hidden = singleSeason;
        secondHalfField.hidden = singleSeason;
        singleSeasonField.hidden = !singleSeason;
        populateTeamSelect('admin-first-half', year, record.firstHalf);
        populateTeamSelect('admin-second-half', year, record.secondHalf);
        populateTeamSelect('admin-single-season', year, record.singleSeason);
        populateTeamSelect('admin-annual', year, record.annual);
    }

    async function requireAdmin() {
        const user = auth.currentUser;
        if (!user) throw new Error('請先登入管理帳號。');
        const token = await user.getIdTokenResult(true);
        if (token.claims.admin !== true) throw new Error('此帳號沒有冠軍資料管理權限。');
        return user;
    }

    async function loadChampionSettings() {
        const snapshot = await collection.get();
        snapshot.forEach(doc => {
            const year = Number(doc.id);
            if (!seasonChampionData[year]) return;
            seasonChampionData[year] = { ...seasonChampionData[year], ...doc.data() };
        });
        refreshRenderedChampionships();
        return snapshot.size;
    }

    yearSelect.addEventListener('change', updateAdminEditor);
    updateAdminEditor();

    saveButton.addEventListener('click', async () => {
        saveButton.disabled = true;
        adminStatus.textContent = '正在儲存……';
        try {
            const user = await requireAdmin();
            const year = Number(yearSelect.value);
            const singleSeason = year === 1998 || year === 1999;
            const annual = document.getElementById('admin-annual').value;
            if (!annual) throw new Error('請選擇年度總冠軍。');
            const record = {
                firstHalf: singleSeason ? null : document.getElementById('admin-first-half').value || null,
                secondHalf: singleSeason ? null : document.getElementById('admin-second-half').value || null,
                singleSeason: singleSeason ? document.getElementById('admin-single-season').value || null : null,
                annual,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedBy: user.uid
            };
            await collection.doc(String(year)).set(record);
            seasonChampionData[year] = { ...seasonChampionData[year], ...record };
            refreshRenderedChampionships();
            adminStatus.textContent = `${year} 年冠軍資料已儲存並同步。`;
        } catch (error) {
            adminStatus.textContent = error.message || '儲存失敗，請確認 Firestore 與管理權限設定。';
        } finally {
            saveButton.disabled = false;
        }
    });

    importButton.addEventListener('click', async () => {
        importButton.disabled = true;
        adminStatus.textContent = '正在檢查雲端資料……';
        try {
            await requireAdmin();
            const existing = await collection.get();
            const existingYears = new Set(existing.docs.map(doc => doc.id));
            const missingYears = Object.keys(seasonChampionData).filter(year => !existingYears.has(year));
            if (!missingYears.length) {
                importButton.hidden = true;
                adminStatus.textContent = '所有年度都已有 Firestore 資料。';
                return;
            }
            const batch = db.batch();
            missingYears.forEach(year => {
                const record = seasonChampionData[year];
                batch.set(collection.doc(year), {
                    firstHalf: record.firstHalf || null,
                    secondHalf: record.secondHalf || null,
                    singleSeason: record.singleSeason || null,
                    annual: record.annual,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                    updatedBy: auth.currentUser.uid
                });
            });
            await batch.commit();
            const count = await loadChampionSettings();
            importButton.hidden = count >= expectedYearCount;
            adminStatus.textContent = `已補入 ${missingYears.length} 年預設資料；Firestore 現有 ${count} 年資料。`;
            updateAdminEditor();
        } catch (error) {
            adminStatus.textContent = error.message || '匯入失敗，請確認 Firestore 與管理權限設定。';
        } finally {
            importButton.disabled = false;
        }
    });

    auth.onAuthStateChanged(async user => {
        if (!user) {
            adminPanel.hidden = true;
            adminLink.hidden = true;
            return;
        }

        let isAdmin = false;
        try {
            const token = await user.getIdTokenResult();
            isAdmin = token.claims.admin === true;
        } catch (error) {
            console.warn('無法讀取 Firebase 管理者權限。', error);
        }
        adminPanel.hidden = !isAdmin;
        adminLink.hidden = !isAdmin;

        try {
            const count = await loadChampionSettings();
            if (isAdmin) {
                importButton.hidden = count >= expectedYearCount;
                adminStatus.textContent = count
                    ? `Firestore 已載入 ${count}/${expectedYearCount} 年資料，可編輯年度或補齊缺漏。`
                    : 'Firestore 尚無冠軍資料，可先匯入本頁預設名單。';
                updateAdminEditor();
            }
        } catch (error) {
            if (isAdmin) adminStatus.textContent = '讀取失敗，請確認已建立 Firestore 並套用安全規則。';
            else console.warn('Firestore 冠軍資料無法讀取，使用內建名單。', error);
        }
    });
}

