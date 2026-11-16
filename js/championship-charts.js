function getChampionshipLineageStats() {
    const sortedYears = [...teamHistoryData].sort((a, b) => a.year - b.year);
    const lineages = new Map();
    const teamsByYear = new Map(sortedYears.map(yearData => [yearData.year, yearData]));
    const getLineageKey = (team, column) => chengTaiLineageNames.has(team.name)
        ? 'cheng-tai-suns-lineage'
        : `column-${column}`;
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
    });

    return [...lineages.values()]
        .map(lineage => ({ ...lineage, names: [...lineage.names] }))
        .sort((a, b) => a.position - b.position || a.column - b.column);
}

function renderChampionshipChart(listId, lineages, category) {
    const list = document.getElementById(listId);
    if (!list) return;
    list.replaceChildren();

    const countFor = lineage => category === 'annual'
        ? lineage.annual
        : lineage.firstHalf + lineage.secondHalf;
    const maxCount = Math.max(1, ...lineages.map(countFor));
    const orderedLineages = [...lineages].sort((a, b) => a.position - b.position || a.column - b.column);

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
        const history = document.createElement('span');
        history.className = 'chart-team-history';
        history.textContent = lineage.names.length > 1
            ? [...lineage.names].map(getTeamDisplayName).join(' → ')
            : `第 ${lineage.column + 1} 欄`;
        const lineageHistory = `${displayLatestName}｜${[...lineage.names].map(getTeamDisplayName).join(' → ')}`;
        label.title = lineageHistory;
        label.append(teamName, history);

        const track = document.createElement('div');
        track.className = 'chart-bar-track';
        track.setAttribute('role', 'img');
        if (category === 'annual') {
            const fill = document.createElement('span');
            fill.className = 'chart-bar-fill annual';
            fill.style.width = `${(lineage.annual / maxCount) * 100}%`;
            track.setAttribute('aria-label', `${displayLatestName}：年度總冠軍 ${lineage.annual} 次`);
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
    const signedIn = typeof firebase !== 'undefined'
        && typeof firebase.auth === 'function'
        && Boolean(firebase.auth().currentUser);
    const pageTitle = document.getElementById('page-title');
    const pageSubtitle = document.getElementById('page-subtitle');
    if (signedIn && pageTitle) pageTitle.textContent = chartPageActive ? '冠軍統計' : '球隊沿革';
    if (signedIn && pageSubtitle) pageSubtitle.textContent = chartPageActive
        ? '以同一沿革直欄彙整球隊的年度總冠軍與半季冠軍紀錄。'
        : '從草創到新世代，收藏每一支球隊的棒球記憶。';
    if (chartPageActive) renderChampionshipCharts();
}

function syncHistoryPageFromHash() {
    setActiveHistoryPage(window.location.hash === '#championship-stats-page'
        ? 'championship-stats-page'
        : 'team-history-page');
}

