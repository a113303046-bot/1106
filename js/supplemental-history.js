const winterLeagueHistoryLanes = [
    { id: 'taiwan-lineage-left', label: '中華紅／台灣山林', color: '#e6e9df' },
    { id: 'taiwan-lineage-right', label: '中華白／台灣海洋', color: '#e4e8e9' },
    { id: 'wei-chuan', label: '味全龍', color: '#ffebec' },
    { id: 'tsg-hawks', label: '台鋼雄鷹', color: '#c1ffe4' },
    { id: 'japan-social', label: '日本社會人', color: '#e9e4d7' },
    { id: 'kbo', label: '韓職聯隊', color: '#f2e0e2' },
    { id: 'npb-lineage-left', label: '日職東軍／紅隊', color: '#f2e4dc' },
    { id: 'npb-lineage-right', label: '日職西軍／白隊', color: '#e5e8ef' },
    { id: 'taiwan-training-national', label: '中華培訓 → 中華隊', color: '#e5e7ed' },
    { id: 'europe-americas', label: '歐美聯隊', color: '#e5eadc' },
    { id: 'dominican', label: '多明尼加', color: '#ece0d5' }
];

const winterLeagueHistoryLaneByName = {
    '中職聯隊': 'taiwan-lineage-left',
    '中華職棒': 'taiwan-lineage-left',
    '台灣山林': 'taiwan-lineage-left',
    '台灣海洋': 'taiwan-lineage-right',
    '味全龍': 'wei-chuan',
    '台鋼雄鷹': 'tsg-hawks',
    '日本社會人': 'japan-social',
    '韓職聯隊': 'kbo',
    '日職紅隊': 'npb-lineage-left',
    '日職東軍': 'npb-lineage-left',
    '日職白隊': 'npb-lineage-right',
    '日職西軍': 'npb-lineage-right',
    '日職聯隊': 'npb-lineage-left',
    '中華隊': 'taiwan-training-national',
    '中華培訓': 'taiwan-training-national',
    '中華培訓隊': 'taiwan-training-national',
    '大學明星隊': 'taiwan-training-national',
    '中華紅': 'taiwan-lineage-left',
    '中華白': 'taiwan-lineage-right',
    '歐洲聯隊': 'europe-americas',
    '歐美聯隊': 'europe-americas',
    '多明尼加': 'dominican'
};

function getSupplementalHistoryLaneId(entry, isWinterLeague) {
    return entry.lane
        || entry.track
        || (isWinterLeague ? winterLeagueHistoryLaneByName[entry.name] : null)
        || entry.name;
}

function createSupplementalHistoryCell(entry, lane, laneId, span = 1) {
    const cell = document.createElement('td');
    cell.className = 'team-cell supplemental-history-entry';
    cell.dataset.team = laneId;
    cell.dataset.lineage = laneId;
    cell.style.backgroundColor = entry.color || lane?.color || '#f7f4eb';
    if (span > 1) {
        cell.colSpan = span;
        cell.classList.add('lineage-centered-span');
        cell.style.setProperty('--lineage-cell-background', entry.color || lane?.color || '#f7f4eb');
    }

    if (entry.logo) {
        const logo = document.createElement('img');
        logo.className = 'team-logo supplemental-history-logo';
        logo.src = entry.logo;
        logo.alt = '';
        logo.loading = 'lazy';
        logo.onerror = () => logo.remove();
        cell.appendChild(logo);
    }

    const name = document.createElement('div');
    name.className = 'team-name supplemental-history-entry-name';
    name.textContent = entry.name;
    cell.appendChild(name);

    if (entry.detail) {
        const detail = document.createElement('span');
        detail.className = 'supplemental-history-entry-detail';
        detail.textContent = entry.detail;
        cell.appendChild(detail);
    }
    if (entry.source) {
        const source = document.createElement('a');
        source.className = 'supplemental-history-entry-source';
        source.href = entry.source;
        source.target = '_blank';
        source.rel = 'noopener noreferrer';
        source.textContent = '來源 ↗';
        cell.appendChild(source);
    }
    return cell;
}

