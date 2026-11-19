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
            null, // 空列
            null, // 空列
            { name: '誠泰太陽', color: '#fee6c4', hasTeamName: false },
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

// 在高屏雷公與台北太陽之間新增第一金剛傳承欄；前置空欄會在表格顯示時收合，
// 讓 1997–2002 年兩隊相鄰，2003 年起則由第一金剛與 Rakuten 傳承線使用中間欄。
teamHistoryData.forEach(yearData => {
    const successorLaneTeam = yearData.year >= 2003 ? yearData.teams[4] : null;
    yearData.teams.splice(5, 0, null);
    if (yearData.year >= 2003) {
        yearData.teams[4] = null;
        yearData.teams[5] = successorLaneTeam;
    }
});

// 初始化隊徽顯示
