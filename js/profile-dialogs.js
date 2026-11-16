function initializeTeamProfileDialog() {
    const dialog = document.getElementById('team-profile-dialog');
    const closeButton = document.getElementById('team-profile-close');
    if (!dialog || !closeButton) return;

    document.querySelectorAll('.team-profile-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => dialog.showModal());
    });
    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
        if (event.target === dialog) dialog.close();
    });
}

function initializeChampionGameDialog() {
    const tableBody = document.getElementById('team-history-body');
    const dialog = document.getElementById('champion-game-dialog');
    const closeButton = document.getElementById('champion-game-close');
    if (!tableBody || !dialog || !closeButton) return;

    tableBody.addEventListener('click', event => {
        if (event.target instanceof Element && event.target.closest('.champion-mark-trigger')) dialog.showModal();
    });
    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
        if (event.target === dialog) dialog.close();
    });
}

function hasArchiveTeamProfile(year, teamName) {
    if (teamSeasonProfileData[year]?.teams[teamName]) return true;
    const archive = yearLeagueArchiveData[year];
    const rows = archive?.standings.annual || archive?.standings.singleSeason || [];
    return rows.some(row => row[0] === teamName);
}

function getArchiveTeamProfile(year, teamName) {
    const archive = yearLeagueArchiveData[year];
    const isSingleSeason = Boolean(archive?.standings.singleSeason);
    const annualRows = archive?.standings.annual || archive?.standings.singleSeason || [];
    const annualIndex = annualRows.findIndex(row => row[0] === teamName);
    if (annualIndex < 0) return null;

    const record = annualRows[annualIndex];
    const halfRows = isSingleSeason ? [null, null] : [archive.standings.first, archive.standings.second];
    const halfNames = ['上半季', '下半季'];
    const halfResults = halfRows.map(rows => {
        if (!rows) return null;
        const index = rows.findIndex(row => row[0] === teamName);
        return index < 0 ? null : { rank: index + 1, row: rows[index] };
    });
    const honors = seasonChampionData[year] || {};
    const distinctions = [];
    if (honors.firstHalf === teamName) distinctions.push('上半季冠軍');
    if (honors.secondHalf === teamName) distinctions.push('下半季冠軍');
    if (honors.singleSeason === teamName) distinctions.push('單一球季冠軍');
    if (honors.annual === teamName) distinctions.push('年度總冠軍');

    const recordText = `${record[2]} 勝・${record[3]} 敗・${record[4]} 和`;
    const rankText = `${isSingleSeason ? '單一球季' : '全年'}第 ${annualIndex + 1} 名`;
    const winRate = record[5];
    const halfSummary = isSingleSeason
        ? rankText
        : halfResults.map((result, index) => result
            ? `${halfNames[index]}第 ${result.rank} 名`
            : `${halfNames[index]}無資料`).join('、');
    const highlights = isSingleSeason
        ? []
        : halfResults.map((result, index) => result
            ? `${halfNames[index]}戰績 ${result.row[2]} 勝・${result.row[3]} 敗・${result.row[4]} 和，排名第 ${result.rank}。`
            : `${halfNames[index]}戰績資料未列。`);
    highlights.push(`${isSingleSeason ? '單一球季' : '全年'}例行賽 ${recordText}，勝率 ${winRate}，${rankText}。`);
    if (distinctions.length) highlights.push(`球季冠軍紀錄：${distinctions.join('、')}。`);
    else highlights.push(`本年度總冠軍為${getTeamDisplayName(honors.annual || '未記錄')}。`);

    let heading = rankText;
    if (honors.annual === teamName) heading = '年度總冠軍';
    else if (honors.singleSeason === teamName) heading = `單一球季冠軍，${rankText}`;
    else if (honors.firstHalf === teamName) heading = `封王上半季，${rankText}`;
    else if (honors.secondHalf === teamName) heading = `封王下半季，${rankText}`;

    return {
        heading,
        record: recordText,
        rank: rankText,
        distinction: distinctions.join('・') || '未取得季冠軍或年度總冠軍',
        summary: `${getTeamDisplayName(teamName)}本季例行賽取得${recordText}，勝率 ${winRate}、${rankText}${isSingleSeason ? '' : `；${halfSummary}`}。`,
        highlights,
        sources: archive.sources
    };
}

