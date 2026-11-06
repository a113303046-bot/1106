/**
 * 球隊沿革 - JavaScript 配置
 * 說明：所有球隊的隊徽圖片路徑都在這裡配置
 * 您可以後續添加圖片檔案並更新路徑
 */

/**
 * 球隊沿革 - JavaScript 配置
 * 說明：所有球隊的隊徽圖片路徑都在這裡配置
 * 您可以後續添加圖片檔案並更新路徑
 */

// 球隊隊徽圖片配置
const teamLogos = {
    '中信兄弟': 'image/logo_brothers.png',
    '統一7-ELEVEn獅': 'image/logo_lions.png',
    '富邦悍將': 'image/logo_fubon.png',
    'Rakuten Monkeys': 'image/logo_monkeys.png',
    '味全龍': 'image/logo_dragon.png',
    '台鋼雄鷹': 'image/logo_steel_eagles.png',
    '兄弟象': 'image/logo_elephant.gif',
    '興農牛': 'image/logo_sinon.gif',
    '義大犀牛': 'image/logo_rhino.jpg',
    'Lamigo桃猿': 'image/logo_lamigo.jpeg',
    'LaNew 熊': 'image/logo_lanew.jpeg',
    '中信鯨': 'image/logo_whale.jpg',
    '米迪亞暴龍': 'image/logo_trex.jpg',
    '誠泰Cobras': 'image/logo_cobras.gif',
    '第一金剛': 'image/logo_kingkong.jpg',
    '誠泰太陽': 'image/imagelogo_sun.jpg',
    '和信鯨': 'image/logo_whale1.jpeg',
    '三商虎': 'image/logo_sanshanghu.gif',
    '時報鷹': 'image/時報鷹.jpg',
    '俊國熊': 'image/俊國熊.gif',
    '興農熊': 'image/興農熊.png',
    '高屏雷公': 'image/高屏雷公.jpg',
    '台北太陽': 'image/imagelogo_sun.jpg',
    '台中金剛': 'image/logo_kingkong.jpg',
    '嘉南勇士': 'image/嘉南勇士.jpg',
    '味全龍1': 'image/logo_dragon1.png',
    '統一獅1': 'image/logo_lions1.png',
    '統一獅2': 'image/logo_lions2.jpg',
    '統一獅3': 'image/logo_lions3.jpg',
    '統一獅4': 'image/logo_lions4.jpg',
    '統一獅5': 'image/logo_lions5.jpg',
    '統一獅6': 'image/logo_lions6.jpg',
    'Lamigo桃猿1': 'image/logo_lamigo2.png',
};

// 年度冠軍與獎盃設定會儲存在目前瀏覽器中，格式為 { 年份: { teamName, trophy } }
const CHAMPIONSHIP_SETTINGS_KEY = 'teamHistoryChampionshipSettings';

function loadChampionshipSettings() {
    try {
        if (typeof localStorage === 'undefined') {
            return {};
        }
        const settings = JSON.parse(localStorage.getItem(CHAMPIONSHIP_SETTINGS_KEY) || '{}');
        return settings && typeof settings === 'object' && !Array.isArray(settings) ? settings : {};
    } catch (error) {
        console.warn('無法讀取年度冠軍設定，將使用預設值。', error);
        return {};
    }
}

const championshipSettings = loadChampionshipSettings();

