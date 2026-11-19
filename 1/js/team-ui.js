/**
 * 球隊沿革頁面的畫面呈現與互動邏輯。
 */

function getTeamBackgroundColor(teamName, fallbackColor) {
    return teamBackgroundColors[teamName] || fallbackColor;
}

function getTeamDisplayName(teamName) {
    return String(teamName).replace(/^(統一獅|味全龍|Lamigo桃猿)\d+$/, '$1');
}

function getTeamBadgeGroup(cell) {
    let badgeGroup = cell.querySelector('.champion-badges');
    if (!badgeGroup) {
        badgeGroup = document.createElement('div');
        badgeGroup.className = 'champion-badges';
        cell.appendChild(badgeGroup);
    }
    return badgeGroup;
}

function addSeasonChampionBadges(cell, year, teamName, annualChampionName) {
    const record = seasonChampionData[year];
    const tmlChampion = tmlYearStandingsData[year]?.champion;
    const fullSeasonLeaders = [
        yearLeagueArchiveData[year]?.standings?.annual?.[0]?.[0],
        tmlYearStandingsData[year]?.rows?.[0]?.[0],
        record?.singleSeason
    ];
    if (!record && tmlChampion !== teamName && !fullSeasonLeaders.includes(teamName)) return;

    const honors = [];
    if (record?.firstHalf === teamName) honors.push(['first-half', '上', '上半季冠軍']);
    if (record?.secondHalf === teamName) honors.push(['second-half', '下', '下半季冠軍']);
    if (fullSeasonLeaders.includes(teamName)) honors.push(['full-season', '全', '全年戰績第一']);
    if (annualChampionName === teamName) honors.push(['annual', '1', '年度總冠軍']);
    if (tmlChampion === teamName) honors.push(['tml', 'TML', '台灣大聯盟年度總冠軍']);
    if (!honors.length) return;

    cell.classList.add('season-champion-cell');
    const badgeGroup = getTeamBadgeGroup(cell);
    honors.forEach(([kind, label, title]) => {
        const isFeaturedGame = Number(year) === 2026 && kind === 'second-half';
        const isHalfChampion = kind === 'first-half' || kind === 'second-half';
        const isAnnualChampion = kind === 'annual';
        const mark = document.createElement(isFeaturedGame || isHalfChampion || isAnnualChampion ? 'button' : 'span');
        mark.className = `champion-mark champion-mark-${kind}`;
        mark.title = title;
        mark.setAttribute('aria-label', title);
        if (isAnnualChampion || isHalfChampion) {
            mark.type = 'button';
            mark.classList.add('champion-mark-confetti-trigger');
            mark.setAttribute('aria-label', `${year} 年${getTeamDisplayName(teamName)}${title}，點擊拋彩帶`);
            mark.title = `點擊拋下${title}彩帶`;
        }
        if (isFeaturedGame) {
            mark.type = 'button';
            mark.classList.add('champion-mark-trigger');
            mark.setAttribute('aria-haspopup', 'dialog');
            mark.setAttribute('aria-controls', 'champion-game-dialog');
            mark.setAttribute('aria-label', '查看 2026 年中信兄弟下半季封王戰：比數與觀眾人數');
            mark.title = '查看 2026 年下半季封王戰比數與觀眾人數';
        }
        const trophy = document.createElement('span');
        trophy.className = 'champion-mark-trophy';
        trophy.setAttribute('aria-hidden', 'true');
        const trophyIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        trophyIcon.setAttribute('viewBox', '0 0 24 24');
        trophyIcon.setAttribute('focusable', 'false');
        const trophyBody = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        trophyBody.setAttribute('d', 'M7 3h10v4a5 5 0 0 1-10 0V3Zm3 8h4v4h4v2H7v-2h3v-4Zm-4 8h12v2H6v-2Z');
        const trophyHandles = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        trophyHandles.setAttribute('class', 'champion-mark-trophy-handles');
        trophyHandles.setAttribute('d', 'M7 4H4v2a5 5 0 0 0 4 4.9M17 4h3v2a5 5 0 0 1-4 4.9');
        trophyIcon.append(trophyBody, trophyHandles);
        const trophyLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        trophyLabel.setAttribute('class', 'champion-mark-trophy-label');
        trophyLabel.setAttribute('x', '12');
        trophyLabel.setAttribute('y', '8');
        trophyLabel.textContent = label;
        trophyIcon.appendChild(trophyLabel);
        trophy.appendChild(trophyIcon);
        mark.appendChild(trophy);
        badgeGroup.appendChild(mark);
    });
}