function initializeSeasonProfileDialog() {
    const tableBody = document.getElementById('team-history-body');
    const dialog = document.getElementById('season-profile-dialog');
    const content = document.getElementById('season-profile-content');
    const closeButton = document.getElementById('season-profile-close');
    if (!tableBody || !dialog || !content || !closeButton) return;

    tableBody.addEventListener('click', event => {
        if (!(event.target instanceof Element)) return;
        const trigger = event.target.closest('.team-season-profile-trigger');
        if (!trigger) return;

        const year = Number(trigger.dataset.year);
        const teamName = trigger.dataset.team;
        const season = teamSeasonProfileData[year];
        const profile = season?.teams[teamName] || getArchiveTeamProfile(year, teamName);
        if (!profile) return;

        content.replaceChildren();
        const kicker = document.createElement('p');
        kicker.className = 'section-kicker';
        kicker.textContent = `SEASON ARCHIVE · ${year}`;
        const seasonLine = document.createElement('p');
        seasonLine.className = 'team-profile-season';
        seasonLine.textContent = `中華職棒 ${year - 1989} 年｜${getTeamDisplayName(teamName)}`;
        const heading = document.createElement('h3');
        heading.id = 'season-profile-title';
        heading.textContent = profile.heading;
        const summary = document.createElement('p');
        summary.className = 'team-profile-summary';
        summary.textContent = profile.summary;
        const facts = document.createElement('div');
        facts.className = 'team-profile-facts';
        facts.setAttribute('aria-label', `${year} 年球季摘要`);
        [
            ['例行賽戰績', profile.record],
            ['全年排名', profile.rank],
            ['球季成果', profile.distinction]
        ].forEach(([label, value]) => {
            const fact = document.createElement('div');
            const strong = document.createElement('strong');
            strong.textContent = value;
            const caption = document.createElement('span');
            caption.textContent = label;
            fact.append(strong, caption);
            facts.appendChild(fact);
        });
        const highlightsSection = document.createElement('section');
        highlightsSection.className = 'team-profile-highlights';
        const highlightsHeading = document.createElement('h4');
        highlightsHeading.textContent = '球季重點';
        const highlights = document.createElement('ul');
        profile.highlights.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            highlights.appendChild(li);
        });
        highlightsSection.append(highlightsHeading, highlights);

        const sourceNav = document.createElement('nav');
        sourceNav.className = 'team-profile-sources';
        sourceNav.setAttribute('aria-label', '資料來源');
        const sourceLabel = document.createElement('span');
        sourceLabel.textContent = '資料來源';
        sourceNav.appendChild(sourceLabel);
        [...new Map([...(season?.sources || []), ...(profile.sources || [])].map(source => [source.url, source])).values()].forEach(source => {
            const link = document.createElement('a');
            link.href = source.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = source.label;
            sourceNav.appendChild(link);
        });
        content.append(kicker, seasonLine, heading, summary, facts, highlightsSection, sourceNav);
        dialog.showModal();
    });
    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
        if (event.target === dialog) dialog.close();
    });
}

function initializeYearArchiveDialog() {
    const tableBody = document.getElementById('team-history-body');
    const dialog = document.getElementById('year-archive-dialog');
    const content = document.getElementById('year-archive-content');
    const closeButton = document.getElementById('year-archive-close');
    if (!tableBody || !dialog || !content || !closeButton) return;

    const renderStandings = (title, rows, note = '') => {
        const section = document.createElement('section');
        section.className = 'year-archive-standings';
        const heading = document.createElement('h4');
        heading.textContent = title;
        const table = document.createElement('table');
        table.innerHTML = '<thead><tr><th>名次</th><th>球隊</th><th>場次</th><th>勝</th><th>敗</th><th>和</th><th>勝率</th></tr></thead>';
        const tbody = document.createElement('tbody');
        rows.forEach((row, index) => {
            const tr = document.createElement('tr');
            [index + 1, ...row].forEach((value, columnIndex) => {
                const td = document.createElement('td');
                td.textContent = columnIndex === 1 ? getTeamDisplayName(value) : String(value);
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        section.append(heading, table);
        if (note) {
            const noteText = document.createElement('p');
            noteText.className = 'year-archive-note';
            noteText.textContent = note;
            section.appendChild(noteText);
        }
        return section;
    };

    tableBody.addEventListener('click', event => {
        if (!(event.target instanceof Element)) return;
        const trigger = event.target.closest('.year-archive-trigger');
        if (!trigger) return;
        const year = Number(trigger.dataset.year);
        const archive = yearLeagueArchiveData[year];
        if (!archive) return;

        content.replaceChildren();
        const kicker = document.createElement('p');
        kicker.className = 'section-kicker';
        kicker.textContent = 'SEASON STANDINGS · LEAGUE ARCHIVE';
        const heading = document.createElement('h3');
        heading.id = 'year-archive-title';
        const isSingleSeason = Boolean(archive.standings.singleSeason);
        const tmlStandings = tmlYearStandingsData[year];
        heading.textContent = isSingleSeason
            ? `${year} 年｜${tmlStandings ? '中職、台灣大聯盟' : '單一球季'}戰績`
            : `${year} 年｜${tmlStandings ? '中職與台灣大聯盟' : '上下半季與全年'}戰績`;
        const introTitle = document.createElement('h4');
        introTitle.textContent = tmlStandings ? '中華職棒年度簡介' : '年度聯盟簡介';
        const intro = document.createElement('p');
        intro.className = 'team-profile-summary';
        intro.textContent = archive.overview;
        const standings = document.createElement('div');
        standings.className = `year-archive-grid${tmlStandings ? ' has-tml' : ''}`;
        if (isSingleSeason) {
            standings.append(renderStandings('單一球季', archive.standings.singleSeason));
        } else {
            standings.append(
                renderStandings('上半季', archive.standings.first),
                renderStandings('下半季', archive.standings.second),
                renderStandings('全年', archive.standings.annual)
            );
        }
        if (tmlStandings) {
            standings.append(renderStandings(
                '台灣大聯盟（TML）全年戰績',
                tmlStandings.rows,
                `台灣大賽年度總冠軍：${tmlStandings.champion}`
            ));
        }
        const sources = document.createElement('nav');
        sources.className = 'team-profile-sources';
        sources.setAttribute('aria-label', `${year} 年戰績來源`);
        const label = document.createElement('span');
        label.textContent = '戰績來源';
        sources.appendChild(label);
        [...archive.sources, ...(tmlStandings ? tmlYearStandingsSources : [])].forEach(source => {
            const link = document.createElement('a');
            link.href = source.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = `${source.label} ↗`;
            sources.appendChild(link);
        });
        content.append(kicker, heading, introTitle, intro, standings, sources);
        dialog.showModal();
    });
    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
        if (event.target === dialog) dialog.close();
    });
}

