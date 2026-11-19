/** 頁面入口：初始化各頁面功能並提供公開方法。 */

// 頁面加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    console.log('初始化球隊沿革頁面...');

    // 生成動態表格
    renderTeamHistoryTable();
    initializeTeamProfileDialog();
    initializeChampionGameDialog();
    initializeChampionConfetti();
    initializeSeasonProfileDialog();
    initializeYearArchiveDialog();
    initializeChampionshipAdmin();
    initializeInternationalHistory();

    // 執行初始化函數
    initializeTeamLogos();
    addInteractiveEffects();
    displayChampionshipStats();
    syncHistoryPageFromHash();
    window.addEventListener('hashchange', syncHistoryPageFromHash);
    window.addEventListener('popstate', syncHistoryPageFromHash);
    document.querySelectorAll('.history-page-nav a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            setActiveHistoryPage(link.hash.slice(1));
            if (window.location.hash !== link.hash) history.pushState(null, '', link.hash);
        });
    });
    if (typeof firebase !== 'undefined' && typeof firebase.auth === 'function') {
        firebase.auth().onAuthStateChanged(user => { if (user) syncHistoryPageFromHash(); });
    }

    console.log('✓ 頁面初始化完成');
});

// 提供公開的重新加載隊徽方法（如果動態更新圖片）
window.reloadTeamLogos = function() {
    console.log('重新加載隊徽...');
    initializeTeamLogos();
};

// 提供獲取冠軍統計的公開方法
window.getChampionshipStats = function() {
    const champStats = {};
    const winBars = document.querySelectorAll('.timeline_bar.win');
    
    winBars.forEach(bar => {
        const teamName = bar.querySelector('.team_logo a')?.getAttribute('title') || '未知';
        champStats[teamName] = (champStats[teamName] || 0) + 1;
    });
    
    return champStats;
};