// 球隊沿革數據 - 顯示時會依年份由舊到新排列
const teamHistoryData = [
    {
        year: 2026,
         teams: [
            { name: '中信兄弟', color: '#fff6d2', hasTeamName: false },
            { name: '統一7-ELEVEn獅', color: '#fde5d7', hasTeamName: false },
            { name: '富邦悍將', color: '#cee2f2', hasTeamName: false },
            { name: '味全龍', color: '#ffebec', hasTeamName: false },
            { name: 'Rakuten Monkeys', color: '#d1e4ec', hasTeamName: false },
            null, // 空列
            { name: '台鋼雄鷹', color: '#c1ffe4', hasTeamName: false },
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2025,
         teams: [
            { name: '中信兄弟', color: '#fff6d2', hasTeamName: false },
            { name: '統一7-ELEVEn獅', color: '#fde5d7', hasTeamName: false },
            { name: '富邦悍將', color: '#cee2f2', hasTeamName: false },
            { name: '味全龍', color: '#ffebec', hasTeamName: false },
            { name: 'Rakuten Monkeys', color: '#d1e4ec', hasTeamName: false },
            null, // 空列
            { name: '台鋼雄鷹', color: '#c1ffe4', hasTeamName: false },
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2024,
         teams: [
            { name: '中信兄弟', color: '#fff6d2', hasTeamName: false },
            { name: '統一7-ELEVEn獅', color: '#fde5d7', hasTeamName: false },
            { name: '富邦悍將', color: '#cee2f2', hasTeamName: false },
            { name: '味全龍', color: '#ffebec', hasTeamName: false },
            { name: 'Rakuten Monkeys', color: '#d1e4ec', hasTeamName: false },
            null, // 空列
            { name: '台鋼雄鷹', color: '#c1ffe4', hasTeamName: false },
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2023,
        teams: [
            { name: '中信兄弟', color: '#fff6d2', hasTeamName: false },
            { name: '統一7-ELEVEn獅', color: '#fde5d7', hasTeamName: false },
            { name: '富邦悍將', color: '#cee2f2', hasTeamName: false },
            { name: '味全龍', color: '#ffebec', hasTeamName: false },
            { name: 'Rakuten Monkeys', color: '#d1e4ec', hasTeamName: false },
            null, // 空列
            { name: '台鋼雄鷹', color: '#c1ffe4', hasTeamName: false },
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2022,
        teams: [
            { name: '中信兄弟', color: '#fff6d2', hasTeamName: false },
            { name: '統一7-ELEVEn獅', color: '#fde5d7', hasTeamName: false },
            { name: '富邦悍將', color: '#cee2f2', hasTeamName: false },
            { name: '味全龍', color: '#ffebec', hasTeamName: false },
            { name: 'Rakuten Monkeys', color: '#d1e4ec', hasTeamName: false },
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2021,
        teams: [
            { name: '中信兄弟', color: '#fff6d2', hasTeamName: false },
            { name: '統一7-ELEVEn獅', color: '#fde5d7', hasTeamName: false },
            { name: '富邦悍將', color: '#cee2f2', hasTeamName: false },
            { name: '味全龍', color: '#ffebec', hasTeamName: false },
            { name: 'Rakuten Monkeys', color: '#d1e4ec', hasTeamName: false },
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2020,
        teams: [
            { name: '中信兄弟', color: '#fff6d2', hasTeamName: false },
            { name: '統一7-ELEVEn獅', color: '#fde5d7', hasTeamName: false },
            { name: '富邦悍將', color: '#cee2f2', hasTeamName: false },
            { name: '味全龍', color: '#ffebec', hasTeamName: false },
            { name: 'Rakuten Monkeys', color: '#d1e4ec', hasTeamName: false },
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2019,
        teams: [
            { name: '中信兄弟', color: '#fff6d2', hasTeamName: false },
            { name: '統一7-ELEVEn獅', color: '#fde5d7', hasTeamName: false },
            { name: '富邦悍將', color: '#cee2f2', hasTeamName: false },
            { name: '味全龍', color: '#ffebec', hasTeamName: false },
            { name: 'Lamigo桃猿1', color: '#d1e4ec', hasTeamName: false},
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2018,
        teams: [
            { name: '中信兄弟', color: '#fff6d2', hasTeamName: false },
            { name: '統一7-ELEVEn獅', color: '#fde5d7', hasTeamName: false },
            { name: '富邦悍將', color: '#cee2f2', hasTeamName: false },
            null, // 空列
            { name: 'Lamigo桃猿1', color: '#d1e4ec', hasTeamName: false},
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2017,
        teams: [
            { name: '中信兄弟', color: '#fff6d2', hasTeamName: false },
            { name: '統一7-ELEVEn獅', color: '#fde5d7', hasTeamName: false },
            { name: '富邦悍將', color: '#cee2f2', hasTeamName: false },
            null, // 空列
            { name: 'Lamigo桃猿1', color: '#d1e4ec', hasTeamName: false},
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2016,
        teams: [
            { name: '中信兄弟', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅6', color: '#fde5d7', hasTeamName: false },
            { name: '義大犀牛', color: '#f4d7e9', hasTeamName: false },
            null, // 空列
            { name: 'Lamigo桃猿', color: '#d1e4ec', hasTeamName: false},
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2015,
        teams: [
            { name: '中信兄弟', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅6', color: '#fde5d7', hasTeamName: false },
            { name: '義大犀牛', color: '#f4d7e9', hasTeamName: false },
            null, // 空列
            { name: 'Lamigo桃猿', color: '#d1e4ec', hasTeamName: false},
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2014,
        teams: [
            { name: '中信兄弟', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅6', color: '#fde5d7', hasTeamName: false },
            { name: '義大犀牛', color: '#f4d7e9', hasTeamName: false },
            null, // 空列
            { name: 'Lamigo桃猿', color: '#d1e4ec', hasTeamName: false},
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2013,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅6', color: '#fde5d7', hasTeamName: false },
            { name: '義大犀牛', color: '#f4d7e9', hasTeamName: false },
            null, // 空列
            { name: 'Lamigo桃猿', color: '#d1e4ec', hasTeamName: false},
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2012,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅6', color: '#fde5d7', hasTeamName: false },
            { name: '興農牛', color: '#ececec', hasTeamName: false },
            null, // 空列
            { name: 'Lamigo桃猿', color: '#d1e4ec', hasTeamName: false},
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2011,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅6', color: '#fde5d7', hasTeamName: false },
            { name: '興農牛', color: '#ececec', hasTeamName: false },
            null, // 空列
            { name: 'Lamigo桃猿', color: '#d1e4ec', hasTeamName: false},
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2010,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅6', color: '#fde5d7', hasTeamName: false },
            { name: '興農牛', color: '#ececec', hasTeamName: false },
            null, // 空列
            { name: 'LaNew 熊', color: '#d5e5e6', hasTeamName: false},
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2009,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅6', color: '#fde5d7', hasTeamName: false },
            { name: '興農牛', color: '#ececec', hasTeamName: false },
            null, // 空列
            { name: 'LaNew 熊', color: '#d5e5e6', hasTeamName: false},
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 2008,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅5', color: '#fde5d7', hasTeamName: false },
            { name: '興農牛', color: '#ececec', hasTeamName: false },
            null, // 空列
            { name: 'LaNew 熊', color: '#d5e5e6', hasTeamName: false},
            null, // 空列
            null, // 空列
            { name: '米迪亞暴龍', color: '#f7d8db', hasTeamName: true},
            null, // 空列
            null, // 空列
            { name: '中信鯨', color: '#d4e6e6', hasTeamName: false },
            null, // 空列
        ]
    },
    {
        year: 2007,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅5', color: '#fde5d7', hasTeamName: false },
            { name: '興農牛', color: '#ececec', hasTeamName: false },
            null, // 空列
            { name: 'LaNew 熊', color: '#d5e5e6', hasTeamName: false},
            null, // 空列
            null, // 空列
            { name: '誠泰Cobras', color: '#fde7d7', hasTeamName: false},
            null, // 空列
            null, // 空列
            { name: '中信鯨', color: '#d4e6e6', hasTeamName: false },
            null, // 空列
        ]
    },
    {
        year: 2006,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅4', color: '#fde5d7', hasTeamName: false },
            { name: '興農牛', color: '#ececec', hasTeamName: false },
            null, // 空列
            { name: 'LaNew 熊', color: '#d5e5e6', hasTeamName: false},
            null, // 空列
            null, // 空列
            { name: '誠泰Cobras', color: '#fde7d7', hasTeamName: false},
            null, // 空列
            null, // 空列
            { name: '中信鯨', color: '#d4e6e6', hasTeamName: false },
            null, // 空列
        ]
    },
    {
        year: 2005,
       teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅4', color: '#fde5d7', hasTeamName: false },
            { name: '興農牛', color: '#ececec', hasTeamName: false },
            null, // 空列
            { name: 'LaNew 熊', color: '#d5e5e6', hasTeamName: false},
            null, // 空列
            null, // 空列
            { name: '誠泰Cobras', color: '#fde7d7', hasTeamName: false},
            null, // 空列
            null, // 空列
            { name: '中信鯨', color: '#d4e6e6', hasTeamName: false },
            null, // 空列
        ]
    },
    {
        year: 2004,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅3', color: '#fde5d7', hasTeamName: false },
            { name: '興農牛', color: '#ececec', hasTeamName: false },
            null, // 空列
            { name: 'LaNew 熊', color: '#d5e5e6', hasTeamName: false},
            null, // 空列
            null, // 空列
            { name: '誠泰Cobras', color: '#fde7d7', hasTeamName: false},
            null, // 空列
            null, // 空列
            { name: '中信鯨', color: '#d4e6e6', hasTeamName: false },
            null, // 空列
        ]
    },
    {
        year: 2003,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅3', color: '#fde5d7', hasTeamName: false },
            { name: '興農牛', color: '#ececec', hasTeamName: false },
            null, // 空列
            { name: '第一金剛', color: '#d5f4fb', hasTeamName: false },
            { name: '誠泰太陽', color: '#fee6c4', hasTeamName: false },
            null, // 空列
            null, // 空列
            null, // 空列
            { name: '中信鯨', color: '#d4e6e6', hasTeamName: false },
            null, // 空列
        ]
    },
    {
        year: 2002,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅3', color: '#fde5d7', hasTeamName: false },
            { name: '興農牛', color: '#ececec', hasTeamName: false },
            null, // 空列
            { name: '高屏雷公', color: '#f6fa92', hasTeamName: false },
            { name: '台北太陽', color: '#fee6c4', hasTeamName: false },
            null, // 空列
            { name: '台中金剛', color: '#d5f4fb', hasTeamName: false },
            { name: '嘉南勇士', color: '#edc5ef', hasTeamName: false },
            null, // 空列
            { name: '中信鯨', color: '#d4e6e6', hasTeamName: false },
            null, // 空列
        ]
    },
    {
        year: 2001,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅3', color: '#fde5d7', hasTeamName: false },
            { name: '興農牛', color: '#ececec', hasTeamName: false },
            null, // 空列
            { name: '高屏雷公', color: '#f6fa92', hasTeamName: false },
            { name: '台北太陽', color: '#fee6c4', hasTeamName: false },
            null, // 空列
            { name: '台中金剛', color: '#d5f4fb', hasTeamName: false },
            { name: '嘉南勇士', color: '#edc5ef', hasTeamName: false },
            null, // 空列
            { name: '和信鯨', color: '#e0ffee', hasTeamName: false },
            null, // 空列
        ]
    },
    {
        year: 2000,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅3', color: '#fde5d7', hasTeamName: false },
            { name: '興農牛', color: '#ececec', hasTeamName: false },
            null, // 空列
            { name: '高屏雷公', color: '#f6fa92', hasTeamName: false },
            { name: '台北太陽', color: '#fee6c4', hasTeamName: false },
            null, // 空列
            { name: '台中金剛', color: '#d5f4fb', hasTeamName: false },
            { name: '嘉南勇士', color: '#edc5ef', hasTeamName: false },
            null, // 空列
            { name: '和信鯨', color: '#e0ffee', hasTeamName: false },
            null, // 空列
        ]
    },
    {
        year: 1999,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅3', color: '#fde5d7', hasTeamName: false },
            { name: '興農牛', color: '#ececec', hasTeamName: false },
            { name: '味全龍1', color: '#ffebec', hasTeamName: false },
            { name: '高屏雷公', color: '#f6fa92', hasTeamName: false },
            { name: '台北太陽', color: '#fee6c4', hasTeamName: false },
            null, // 空列
            { name: '台中金剛', color: '#d5f4fb', hasTeamName: false },
            { name: '嘉南勇士', color: '#edc5ef', hasTeamName: false },
            { name: '三商虎', color: '#a3c3e0', hasTeamName: false },
            { name: '和信鯨', color: '#e0ffee', hasTeamName: false },
            null, // 空列
        ]
    },
    {
        year: 1998,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅3', color: '#fde5d7', hasTeamName: false },
            { name: '興農牛', color: '#ececec', hasTeamName: false },
            { name: '味全龍1', color: '#ffebec', hasTeamName: false },
            { name: '高屏雷公', color: '#f6fa92', hasTeamName: false },
            { name: '台北太陽', color: '#fee6c4', hasTeamName: false },
            null, // 空列
            { name: '台中金剛', color: '#d5f4fb', hasTeamName: false },
            { name: '嘉南勇士', color: '#edc5ef', hasTeamName: false },
            { name: '三商虎', color: '#a3c3e0', hasTeamName: false },
            { name: '和信鯨', color: '#e0ffee', hasTeamName: false },
            null, // 空列
        ]
    },
    {
        year: 1997,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅3', color: '#fde5d7', hasTeamName: false },
            { name: '興農牛', color: '#ececec', hasTeamName: false },
            { name: '味全龍1', color: '#ffebec', hasTeamName: false },
            { name: '高屏雷公', color: '#f6fa92', hasTeamName: false },
            { name: '台北太陽', color: '#fee6c4', hasTeamName: false },
            null, // 空列
            { name: '台中金剛', color: '#d5f4fb', hasTeamName: false },
            { name: '嘉南勇士', color: '#edc5ef', hasTeamName: false },
            { name: '三商虎', color: '#a3c3e0', hasTeamName: false },
            { name: '和信鯨', color: '#e0ffee', hasTeamName: false },
            { name: '時報鷹', color: '#797777', hasTeamName: false }
        ]
    },
    {
        year: 1996,
         teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅3', color: '#fde5d7', hasTeamName: false },
            { name: '興農熊', color: '#749f93', hasTeamName: false },
            { name: '味全龍1', color: '#ffebec', hasTeamName: false },
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            { name: '三商虎', color: '#a3c3e0', hasTeamName: false },
            null, // 空列
            { name: '時報鷹', color: '#797777', hasTeamName: false }
        ]
    },
    {
        year: 1995,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅3', color: '#fde5d7', hasTeamName: false },
            { name: '俊國熊', color: '#c3e2d9', hasTeamName: false },
            { name: '味全龍1', color: '#ffebec', hasTeamName: false },
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            { name: '三商虎', color: '#a3c3e0', hasTeamName: false },
            null, // 空列
            { name: '時報鷹', color: '#797777', hasTeamName: false }
        ]
    },
    {
        year: 1994,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅3', color: '#fde5d7', hasTeamName: false },
            { name: '俊國熊', color: '#c3e2d9', hasTeamName: false },
            { name: '味全龍1', color: '#ffebec', hasTeamName: false },
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            { name: '三商虎', color: '#a3c3e0', hasTeamName: false },
            null, // 空列
            { name: '時報鷹', color: '#797777', hasTeamName: false }
        ]
    },
    {
        year: 1993,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅3', color: '#fde5d7', hasTeamName: false },
            { name: '俊國熊', color: '#c3e2d9', hasTeamName: false },
            { name: '味全龍1', color: '#ffebec', hasTeamName: false },
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            { name: '三商虎', color: '#a3c3e0', hasTeamName: false },
            null, // 空列
            { name: '時報鷹', color: '#797777', hasTeamName: false }
        ]
    },
    {
        year: 1992,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅3', color: '#fde5d7', hasTeamName: false },
            null, // 空列
            { name: '味全龍1', color: '#ffebec', hasTeamName: false },
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            { name: '三商虎', color: '#a3c3e0', hasTeamName: false },
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 1991,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅2', color: '#fde5d7', hasTeamName: false },
            null, // 空列
            { name: '味全龍1', color: '#ffebec', hasTeamName: false },
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            { name: '三商虎', color: '#a3c3e0', hasTeamName: false },
            null, // 空列
            null, // 空列
        ]
    },
    {
        year: 1990,
        teams: [
            { name: '兄弟象', color: '#fff6d2', hasTeamName: false },
            { name: '統一獅1', color: '#fde5d7', hasTeamName: false },
            null, // 空列
            { name: '味全龍1', color: '#ffebec', hasTeamName: false },
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            null, // 空列
            { name: '三商虎', color: '#a3c3e0', hasTeamName: false },
            null, // 空列
            null, // 空列
           
        ]
    }
];