function addChallengeSeriesMark(cell, year, teamName) {
    const result = challengeSeriesResults[year];
    if (!result) return;

    const isWinner = result.winner === teamName;
    if (!isWinner && result.loser !== teamName) return;

    const mark = document.createElement('span');
    const label = isWinner ? '挑戰賽勝者' : '挑戰賽敗者';
    mark.className = `challenge-series-mark ${isWinner ? 'is-winner' : 'is-loser'}`;
    mark.title = `${year} 年${getTeamDisplayName(teamName)}｜${label}`;
    mark.setAttribute('role', 'img');
    mark.setAttribute('aria-label', mark.title);

    if (isWinner) {
        const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        icon.setAttribute('class', 'challenge-series-icon challenge-series-sword');
        icon.setAttribute('viewBox', '0 0 24 24');
        icon.setAttribute('aria-hidden', 'true');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M20.7 2.6 14.5 4l-5.4 5.4 3.5 3.5L18 7.5l2.7-4.9ZM8.1 10.4l5.5 5.5m-5.4-2.7-2.5 2.5m4.4-4.4-2.5 2.5m-1.4-1.4-3.6 3.6 3.1 3.1 3.6-3.6');
        icon.appendChild(path);
        mark.appendChild(icon);
    } else {
        const icon = document.createElement('img');
        icon.className = 'challenge-series-icon challenge-series-broken-bat';
        icon.src = 'image/斷棒.png';
        icon.alt = '';
        icon.setAttribute('aria-hidden', 'true');
        mark.appendChild(icon);
    }
    getTeamBadgeGroup(cell).appendChild(mark);
}

function initializeTeamLogos() {
    const teamLogoElements = document.querySelectorAll('.team_logo a');
    
    teamLogoElements.forEach(element => {
        const teamName = element.getAttribute('title') || element.textContent.trim();
        const logoPath = teamLogos[teamName];
        
        if (logoPath) {
            // 使用圖片標籤替換背景圖片
            const img = document.createElement('img');
            img.src = logoPath;
            img.alt = teamName;
            img.title = teamName;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'contain';
            img.style.objectPosition = 'center';
            img.onerror = function() {
                // 圖片加載失敗時的備用方案
                this.style.display = 'none';
                element.style.background = '#ddd';
                element.textContent = '?';
                element.style.fontSize = '20px';
                element.style.color = '#999';
            };
            
            element.innerHTML = '';
            element.appendChild(img);
        }
    });
}

const rakutenLineageNames = new Set(['第一金剛', 'LaNew 熊', 'Lamigo桃猿', 'Lamigo桃猿1', 'Rakuten Monkeys']);
const chengTaiLineageNames = new Set(['誠泰太陽', '誠泰Cobras', '米迪亞暴龍']);

// 添加互動效果
function addInteractiveEffects() {
    const timelineBars = document.querySelectorAll('.timeline_bar');
    
    timelineBars.forEach(bar => {
        // 滑鼠進入時的效果
        bar.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.zIndex = '10';
        });
        
        // 滑鼠離開時的效果
        bar.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '1';
        });
        
        // 點擊時顯示球隊信息
        bar.addEventListener('click', function() {
            const teamName = this.querySelector('.team_logo a')?.getAttribute('title') || '未知球隊';
            const isChampion = this.classList.contains('win');
            const isNewTeam = this.classList.contains('est');
            
            let message = `球隊：${getTeamDisplayName(teamName)}`;
            if (isChampion) message += '\n年度冠軍！🏆';
            if (isNewTeam) message += '\n新創隊伍 ✨';
            
            // 可選：打開詳細信息(修改以下代碼來實現)
            // alert(message);
        });
    });
}

// 添加冠軍計數功能
function displayChampionshipStats() {
    const winBars = document.querySelectorAll('.timeline_bar.win');
    const champStats = {};
    
    winBars.forEach(bar => {
        const teamName = bar.querySelector('.team_logo a')?.getAttribute('title') || '未知';
        champStats[teamName] = (champStats[teamName] || 0) + 1;
    });
    
    // 在控制台顯示統計信息
    console.log('=== 歷屆冠軍統計 ===');
    Object.entries(champStats)
        .sort((a, b) => b[1] - a[1])
        .forEach(([team, count]) => {
            console.log(`${team}: ${count} 場冠軍`);
        });
}

/**
 * 動態生成球隊沿革表格
 */
