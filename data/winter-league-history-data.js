// 冬盟沿革資料。相同 lane 的多筆紀錄會在該年度同欄顯示；span: 2 會跨兩欄置中。
// 每筆格式：{ year: 2012, entries: [{ name: '參賽隊伍', detail: '備註', color: '#e8efe9', logo: 'image/logo.png', span: 2, source: 'https://...' }, null] }。
// 移動下方欄位名稱可調整順序；具有 span: 2 的合併球隊會跨兩欄置中顯示。
const winterLeagueHistoryLaneOrder = [
    // 中華紅／白分流、合為中職聯隊（跨兩欄）、再分成山林／海洋；這兩欄需相鄰。
    '中華紅／台灣山林',
    '中華白／台灣海洋',
    '味全龍',
    '台鋼雄鷹',
    '日本社會人',
    '韓職聯隊',
    // 日職聯隊合併時跨這兩欄；東西軍或紅白隊分流時各佔一欄。
    '日職東軍／紅隊',
    '日職西軍／白隊',
    '中華培訓 → 中華隊',
    '歐美聯隊',
    '多明尼加'
];

// 相同名稱會自動延續同一直欄，名稱變更或別名可設定 lane/track。
const winterLeagueHistoryData = [
    {
        year: 2026,
        entries: [
            { name: '台灣山林', logo: 'winterleague/台灣山林.png' }, { name: '台灣海洋', logo: 'winterleague/台灣海洋.png' }, null, { name: '日本社會人', logo: 'winterleague/日本社會人.png' },
            { name: '韓職聯隊', logo: 'winterleague/韓職聯隊.png' }, null, null, null, { name: '日職聯隊', logo: 'winterleague/日職聯隊.png', span: 2 }, null,
            { name: '大學明星隊', logo: 'winterleague/大學明星隊.png' },
            null, null, null
        ]
    },
    {
        year: 2025,
        entries: [
            { name: '台灣山林', logo: 'winterleague/台灣山林.png' }, { name: '台灣海洋', logo: 'winterleague/台灣海洋.png' }, null, { name: '日本社會人', logo: 'winterleague/日本社會人.png' },
            { name: '韓職聯隊', logo: 'winterleague/韓職聯隊.png' }, null, null, null, { name: '日職聯隊', logo: 'winterleague/日職聯隊.png', span: 2 }, null,
            null, null, null, null
        ]
    },
    {
        year: 2024,
        entries: [
            { name: '台灣山林', logo: 'winterleague/台灣山林.png' }, { name: '台灣海洋', logo: 'winterleague/台灣海洋.png' }, null, { name: '日本社會人', logo: 'winterleague/日本社會人.png' },
            null, { name: '日職紅隊', logo: 'winterleague/日職紅隊.png' }, { name: '日職白隊', logo: 'winterleague/日職白隊.png' }, null, null, null,
            null, null, null, null
        ]
    },
    {
        year: 2023,
        entries: [
            { name: '中華職棒', logo: 'winterleague/中職聯隊.png', span: 2 }, null, { name: '日本社會人', logo: 'winterleague/日本社會人.png' }, null, { name: '日職紅隊', logo: 'winterleague/日職紅隊.png' },
            { name: '日職白隊', logo: 'winterleague/日職白隊.png' }, { name: '中華隊', logo: 'winterleague/中華隊.png' }, null, { name: '台鋼雄鷹', logo: 'winterleague/台鋼雄鷹.png' }, null,
            null, null, null, null
        ]
    },
    {
        year: 2019,
        entries: [
            { name: '中職聯隊', logo: 'winterleague/中職聯隊.png', span: 2 }, { name: '味全龍', logo: 'winterleague/味全龍.png' }, { name: '日本社會人', logo: 'winterleague/日本社會人.png' }, { name: '韓職聯隊', logo: 'winterleague/韓職聯隊.png' },
            { name: '日職紅隊', logo: 'winterleague/日職紅隊.png' }, { name: '日職白隊', logo: 'winterleague/日職白隊.png' }, null, null, null, null,
            null, null, null, null
        ]
    },
    {
        year: 2018,
        entries: [
            { name: '中職聯隊', logo: 'winterleague/中職聯隊.png', span: 2 }, null, { name: '日本社會人', logo: 'winterleague/日本社會人.png' }, { name: '韓職聯隊', logo: 'winterleague/韓職聯隊.png' },
            { name: '日職東軍', logo: 'winterleague/日職東軍.png' }, { name: '日職西軍', logo: 'winterleague/日職西軍.png' }, null, null, null, null,
            null, null, null, null
        ]
    },
    {
        year: 2017,
        entries: [
            { name: '中職聯隊', logo: 'winterleague/中職聯隊.png', span: 2 }, null, { name: '日本社會人', logo: 'winterleague/日本社會人.png' }, { name: '韓職聯隊', logo: 'winterleague/韓職聯隊.png' },
            { name: '日職東軍', logo: 'winterleague/日職東軍.png' }, { name: '日職西軍', logo: 'winterleague/日職西軍.png' }, null, null, { name: '歐美聯隊', logo: 'winterleague/歐美聯隊.png' }, null,
            null, null, null, null
        ]
    },
    {
        year: 2016,
        entries: [
            { name: '中職聯隊', logo: 'winterleague/中職聯隊.png', span: 2 }, null, null, { name: '韓職聯隊', logo: 'winterleague/韓職聯隊.png' }, { name: '日職東軍', logo: 'winterleague/日職東軍.png' },
            { name: '日職西軍', logo: 'winterleague/日職西軍.png' }, { name: '中華培訓', logo: 'winterleague/中華隊.png' }, null, null, null, null,
            { name: '歐洲聯隊', logo: 'winterleague/歐洲聯隊.png' }, null, null
        ]
    },
    {
        year: 2015,
        entries: [
            { name: '中職聯隊', logo: 'winterleague/中職聯隊.png', span: 2 }, null, null, { name: '韓職聯隊', logo: 'winterleague/韓職聯隊.png' }, null, null,
            { name: '中華培訓', logo: 'winterleague/中華隊.png' }, { name: '日職聯隊', logo: 'winterleague/日職聯隊.png', span: 2 }, null, null, null,
            { name: '歐洲聯隊', logo: 'winterleague/歐洲聯隊.png' }, null, null
        ]
    },
    {
        year: 2013,
        entries: [
            { name: '中職聯隊', logo: 'winterleague/中職聯隊.png', span: 2 }, null, null, { name: '韓職聯隊', logo: 'winterleague/韓職聯隊.png' }, null, null, null,
            { name: '日職聯隊', logo: 'winterleague/日職聯隊.png', span: 2 }, null, { name: '多明尼加', logo: 'winterleague/多明尼加.png' }, null, null, null, null
        ]
    },
    {
        year: 2012,
        entries: [
            { name: '中華紅', logo: 'winterleague/中華紅隊.gif' },{ name: '中華白', logo: 'winterleague/中華白隊.gif' }, null,null,
            { name: '日職聯隊', logo: 'winterleague/日職聯隊.png', span: 2 }, 
            null,null,null,
            { name: '多明尼加', logo: 'winterleague/多明尼加.png' },
            null,null,null,null,null
        ]
    }
];