// 初始化隊徽顯示
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
            
            let message = `球隊：${teamName}`;
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

function saveChampionshipSetting(year, teamName, trophy) {
    championshipSettings[year] = { teamName, trophy };

    try {
        if (typeof localStorage === 'undefined') {
            throw new Error('瀏覽器不支援本機儲存');
        }
        localStorage.setItem(CHAMPIONSHIP_SETTINGS_KEY, JSON.stringify(championshipSettings));
    } catch (error) {
        console.error('年度冠軍設定無法儲存於此瀏覽器。', error);
        window.alert('設定儲存失敗，請確認瀏覽器允許儲存網站資料。');
    }
}

/**
 * 動態生成球隊沿革表格
 */
function renderTeamHistoryTable() {
    const tableBody = document.getElementById('team-history-body');

    tableBody.replaceChildren();

    [...teamHistoryData].sort((a, b) => a.year - b.year).forEach(yearData => {
        const row = document.createElement('tr');
        row.dataset.year = String(yearData.year);

        const savedSetting = championshipSettings[yearData.year] || {};
        const isValidSetting = savedSetting && typeof savedSetting.teamName === 'string';
        const isClearedSetting = isValidSetting && savedSetting.teamName === '';
        const configuredChampion = isValidSetting
            ? yearData.teams.find(team => team && team.name === savedSetting.teamName)
            : null;
        const champion = isClearedSetting ? null : configuredChampion || yearData.teams.find(team => team && team.isWinner);
        const trophyEnabled = configuredChampion ? savedSetting.trophy !== false : Boolean(champion && champion.trophy);

        // 年份欄位
        const yearCell = document.createElement('td');
        yearCell.className = 'year-cell';
        yearCell.textContent = yearData.year;
        row.appendChild(yearCell);

        if (yearData.year === 2003) {
            const make2003TeamCell = team => {
                const cell = document.createElement('td');
                cell.className = team ? 'team-cell' : 'team-cell empty-cell';
                if (!team) return cell;
                cell.style.backgroundColor = team.color;
                if (champion === team) cell.classList.add('champion-cell');
                if (teamLogos[team.name]) {
                    const img = document.createElement('img');
                    img.src = teamLogos[team.name]; img.alt = team.name; img.className = 'team-logo';
                    img.onerror = function() { this.style.display = 'none'; };
                    cell.appendChild(img);
                }
                const name = document.createElement('div'); name.className = 'team-name'; name.textContent = team.name; cell.appendChild(name);
                if (champion === team) {
                    const badge = document.createElement('span'); badge.className = 'champion-badge'; badge.textContent = '★ 冠軍'; cell.appendChild(badge);
                    const button = document.createElement('button'); button.type = 'button';
                    button.className = `trophy-toggle${trophyEnabled ? ' is-enabled' : ''}`;
                    button.textContent = trophyEnabled ? '🏆' : '＋🏆';
                    button.setAttribute('aria-label', `${yearData.year} 年獎盃${trophyEnabled ? '已顯示，點選隱藏' : '未顯示，點選顯示'}`);
                    button.setAttribute('aria-pressed', String(trophyEnabled)); button.title = trophyEnabled ? '點選隱藏獎盃' : '點選顯示獎盃';
                    button.addEventListener('click', event => { event.stopPropagation(); saveChampionshipSetting(yearData.year, trophyEnabled ? '' : team.name, !trophyEnabled); renderTeamHistoryTable(); });
                    cell.appendChild(button);
                } else {
                    const button = document.createElement('button'); button.type = 'button'; button.className = 'set-champion-button'; button.textContent = '設為冠軍';
                    button.setAttribute('aria-label', `將 ${team.name} 設為 ${yearData.year} 年冠軍`);
                    button.addEventListener('click', event => { event.stopPropagation(); saveChampionshipSetting(yearData.year, team.name, true); renderTeamHistoryTable(); }); cell.appendChild(button);
                }
                if (team.isNew) { const badge = document.createElement('div'); badge.className = 'new-team-badge'; badge.textContent = 'NEW'; cell.appendChild(badge); }
                if (team.hasTeamName) cell.classList.add('team-name-change');
                return cell;
            };
            yearData.teams.slice(0, 3).forEach(team => row.appendChild(make2003TeamCell(team)));
            const group = document.createElement('td'); group.className = 'team-cell year-2003-group'; group.colSpan = 3;
            group.setAttribute('aria-label', '第一金剛與誠泰太陽同組');
            const items = document.createElement('div'); items.className = 'year-2003-group-teams';
            [yearData.teams[4], yearData.teams[5]].forEach(team => items.appendChild(make2003TeamCell(team)));
            group.appendChild(items); row.appendChild(group);
            yearData.teams.slice(6).forEach(team => row.appendChild(make2003TeamCell(team)));
        } else {        // 球隊欄位
        yearData.teams.forEach(team => {
            const teamCell = document.createElement('td');
            teamCell.className = 'team-cell';

            if (team === null) {
                // 空欄位
                teamCell.className = 'team-cell empty-cell';
            } else {
                teamCell.style.backgroundColor = team.color;
                if (champion === team) {
                    teamCell.classList.add('champion-cell');
                }

                // 隊徽圖片
                if (teamLogos[team.name]) {
                    const logoImg = document.createElement('img');
                    logoImg.src = teamLogos[team.name];
                    logoImg.alt = team.name;
                    logoImg.className = 'team-logo';
                    logoImg.onerror = function() {
                        this.style.display = 'none';
                    };
                    teamCell.appendChild(logoImg);
                }

                // 球隊名稱
                const teamNameDiv = document.createElement('div');
                teamNameDiv.className = 'team-name';
                teamNameDiv.textContent = team.name;
                teamCell.appendChild(teamNameDiv);

                // 冠軍標記與獎盃設定：再次點選獎盃可取消年度冠軍
                if (champion === team) {
                    const championBadge = document.createElement('span');
                    championBadge.className = 'champion-badge';
                    championBadge.textContent = '★ 冠軍';
                    teamCell.appendChild(championBadge);

                    const trophyButton = document.createElement('button');
                    trophyButton.type = 'button';
                    trophyButton.className = `trophy-toggle${trophyEnabled ? ' is-enabled' : ''}`;
                    trophyButton.textContent = trophyEnabled ? '🏆' : '＋🏆';
                    trophyButton.setAttribute('aria-label', `${yearData.year} 年獎盃${trophyEnabled ? '已顯示，點選隱藏' : '未顯示，點選顯示'}`);
                    trophyButton.setAttribute('aria-pressed', String(trophyEnabled));
                    trophyButton.title = trophyEnabled ? '點選隱藏獎盃' : '點選顯示獎盃';
                    trophyButton.addEventListener('click', event => {
                        event.stopPropagation();
                        if (trophyButton.classList.contains('is-enabled')) {
                            saveChampionshipSetting(yearData.year, '', false);
                        } else {
                            saveChampionshipSetting(yearData.year, team.name, true);
                        }
                        renderTeamHistoryTable();
                    });
                    teamCell.appendChild(trophyButton);
                } else {
                    const setChampionButton = document.createElement('button');
                    setChampionButton.type = 'button';
                    setChampionButton.className = 'set-champion-button';
                    setChampionButton.textContent = '設為冠軍';
                    setChampionButton.setAttribute('aria-label', `將 ${team.name} 設為 ${yearData.year} 年冠軍`);
                    setChampionButton.addEventListener('click', event => {
                        event.stopPropagation();
                        saveChampionshipSetting(yearData.year, team.name, true);
                        renderTeamHistoryTable();
                    });
                    teamCell.appendChild(setChampionButton);
                }

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
        });

        }

        tableBody.appendChild(row);
    });
}

// 頁面加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    console.log('初始化球隊沿革頁面...');

    // 生成動態表格
    renderTeamHistoryTable();

    // 執行初始化函數
    initializeTeamLogos();
    addInteractiveEffects();
    initializeNewTeamMarkers();
    displayChampionshipStats();

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
