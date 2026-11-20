function initializeDraftHistory() {
    const container = document.getElementById('draft-year-list');
    const status = document.getElementById('draft-history-status');
    const yearFilter = document.getElementById('draft-year-filter');
    const teamFilter = document.getElementById('draft-team-filter');
    const searchInput = document.getElementById('draft-search');
    const retryButton = document.getElementById('draft-retry');
    if (!container || !status || !yearFilter || !teamFilter || !searchInput || !retryButton) return;
    if (container.dataset.initialized === 'true') return;
    container.dataset.initialized = 'true';

    const articleUrl = 'https://zh.wikipedia.org/zh-tw/中華職棒選秀會';
    const specialExamYears = new Set([1997, 1998, 1999]);
    const specialExamListUrl = 'https://twbsball.dils.tku.edu.tw/index.php?title=%E7%89%B9%E8%80%83';
    const specialExamRosterSourceUrl = 'https://taiwanbaseball.pixnet.net/blog/posts/2013487458';
    const specialExamRosters = {
        1997: [
            { name: '味全', players: ['蔡昆祥', '鄭文賢', '武建州', '陳炳男', '李明勳'] },
            { name: '統一', players: ['郭源治', '吳俊華'] },
            { name: '三商', players: ['蔡豐安', '洪邦政', '呂嘉明', '林怡宏', '林禮雄', '吳世賢', '陳光輝'] },
            { name: '兄弟', players: ['吳俊億', '劉文貿', '戴于程', '張瑋'] },
            { name: '時報', players: ['趙子傑', '卜南波', '王保文', '蔡重光'] },
            { name: '興農', players: [], note: '未提人選' },
            { name: '和信', players: ['林鴻遠', '洪啟峰'] }
        ],
        1998: [
            { name: '味全', players: ['許聖杰', '陳俊傑', '馮文龍'] },
            { name: '統一', players: ['黃甘霖', '吳昭輝', '高正偉', '郭彥柏'] },
            { name: '三商', players: ['戴龍水', '江怡德', '薛富中'] },
            { name: '兄弟', players: ['陳瑞振', '蕭任汶', '吳柏勳', '洪德芳', '陳建村', '陳谷源'] },
            { name: '興農', players: ['陳宗男', '葉泳麟', '葉高立', '歐峻男', '陳昭銘'] },
            { name: '和信', players: ['高建三', '邱企彬'] }
        ],
        1999: [
            { name: '味全', players: ['郭一峰', '盧詩清', '蕭雲東'] },
            { name: '統一', players: ['曹竣崵', '吳佳榮', '柯建鋒', '周森毅', '李錦華', '蔡青峰', '蘇育樂'] },
            { name: '三商', players: ['王志偉'] },
            { name: '兄弟', players: ['馮勝賢', '林明憲', '王勁力', '張士凱', '許誌為', '蒲慶哲', '陳俊義'] },
            { name: '興農', players: ['高龍偉', '羅松永', '陳宗甫', '王崇耀', '劉景倫'] },
            { name: '和信', players: ['楊松弦', '謝承勳', '黃貴裕', '柳裕展', '何紀賢', '陳威志', '楊啟鑫', '潘志強'] }
        ]
    };
    const apiUrl = new URL('https://zh.wikipedia.org/w/api.php');
    const query = new URLSearchParams({
        action: 'parse',
        page: '中華職棒選秀會',
        prop: 'text',
        format: 'json',
        origin: '*'
    });
    apiUrl.search = query.toString();
    let draftEvents = [];

    const normalizedText = element => (element?.textContent || '').replace(/\s+/g, ' ').trim();
    const headingText = element => normalizedText(element.querySelector('.mw-headline') || element);
    const parseDraftTables = html => {
        const parsed = new DOMParser().parseFromString(html, 'text/html');
        const content = parsed.querySelector('.mw-parser-output') || parsed.body;
        const blocks = [];
        const annualYears = new Set();
        let activeYear = null;
        let activeLabel = '選秀名單';
        const nodes = content.querySelectorAll('h2, h3, h4, table.wikitable');

        nodes.forEach(node => {
            if (/^H[234]$/.test(node.tagName)) {
                const label = headingText(node);
                const yearMatch = label.match(/(19|20)\d{2}/);
                if (node.tagName === 'H2') {
                    activeYear = yearMatch ? Number(yearMatch[0]) : null;
                    if (activeYear) annualYears.add(activeYear);
                } else if (yearMatch) {
                    activeYear = Number(yearMatch[0]);
                }
                if (node.tagName === 'H2') activeLabel = '選秀名單';
                else activeLabel = label
                    .replace(/（[^）]*\d{4}[^）]*）/g, '')
                    .replace(/\([^)]*\d{4}[^)]*\)/g, '')
                    .trim() || '選秀名單';
                return;
            }

            if (!activeYear) return;
            const rows = [...node.rows];
            const headerRowIndex = rows.findIndex(row => {
                const firstCell = normalizedText(row.cells[0]);
                return row.cells.length > 2 && /球隊|球队|隊伍|队伍/.test(firstCell);
            });
            if (headerRowIndex < 0) return;

            const headerCells = [...rows[headerRowIndex].cells];
            const teams = headerCells.slice(1).map(normalizedText);
            if (!teams.length || teams.some(name => !name)) return;
            const teamsByName = new Map();
            teams.forEach((name, index) => {
                if (!teamsByName.has(name)) {
                    teamsByName.set(name, { name, picks: [], passed: false, passRound: null, columns: [] });
                }
                teamsByName.get(name).columns.push(index);
            });
            const picksByTeam = [...teamsByName.values()];
            const orderedPicks = [];
            rows.slice(headerRowIndex + 1).forEach(row => {
                const cells = [...row.cells];
                const round = normalizedText(cells[0]);
                if (!round || /^(備註|注|落選名單)/.test(round)) return;
                teams.forEach((teamName, column) => {
                    const team = teamsByName.get(teamName);
                    if (team.passed) return;
                    const primaryColumn = team.columns[0];
                    const player = normalizedText(cells[column + 1]);
                    if (/^放棄(?:$|[\s\[［(（])/.test(player)) {
                        if (column === primaryColumn) {
                            team.passed = true;
                            team.passRound = round;
                        }
                    } else if (player && !/^(無權|[ＸXx]|[－—-])$/.test(player)) {
                        team.picks.push({ round, player });
                        orderedPicks.push({
                            round,
                            team: teamName,
                            player,
                            position: column + 1,
                            extra: column !== primaryColumn
                        });
                    }
                });
            });
            if (!picksByTeam.some(team => team.picks.length || team.passed)) return;
            blocks.push({
                year: activeYear,
                label: activeLabel,
                teams: picksByTeam,
                orderedPicks,
                hasAdditionalPicks: picksByTeam.some(team => team.columns.length > 1),
                draftEnded: picksByTeam.every(team => team.passed),
                sourceUrl: articleUrl
            });
        });
        annualYears.forEach(year => {
            if (!blocks.some(block => block.year === year)) {
                if (specialExamYears.has(year)) {
                    const teams = specialExamRosters[year].map(team => ({
                        name: team.name,
                        picks: team.players.map(player => ({ round: '特考', player })),
                        note: team.note,
                        passed: false,
                        passRound: null,
                        columns: []
                    }));
                    blocks.push({
                        year,
                        label: '特考名單',
                        teams,
                        orderedPicks: [],
                        sourceUrl: specialExamRosterSourceUrl,
                        specialExamUrl: specialExamListUrl,
                        specialExam: true
                    });
                } else {
                    blocks.push({ year, label: '來源未提供年度名單', teams: [], sourceUrl: articleUrl, missing: true });
                }
            }
        });
        return blocks;
    };

    const makeOption = (value, label) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = label;
        return option;
    };
    const createTeamCard = (team, searchTerm) => {
        const card = document.createElement('article');
        card.className = 'draft-team-card';
        const heading = document.createElement('h5');
        heading.textContent = team.name;
        card.appendChild(heading);
        const list = document.createElement('ul');
        team.picks.filter(pick => !searchTerm || pick.player.toLocaleLowerCase().includes(searchTerm)).forEach(pick => {
            const item = document.createElement('li');
            const round = document.createElement('span');
            round.className = 'draft-pick-round';
            round.textContent = pick.round;
            const player = document.createElement('span');
            player.className = 'draft-pick-player';
            player.textContent = pick.player;
            item.append(round, player);
            list.appendChild(item);
        });
        if (team.passed) {
            const item = document.createElement('li');
            item.className = 'draft-pass-row';
            const round = document.createElement('span');
            round.className = 'draft-pick-round';
            round.textContent = team.passRound;
            const pass = document.createElement('span');
            pass.className = 'draft-pick-player draft-pass-label';
            pass.textContent = '放棄';
            item.append(round, pass);
            list.appendChild(item);
        }
        if (team.note) {
            const item = document.createElement('li');
            const round = document.createElement('span');
            round.className = 'draft-pick-round';
            round.textContent = '特考';
            const note = document.createElement('span');
            note.className = 'draft-pick-player';
            note.textContent = team.note;
            item.append(round, note);
            list.appendChild(item);
        }
        card.appendChild(list);
        return card;
    };
    const render = () => {
        const selectedYear = yearFilter.value;
        const selectedTeam = teamFilter.value;
        const searchTerm = searchInput.value.trim().toLocaleLowerCase();
        const filteredEvents = draftEvents.map(event => ({
            ...event,
            teams: event.teams
                .filter(team => selectedTeam === 'all' || team.name === selectedTeam)
                .map(team => ({
                    ...team,
                    picks: team.picks.filter(pick => !searchTerm || pick.player.toLocaleLowerCase().includes(searchTerm))
                }))
                .filter(team => team.picks.length || (!searchTerm && (team.passed || team.note)))
        })).filter(event => (selectedYear === 'all' || String(event.year) === selectedYear)
            && (event.missing
                ? selectedTeam === 'all' && !searchTerm
                : event.teams.length));

        container.replaceChildren();
        if (!filteredEvents.length) {
            const empty = document.createElement('p');
            empty.className = 'draft-empty-state';
            empty.textContent = '找不到符合條件的選秀名單。';
            container.appendChild(empty);
            status.textContent = `來源整理出 ${draftEvents.filter(event => !event.missing && !event.specialExam).length} 場選秀及 ${draftEvents.filter(event => event.specialExam).length} 年特考名單；目前沒有符合的紀錄。`;
            return;
        }

        const byYear = new Map();
        filteredEvents.forEach(event => {
            if (!byYear.has(event.year)) byYear.set(event.year, []);
            byYear.get(event.year).push(event);
        });
        [...byYear.entries()].sort((a, b) => b[0] - a[0]).forEach(([year, events]) => {
            const yearDetails = document.createElement('details');
            yearDetails.className = 'draft-year-card';
            if (selectedYear !== 'all' || searchTerm || selectedTeam !== 'all') yearDetails.open = true;
            const summary = document.createElement('summary');
            const selectionCount = events.filter(event => !event.missing && !event.specialExam).length;
            const hasSpecialExam = events.some(event => event.specialExam);
            const hasMissing = events.some(event => event.missing);
            const yearLabels = [];
            if (selectionCount) yearLabels.push(`${selectionCount} 場選秀`);
            if (hasSpecialExam) yearLabels.push('特考球員名單');
            if (hasMissing) yearLabels.push('來源未提供年度名單');
            summary.textContent = `${year} 年｜${yearLabels.join('・')}`;
            yearDetails.appendChild(summary);
            events.forEach(event => {
                const eventSection = document.createElement('section');
                eventSection.className = 'draft-event';
                const eventHeading = document.createElement('h4');
                eventHeading.textContent = event.label;
                let teamGrid;
                let eventIntro;
                if (event.specialExam) {
                    eventIntro = document.createElement('p');
                    eventIntro.className = 'draft-no-list-state';
                    eventIntro.textContent = '該年度未舉辦一般選秀，以下列出各隊以特考方式招募的球員。';
                    teamGrid = document.createElement('div');
                    teamGrid.className = 'draft-team-grid';
                    event.teams.forEach(team => teamGrid.appendChild(createTeamCard(team, searchTerm)));
                } else if (event.missing) {
                    teamGrid = document.createElement('p');
                    teamGrid.className = 'draft-no-list-state';
                    teamGrid.textContent = '來源條目有此年度標題，但未提供選秀表。';
                } else {
                    teamGrid = document.createElement('div');
                    teamGrid.className = 'draft-team-grid';
                    event.teams.forEach(team => teamGrid.appendChild(createTeamCard(team, searchTerm)));
                }
                if (event.specialExam) {
                    eventSection.append(eventHeading, eventIntro, teamGrid);
                } else if (!event.missing) {
                    const completion = document.createElement('p');
                    completion.className = `draft-completion-status${event.draftEnded ? ' is-complete' : ''}`;
                    completion.textContent = event.draftEnded
                        ? '所有球隊皆已放棄，本場選秀結束。'
                        : '尚未記錄所有球隊放棄；僅在全隊放棄時視為選秀結束。';
                    eventSection.append(eventHeading, completion);
                    const orderedPicks = event.hasAdditionalPicks ? event.orderedPicks.filter(pick =>
                        (selectedTeam === 'all' || pick.team === selectedTeam)
                        && (!searchTerm || pick.player.toLocaleLowerCase().includes(searchTerm))) : [];
                    if (orderedPicks.length) {
                        const order = document.createElement('section');
                        order.className = 'draft-order';
                        const orderHeading = document.createElement('h5');
                        orderHeading.textContent = '逐輪指名順序';
                        const orderList = document.createElement('ol');
                        orderList.className = 'draft-order-list';
                        orderedPicks.forEach(pick => {
                            const item = document.createElement('li');
                            if (pick.extra) item.className = 'is-extra-pick';
                            const round = document.createElement('span');
                            round.className = 'draft-pick-round';
                            round.textContent = `${pick.round}・第 ${pick.position} 順位`;
                            const selection = document.createElement('span');
                            selection.className = 'draft-pick-player';
                            selection.textContent = `${pick.team}：${pick.player}${pick.extra ? '（加選，本輪最後）' : ''}`;
                            item.append(round, selection);
                            orderList.appendChild(item);
                        });
                        order.append(orderHeading, orderList);
                        eventSection.appendChild(order);
                    }
                    eventSection.append(teamGrid);
                } else {
                    eventSection.append(eventHeading, teamGrid);
                }
                const source = document.createElement('a');
                source.className = 'draft-event-source';
                source.href = event.sourceUrl;
                source.target = '_blank';
                source.rel = 'noopener noreferrer';
                source.textContent = event.specialExam
                    ? '查看特考名單整理 ↗'
                    : event.missing ? '查看維基條目 ↗' : '查看原始選秀表 ↗';
                eventSection.appendChild(source);
                if (event.specialExam) {
                    const historicalSource = document.createElement('a');
                    historicalSource.className = 'draft-event-source';
                    historicalSource.href = event.specialExamUrl;
                    historicalSource.target = '_blank';
                    historicalSource.rel = 'noopener noreferrer';
                    historicalSource.textContent = '參考：台灣棒球維基館「特考」↗';
                    eventSection.appendChild(historicalSource);
                }
                yearDetails.appendChild(eventSection);
            });
            container.appendChild(yearDetails);
        });
        const listedEvents = draftEvents.filter(event => !event.missing);
        const selectionEventCount = listedEvents.filter(event => !event.specialExam).length;
        const pickCount = listedEvents.reduce((total, event) => total + event.teams.reduce((teamTotal, team) => teamTotal + team.picks.length, 0), 0);
        const missingYearCount = draftEvents.filter(event => event.missing).length;
        const specialExamYearCount = draftEvents.filter(event => event.specialExam).length;
        status.textContent = `已整理 ${[...new Set(draftEvents.map(event => event.year))].length} 個年度、${selectionEventCount} 場選秀、${specialExamYearCount} 年特考名單與 ${pickCount} 筆球員紀錄${missingYearCount ? `；另有 ${missingYearCount} 個年度的來源條目未提供名單` : ''}。`;
    };
    const populateFilters = () => {
        const years = [...new Set(draftEvents.map(event => event.year))].sort((a, b) => b - a);
        const teams = [...new Set(draftEvents.flatMap(event => event.teams.map(team => team.name)))].sort((a, b) => a.localeCompare(b, 'zh-Hant'));
        yearFilter.replaceChildren(makeOption('all', '所有年度'), ...years.map(year => makeOption(String(year), `${year} 年`)));
        teamFilter.replaceChildren(makeOption('all', '所有球隊'), ...teams.map(team => makeOption(team, team)));
    };
    const load = async () => {
        status.textContent = '正在載入歷年選秀名單……';
        retryButton.hidden = true;
        try {
            const response = await fetch(apiUrl, { headers: { Accept: 'application/json' } });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const payload = await response.json();
            const html = payload?.parse?.text?.['*'];
            if (!html) throw new Error('選秀資料格式不完整');
            draftEvents = parseDraftTables(html);
            if (!draftEvents.length) throw new Error('找不到選秀表格');
            populateFilters();
            render();
        } catch (error) {
            console.error('載入歷年選秀資料失敗：', error);
            status.textContent = '目前無法連線載入選秀資料，請稍後重試，或直接查看資料來源。';
            retryButton.hidden = false;
        }
    };

    yearFilter.addEventListener('change', render);
    teamFilter.addEventListener('change', render);
    searchInput.addEventListener('input', render);
    retryButton.addEventListener('click', load);
    load();
}