// 冬盟年度例行賽戰績與總冠軍。rows 格式：[名次, 隊名, 出賽, 勝, 敗, 和, 勝率]。
// 2026 賽季進行中，僅保留官方目前公布的戰績，不先標記最終全年第一或總冠軍。
const winterLeagueYearStandingsData = {
    2012: {
        champion: '日職聯隊', leader: '日職聯隊', completed: true,
        rows: [[1,'日職聯隊',20,18,2,0,'.900'],[2,'中職白隊',21,12,9,0,'.571'],[3,'中職紅隊',19,8,11,0,'.421'],[4,'多明尼加',20,2,18,0,'.100']],
        sources: [{ label: '2012 冬盟戰績與結果', url: 'https://zh.wikipedia.org/wiki/2012年亞洲冬季棒球聯盟' }]
    },
    2013: {
        champion: '韓職聯隊', leader: '日職聯隊', completed: true,
        rows: [[1,'日職聯隊',21,16,4,1,'.800'],[2,'韓職聯隊',21,12,8,1,'.600'],[3,'中職聯隊',21,8,13,0,'.381'],[4,'多明尼加',21,5,16,0,'.238']],
        sources: [{ label: '2013 冬盟戰績與結果', url: 'https://zh.wikipedia.org/wiki/2013年亞洲冬季棒球聯盟' }]
    },
    2015: {
        champion: '中華培訓', leader: '日職聯隊', completed: true,
        rows: [[1,'日職聯隊',16,9,5,2,'.643'],[2,'中華培訓',15,9,5,1,'.643'],[3,'韓職聯隊',15,7,4,4,'.636'],[4,'中職聯隊',15,5,6,4,'.455'],[5,'歐洲聯隊',15,1,11,3,'.083']],
        sources: [{ label: '2015 冬盟戰績與結果', url: 'https://zh.wikipedia.org/wiki/2015年亞洲冬季棒球聯盟' }]
    },
    2016: {
        champion: '日職西軍', leader: '日職西軍', completed: true,
        rows: [[1,'日職西軍',17,15,0,2,'.882'],[2,'日職東軍',17,9,3,5,'.750'],[3,'韓職聯隊',17,9,2,6,'.818'],[4,'中華培訓',17,5,4,8,'.385'],[5,'歐洲聯隊',17,4,12,1,'.250'],[6,'中職聯隊',17,3,12,2,'.200']],
        sources: [{ label: '2016 冬盟戰績與結果', url: 'https://zh.wikipedia.org/wiki/2016年亞洲冬季棒球聯盟' }]
    },
    2017: {
        champion: '日職東軍', leader: '日本社會人', completed: true,
        rows: [[1,'日本社會人',17,11,4,2,'.733'],[2,'中職聯隊',17,11,5,1,'.688'],[3,'韓職聯隊',17,8,7,2,'.533'],[4,'日職東軍',17,8,9,0,'.471'],[5,'日職西軍',17,5,11,1,'.313'],[6,'歐美聯隊',17,4,11,2,'.267']],
        sources: [{ label: '2017 冬盟戰績與結果', url: 'https://zh.wikipedia.org/wiki/2017年亞洲冬季棒球聯盟' }]
    },
    2018: {
        champion: '日職東軍', leader: '日職東軍', completed: true,
        rows: [[1,'日職東軍',16,11,5,0,'.688'],[2,'日本社會人',16,8,6,2,'.571'],[3,'中職聯隊',16,9,7,0,'.563'],[4,'韓職聯隊',16,5,8,3,'.385'],[5,'日職西軍',16,3,10,3,'.231']],
        sources: [{ label: '2018 冬盟戰績與結果', url: 'https://zh.wikipedia.org/wiki/2018年亞洲冬季棒球聯盟' }]
    },
    2019: {
        champion: '日本社會人', leader: '日職紅隊', completed: true,
        rows: [[1,'日職紅隊',15,9,3,3,'.750'],[2,'日本社會人',15,8,4,3,'.667'],[3,'味全龍',15,7,6,2,'.538'],[4,'中職聯隊',15,7,8,0,'.467'],[5,'日職白隊',15,5,9,1,'.357'],[6,'韓職聯隊',15,4,10,1,'.286']],
        sources: [{ label: '2019 冬盟戰績與結果', url: 'https://zh.wikipedia.org/wiki/2019年亞洲冬季棒球聯盟' }]
    },
    2023: {
        champion: '台鋼雄鷹', leader: '日本社會人', completed: true,
        rows: [[1,'日本社會人',17,13,3,1,'.813'],[2,'台鋼雄鷹',17,9,6,2,'.600'],[3,'中職聯隊',17,8,7,2,'.533'],[4,'日職紅隊',17,9,8,0,'.529'],[5,'日職白隊',17,7,9,1,'.438'],[6,'中華培訓',17,2,15,0,'.118']],
        sources: [{ label: '2023 冬盟戰績與結果', url: 'https://zh.wikipedia.org/wiki/2023年亞洲冬季棒球聯盟' }]
    },
    2024: {
        champion: '日職白隊', leader: '日本社會人', completed: true,
        rows: [[1,'日本社會人',16,11,3,2,'.786'],[2,'日職白隊',16,7,5,4,'.583'],[3,'台灣山林',16,8,6,2,'.571'],[4,'台灣海洋',16,6,9,1,'.400'],[5,'日職紅隊',16,3,12,1,'.200']],
        sources: [{ label: '2024 冬盟戰績與結果', url: 'https://zh.wikipedia.org/wiki/2024年亞洲冬季棒球聯盟' }]
    },
    2025: {
        champion: '日本社會人', leader: '日本社會人', completed: true,
        rows: [[1,'日本社會人',19,14,4,1,'.778'],[2,'日職聯隊',19,11,8,0,'.579'],[3,'台灣海洋',19,9,10,0,'.474'],[4,'韓職聯隊',12,4,7,1,'.364'],[5,'台灣山林',19,5,14,0,'.263']],
        sources: [{ label: '2025 冬盟戰績與結果', url: 'https://zh.wikipedia.org/wiki/2025年亞洲冬季棒球聯盟' }]
    },
    2026: {
        completed: false, currentLeader: '台灣山林',
        note: '賽季進行中，表列為截至 2026/11/20 官方公布的例行賽戰績；全年第一與總冠軍尚未確定。',
        rows: [[1,'台灣山林',5,4,1,0,'.800'],[2,'日本社會人',6,4,2,0,'.667'],[3,'日職聯隊',5,3,2,0,'.600'],[3,'台灣海洋',5,3,2,0,'.600'],[5,'韓職聯隊',5,2,3,0,'.400'],[6,'大學明星隊',6,0,6,0,'.000']],
        sources: [{ label: 'CPBL 官方 2026 本季戰績', url: 'https://awb.cpbl.com.tw/standings/season' }]
    }
};
