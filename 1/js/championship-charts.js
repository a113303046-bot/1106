function getChampionshipLineageStats() {
    const sortedYears = [...teamHistoryData].sort((a, b) => a.year - b.year);
    const lineages = new Map();
    const teamsByYear = new Map(sortedYears.map(yearData => [yearData.year, yearData]));
    const lineageParents = new Map();
    const findLineageRoot = key => {
        if (!lineageParents.has(key)) lineageParents.set(key, key);
        const parent = lineageParents.get(key);
        if (parent !== key) lineageParents.set(key, findLineageRoot(parent));
        return lineageParents.get(key);
    };
    const mergeLineages = (predecessorKey, successorKey) => {
        const predecessorRoot = findLineageRoot(predecessorKey);
        const successorRoot = findLineageRoot(successorKey);
        if (predecessorRoot !== successorRoot) lineageParents.set(predecessorRoot, successorRoot);
    };
    const getLineageKey = (team, column) => findLineageRoot(chengTaiLineageNames.has(team.name)
        ? 'cheng-tai-suns-lineage'
        : `column-${column}`);
    // Merge predecessor columns into the successor column; later franchise names continue along that column.
    teamMergerRelations.forEach(relation => {
        const successorYearData = teamsByYear.get(relation.year);
        const successorColumn = successorYearData?.teams.findIndex(team => team?.name === relation.successorName) ?? -1;
        if (successorColumn < 0) return;
        const successorKey = getLineageKey(successorYearData.teams[successorColumn], successorColumn);
        relation.predecessorNames.forEach(predecessorName => {
            const predecessorYearData = [...sortedYears].reverse().find(yearData =>
                yearData.year < relation.year && yearData.teams.some(team => team?.name === predecessorName)
            );
            const predecessorColumn = predecessorYearData?.teams.findIndex(team => team?.name === predecessorName) ?? -1;
            if (predecessorColumn >= 0) {
                const predecessorKey = getLineageKey(predecessorYearData.teams[predecessorColumn], predecessorColumn);
                mergeLineages(predecessorKey, successorKey);
            }
        });
    });
    const getDisplayPosition = (key, column) => {
        if (key === 'column-5') return 4.5;
        if (key === 'column-6') return 5;
        if (key === 'column-8') return 7;
        if (key === 'cheng-tai-suns-lineage') return 7.5;
        if (key === 'column-9') return 8;
        return column;
    };
    const findLineageForTeam = (yearData, teamName) => {
        const column = yearData?.teams.findIndex(team => team?.name === teamName) ?? -1;
        if (column < 0) return null;
        const team = yearData.teams[column];
        return lineages.get(getLineageKey(team, column));
    };

    sortedYears.forEach(({ year, teams }) => {
        teams.forEach((team, column) => {
            if (!team) return;
            const key = getLineageKey(team, column);
            if (!lineages.has(key)) {
                lineages.set(key, {
                    key,
                    column,
                    position: getDisplayPosition(key, column),
                    latestName: team.name,
                    latestYear: year,
                    names: new Set(),
                    annual: 0,
                    fullSeason: 0,
                    firstHalf: 0,
                    secondHalf: 0
                });
            }
            const lineage = lineages.get(key);
            lineage.names.add(team.name);
            if (year >= lineage.latestYear) {
                lineage.latestYear = year;
                lineage.latestName = team.name;
            }
        });
    });

    sortedYears.forEach(({ year }) => {
        const record = seasonChampionData[year] || {};
        const yearData = teamsByYear.get(year);
        ['annual', 'firstHalf', 'secondHalf'].forEach(category => {
            const championName = record[category];
            if (!championName) return;
            const merger = teamMergerRelations.find(relation =>
                year < relation.year && relation.predecessorNames.includes(championName)
            );
            const targetYear = merger ? teamsByYear.get(merger.year) : yearData;
            const targetName = merger ? merger.successorName : championName;
            const lineage = findLineageForTeam(targetYear, targetName);
            if (!lineage) return;
            lineage[category] += 1;
        });

        const tmlChampion = tmlYearStandingsData[year]?.champion;
        const tmlLineage = tmlChampion ? findLineageForTeam(yearData, tmlChampion) : null;
        if (tmlLineage) tmlLineage.annual += 1;

        const fullSeasonLeaders = new Set([
            yearLeagueArchiveData[year]?.standings?.annual?.[0]?.[0],
            yearLeagueArchiveData[year]?.standings?.singleSeason?.[0]?.[0],
            tmlYearStandingsData[year]?.rows?.[0]?.[0],
            record.singleSeason
        ].filter(Boolean));
        fullSeasonLeaders.forEach(teamName => {
            const lineage = findLineageForTeam(yearData, teamName);
            if (lineage) lineage.fullSeason += 1;
        });
    });

    return [...lineages.values()]
        .map(lineage => ({ ...lineage, names: [...lineage.names] }))
        .sort((a, b) => a.position - b.position || a.column - b.column);
}

