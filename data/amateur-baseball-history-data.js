// 業餘棒球沿革資料，來源為台灣棒球維基館各年度頁面（1978–2025）。
// 同一沿革以 lane 固定直欄；合併球隊以 span 跨相鄰欄位呈現。
const amateurBaseballHistoryLaneByName = {
    '榮工': 'ronggong',
    '那魯灣（榮工）': 'ronggong',
    '榮工（台北體院）': 'taipei-sports-a',
    '新寶（國立體院）': 'national-sports-institute',
    '台灣啤酒（國立體院）': 'national-sports-institute',
    '中信鯨（嘉義學院）': 'chiayi-university',
    '中信鯨（嘉義大學）': 'chiayi-university',
    '中國信託（嘉義大學）': 'chiayi-university',
    '嘉義大學': 'chiayi-university',
    '台鹽（嘉義大學）': 'chiayi-university',
    '台北市': 'taipei-city',
    '臺北市': 'taipei-city',
    '台北縣': 'new-taipei-city',
    '新北市': 'new-taipei-city',
    '新北禾聯': 'new-taipei-city',
    '新北凱撒': 'new-taipei-city',
    '桃園航空城': 'taoyuan-city',
    '桃園市': 'taoyuan-city',
    '威達超舜': 'taichung-city',
    '台中威達超舜': 'taichung-city',
    '台中威達': 'taichung-city',
    '台中運動家': 'taichung-city',
    '臺中台壽保': 'taichung-city',
    '台中': 'taichung-city',
    '台中台壽霸龍': 'taichung-city',
    '崇越科技': 'tung-yue',
    '崇越隼鷹': 'tung-yue',
    '臺東綺麗珊瑚': 'taitung-coral',
    '綺麗珊瑚': 'taitung-coral',
    '台北興富發': 'taipei-hsinfu',
    '安永鮮物': 'evertrust',
    '台南市': 'tainan-city',
    '屏東紅尾': 'pingtung-redtails',
    '列特博生技': 'litobio'
};

function createAmateurBaseballHistoryYear(year, teams) {
    return {
        year,
        source: `https://twbsball.dils.tku.edu.tw/index.php?title=${encodeURIComponent(year >= 2001 ? `${year}年` : String(year))}`,
        entries: teams.map(([name, lane, span]) => {
            const lineageLane = lane || amateurBaseballHistoryLaneByName[name];
            return {
                name,
                ...(lineageLane ? { lane: lineageLane } : {}),
                ...(span ? { span } : {})
            };
        })
    };
}

