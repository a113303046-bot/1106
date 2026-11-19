function renderTeamHistoryTable() {
    const tableBody = document.getElementById('team-history-body');

    tableBody.replaceChildren();

    [...teamHistoryData].sort((a, b) => a.year - b.year).forEach(yearData => {
        const row = document.createElement('tr');
        row.dataset.year = String(yearData.year);

        const defaultChampionName = seasonChampionData[yearData.year]?.annual;
        const champion = yearData.teams.find(team => team && team.name === defaultChampionName);

        // 年份欄位
        const yearCell = document.createElement('td');
        yearCell.className = 'year-cell';
        if (yearLeagueArchiveData[yearData.year]) {
            const yearButton = document.createElement('button');
            yearButton.type = 'button';
            yearButton.className = 'year-archive-trigger';
            yearButton.dataset.year = String(yearData.year);
            yearButton.textContent = yearData.year;
            yearButton.setAttribute('aria-haspopup', 'dialog');
            yearButton.setAttribute('aria-controls', 'year-archive-dialog');
            yearButton.setAttribute('aria-label', `查看 ${yearData.year} 年度聯盟戰績`);
            yearCell.appendChild(yearButton);
        } else {
            yearCell.textContent = yearData.year;
        }
        row.appendChild(yearCell);

        const displayTeams = [...yearData.teams];
        if (yearData.year < 2003) {
            // 收合高屏雷公與台北太陽間的保留欄，並在中信鯨前補回欄位，維持其直欄位置。
            displayTeams.splice(5, 1);
            displayTeams.splice(10, 0, null);
        }

        // Rakuten 與誠泰太陽傳承線都跨兩欄置中，色塊維持一欄寬。
        for (let column = 0; column < displayTeams.length; column++) {
            const storedTeam = displayTeams[column];
            const spansRakutenLineage = yearData.year >= 2003
                && column === 4
                && storedTeam === null
                && rakutenLineageNames.has(displayTeams[column + 1]?.name);
            const spansChengTaiLineage = yearData.year >= 2003
                && column === 7
                && storedTeam === null
                && chengTaiLineageNames.has(displayTeams[column + 1]?.name);
            const spansCenteredLineage = spansRakutenLineage || spansChengTaiLineage;
            const team = spansCenteredLineage ? displayTeams[column + 1] : storedTeam;
            const teamCell = document.createElement('td');
            teamCell.className = 'team-cell';
            if (team) teamCell.dataset.team = team.name;
            if (spansCenteredLineage) {
                teamCell.colSpan = 2;
                teamCell.classList.add('lineage-centered-span');
                teamCell.style.setProperty('--lineage-cell-background', getTeamBackgroundColor(team.name, team.color));
            }

            if (team === null) {
                // 空欄位
                teamCell.className = 'team-cell empty-cell';
            } else {
                if (!spansCenteredLineage) {
                    teamCell.style.backgroundColor = getTeamBackgroundColor(team.name, team.color);
                }
                if (champion === team) {
                    teamCell.classList.add('champion-cell');
                }

                // 隊徽圖片
                if (teamLogos[team.name]) {
                    const logoImg = document.createElement('img');
                    logoImg.src = teamLogos[team.name];
                    logoImg.alt = getTeamDisplayName(team.name);
                    logoImg.className = 'team-logo';
                    logoImg.onerror = function() {
                        this.style.display = 'none';
                    };
                    if (yearData.year === 2020 && team.name === '中信兄弟') {
                        const profileTrigger = document.createElement('button');
                        profileTrigger.type = 'button';
                        profileTrigger.className = 'team-profile-trigger';
                        profileTrigger.setAttribute('aria-haspopup', 'dialog');
                        profileTrigger.setAttribute('aria-label', '查看 2020 年中信兄弟年度簡介');
                        profileTrigger.title = '查看 2020 年中信兄弟年度簡介';
                        profileTrigger.appendChild(logoImg);
                        teamCell.appendChild(profileTrigger);
                    } else if (hasArchiveTeamProfile(yearData.year, team.name)) {
                        const profileTrigger = document.createElement('button');
                        profileTrigger.type = 'button';
                        profileTrigger.className = 'team-season-profile-trigger';
                        profileTrigger.dataset.year = String(yearData.year);
                        profileTrigger.dataset.team = team.name;
                        profileTrigger.setAttribute('aria-haspopup', 'dialog');
                        profileTrigger.setAttribute('aria-controls', 'season-profile-dialog');
                        const displayName = getTeamDisplayName(team.name);
                        profileTrigger.setAttribute('aria-label', `查看 ${yearData.year} 年${displayName}年度簡介`);
                        profileTrigger.title = `查看 ${yearData.year} 年${displayName}年度簡介`;
                        profileTrigger.appendChild(logoImg);
                        teamCell.appendChild(profileTrigger);
                    } else {
                        teamCell.appendChild(logoImg);
                    }
                }

                // 球隊名稱
                const teamNameDiv = document.createElement('div');
                teamNameDiv.className = 'team-name';
                teamNameDiv.textContent = getTeamDisplayName(team.name);
                teamCell.appendChild(teamNameDiv);

                const merger = teamMergerRelations.find(relation =>
                    relation.year === yearData.year && relation.successorName === team.name
                );
                if (merger) {
                    teamCell.classList.add('team-merger-successor-cell');
                }

                addSeasonChampionBadges(teamCell, yearData.year, team.name, champion?.name);
                addChallengeSeriesMark(teamCell, yearData.year, team.name);

                // 新球隊標記
                if (team.isNew) {
                    const newTeamBadge = document.createElement('div');
                    newTeamBadge.className = 'new-team-badge';
                    newTeamBadge.textContent = 'NEW';
                    teamCell.appendChild(newTeamBadge);
                }

                // 隊名變更標記
                if (team.hasTeamName) {
                    teamCell.classList.add('team-name-change');
                }
            }

            row.appendChild(teamCell);
            if (spansCenteredLineage) column++;
        }

        tableBody.appendChild(row);
    });
    renderChampionshipCharts();
}

function refreshRenderedChampionships() {
    document.querySelectorAll('#team-history-body tr[data-year]').forEach(row => {
        const year = Number(row.dataset.year);
        const annualChampion = seasonChampionData[year]?.annual;
        row.querySelectorAll('.team-cell').forEach(cell => {
            cell.classList.remove('champion-cell', 'season-champion-cell');
            cell.querySelector('.champion-badges')?.remove();
            cell.querySelector('.challenge-series-mark')?.remove();

            const teamName = cell.dataset.team || cell.querySelector('.team-name')?.textContent;
            if (!teamName) return;
            if (teamName === annualChampion) cell.classList.add('champion-cell');
            addSeasonChampionBadges(cell, year, teamName, annualChampion);
            addChallengeSeriesMark(cell, year, teamName);
        });
    });
    renderChampionshipCharts();
}