function renderChampionshipChart(listId, lineages, category) {
    const list = document.getElementById(listId);
    if (!list) return;
    list.replaceChildren();

    const countFor = lineage => {
        if (category === 'annual') return lineage.annual;
        if (category === 'fullSeason') return lineage.fullSeason;
        return lineage.firstHalf + lineage.secondHalf;
    };
    const maxCount = Math.max(1, ...lineages.map(countFor));
    const orderedLineages = [...lineages].sort((a, b) =>
        countFor(b) - countFor(a) || a.position - b.position || a.column - b.column
    );

    orderedLineages.forEach(lineage => {
        const total = countFor(lineage);
        const row = document.createElement('li');
        row.className = 'champion-chart-row';

        const label = document.createElement('div');
        label.className = 'chart-team-label';
        const teamName = document.createElement('span');
        teamName.className = 'chart-team-name';
        const displayLatestName = getTeamDisplayName(lineage.latestName);
        teamName.textContent = displayLatestName;
        label.appendChild(teamName);
        const chartHistoryNames = lineage.names.filter(name => name !== 'Lamigo桃猿1');
        const historyItems = [];
        chartHistoryNames.forEach(name => {
            const merger = teamMergerRelations.find(relation => relation.predecessorNames.includes(name));
            if (merger) {
                if (name === merger.predecessorNames[0]) {
                    historyItems.push(merger.predecessorNames.map(getTeamDisplayName).join(' + '));
                }
                return;
            }
            historyItems.push(getTeamDisplayName(name));
        });
        const hideHistory = ['統一7-ELEVEn獅', '味全龍'].includes(lineage.latestName);
        if (!hideHistory && historyItems.length > 1) {
            const history = document.createElement('span');
            history.className = 'chart-team-history';
            history.textContent = historyItems.join(' → ');
            label.title = `${displayLatestName}｜${history.textContent}`;
            label.appendChild(history);
        }

        const track = document.createElement('div');
        track.className = 'chart-bar-track';
        track.setAttribute('role', 'img');
        if (category === 'annual' || category === 'fullSeason') {
            const fill = document.createElement('span');
            fill.className = `chart-bar-fill ${category === 'annual' ? 'annual' : 'full-season'}`;
            fill.style.width = `${(total / maxCount) * 100}%`;
            track.setAttribute('aria-label', `${displayLatestName}：${category === 'annual' ? '年度總冠軍' : '全年戰績第一'} ${total} 次`);
            track.appendChild(fill);
        } else {
            const firstHalf = document.createElement('span');
            firstHalf.className = 'chart-bar-fill first-half';
            firstHalf.style.width = `${(lineage.firstHalf / maxCount) * 100}%`;
            const secondHalf = document.createElement('span');
            secondHalf.className = 'chart-bar-fill second-half';
            secondHalf.style.width = `${(lineage.secondHalf / maxCount) * 100}%`;
            track.setAttribute('aria-label', `${displayLatestName}：上半季 ${lineage.firstHalf} 次，下半季 ${lineage.secondHalf} 次，共 ${total} 次`);
            track.append(firstHalf, secondHalf);
        }

        const count = document.createElement('span');
        count.className = 'chart-count';
        count.textContent = `${total} 次`;
        row.append(label, track, count);
        list.appendChild(row);
    });
}

function renderChampionshipCharts() {
    const lineages = getChampionshipLineageStats();
    renderChampionshipChart('annual-champion-chart', lineages, 'annual');
    renderChampionshipChart('full-season-champion-chart', lineages, 'fullSeason');
    renderChampionshipChart('half-season-champion-chart', lineages, 'halfSeason');
}

function setActiveHistoryPage(pageId) {
    const pages = [...document.querySelectorAll('.history-page-view')];
    if (!pages.length) return;
    const activePageId = pages.some(page => page.id === pageId) ? pageId : 'team-history-page';
    pages.forEach(page => { page.hidden = page.id !== activePageId; });
    document.querySelectorAll('.history-page-nav a').forEach(link => {
        if (link.hash === `#${activePageId}`) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
    });

    const chartPageActive = activePageId === 'championship-stats-page';
    const internationalPageActive = activePageId === 'international-history-page';
    const signedIn = typeof firebase !== 'undefined'
        && typeof firebase.auth === 'function'
        && Boolean(firebase.auth().currentUser);
    const pageTitle = document.getElementById('page-title');
    const pageSubtitle = document.getElementById('page-subtitle');
    const breadcrumbLabel = document.getElementById('breadcrumb-page-label');
    const activePageTitle = chartPageActive
        ? '冠軍條狀圖'
        : internationalPageActive ? '國際賽成績沿革' : '球隊沿革';
    if (breadcrumbLabel) breadcrumbLabel.textContent = activePageTitle;
    if (signedIn && pageTitle) pageTitle.textContent = chartPageActive
        ? '冠軍統計'
        : internationalPageActive ? '國際賽成績沿革' : '球隊沿革';
    if (signedIn && pageSubtitle) pageSubtitle.textContent = chartPageActive
        ? '以同一沿革直欄彙整球隊的年度總冠軍與半季冠軍紀錄。'
        : internationalPageActive
            ? '從 1969 年起，依代表隊層級瀏覽國際賽成績。'
            : '從草創到新世代，收藏每一支球隊的棒球記憶。';
    if (chartPageActive) renderChampionshipCharts();
}

function syncHistoryPageFromHash() {
    const pageId = window.location.hash === '#championship-stats-page'
        ? 'championship-stats-page'
        : window.location.hash === '#international-history-page'
            ? 'international-history-page'
            : 'team-history-page';
    setActiveHistoryPage(pageId);
}