const amateurBaseballHistoryData = [
    createAmateurBaseballHistoryYear(1978, [
        ['台灣電力'], ['合作金庫'], ['中國石油'], ['陸軍', 'national-army-land'], ['空軍', 'national-army-air'], ['葡萄王（輔仁大學）', 'fju'], ['可口奶滋']
    ]),
    createAmateurBaseballHistoryYear(1979, [
        ['台灣電力'], ['合作金庫'], ['中國石油'], ['陸軍', 'national-army-land'], ['空軍', 'national-army-air'], ['葡萄王（輔仁大學）', 'fju'], ['味全（文化大學）', 'culture-university']
    ]),
    createAmateurBaseballHistoryYear(1980, [
        ['台灣電力'], ['合作金庫'], ['中國石油'], ['陸軍', 'national-army-land'], ['空軍', 'national-army-air'], ['葡萄王（輔仁大學）', 'fju'], ['味全（文化大學）', 'culture-university'], ['可口奶滋']
    ]),
    createAmateurBaseballHistoryYear(1981, [
        ['台灣電力'], ['合作金庫'], ['中國石油'], ['陸軍', 'national-army-land'], ['空軍', 'national-army-air'], ['味全（文化大學）', 'culture-university'], ['007牛仔褲（省立體專）', 'provincial-sports-college']
    ]),
    createAmateurBaseballHistoryYear(1982, [
        ['台灣電力'], ['合作金庫'], ['中國石油'], ['陸軍', 'national-army-land'], ['榮工（輔仁大學）', 'fju'], ['味全（文化大學）', 'culture-university'], ['省立體專', 'provincial-sports-college'], ['台北體專', 'taipei-sports-a']
    ]),
    createAmateurBaseballHistoryYear(1983, [
        ['台灣電力'], ['合作金庫'], ['中國石油'], ['陸光', 'national-army-land'], ['虎風', 'national-army-air'], ['榮工（輔仁大學）', 'fju'], ['味全（文化大學）', 'culture-university'], ['台北體專', 'taipei-sports-a']
    ]),
    createAmateurBaseballHistoryYear(1984, [
        ['台灣電力'], ['合作金庫'], ['中國石油'], ['陸光', 'national-army-land'], ['榮工（輔仁大學）', 'fju'], ['味全（文化大學）', 'culture-university'], ['台北體專', 'taipei-sports-a'], ['省立體專', 'provincial-sports-college']
    ]),
    createAmateurBaseballHistoryYear(1985, [
        ['台灣電力'], ['合作金庫'], ['中國石油'], ['陸光', 'national-army-land'], ['虎風', 'national-army-air'], ['榮工'], ['輔仁大學', 'fju'], ['味全（文化大學）', 'culture-university'], ['台北體專', 'taipei-sports-a'], ['省立體專', 'provincial-sports-college'], ['兄弟飯店'], ['黑鐵']
    ]),
    createAmateurBaseballHistoryYear(1986, [
        ['台灣電力'], ['合作金庫'], ['中國石油'], ['陸光', 'national-army-land'], ['虎風', 'national-army-air'], ['榮工'], ['味全（文化大學）', 'culture-university'], ['兄弟飯店'], ['養樂多（輔仁大學）', 'fju'], ['台北體專', 'taipei-sports-a'], ['同發建設（北體Ｂ隊）', 'taipei-sports-b']
    ]),
    createAmateurBaseballHistoryYear(1987, [
        ['台灣電力'], ['合作金庫'], ['中國石油'], ['陸光', 'national-army-land'], ['虎風', 'national-army-air'], ['榮工'], ['味全（文化大學）', 'culture-university'], ['兄弟飯店'], ['養樂多（輔仁大學）', 'fju'], ['台北體專', 'taipei-sports-a'], ['省立體專', 'provincial-sports-college']
    ]),
    createAmateurBaseballHistoryYear(1988, [
        ['台灣電力'], ['合作金庫'], ['中國石油'], ['陸光', 'national-army-land'], ['虎風', 'national-army-air'], ['榮工'], ['味全'], ['兄弟飯店'], ['美孚巨人（文化大學）', 'culture-university'], ['養樂多（輔仁大學）', 'fju'], ['台北體專', 'taipei-sports-a'], ['省立體專', 'provincial-sports-college']
    ]),
    createAmateurBaseballHistoryYear(1989, [
        ['台灣電力'], ['合作金庫'], ['陸光', 'national-army-land'], ['虎風', 'national-army-air'], ['榮工'], ['味全'], ['兄弟飯店'], ['養樂多（輔仁大學）', 'fju'], ['台北體專', 'taipei-sports-a'], ['統一'], ['俊國建設', 'provincial-sports-college'], ['美孚巨人（文化大學）', 'culture-university'], ['三商行']
    ]),
    createAmateurBaseballHistoryYear(1990, [
        ['台灣電力'], ['合作金庫'], ['榮工'], ['養樂多（輔仁大學）', 'fju'], ['台北體專', 'taipei-sports-a'], ['美孚巨人（文化大學）', 'culture-university'], ['俊國建設', 'provincial-sports-college']
    ]),
    createAmateurBaseballHistoryYear(1991, [
        ['台灣電力'], ['合作金庫'], ['陸光', 'national-army-land'], ['榮工'], ['養樂多（輔仁大學）', 'fju'], ['中信鯨（台北體專）', 'taipei-sports-a'], ['美孚巨人（文化大學）', 'culture-university'], ['俊國建設', 'provincial-sports-college'], ['時報鷹']
    ]),
    createAmateurBaseballHistoryYear(1992, [
        ['台灣電力'], ['合作金庫'], ['陸光', 'national-army-land'], ['養樂多（輔仁大學）', 'fju'], ['聲寶巨人（文化大學）', 'culture-university'], ['俊國建設', 'provincial-sports-college'], ['時報鷹'], ['中信鯨（台北體專）', 'taipei-sports-a']
    ]),
    createAmateurBaseballHistoryYear(1993, [
        ['台灣電力'], ['合作金庫'], ['陸光', 'national-army-land'], ['養樂多（輔仁大學）', 'fju'], ['聲寶巨人（文化大學）', 'culture-university'], ['時報鷹'], ['中信鯨（北體Ａ隊）', 'taipei-sports-a'], ['台北體專', 'taipei-sports-b'], ['富邦公牛（台灣體專）', 'provincial-sports-college']
    ]),
    createAmateurBaseballHistoryYear(1994, [
        ['台灣電力'], ['合作金庫'], ['陸光', 'national-army-land'], ['養樂多（輔仁大學）', 'fju'], ['聲寶巨人（文化大學）', 'culture-university'], ['時報鷹'], ['中信鯨（北體Ａ隊）', 'taipei-sports-a'], ['台北體專', 'taipei-sports-b'], ['富邦公牛（台灣體專）', 'provincial-sports-college']
    ]),
    createAmateurBaseballHistoryYear(1995, [
        ['台灣電力'], ['合作金庫'], ['陸光', 'national-army-land'], ['養樂多（輔仁大學）', 'fju'], ['聲寶巨人', 'culture-university'], ['文化大學', 'culture-university'], ['時報鷹'], ['中信鯨（北體Ａ隊）', 'taipei-sports-a'], ['台北體專', 'taipei-sports-b'], ['富邦公牛（台灣體專）', 'provincial-sports-college']
    ]),
    createAmateurBaseballHistoryYear(1996, [
        ['台灣電力'], ['合作金庫'], ['陸光', 'national-army-land'], ['養樂多（輔仁大學）', 'fju'], ['文化大學', 'culture-university'], ['中信鯨（北體Ａ隊）', 'taipei-sports-a'], ['台北體院', 'taipei-sports-b'], ['富邦公牛（台灣體院）', 'provincial-sports-college']
    ]),
    createAmateurBaseballHistoryYear(1997, [
        ['台灣電力'], ['合作金庫'], ['陸光', 'national-army-land'], ['養樂多（輔仁大學）', 'fju'], ['美孚巨人（文化大學）', 'culture-university'], ['中信鯨（北體Ａ隊）', 'taipei-sports-a'], ['台北體院', 'taipei-sports-b'], ['富邦公牛（台灣體院）', 'provincial-sports-college'], ['那魯灣（榮工）']
    ]),
    createAmateurBaseballHistoryYear(1998, [
        ['台灣電力'], ['合作金庫'], ['陸光', 'national-army-land'], ['輔仁大學', 'fju'], ['美孚巨人（文化大學）', 'culture-university'], ['中信鯨（嘉義學院）'], ['同發建設（北體Ｂ隊）', 'taipei-sports-b'], ['台北體院', 'taipei-sports-a'], ['富邦公牛（台灣體院）', 'provincial-sports-college'], ['新寶（國立體院）']
    ]),
    createAmateurBaseballHistoryYear(1999, [
        ['台灣電力'], ['合作金庫'], ['國軍', 'national-army-land', 2], ['中興保全（輔仁大學）', 'fju'], ['美孚巨人（文化大學）', 'culture-university'], ['中信鯨（嘉義學院）'], ['富邦公牛（台灣體院）', 'provincial-sports-college'], ['台北體院', 'taipei-sports-b'], ['年代（北體Ａ隊）', 'taipei-sports-a'], ['新寶（國立體院）']
    ]),
    createAmateurBaseballHistoryYear(2000, [
        ['台灣電力'], ['合作金庫'], ['國軍', 'national-army-land', 2], ['中興保全（輔仁大學）', 'fju'], ['美孚巨人（文化大學）', 'culture-university'], ['中信鯨（嘉義學院）'], ['富邦公牛（台灣體院）', 'provincial-sports-college'], ['台北體院', 'taipei-sports-b'], ['年代（北體Ａ隊）', 'taipei-sports-a'], ['新寶（國立體院）']
    ]),
    createAmateurBaseballHistoryYear(2001, [
        ['台灣電力'], ['合作金庫'], ['國軍', 'national-army-land', 2], ['中興保全（輔仁大學）', 'fju'], ['美孚巨人（文化大學）', 'culture-university'], ['中信鯨（嘉義大學）'], ['富邦公牛（台灣體院）', 'provincial-sports-college'], ['台北體院', 'taipei-sports-a'], ['東易交通（北體Ｂ隊）', 'taipei-sports-b'], ['台灣啤酒（國立體院）']
    ]),
    createAmateurBaseballHistoryYear(2002, [
        ['台灣電力'], ['合作金庫'], ['國訓', 'national-army-land', 2], ['中興保全（輔仁大學）', 'fju'], ['美孚巨人（文化大學）', 'culture-university'], ['中國信託（嘉義大學）'], ['富邦公牛（台灣體院）', 'provincial-sports-college'], ['台北體院', 'taipei-sports-a'], ['台灣啤酒（國立體院）']
    ]),
    createAmateurBaseballHistoryYear(2003, [
        ['台灣電力'], ['合作金庫'], ['中興保全（輔仁大學）', 'fju'], ['美孚巨人（文化大學）', 'culture-university'], ['嘉義大學'], ['富邦公牛（台灣體院）', 'provincial-sports-college'], ['榮工（台北體院）'], ['台灣啤酒（國立體院）'], ['國訓藍', 'national-army-land'], ['國訓白', 'national-army-air']
    ]),
    createAmateurBaseballHistoryYear(2004, [
        ['台灣電力'], ['合作金庫'], ['中興保全（輔仁大學）', 'fju'], ['美孚巨人（文化大學）', 'culture-university'], ['嘉義大學'], ['富邦公牛（台灣體院）', 'provincial-sports-college'], ['榮工（台北體院）'], ['台灣啤酒（國立體院）'], ['國訓CPBL藍', 'national-army-land'], ['國訓CPBL白', 'national-army-air']
    ]),
    createAmateurBaseballHistoryYear(2005, [
        ['合作金庫'], ['美孚巨人（文化大學）', 'culture-university'], ['台鹽（嘉義大學）'], ['富邦公牛（台灣體院）', 'provincial-sports-college'], ['榮工（台北體院）'], ['台灣啤酒（國立體院）']
    ]),
    createAmateurBaseballHistoryYear(2006, [
        ['嘉義大學'], ['泰安產險（輔仁大學）', 'fju'], ['富邦公牛（台灣體院）', 'provincial-sports-college'], ['台灣電力'], ['台灣啤酒（國立體院）'], ['合作金庫'], ['台北體院', 'taipei-sports-a'], ['美孚巨人（文化大學）', 'culture-university']
    ]),
    createAmateurBaseballHistoryYear(2007, [
        ['嘉義大學'], ['泰安產險（輔仁大學）', 'fju'], ['富邦公牛（台灣體院）', 'provincial-sports-college'], ['台灣電力'], ['台灣啤酒（國立體院）'], ['合作金庫'], ['台北體院', 'taipei-sports-a'], ['美孚巨人（文化大學）', 'culture-university']
    ]),
    createAmateurBaseballHistoryYear(2008, [
        ['台灣電力'], ['台北體院', 'taipei-sports-a'], ['合作金庫'], ['富邦公牛（台灣體院）', 'provincial-sports-college'], ['台灣啤酒（國立體院）'], ['泰安產險（輔仁大學）', 'fju'], ['美孚巨人（文化大學）', 'culture-university'], ['嘉義大學']
    ]),
    createAmateurBaseballHistoryYear(2009, [
        ['台灣電力'], ['台北體院', 'taipei-sports-a'], ['台灣啤酒（國立體院）'], ['合作金庫'], ['嘉義大學'], ['台中威達超舜'], ['富邦公牛（台灣體院）', 'provincial-sports-college'], ['桃園航空城'], ['泰安產險（輔仁大學）', 'fju'], ['美孚巨人（文化大學）', 'culture-university'], ['臺北市'], ['台北縣']
    ]),
    createAmateurBaseballHistoryYear(2010, [
        ['合作金庫'], ['台灣電力'], ['臺北市'], ['台北縣'], ['桃園航空城'], ['台中威達超舜'], ['國訓中心', 'national-army-land', 2]
    ]),
    createAmateurBaseballHistoryYear(2011, [
        ['合作金庫'], ['台灣電力'], ['臺北市'], ['新北市'], ['桃園航空城'], ['台中威達超舜'], ['國訓中心', 'national-army-land', 2], ['崇越科技']
    ]),
    createAmateurBaseballHistoryYear(2012, [
        ['合作金庫'], ['台灣電力'], ['臺北市'], ['新北市'], ['桃園航空城'], ['台中威達超舜'], ['崇越科技'], ['臺東綺麗珊瑚'], ['國訓藍', 'national-army-land'], ['國訓白', 'national-army-air']
    ]),
    createAmateurBaseballHistoryYear(2013, [
        ['合作金庫'], ['台灣電力'], ['臺北市'], ['新北市'], ['桃園航空城'], ['台中威達超舜'], ['崇越科技'], ['臺東綺麗珊瑚'], ['國訓藍', 'national-army-land'], ['國訓白', 'national-army-air']
    ]),
    createAmateurBaseballHistoryYear(2014, [
        ['合作金庫'], ['崇越隼鷹'], ['台灣電力'], ['綺麗珊瑚'], ['台中威達'], ['全球人壽國訓', 'national-army-land', 2]
    ]),
    createAmateurBaseballHistoryYear(2017, [
        ['合作金庫'], ['崇越隼鷹'], ['台灣電力'], ['綺麗珊瑚'], ['台中運動家'], ['桃園航空城'], ['新北市'], ['台北興富發'], ['台南市'], ['大學培訓隊']
    ]),
    createAmateurBaseballHistoryYear(2018, [
        ['合作金庫'], ['崇越隼鷹'], ['台灣電力'], ['綺麗珊瑚'], ['臺中台壽保'], ['桃園航空城'], ['新北市'], ['台北興富發'], ['台南市']
    ]),
    createAmateurBaseballHistoryYear(2019, [
        ['合作金庫'], ['台北興富發'], ['安永鮮物'], ['台南市'], ['桃園航空城'], ['新北市'], ['綺麗珊瑚'], ['臺中台壽保'], ['台灣電力'], ['大學培訓隊']
    ]),
    createAmateurBaseballHistoryYear(2020, [
        ['合作金庫'], ['台北興富發'], ['安永鮮物'], ['台南市'], ['桃園航空城'], ['新北市'], ['綺麗珊瑚'], ['台中'], ['台灣電力'], ['中華培訓隊']
    ]),
    createAmateurBaseballHistoryYear(2021, [
        ['合作金庫'], ['台北興富發'], ['安永鮮物'], ['台南市'], ['桃園市'], ['新北禾聯'], ['綺麗珊瑚'], ['台中'], ['台灣電力'], ['屏東紅尾']
    ]),
    createAmateurBaseballHistoryYear(2022, [
        ['合作金庫'], ['台北興富發'], ['安永鮮物'], ['台南市'], ['桃園市'], ['新北禾聯'], ['綺麗珊瑚'], ['台中'], ['台灣電力'], ['屏東紅尾'], ['列特博生技']
    ]),
    createAmateurBaseballHistoryYear(2023, [
        ['合作金庫'], ['台北興富發'], ['全越運動'], ['台南市'], ['桃園市'], ['新北禾聯'], ['綺麗珊瑚'], ['台中'], ['台灣電力'], ['屏東紅尾'], ['列特博生技']
    ]),
    createAmateurBaseballHistoryYear(2024, [
        ['合作金庫'], ['台北興富發'], ['全越運動'], ['台南市'], ['桃園市'], ['新北禾聯'], ['綺麗珊瑚'], ['台中台壽霸龍'], ['台灣電力'], ['屏東紅尾'], ['列特博生技']
    ]),
    createAmateurBaseballHistoryYear(2025, [
        ['合作金庫'], ['台北興富發'], ['全越運動'], ['台南市'], ['桃園市'], ['新北凱撒'], ['綺麗珊瑚'], ['台中台壽霸龍'], ['台灣電力'], ['屏東紅尾'], ['列特博生技']
    ])
];