function createSupplementalHistoryStackCell(entries, lane, laneId) {
    const cell = document.createElement('td');
    cell.className = 'team-cell supplemental-history-entry supplemental-history-stacked-entry';
    cell.dataset.team = laneId;
    cell.dataset.lineage = laneId;
    cell.style.backgroundColor = lane?.color || '#f7f4eb';

    entries.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'supplemental-history-stack-item';
        if (entry.logo) {
            const logo = document.createElement('img');
            logo.className = 'team-logo';
            logo.src = entry.logo;
            logo.alt = '';
            logo.loading = 'lazy';
            logo.onerror = () => logo.remove();
            item.appendChild(logo);
        }
        const name = document.createElement('div');
        name.className = 'team-name supplemental-history-entry-name';
        name.textContent = entry.name;
        item.appendChild(name);
        cell.appendChild(item);
    });
    return cell;
}

function initializeSupplementalHistoryPages() {
    const amateurHistoryColors = ['#e6e9df', '#e4e8e9', '#ffebec', '#c1ffe4', '#e9e4d7', '#f2e0e2', '#f2e4dc', '#e5e8ef', '#e5e7ed', '#e5eadc', '#ece0d5'];
    const pages = [
        {
            data: winterLeagueHistoryData,
            bodyId: 'winter-league-history-body',
            statusId: 'winter-league-history-status',
            pageName: '冬盟',
            lanes: winterLeagueHistoryLanes,
            emptyLaneCount: winterLeagueHistoryLanes.length,
            isWinterLeague: true
        },
        {
            data: amateurBaseballHistoryData,
            bodyId: 'amateur-baseball-history-body',
            statusId: 'amateur-baseball-history-status',
            pageName: '業餘棒球',
            lanes: [],
            emptyLaneCount: 12,
            isWinterLeague: false
        }
    ];

    pages.forEach(({ data, bodyId, statusId, pageName, lanes: configuredLanes, emptyLaneCount, isWinterLeague }) => {
        const body = document.getElementById(bodyId);
        const status = document.getElementById(statusId);
        if (!body || !status) return;

        body.replaceChildren();
        const years = [...data].sort((a, b) => a.year - b.year);
        const laneMap = new Map(configuredLanes.map(lane => [lane.id, lane]));
        years.forEach(yearData => {
            yearData.entries.forEach(entry => {
                if (!entry) return;
                const laneId = getSupplementalHistoryLaneId(entry, isWinterLeague);
                if (!laneMap.has(laneId)) {
                    laneMap.set(laneId, {
                        id: laneId,
                        label: entry.name,
                        color: entry.color || (isWinterLeague ? undefined : amateurHistoryColors[laneMap.size % amateurHistoryColors.length])
                    });
                }
            });
        });
        const lanes = [...laneMap.values()];
        if (isWinterLeague) {
            const configuredOrder = typeof winterLeagueHistoryLaneOrder === 'undefined'
                ? []
                : winterLeagueHistoryLaneOrder;
            const laneOrder = new Map(configuredOrder.map((label, index) => [label, index]));
            lanes.sort((a, b) => (laneOrder.get(a.label) ?? Number.MAX_SAFE_INTEGER)
                - (laneOrder.get(b.label) ?? Number.MAX_SAFE_INTEGER));
        } else {
            const bLaneIndex = lanes.findIndex(lane => lane.id === 'taipei-sports-b');
            if (bLaneIndex >= 0 && lanes.some(lane => lane.id === 'taipei-sports-a')) {
                const [bLane] = lanes.splice(bLaneIndex, 1);
                const aLaneIndex = lanes.findIndex(lane => lane.id === 'taipei-sports-a');
                lanes.splice(aLaneIndex + 1, 0, bLane);
            }
        }
        const table = body.closest('table');
        table.style.setProperty('--entry-column-count', String(lanes.length));
        table.style.setProperty('--lineage-lane-count', String(Math.max(1, lanes.length)));

        if (!years.length) {
            table.style.setProperty('--entry-column-count', String(emptyLaneCount));
            table.style.setProperty('--lineage-lane-count', String(emptyLaneCount));
            const row = document.createElement('tr');
            const empty = document.createElement('td');
            empty.className = 'supplemental-history-empty';
            empty.colSpan = emptyLaneCount + 1;
            empty.textContent = `${pageName}沿革資料尚未填入。新增年度與隊伍紀錄後，隊伍會沿固定直欄呈現。`;
            row.appendChild(empty);
            body.appendChild(row);
            status.textContent = `尚無${pageName}沿革資料。`;
            return;
        }

        years.forEach(yearData => {
            const row = document.createElement('tr');
            row.dataset.year = String(yearData.year);

            const year = document.createElement('td');
            year.className = 'year-cell supplemental-history-year';
            const yearHasStandings = isWinterLeague && winterLeagueYearStandingsData[yearData.year];
            if (yearHasStandings) {
                const yearButton = document.createElement('button');
                yearButton.type = 'button';
                yearButton.className = 'year-archive-trigger';
                yearButton.dataset.year = String(yearData.year);
                yearButton.textContent = String(yearData.year);
                yearButton.setAttribute('aria-haspopup', 'dialog');
                yearButton.setAttribute('aria-controls', 'year-archive-dialog');
                yearButton.setAttribute('aria-label', `查看 ${yearData.year} 年冬盟戰績`);
                year.appendChild(yearButton);
            } else {
                year.textContent = String(yearData.year);
            }
            if (yearData.source) {
                const source = document.createElement('a');
                source.className = 'supplemental-history-year-source';
                source.href = yearData.source;
                source.target = '_blank';
                source.rel = 'noopener noreferrer';
                source.textContent = '資料 ↗';
                source.setAttribute('aria-label', `${yearData.year} 年沿革資料來源`);
                year.appendChild(source);
            }
            row.appendChild(year);

            const entriesByLane = new Map();
            yearData.entries.forEach(entry => {
                if (!entry) return;
                const laneId = getSupplementalHistoryLaneId(entry, isWinterLeague);
                if (!entriesByLane.has(laneId)) entriesByLane.set(laneId, []);
                entriesByLane.get(laneId).push(entry);
            });
            for (let laneIndex = 0; laneIndex < lanes.length; laneIndex++) {
                const lane = lanes[laneIndex];
                const laneEntries = entriesByLane.get(lane.id) || [];
                if (laneEntries.length > 1) {
                    row.appendChild(createSupplementalHistoryStackCell(laneEntries, lane, lane.id));
                } else if (laneEntries.length === 1) {
                    const entry = laneEntries[0];
                    const span = Math.min(Math.max(1, Number(entry.span) || 1), lanes.length - laneIndex);
                    const cell = createSupplementalHistoryCell(entry, lane, lane.id, span);
                    if (isWinterLeague) addWinterLeagueHistoryBadges(cell, yearData.year, entry.name);
                    row.appendChild(cell);
                    laneIndex += span - 1;
                } else {
                    const empty = document.createElement('td');
                    empty.className = 'team-cell empty-cell supplemental-history-entry is-empty';
                    empty.setAttribute('aria-label', `${yearData.year} 年無${lane.label}參賽紀錄`);
                    row.appendChild(empty);
                }
            }
            body.appendChild(row);
        });

        const entryCount = years.reduce((total, year) => total + year.entries.filter(Boolean).length, 0);
        status.textContent = isWinterLeague
            ? `已整理 ${years.length} 個年度、${entryCount} 筆${pageName}沿革紀錄；可點擊年度查看戰績與年度標記。`
            : `已整理 ${years.length} 個年度、${entryCount} 筆${pageName}沿革紀錄；各參賽脈絡沿固定直欄排列。`;
    });
}

// Render the two supplemental timelines independently of the active route so the table is ready on first open.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSupplementalHistoryPages, { once: true });
} else {
    initializeSupplementalHistoryPages();
}
