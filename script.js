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

// 沿用各隊徽的主色方向，將沿革表底色統一調成低飽和柔和色。
const teamBackgroundColors = {
    '中信兄弟': '#F5E2A6',
    '兄弟象': '#F5E2A6',
    '統一7-ELEVEn獅': '#F3D7BD',
    '統一獅1': '#F3D7BD',
    '統一獅2': '#F3D7BD',
    '統一獅3': '#F3D7BD',
    '統一獅4': '#F3D7BD',
    '統一獅5': '#F3D7BD',
    '統一獅6': '#F3D7BD',
    '富邦悍將': '#DEE9F4',
    '義大犀牛': '#F2E0EB',
    '興農牛': '#E4EDD9',
    '興農熊': '#E8EED7',
    '俊國熊': '#EEF0D9',
    'Rakuten Monkeys': '#F2DEDF',
    'Lamigo桃猿': '#DFEAF0',
    'Lamigo桃猿1': '#DFEAF0',
    'LaNew 熊': '#E4EDDD',
    '味全龍': '#F4DDDC',
    '味全龍1': '#F4DDDC',
    '台鋼雄鷹': '#EEF6E2',
    '中信鯨': '#DDEDE7',
    '和信鯨': '#DDEDE7',
    '米迪亞暴龍': '#F5DEDC',
    '誠泰Cobras': '#F6E5D8',
    '第一金剛': '#DFEDF2',
    '台中金剛': '#DFEDF2',
    '誠泰太陽': '#F7E8D8',
    '台北太陽': '#F7E8D8',
    '三商虎': '#D9E6F4',
    '時報鷹': '#F5DEDD',
    '高屏雷公': '#F5EFCE',
    '嘉南勇士': '#EEE4F1'
};

function getTeamBackgroundColor(teamName, fallbackColor) {
    return teamBackgroundColors[teamName] || fallbackColor;
}

function getTeamDisplayName(teamName) {
    return String(teamName).replace(/^(統一獅|味全龍)\d+$/, '$1');
}

// 歷年季冠軍與年度總冠軍，依使用者提供的資料表整理：
// https://zxc22.idv.tw/champ.asp?clickflag=999
// 隊名以 teamHistoryData 當年度沿革中的名稱記錄；1998、1999 為單一球季。
const seasonChampionData = {
    2026: { firstHalf: '味全龍', secondHalf: '中信兄弟', annual: '味全龍' },
    2025: { firstHalf: '統一7-ELEVEn獅', secondHalf: '中信兄弟', annual: 'Rakuten Monkeys' },
    2024: { firstHalf: '統一7-ELEVEn獅', secondHalf: '中信兄弟', annual: '中信兄弟' },
    2023: { firstHalf: '統一7-ELEVEn獅', secondHalf: '味全龍', annual: '味全龍' },
    2022: { firstHalf: 'Rakuten Monkeys', secondHalf: '中信兄弟', annual: '中信兄弟' },
    2021: { firstHalf: '中信兄弟', secondHalf: '統一7-ELEVEn獅', annual: '中信兄弟' },
    2020: { firstHalf: '中信兄弟', secondHalf: '統一7-ELEVEn獅', annual: '統一7-ELEVEn獅' },
    2019: { firstHalf: 'Lamigo桃猿1', secondHalf: '中信兄弟', annual: 'Lamigo桃猿1' },
    2018: { firstHalf: 'Lamigo桃猿1', secondHalf: 'Lamigo桃猿1', annual: 'Lamigo桃猿1' },
    2017: { firstHalf: 'Lamigo桃猿1', secondHalf: 'Lamigo桃猿1', annual: 'Lamigo桃猿1' },
    2016: { firstHalf: '中信兄弟', secondHalf: '義大犀牛', annual: '義大犀牛' },
    2015: { firstHalf: 'Lamigo桃猿', secondHalf: '中信兄弟', annual: 'Lamigo桃猿' },
    2014: { firstHalf: 'Lamigo桃猿', secondHalf: '中信兄弟', annual: 'Lamigo桃猿' },
    2013: { firstHalf: '義大犀牛', secondHalf: '統一獅6', annual: '統一獅6' },
    2012: { firstHalf: '統一獅6', secondHalf: 'Lamigo桃猿', annual: 'Lamigo桃猿' },
    2011: { firstHalf: '統一獅6', secondHalf: 'Lamigo桃猿', annual: '統一獅6' },
    2010: { firstHalf: '興農牛', secondHalf: '兄弟象', annual: '兄弟象' },
    2009: { firstHalf: '統一獅6', secondHalf: '兄弟象', annual: '統一獅6' },
    2008: { firstHalf: '統一獅5', secondHalf: 'LaNew 熊', annual: '統一獅5' },
    2007: { firstHalf: '誠泰Cobras', secondHalf: 'LaNew 熊', annual: '統一獅5' },
    2006: { firstHalf: 'LaNew 熊', secondHalf: 'LaNew 熊', annual: 'LaNew 熊' },
    2005: { firstHalf: '誠泰Cobras', secondHalf: '興農牛', annual: '興農牛' },
    2004: { firstHalf: '統一獅3', secondHalf: '興農牛', annual: '興農牛' },
    2003: { firstHalf: '興農牛', secondHalf: '兄弟象', annual: '兄弟象' },
    2002: { firstHalf: '兄弟象', secondHalf: '兄弟象', annual: '兄弟象' },
    2001: { firstHalf: '統一獅3', secondHalf: '兄弟象', annual: '兄弟象' },
    2000: { firstHalf: '興農牛', secondHalf: '統一獅3', annual: '統一獅3' },
    1999: { singleSeason: '和信鯨', annual: '味全龍1' },
    1998: { singleSeason: '興農牛', annual: '味全龍1' },
    1997: { firstHalf: '時報鷹', secondHalf: '味全龍1', annual: '味全龍1' },
    1996: { firstHalf: '統一獅3', secondHalf: '味全龍1', annual: '統一獅3' },
    1995: { firstHalf: '統一獅3', secondHalf: '統一獅3', annual: '統一獅3' },
    1994: { firstHalf: '兄弟象', secondHalf: '兄弟象', annual: '兄弟象' },
    1993: { firstHalf: '兄弟象', secondHalf: '統一獅3', annual: '兄弟象' },
    1992: { firstHalf: '兄弟象', secondHalf: '兄弟象', annual: '兄弟象' },
    1991: { firstHalf: '味全龍1', secondHalf: '統一獅2', annual: '統一獅2' },
    1990: { firstHalf: '三商虎', secondHalf: '味全龍1', annual: '味全龍1' }
};

const teamMergerRelations = [
    {
        year: 2003,
        predecessorNames: ['高屏雷公', '台北太陽'],
        successorName: '第一金剛'
    }
];

// 2024–2026 球隊年度簡介；來源連結以聯盟資料、球團報導與年度戰績整理。
const teamSeasonProfileData = {
    2024: {
        sources: [
            { label: '35 年全年戰績', url: 'https://www.zxc22.idv.tw/cpbl35/rank_all.asp' },
            { label: 'CPBL 年度頒獎與個人獎', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0O309863132957699842' }
        ],
        teams: {
            '中信兄弟': {
                heading: '黃潮再起，隊史第十冠', record: '70 勝・50 敗', rank: '全年第 1 名', distinction: '年度總冠軍',
                summary: '中信兄弟以全年第一之姿進入臺灣大賽，系列賽以 4 勝 1 敗擊敗統一獅，拿下含前身在內的隊史第十冠。',
                highlights: ['下半季封王並取得臺灣大賽門票。', '臺灣大賽第五戰在洲際主場以 4：1 奪勝封王。', '隊史第十冠，也是球隊繼 2021、2022 年後再度登頂。'],
                sources: [{ label: 'CPBL 臺灣大賽第五戰', url: 'https://cpbl.com.tw/box/news?gameSno=5&kindCode=C&year=2024' }]
            },
            '統一7-ELEVEn獅': {
                heading: '上半季封王，鏖戰至臺灣大賽', record: '66 勝・53 敗・1 和', rank: '全年第 2 名', distinction: '上半季冠軍・臺灣大賽亞軍',
                summary: '統一獅拿下上半季冠軍並以全年第二名進入臺灣大賽，與中信兄弟交手五場後以 1 勝 4 敗獲得亞軍。',
                highlights: ['古林睿煬以 1.66 防禦率拿下年度 MVP 與防禦率王。', '古林睿煬單季送出 150 次三振，成為球隊本土王牌。', '年度頒獎典禮的 MVP 與新人獎，皆有統一獅球員獲獎。'],
                sources: [{ label: 'CPBL 2024 年度頒獎報導', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0O309863132957699842' }]
            },
            '富邦悍將': {
                heading: '例行賽後段拚戰，全年排名第五', record: '53 勝・66 敗・1 和', rank: '全年第 5 名', distinction: '未取得季後賽資格',
                summary: '富邦悍將以全年第五名結束球季。選秀狀元張育成季中返台加入，47 場出賽擊出 10 支全壘打，成為打線焦點。',
                highlights: ['全年共拿下 53 勝，較前一季增加 5 勝。', '張育成在 47 場比賽敲出 10 轟、30 分打點。', '下半季戰績較上半季回升，仍未能進入季後賽。'],
                sources: [{ label: 'CPBL 張育成個人成績', url: 'https://cpbl.com.tw/team/person?acnt=0000006888' }]
            },
            'Rakuten Monkeys': {
                heading: '全年第三，未能延續前季冠軍', record: '62 勝・57 敗・1 和', rank: '全年第 3 名', distinction: '未取得季後賽資格',
                summary: '樂天桃猿以全年第三名結束例行賽，該季兩個半季冠軍由其他球隊取得，因此未能參加臺灣大賽。',
                highlights: ['全年勝率 .521，六隊中排名第三。', '林智平達成生涯千安，獲得東山再起獎。', '陳柏豪以 29 次救援成功拿下救援王與年度最佳進步獎。'],
                sources: [{ label: 'CPBL 年度頒獎報導', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0O309863132957699842' }]
            },
            '味全龍': {
                heading: '衛冕之路受阻，全年排名第四', record: '58 勝・62 敗', rank: '全年第 4 名', distinction: '未取得季後賽資格',
                summary: '味全龍在 2023 年奪冠後，2024 年以全年第四名作收，未能回到季後賽。',
                highlights: ['例行賽拿下 58 勝，全年勝率 .483。', '全年第四名，與第三名樂天桃猿相差 4.5 場。', '兩個半季都未能封王，球季結束後進入重整與調整階段。'],
                sources: []
            },
            '台鋼雄鷹': {
                heading: '一軍元年，寫下隊史首批紀錄', record: '49 勝・70 敗・1 和', rank: '全年第 6 名', distinction: '一軍首個球季',
                summary: '台鋼雄鷹加入一軍，讓中職睽違 16 年回到六隊規模。球隊在首季拿下 49 勝，曾子祐成為隊史首位達成百安的球員。',
                highlights: ['曾子祐出賽 115 場、敲出 123 支安打，獲年度最佳新人。', '陳柏清投出 158 局，成為球隊輪值的重要本土先發。', '首年建立一軍陣容與球隊紀錄，為後續球季累積經驗。'],
                sources: [{ label: 'CPBL 年度頒獎：曾子祐獲新人王', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0O309863132957699842' }]
            }
        }
    },
    2025: {
        sources: [
            { label: '36 年全年戰績', url: 'https://news.tvbs.com.tw/sports/2821305?from=sports_extend' },
            { label: 'CPBL 年度頒獎與個人獎', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0P311368939485570134' }
        ],
        teams: {
            '中信兄弟': {
                heading: '連兩年全年第一，再闖臺灣大賽', record: '70 勝・50 敗', rank: '全年第 1 名', distinction: '下半季冠軍・臺灣大賽亞軍',
                summary: '中信兄弟連續第二年拿下全年第一與下半季冠軍，臺灣大賽迎戰樂天桃猿，系列賽以 1 勝 4 敗無緣連霸。',
                highlights: ['連續兩季完成「下半季冠軍、全年第一」並直接晉級臺灣大賽。', '臺灣大賽前兩戰在大巨蛋落敗，返主場後追回一勝。', '系列賽第五戰延長賽落敗，年度總冠軍由樂天桃猿獲得。'],
                sources: [{ label: 'CPBL 臺灣大賽開打報導', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0P290584837815979468' }]
            },
            '統一7-ELEVEn獅': {
                heading: '上半季封王，季後賽遭樂天逆轉', record: '66 勝・54 敗', rank: '全年第 2 名', distinction: '上半季冠軍・季後挑戰賽止步',
                summary: '統一獅拿下上半季冠軍並在季後挑戰賽取得領先，樂天桃猿連追三勝完成逆轉，獅隊無緣臺灣大賽。',
                highlights: ['季後挑戰賽一度取得 2 勝 0 敗聽牌優勢。', '第四戰進入延長賽，樂天以 4：3 勝出並完成「讓二追三」。', '陳傑憲、林安可等中心打線成員持續扮演攻擊主力。'],
                sources: [{ label: 'CPBL 季後挑戰賽第四戰', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0P287004028052498155' }]
            },
            '富邦悍將': {
                heading: '全年排名第六，尋找重整方向', record: '46 勝・74 敗', rank: '全年第 6 名', distinction: '未取得季後賽資格',
                summary: '富邦悍將以全年第六名結束球季，46 勝為六隊最低；球隊持續調整投打陣容，為下一季重建競爭力。',
                highlights: ['全年勝率 .383，與第五名味全龍相差 9.5 場。', '球隊以六連勝結束球季，追平富邦接手後最長連勝紀錄。', '陳金鋒總教練表示，球季中的陣容輪替讓更多球員累積一軍經驗。'],
                sources: [{ label: '中央社：富邦悍將結束球季', url: 'https://www.cna.com.tw/news/aspt/202510040218.aspx' }]
            },
            'Rakuten Monkeys': {
                heading: '逆勢闖關，奪樂天接手後首冠', record: '62 勝・57 敗・1 和', rank: '全年第 3 名', distinction: '年度總冠軍',
                summary: '樂天桃猿以全年第三名進入季後挑戰賽，先逆轉淘汰統一獅，再於臺灣大賽以 4 勝 1 敗擊敗中信兄弟，拿下樂天接手後首冠。',
                highlights: ['季後挑戰賽完成「讓二追三」，成為史上首次達成此逆轉的球隊。', '臺灣大賽第五戰延長至第十一局，林泓育敲出致勝兩分砲。', '威能帝拿下年度 MVP、勝投王與三振王。'],
                sources: [
                    { label: 'CPBL 臺灣大賽首戰報導', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0P291848787598264487' },
                    { label: 'CPBL 封王歷程專題', url: 'https://pb.cpbl.com.tw/xmdoc/cont?sid=0P308545220797370494&xsmsid=0l113391521954478024' }
                ]
            },
            '味全龍': {
                heading: '全年第五，未能重返季後賽', record: '55 勝・64 敗・1 和', rank: '全年第 5 名', distinction: '未取得季後賽資格',
                summary: '味全龍以全年第五名完成球季，未能延續前兩年的季後賽之旅。徐若熙仍是輪值核心，季末宣布行使旅外權利，將轉戰日本職棒。',
                highlights: ['全年勝率 .462，例行賽取得 55 勝。', '徐若熙先發 19 場、投 114 局，送出 120 次三振。', '徐若熙球季後加盟日本職棒福岡軟銀鷹，為龍隊投手戰力帶來新一輪交接。'],
                sources: [{ label: '味全龍官方：徐若熙旅外公告', url: 'https://www.wdragons.com/%E5%91%B3%E5%85%A8%E9%BE%8D%E7%90%83%E5%9C%98%E5%85%AC%E5%91%8A/' }]
            },
            '台鋼雄鷹': {
                heading: '跨過五成勝率，投手寫下連勝紀錄', record: '59 勝・59 敗・2 和', rank: '全年第 4 名', distinction: '隊史首度全年五成勝率',
                summary: '台鋼雄鷹二年級球季全年勝率正好五成，排名第四。後勁以跨季 22 連勝刷新中職紀錄，成為球隊最受矚目的球季焦點。',
                highlights: ['全年勝敗場數首次打平，較一軍元年多拿 10 勝。', '後勁在 8 月取得跨季第 22 連勝，超越潘威倫保持的紀錄。', '球隊持續由曾子祐、魔鷹、吳念庭等打者串連攻勢。'],
                sources: [{ label: 'CPBL：後勁刷新跨季連勝紀錄', url: 'https://cpbl.com.tw/box/news?gameSno=265&kindCode=A&year=2025' }]
            }
        }
    },
    2026: {
        sources: [
            { label: '2026 全年戰績', url: 'https://tw.tips/zhongzhi' },
            { label: 'CPBL 職業棒球：2026 味全封王專題', url: 'https://pb.cpbl.com.tw/xmdoc/cont?sid=0Q307588526072178395&xsmsid=0L113391521954478024' }
        ],
        teams: {
            '中信兄弟': {
                heading: '下半季封王，連三年挺進臺灣大賽', record: '56 勝・62 敗・2 和', rank: '全年第 5 名', distinction: '下半季冠軍・臺灣大賽亞軍',
                summary: '中信兄弟上半季開局不順，後半季反彈拿下下半季冠軍，再於季後挑戰賽擊退統一獅，連續第三年闖進臺灣大賽。',
                highlights: ['下半季以 36 勝 24 敗封王，全年排名第五。', '季後挑戰賽以 3：2 淘汰統一獅，取得另一張臺灣大賽門票。', '臺灣大賽從 0 勝 3 敗追成 2 勝 3 敗，最終以 2 勝 4 敗屈居亞軍。'],
                sources: [
                    { label: '中央社：兄弟挺進臺灣大賽', url: 'https://www.cna.com.tw/news/aspt/202610120306.aspx' },
                    { label: 'CPBL 2026 下半季封王戰', url: 'https://www.cpbl.com.tw/box/index?gameSno=270&year=2026&kindCode=A' }
                ]
            },
            '統一7-ELEVEn獅': {
                heading: '全年第二，季後挑戰賽惜敗兄弟', record: '64 勝・55 敗・1 和', rank: '全年第 2 名', distinction: '季後挑戰賽止步',
                summary: '統一獅以全年第二名進入季後挑戰賽，與下半季冠軍中信兄弟激戰至決勝戰，最終無緣臺灣大賽。',
                highlights: ['全年 64 勝，排名僅次於味全龍。', '季後挑戰賽第二戰以 1：0 獲勝，曾將系列賽逼入決勝局。', '新人投手鍾允華獲最佳新人，並拿下年度救援王。'],
                sources: [{ label: '中央社：季後挑戰賽決勝戰', url: 'https://www.cna.com.tw/news/aspt/202610120306.aspx' }]
            },
            '富邦悍將': {
                heading: '排名重返前三，投手戰力向上', record: '59 勝・61 敗', rank: '全年第 3 名', distinction: '暌違七年重返前三',
                summary: '富邦悍將以全年第三名完成例行賽，是 2019 年後首度回到前三名。李東洺拿下生涯新高的單季 10 勝，展現本土輪值進步。',
                highlights: ['全年拿下 59 勝，勝率 .492。', '李東洺首度達成單季 10 勝，入圍年度最佳進步獎。', '球隊仍未取得季後賽門票，將以這次排名作為重返競爭行列的基礎。'],
                sources: [{ label: '中央社：2026 年度獎項入圍', url: 'https://www.cna.com.tw/news/aspt/202610270253.aspx' }]
            },
            'Rakuten Monkeys': {
                heading: '全年第四，衛冕後未能進入季後賽', record: '57 勝・61 敗・2 和', rank: '全年第 4 名', distinction: '未取得季後賽資格',
                summary: '衛冕軍樂天桃猿以全年第四名結束球季，例行賽表現與前一季奪冠的高峰有所落差，未能延續季後賽之旅。',
                highlights: ['全年勝率 .483，與第三名富邦悍將相差 7.5 場。', '曾家輝以 120.2 局、防禦率 2.69 入圍最佳進步獎並獲獎。', '馬傑森單季首度突破百安，打擊表現創個人生涯新高。'],
                sources: [{ label: '中央社：2026 年度獎項入圍', url: 'https://www.cna.com.tw/news/aspt/202610270253.aspx' }]
            },
            '味全龍': {
                heading: '紅色王者歸來，隊史第六冠', record: '67 勝・53 敗', rank: '全年第 1 名', distinction: '上半季冠軍・年度總冠軍',
                summary: '味全龍拿下上半季冠軍與全年第一，臺灣大賽以 4 勝 2 敗擊敗中信兄弟，拿下隊史第六冠、回歸一軍後第二冠。',
                highlights: ['蔣銲獲年度 MVP，並包辦防禦率王與三振王。', '臺灣大賽第六戰梅賽鍶主投 8 局無失分，龍隊以 6：0 封王。', '成為首支在臺北大巨蛋拋下總冠軍彩帶的球隊。'],
                sources: [{ label: '中央社：味全龍拿下年度總冠軍', url: 'https://www.cna.com.tw/news/aspt/202610260198.aspx' }]
            },
            '台鋼雄鷹': {
                heading: '魔鷹火力稱霸，全年排名第六', record: '54 勝・65 敗・1 和', rank: '全年第 6 名', distinction: '魔鷹包辦打擊三冠',
                summary: '台鋼雄鷹全年排名第六，魔鷹拿下安打、全壘打與打點三項打擊獎，陳文杰則獲東山再起獎。',
                highlights: ['魔鷹以長打與打點火力成為聯盟最具威脅的中心打者。', '陳文杰獲東山再起獎，重返一軍後重新站穩主力位置。', '全年 54 勝，較球隊一軍首季增加 5 勝。'],
                sources: [{ label: '2026 中職年度獎項報導', url: 'https://news.tvbs.com.tw/sports/baseball/4045071' }]
            }
        }
    }
};

// 歷年球季的半季、單一球季與全年戰績，依各年度戰績表整理。
const yearLeagueArchiveData = {
    2017: {
        overview: '中華職棒28年由四隊各進行120場例行賽。Lamigo桃猿以78勝拿下全年第一，並包辦上下半季冠軍，臺灣大賽擊敗中信兄弟奪得年度總冠軍。',
        sources: [{ label: '上半季戰績', url: 'https://zxc22.idv.tw/cpbl28/rank_up.asp' }, { label: '下半季戰績', url: 'https://zxc22.idv.tw/cpbl28/rank_down.asp' }, { label: '全年戰績', url: 'https://zxc22.idv.tw/cpbl28/rank_all.asp' }, { label: '歷年冠軍紀錄', url: 'https://zxc22.idv.tw/champ.asp?clickflag=999' }],
        standings: {
            first: [['Lamigo桃猿1',60,43,16,1,'.729'],['中信兄弟',60,30,27,3,'.526'],['統一7-ELEVEn獅',60,23,35,2,'.397'],['富邦悍將',60,20,38,2,'.345']],
            second: [['Lamigo桃猿1',60,35,25,0,'.583'],['統一7-ELEVEn獅',60,34,26,0,'.567'],['富邦悍將',60,28,32,0,'.467'],['中信兄弟',60,23,37,0,'.383']],
            annual: [['Lamigo桃猿1',120,78,41,1,'.655'],['統一7-ELEVEn獅',120,57,61,2,'.483'],['中信兄弟',120,53,64,3,'.453'],['富邦悍將',120,48,70,2,'.407']]
        }
    },
    2018: {
        overview: '中華職棒29年四隊各進行120場例行賽。Lamigo桃猿拿下上下半季與全年第一，臺灣大賽以4勝2敗擊敗統一7-ELEVEn獅奪冠。',
        sources: [{ label: '上半季戰績', url: 'https://zxc22.idv.tw/cpbl29/rank_up.asp' }, { label: '下半季戰績', url: 'https://zxc22.idv.tw/cpbl29/rank_down.asp' }, { label: '全年戰績', url: 'https://zxc22.idv.tw/cpbl29/rank_all.asp' }, { label: '歷年冠軍紀錄', url: 'https://zxc22.idv.tw/champ.asp?clickflag=999' }],
        standings: {
            first: [['Lamigo桃猿1',60,38,22,0,'.633'],['統一7-ELEVEn獅',60,35,25,0,'.583'],['富邦悍將',60,27,33,0,'.450'],['中信兄弟',60,20,40,0,'.333']],
            second: [['Lamigo桃猿1',60,35,25,0,'.583'],['統一7-ELEVEn獅',60,29,30,1,'.492'],['中信兄弟',60,28,31,1,'.475'],['富邦悍將',60,27,33,0,'.450']],
            annual: [['Lamigo桃猿1',120,73,47,0,'.608'],['統一7-ELEVEn獅',120,64,55,1,'.538'],['富邦悍將',120,54,66,0,'.450'],['中信兄弟',120,48,71,1,'.403']]
        }
    },
    2019: {
        overview: '中華職棒30年四隊各進行120場例行賽。Lamigo桃猿以全年第一拿下上半季冠軍，中信兄弟封王下半季；Lamigo桃猿在臺灣大賽以4勝1敗奪冠。',
        sources: [{ label: '上半季戰績', url: 'https://zxc22.idv.tw/cpbl30/rank_up.asp' }, { label: '下半季戰績', url: 'https://zxc22.idv.tw/cpbl30/rank_down.asp' }, { label: '全年戰績', url: 'https://zxc22.idv.tw/cpbl30/rank_all.asp' }, { label: '歷年冠軍紀錄', url: 'https://zxc22.idv.tw/champ.asp?clickflag=999' }],
        standings: {
            first: [['Lamigo桃猿1',60,35,24,1,'.593'],['富邦悍將',60,31,27,2,'.534'],['中信兄弟',60,26,32,2,'.448'],['統一7-ELEVEn獅',60,25,34,1,'.424']],
            second: [['中信兄弟',60,36,24,0,'.600'],['富邦悍將',60,32,28,0,'.533'],['Lamigo桃猿1',60,28,31,1,'.475'],['統一7-ELEVEn獅',60,23,36,1,'.390']],
            annual: [['Lamigo桃猿1',120,63,55,2,'.534'],['富邦悍將',120,63,55,2,'.534'],['中信兄弟',120,62,56,2,'.525'],['統一7-ELEVEn獅',120,48,70,2,'.407']]
        }
    },
    2020: {
        overview: '中華職棒31年因疫情調整開季時程，聯盟由五隊各進行120場例行賽。中信兄弟拿下上半季與全年第一，統一獅奪下下半季冠軍，並在臺灣大賽逆轉中信兄弟封王。',
        sources: [{ label: '上半季戰績', url: 'https://zxc22.idv.tw/cpbl31/rank_up.asp' }, { label: '下半季戰績', url: 'https://zxc22.idv.tw/cpbl31/rank_down.asp' }, { label: '全年戰績', url: 'https://zxc22.idv.tw/cpbl31/rank_all.asp' }, { label: '歷年冠軍紀錄', url: 'https://zxc22.idv.tw/champ.asp?clickflag=999' }],
        standings: {
            first: [['中信兄弟',60,37,23,0,'.617'],['Rakuten Monkeys',60,34,26,0,'.567'],['統一7-ELEVEn獅',60,26,34,0,'.433'],['富邦悍將',60,23,37,0,'.383']],
            second: [['統一7-ELEVEn獅',60,32,27,1,'.542'],['富邦悍將',60,31,28,1,'.525'],['中信兄弟',60,30,28,2,'.517'],['Rakuten Monkeys',60,25,35,0,'.417']],
            annual: [['中信兄弟',120,67,51,2,'.568'],['Rakuten Monkeys',120,59,61,0,'.492'],['統一7-ELEVEn獅',120,58,61,1,'.487'],['富邦悍將',120,54,65,1,'.454']]
        }
    },
    2021: {
        overview: '中華職棒32年五隊各進行120場例行賽。中信兄弟拿下上半季與全年第一，統一獅奪下下半季冠軍；臺灣大賽中信兄弟以4勝0敗擊敗統一獅，取得隊史第九冠。',
        sources: [{ label: '上半季戰績', url: 'https://zxc22.idv.tw/cpbl32/rank_up.asp' }, { label: '下半季戰績', url: 'https://zxc22.idv.tw/cpbl32/rank_down.asp' }, { label: '全年戰績', url: 'https://zxc22.idv.tw/cpbl32/rank_all.asp' }, { label: '歷年冠軍紀錄', url: 'https://zxc22.idv.tw/champ.asp?clickflag=999' }],
        standings: {
            first: [['中信兄弟',60,35,24,1,'.593'],['統一7-ELEVEn獅',60,32,26,2,'.552'],['Rakuten Monkeys',60,30,30,0,'.500'],['富邦悍將',60,28,31,1,'.475'],['味全龍',60,22,36,2,'.379']],
            second: [['統一7-ELEVEn獅',60,32,25,3,'.561'],['中信兄弟',60,31,25,4,'.554'],['味全龍',60,28,31,1,'.475'],['Rakuten Monkeys',60,26,31,3,'.456'],['富邦悍將',60,26,31,3,'.456']],
            annual: [['中信兄弟',120,66,49,5,'.574'],['統一7-ELEVEn獅',120,64,51,5,'.557'],['Rakuten Monkeys',120,56,61,3,'.479'],['富邦悍將',120,54,62,4,'.466'],['味全龍',120,50,67,3,'.427']]
        }
    },
    2022: {
        overview: '中華職棒33年五隊各進行120場例行賽。樂天桃猿奪上半季冠軍並以全年第一晉級臺灣大賽，中信兄弟封王下半季，最終中信兄弟以4勝0敗橫掃樂天桃猿完成連霸。',
        sources: [{ label: '上半季戰績', url: 'https://zxc22.idv.tw/cpbl33/rank_up.asp' }, { label: '下半季戰績', url: 'https://zxc22.idv.tw/cpbl33/rank_down.asp' }, { label: '全年戰績', url: 'https://zxc22.idv.tw/cpbl33/rank_all.asp' }, { label: '歷年冠軍紀錄', url: 'https://zxc22.idv.tw/champ.asp?clickflag=999' }],
        standings: {
            first: [['Rakuten Monkeys',60,37,22,1,'.627'],['中信兄弟',60,32,26,2,'.552'],['統一7-ELEVEn獅',60,31,27,2,'.534'],['味全龍',60,31,29,0,'.517'],['富邦悍將',60,16,43,1,'.271']],
            second: [['中信兄弟',60,37,21,2,'.638'],['Rakuten Monkeys',60,33,24,3,'.579'],['富邦悍將',60,30,27,3,'.526'],['味全龍',60,26,29,5,'.473'],['統一7-ELEVEn獅',60,17,42,1,'.288']],
            annual: [['Rakuten Monkeys',120,70,46,4,'.603'],['中信兄弟',120,69,47,4,'.595'],['味全龍',120,57,58,5,'.496'],['統一7-ELEVEn獅',120,48,69,3,'.410'],['富邦悍將',120,46,70,4,'.397']]
        }
    },
    2023: {
        overview: '中華職棒34年由五隊各進行120場例行賽。統一獅拿下上半季冠軍，味全龍奪下下半季冠軍並以全年第一晉級臺灣大賽，最後以4勝3敗擊敗樂天桃猿，拿下隊史第五冠。',
        sources: [{ label: '上半季戰績', url: 'https://zxc22.idv.tw/cpbl34/rank_up.asp' }, { label: '下半季戰績', url: 'https://zxc22.idv.tw/cpbl34/rank_down.asp' }, { label: '全年戰績', url: 'https://zxc22.idv.tw/cpbl34/rank_all.asp' }, { label: '歷年冠軍紀錄', url: 'https://zxc22.idv.tw/champ.asp?clickflag=999' }],
        standings: {
            first: [['統一7-ELEVEn獅',60,34,24,2,'.586'],['味全龍',60,30,27,3,'.526'],['Rakuten Monkeys',60,29,28,3,'.509'],['中信兄弟',60,28,28,4,'.500'],['富邦悍將',60,21,35,4,'.375']],
            second: [['味全龍',60,32,26,2,'.552'],['Rakuten Monkeys',60,31,28,1,'.525'],['中信兄弟',60,29,30,1,'.492'],['統一7-ELEVEn獅',60,28,31,1,'.475'],['富邦悍將',60,27,32,1,'.458']],
            annual: [['味全龍',120,62,53,5,'.539'],['統一7-ELEVEn獅',120,62,55,3,'.530'],['Rakuten Monkeys',120,60,56,4,'.517'],['中信兄弟',120,57,58,5,'.496'],['富邦悍將',120,48,67,5,'.417']]
        }
    },
    2024: {
        overview: '中華職棒35年維持六隊、全年各隊出賽120場。統一獅拿下上半季冠軍，中信兄弟奪下下半季冠軍並以全年第一晉級臺灣大賽，最後由中信兄弟擊敗統一獅奪冠。',
        sources: [{ label: '上半季戰績', url: 'https://zxc22.idv.tw/cpbl35/rank_up.asp' }, { label: '下半季戰績', url: 'https://zxc22.idv.tw/cpbl35/rank_down.asp' }, { label: '全年戰績', url: 'https://zxc22.idv.tw/cpbl35/rank_all.asp' }],
        standings: {
            first: [['統一7-ELEVEn獅',60,37,23,0,'.617'],['樂天桃猿',60,33,27,0,'.550'],['中信兄弟',60,32,28,0,'.533'],['富邦悍將',60,29,31,0,'.483'],['味全龍',60,26,34,0,'.433'],['台鋼雄鷹',60,23,37,0,'.383']],
            second: [['中信兄弟',60,38,22,0,'.633'],['味全龍',60,32,28,0,'.533'],['樂天桃猿',60,29,30,1,'.492'],['統一7-ELEVEn獅',60,29,30,1,'.492'],['台鋼雄鷹',60,26,33,1,'.441'],['富邦悍將',60,24,35,1,'.407']],
            annual: [['中信兄弟',120,70,50,0,'.583'],['統一7-ELEVEn獅',120,66,53,1,'.555'],['樂天桃猿',120,62,57,1,'.521'],['味全龍',120,58,62,0,'.483'],['富邦悍將',120,53,66,1,'.445'],['台鋼雄鷹',120,49,70,1,'.412']]
        }
    },
    2025: {
        overview: '中華職棒36年由六隊進行例行賽。統一獅以36勝24敗封王上半季，中信兄弟以36勝24敗封王下半季並取得全年第一；樂天桃猿從季後挑戰賽突圍，於臺灣大賽擊敗中信兄弟奪得年度總冠軍。',
        sources: [{ label: '上半季戰績', url: 'https://zxc22.idv.tw/cpbl36/rank_up.asp' }, { label: '下半季戰績', url: 'https://zxc22.idv.tw/cpbl36/rank_down.asp' }, { label: '全年戰績', url: 'https://zxc22.idv.tw/cpbl36/rank_all.asp' }],
        standings: {
            first: [['統一7-ELEVEn獅',60,36,24,0,'.600'],['中信兄弟',60,34,26,0,'.567'],['台鋼雄鷹',60,30,30,0,'.500'],['樂天桃猿',60,30,30,0,'.500'],['味全龍',60,29,31,0,'.483'],['富邦悍將',60,21,39,0,'.350']],
            second: [['中信兄弟',60,36,24,0,'.600'],['樂天桃猿',60,32,27,1,'.542'],['統一7-ELEVEn獅',60,30,30,0,'.500'],['台鋼雄鷹',60,29,29,2,'.500'],['味全龍',60,26,33,1,'.441'],['富邦悍將',60,25,35,0,'.417']],
            annual: [['中信兄弟',120,70,50,0,'.583'],['統一7-ELEVEn獅',120,66,54,0,'.550'],['樂天桃猿',120,62,57,1,'.521'],['台鋼雄鷹',120,59,59,2,'.500'],['味全龍',120,55,64,1,'.462'],['富邦悍將',120,46,74,0,'.383']]
        }
    },
    2026: {
        overview: '中華職棒37年六隊各出賽120場。味全龍以39勝21敗奪上半季冠軍，全年67勝排名第一；中信兄弟以36勝24敗拿下下半季冠軍。味全龍在臺灣大賽以4勝2敗擊敗中信兄弟，獲年度總冠軍。',
        sources: [{ label: '上半季戰績', url: 'https://zxc22.idv.tw/rank_up.asp' }, { label: '下半季戰績', url: 'https://zxc22.idv.tw/rank_down.asp' }, { label: '全年戰績', url: 'https://zxc22.idv.tw/rank_all.asp' }],
        standings: {
            first: [['味全龍',60,39,21,0,'.650'],['富邦悍將',60,34,26,0,'.567'],['台鋼雄鷹',60,30,29,1,'.508'],['統一7-ELEVEn獅',60,30,29,1,'.508'],['樂天桃猿',60,24,34,2,'.414'],['中信兄弟',60,20,38,2,'.345']],
            second: [['中信兄弟',60,36,24,0,'.600'],['統一7-ELEVEn獅',60,34,26,0,'.567'],['樂天桃猿',60,33,27,0,'.550'],['味全龍',60,28,32,0,'.467'],['富邦悍將',60,25,35,0,'.417'],['台鋼雄鷹',60,24,36,0,'.400']],
            annual: [['味全龍',120,67,53,0,'.558'],['統一7-ELEVEn獅',120,64,55,1,'.538'],['富邦悍將',120,59,61,0,'.492'],['樂天桃猿',120,57,61,2,'.483'],['中信兄弟',120,56,62,2,'.475'],['台鋼雄鷹',120,54,65,1,'.454']]
        }
    }
};

const historicalYearLeagueArchiveData = {
  "1990": {
    "overview": "中華職棒1 年例行賽由 4 隊參賽；全年第一取得 52 勝、34 敗、4 和，勝率 0.605。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl1/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl1/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl1/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "三商虎",
          45,
          29,
          13,
          3,
          "0.69"
        ],
        [
          "味全龍1",
          45,
          25,
          20,
          0,
          "0.556"
        ],
        [
          "兄弟象",
          45,
          17,
          25,
          3,
          "0.405"
        ],
        [
          "統一獅1",
          45,
          16,
          29,
          0,
          "0.356"
        ]
      ],
      "second": [
        [
          "味全龍1",
          45,
          27,
          14,
          4,
          "0.659"
        ],
        [
          "統一獅1",
          45,
          21,
          20,
          4,
          "0.512"
        ],
        [
          "三商虎",
          45,
          18,
          25,
          2,
          "0.419"
        ],
        [
          "兄弟象",
          45,
          17,
          24,
          4,
          "0.415"
        ]
      ],
      "annual": [
        [
          "味全龍1",
          90,
          52,
          34,
          4,
          "0.605"
        ],
        [
          "三商虎",
          90,
          47,
          38,
          5,
          "0.553"
        ],
        [
          "統一獅1",
          90,
          37,
          49,
          4,
          "0.43"
        ],
        [
          "兄弟象",
          90,
          34,
          49,
          7,
          "0.41"
        ]
      ]
    }
  },
  "1991": {
    "overview": "中華職棒2 年例行賽由 4 隊參賽；全年第一取得 46 勝、34 敗、10 和，勝率 0.575。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl2/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl2/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl2/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "味全龍1",
          45,
          26,
          17,
          2,
          "0.605"
        ],
        [
          "統一獅2",
          45,
          21,
          20,
          4,
          "0.512"
        ],
        [
          "兄弟象",
          45,
          21,
          23,
          1,
          "0.477"
        ],
        [
          "三商虎",
          45,
          16,
          24,
          5,
          "0.4"
        ]
      ],
      "second": [
        [
          "統一獅2",
          45,
          25,
          14,
          6,
          "0.641"
        ],
        [
          "味全龍1",
          45,
          20,
          19,
          6,
          "0.513"
        ],
        [
          "三商虎",
          45,
          19,
          22,
          4,
          "0.463"
        ],
        [
          "兄弟象",
          45,
          17,
          26,
          2,
          "0.395"
        ]
      ],
      "annual": [
        [
          "統一獅2",
          90,
          46,
          34,
          10,
          "0.575"
        ],
        [
          "味全龍1",
          90,
          46,
          36,
          8,
          "0.561"
        ],
        [
          "兄弟象",
          90,
          38,
          49,
          3,
          "0.437"
        ],
        [
          "三商虎",
          90,
          35,
          46,
          9,
          "0.432"
        ]
      ]
    }
  },
  "1992": {
    "overview": "中華職棒3 年例行賽由 4 隊參賽；全年第一取得 51 勝、35 敗、4 和，勝率 0.593。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl3/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl3/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl3/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "兄弟象",
          45,
          27,
          17,
          1,
          "0.614"
        ],
        [
          "味全龍1",
          45,
          23,
          20,
          2,
          "0.535"
        ],
        [
          "統一獅3",
          45,
          20,
          23,
          2,
          "0.465"
        ],
        [
          "三商虎",
          45,
          16,
          26,
          3,
          "0.381"
        ]
      ],
      "second": [
        [
          "兄弟象",
          45,
          24,
          18,
          3,
          "0.571"
        ],
        [
          "統一獅3",
          45,
          21,
          22,
          2,
          "0.488"
        ],
        [
          "三商虎",
          45,
          20,
          21,
          4,
          "0.488"
        ],
        [
          "味全龍1",
          45,
          18,
          22,
          5,
          "0.45"
        ]
      ],
      "annual": [
        [
          "兄弟象",
          90,
          51,
          35,
          4,
          "0.593"
        ],
        [
          "味全龍1",
          90,
          41,
          42,
          7,
          "0.494"
        ],
        [
          "統一獅3",
          90,
          41,
          45,
          4,
          "0.477"
        ],
        [
          "三商虎",
          90,
          36,
          47,
          7,
          "0.434"
        ]
      ]
    }
  },
  "1993": {
    "overview": "中華職棒4 年例行賽由 6 隊參賽；全年第一取得 54 勝、34 敗、2 和，勝率 0.614。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl4/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl4/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl4/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "兄弟象",
          45,
          28,
          16,
          1,
          "0.636"
        ],
        [
          "味全龍1",
          45,
          26,
          19,
          0,
          "0.578"
        ],
        [
          "統一獅3",
          45,
          25,
          20,
          0,
          "0.556"
        ],
        [
          "俊國熊",
          45,
          21,
          24,
          0,
          "0.467"
        ],
        [
          "時報鷹",
          45,
          18,
          26,
          1,
          "0.409"
        ],
        [
          "三商虎",
          45,
          16,
          29,
          0,
          "0.356"
        ]
      ],
      "second": [
        [
          "統一獅3",
          45,
          29,
          14,
          2,
          "0.674"
        ],
        [
          "兄弟象",
          45,
          24,
          20,
          1,
          "0.545"
        ],
        [
          "味全龍1",
          45,
          22,
          21,
          2,
          "0.512"
        ],
        [
          "俊國熊",
          45,
          19,
          23,
          3,
          "0.452"
        ],
        [
          "時報鷹",
          45,
          18,
          26,
          1,
          "0.409"
        ],
        [
          "三商虎",
          45,
          17,
          25,
          3,
          "0.405"
        ]
      ],
      "annual": [
        [
          "統一獅3",
          90,
          54,
          34,
          2,
          "0.614"
        ],
        [
          "兄弟象",
          90,
          52,
          36,
          2,
          "0.591"
        ],
        [
          "味全龍1",
          90,
          48,
          40,
          2,
          "0.545"
        ],
        [
          "俊國熊",
          90,
          40,
          47,
          3,
          "0.46"
        ],
        [
          "時報鷹",
          90,
          36,
          52,
          2,
          "0.409"
        ],
        [
          "三商虎",
          90,
          33,
          54,
          3,
          "0.379"
        ]
      ]
    }
  },
  "1994": {
    "overview": "中華職棒5 年例行賽由 6 隊參賽；全年第一取得 64 勝、24 敗、2 和，勝率 0.727。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl5/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl5/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl5/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "兄弟象",
          45,
          34,
          11,
          0,
          "0.756"
        ],
        [
          "三商虎",
          45,
          23,
          20,
          2,
          "0.535"
        ],
        [
          "統一獅3",
          45,
          22,
          20,
          3,
          "0.524"
        ],
        [
          "時報鷹",
          45,
          22,
          23,
          0,
          "0.489"
        ],
        [
          "味全龍1",
          45,
          17,
          27,
          1,
          "0.386"
        ],
        [
          "俊國熊",
          45,
          14,
          31,
          0,
          "0.311"
        ]
      ],
      "second": [
        [
          "兄弟象",
          45,
          30,
          13,
          2,
          "0.698"
        ],
        [
          "統一獅3",
          45,
          26,
          18,
          1,
          "0.591"
        ],
        [
          "時報鷹",
          45,
          24,
          20,
          1,
          "0.545"
        ],
        [
          "味全龍1",
          45,
          19,
          25,
          1,
          "0.432"
        ],
        [
          "三商虎",
          45,
          17,
          27,
          1,
          "0.386"
        ],
        [
          "俊國熊",
          45,
          15,
          28,
          2,
          "0.349"
        ]
      ],
      "annual": [
        [
          "兄弟象",
          90,
          64,
          24,
          2,
          "0.727"
        ],
        [
          "統一獅3",
          90,
          48,
          38,
          4,
          "0.558"
        ],
        [
          "時報鷹",
          90,
          46,
          43,
          1,
          "0.517"
        ],
        [
          "三商虎",
          90,
          40,
          47,
          3,
          "0.46"
        ],
        [
          "味全龍1",
          90,
          36,
          52,
          2,
          "0.409"
        ],
        [
          "俊國熊",
          90,
          29,
          59,
          2,
          "0.33"
        ]
      ]
    }
  },
  "1995": {
    "overview": "中華職棒6 年例行賽由 6 隊參賽；全年第一取得 62 勝、36 敗、2 和，勝率 0.633。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl6/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl6/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl6/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "統一獅3",
          50,
          32,
          17,
          1,
          "0.653"
        ],
        [
          "時報鷹",
          50,
          26,
          24,
          0,
          "0.52"
        ],
        [
          "味全龍1",
          50,
          25,
          25,
          0,
          "0.5"
        ],
        [
          "兄弟象",
          50,
          25,
          25,
          0,
          "0.5"
        ],
        [
          "三商虎",
          50,
          22,
          28,
          0,
          "0.44"
        ],
        [
          "俊國熊",
          50,
          19,
          30,
          1,
          "0.388"
        ]
      ],
      "second": [
        [
          "統一獅3",
          50,
          30,
          19,
          1,
          "0.612"
        ],
        [
          "三商虎",
          50,
          27,
          20,
          3,
          "0.574"
        ],
        [
          "時報鷹",
          50,
          23,
          26,
          1,
          "0.469"
        ],
        [
          "兄弟象",
          50,
          23,
          26,
          1,
          "0.469"
        ],
        [
          "味全龍1",
          50,
          22,
          27,
          1,
          "0.449"
        ],
        [
          "俊國熊",
          50,
          21,
          28,
          1,
          "0.429"
        ]
      ],
      "annual": [
        [
          "統一獅3",
          100,
          62,
          36,
          2,
          "0.633"
        ],
        [
          "三商虎",
          100,
          49,
          48,
          3,
          "0.505"
        ],
        [
          "時報鷹",
          100,
          49,
          50,
          1,
          "0.495"
        ],
        [
          "兄弟象",
          100,
          48,
          51,
          1,
          "0.485"
        ],
        [
          "味全龍1",
          100,
          47,
          52,
          1,
          "0.475"
        ],
        [
          "俊國熊",
          100,
          40,
          58,
          2,
          "0.408"
        ]
      ]
    }
  },
  "1996": {
    "overview": "中華職棒7 年例行賽由 6 隊參賽；全年第一取得 60 勝、37 敗、3 和，勝率 0.619。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl7/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl7/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl7/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "統一獅3",
          50,
          34,
          15,
          1,
          "0.694"
        ],
        [
          "兄弟象",
          50,
          29,
          19,
          2,
          "0.604"
        ],
        [
          "時報鷹",
          50,
          28,
          20,
          2,
          "0.583"
        ],
        [
          "味全龍1",
          50,
          25,
          23,
          2,
          "0.521"
        ],
        [
          "三商虎",
          50,
          16,
          33,
          1,
          "0.327"
        ],
        [
          "興農熊",
          50,
          14,
          36,
          0,
          "0.28"
        ]
      ],
      "second": [
        [
          "味全龍1",
          50,
          30,
          20,
          0,
          "0.6"
        ],
        [
          "時報鷹",
          50,
          28,
          21,
          1,
          "0.571"
        ],
        [
          "統一獅3",
          50,
          26,
          22,
          2,
          "0.542"
        ],
        [
          "三商虎",
          50,
          23,
          24,
          3,
          "0.489"
        ],
        [
          "兄弟象",
          50,
          23,
          24,
          3,
          "0.489"
        ],
        [
          "興農熊",
          50,
          14,
          33,
          3,
          "0.298"
        ]
      ],
      "annual": [
        [
          "統一獅3",
          100,
          60,
          37,
          3,
          "0.619"
        ],
        [
          "時報鷹",
          100,
          56,
          41,
          3,
          "0.577"
        ],
        [
          "味全龍1",
          100,
          55,
          43,
          2,
          "0.561"
        ],
        [
          "兄弟象",
          100,
          52,
          43,
          5,
          "0.547"
        ],
        [
          "三商虎",
          100,
          39,
          57,
          4,
          "0.406"
        ],
        [
          "興農熊",
          100,
          28,
          69,
          3,
          "0.289"
        ]
      ]
    }
  },
  "1997": {
    "overview": "中華職棒8 年例行賽由 7 隊參賽；全年第一取得 58 勝、31 敗、7 和，勝率 0.652。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl8/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl8/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl8/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "時報鷹",
          48,
          30,
          16,
          2,
          "0.652"
        ],
        [
          "統一獅3",
          48,
          28,
          16,
          4,
          "0.636"
        ],
        [
          "兄弟象",
          48,
          23,
          20,
          5,
          "0.535"
        ],
        [
          "三商虎",
          48,
          22,
          22,
          4,
          "0.5"
        ],
        [
          "興農牛",
          48,
          20,
          26,
          2,
          "0.435"
        ],
        [
          "和信鯨",
          48,
          20,
          27,
          1,
          "0.426"
        ],
        [
          "味全龍1",
          48,
          15,
          31,
          2,
          "0.326"
        ]
      ],
      "second": [
        [
          "味全龍1",
          48,
          31,
          15,
          2,
          "0.674"
        ],
        [
          "統一獅3",
          48,
          30,
          15,
          3,
          "0.667"
        ],
        [
          "興農牛",
          48,
          25,
          22,
          1,
          "0.532"
        ],
        [
          "三商虎",
          48,
          24,
          22,
          2,
          "0.522"
        ],
        [
          "兄弟象",
          48,
          22,
          24,
          2,
          "0.478"
        ],
        [
          "和信鯨",
          48,
          19,
          29,
          0,
          "0.396"
        ],
        [
          "時報鷹",
          48,
          11,
          35,
          2,
          "0.239"
        ]
      ],
      "annual": [
        [
          "統一獅3",
          96,
          58,
          31,
          7,
          "0.652"
        ],
        [
          "三商虎",
          96,
          46,
          44,
          6,
          "0.511"
        ],
        [
          "兄弟象",
          96,
          45,
          44,
          7,
          "0.501"
        ],
        [
          "味全龍1",
          96,
          46,
          46,
          4,
          "0.5"
        ],
        [
          "興農牛",
          96,
          45,
          48,
          3,
          "0.484"
        ],
        [
          "時報鷹",
          96,
          41,
          51,
          4,
          "0.446"
        ],
        [
          "和信鯨",
          96,
          39,
          56,
          1,
          "0.411"
        ]
      ]
    }
  },
  "1998": {
    "overview": "中華職棒9 年採單一球季賽制，共列出 6 隊戰績；例行賽全年第一取得 58 勝、45 敗、2 和，勝率 0.563。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl9/rank_all.asp",
        "label": "單一球季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "singleSeason": [
        [
          "興農牛",
          105,
          58,
          45,
          2,
          "0.563"
        ],
        [
          "統一獅3",
          105,
          57,
          45,
          3,
          "0.559"
        ],
        [
          "味全龍1",
          105,
          56,
          48,
          1,
          "0.538"
        ],
        [
          "和信鯨",
          105,
          54,
          49,
          2,
          "0.524"
        ],
        [
          "三商虎",
          105,
          50,
          52,
          3,
          "0.49"
        ],
        [
          "兄弟象",
          105,
          33,
          69,
          3,
          "0.324"
        ]
      ]
    }
  },
  "1999": {
    "overview": "中華職棒10 年採單一球季賽制，共列出 6 隊戰績；例行賽全年第一取得 60 勝、29 敗、2 和，勝率 0.674。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl10/rank_all.asp",
        "label": "單一球季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "singleSeason": [
        [
          "和信鯨",
          91,
          60,
          29,
          2,
          "0.674"
        ],
        [
          "統一獅3",
          93,
          56,
          37,
          0,
          "0.602"
        ],
        [
          "味全龍1",
          92,
          49,
          39,
          4,
          "0.557"
        ],
        [
          "三商虎",
          93,
          39,
          52,
          2,
          "0.429"
        ],
        [
          "兄弟象",
          94,
          37,
          53,
          4,
          "0.411"
        ],
        [
          "興農牛",
          93,
          30,
          61,
          2,
          "0.33"
        ]
      ]
    }
  },
  "2000": {
    "overview": "中華職棒11 年例行賽由 4 隊參賽；全年第一取得 51 勝、38 敗、1 和，勝率 0.573。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl11/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl11/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl11/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "興農牛",
          45,
          27,
          17,
          1,
          "0.614"
        ],
        [
          "和信鯨",
          45,
          21,
          21,
          3,
          "0.5"
        ],
        [
          "兄弟象",
          45,
          21,
          21,
          3,
          "0.5"
        ],
        [
          "統一獅3",
          45,
          17,
          27,
          1,
          "0.386"
        ]
      ],
      "second": [
        [
          "統一獅3",
          45,
          27,
          16,
          2,
          "0.628"
        ],
        [
          "興農牛",
          45,
          24,
          21,
          0,
          "0.533"
        ],
        [
          "和信鯨",
          45,
          20,
          24,
          1,
          "0.455"
        ],
        [
          "兄弟象",
          45,
          17,
          27,
          1,
          "0.386"
        ]
      ],
      "annual": [
        [
          "興農牛",
          90,
          51,
          38,
          1,
          "0.573"
        ],
        [
          "統一獅3",
          90,
          44,
          43,
          3,
          "0.506"
        ],
        [
          "和信鯨",
          90,
          41,
          45,
          4,
          "0.477"
        ],
        [
          "兄弟象",
          90,
          38,
          48,
          4,
          "0.442"
        ]
      ]
    }
  },
  "2001": {
    "overview": "中華職棒12 年例行賽由 4 隊參賽；全年第一取得 49 勝、37 敗、4 和，勝率 0.57。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl12/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl12/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl12/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "統一獅3",
          45,
          27,
          14,
          4,
          "0.659"
        ],
        [
          "和信鯨",
          45,
          23,
          22,
          0,
          "0.511"
        ],
        [
          "兄弟象",
          45,
          17,
          23,
          5,
          "0.425"
        ],
        [
          "興農牛",
          45,
          17,
          25,
          3,
          "0.405"
        ]
      ],
      "second": [
        [
          "兄弟象",
          45,
          27,
          16,
          2,
          "0.628"
        ],
        [
          "和信鯨",
          45,
          22,
          23,
          0,
          "0.489"
        ],
        [
          "統一獅3",
          45,
          22,
          23,
          0,
          "0.489"
        ],
        [
          "興農牛",
          45,
          17,
          26,
          2,
          "0.395"
        ]
      ],
      "annual": [
        [
          "統一獅3",
          90,
          49,
          37,
          4,
          "0.57"
        ],
        [
          "兄弟象",
          90,
          44,
          39,
          7,
          "0.53"
        ],
        [
          "和信鯨",
          90,
          45,
          45,
          0,
          "0.5"
        ],
        [
          "興農牛",
          90,
          34,
          51,
          5,
          "0.4"
        ]
      ]
    }
  },
  "2002": {
    "overview": "中華職棒13 年例行賽由 4 隊參賽；全年第一取得 53 勝、33 敗、4 和，勝率 0.616。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl13/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl13/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl13/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "兄弟象",
          45,
          25,
          17,
          3,
          "0.595"
        ],
        [
          "中信鯨",
          45,
          21,
          21,
          3,
          "0.5"
        ],
        [
          "興農牛",
          45,
          21,
          23,
          1,
          "0.477"
        ],
        [
          "統一獅3",
          45,
          18,
          24,
          3,
          "0.429"
        ]
      ],
      "second": [
        [
          "兄弟象",
          45,
          28,
          16,
          1,
          "0.636"
        ],
        [
          "中信鯨",
          45,
          24,
          21,
          0,
          "0.533"
        ],
        [
          "興農牛",
          45,
          23,
          22,
          0,
          "0.511"
        ],
        [
          "統一獅3",
          45,
          14,
          30,
          1,
          "0.318"
        ]
      ],
      "annual": [
        [
          "兄弟象",
          90,
          53,
          33,
          4,
          "0.616"
        ],
        [
          "中信鯨",
          90,
          45,
          42,
          3,
          "0.517"
        ],
        [
          "興農牛",
          90,
          44,
          45,
          1,
          "0.494"
        ],
        [
          "統一獅3",
          90,
          32,
          54,
          4,
          "0.372"
        ]
      ]
    }
  },
  "2003": {
    "overview": "中華職棒14 年例行賽由 6 隊參賽；全年第一取得 63 勝、31 敗、6 和，勝率 0.67。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl14/rank_up.htm",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl14/rank_down.htm",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl14/rank_all.htm",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "興農牛",
          50,
          34,
          15,
          1,
          "0.694"
        ],
        [
          "中信鯨",
          50,
          26,
          19,
          5,
          "0.578"
        ],
        [
          "兄弟象",
          50,
          27,
          20,
          3,
          "0.574"
        ],
        [
          "統一獅3",
          50,
          24,
          23,
          3,
          "0.511"
        ],
        [
          "誠泰太陽",
          50,
          21,
          27,
          2,
          "0.438"
        ],
        [
          "第一金剛",
          50,
          9,
          37,
          4,
          "0.196"
        ]
      ],
      "second": [
        [
          "兄弟象",
          50,
          36,
          11,
          3,
          "0.766"
        ],
        [
          "統一獅3",
          50,
          30,
          16,
          4,
          "0.652"
        ],
        [
          "興農牛",
          50,
          28,
          17,
          5,
          "0.622"
        ],
        [
          "中信鯨",
          50,
          25,
          24,
          1,
          "0.51"
        ],
        [
          "第一金剛",
          50,
          11,
          34,
          5,
          "0.244"
        ],
        [
          "誠泰太陽",
          50,
          9,
          37,
          4,
          "0.196"
        ]
      ],
      "annual": [
        [
          "兄弟象",
          100,
          63,
          31,
          6,
          "0.67"
        ],
        [
          "興農牛",
          100,
          62,
          32,
          6,
          "0.66"
        ],
        [
          "統一獅3",
          100,
          54,
          39,
          7,
          "0.581"
        ],
        [
          "中信鯨",
          100,
          51,
          43,
          6,
          "0.543"
        ],
        [
          "誠泰太陽",
          100,
          30,
          64,
          6,
          "0.319"
        ],
        [
          "第一金剛",
          100,
          20,
          71,
          9,
          "0.22"
        ]
      ]
    }
  },
  "2004": {
    "overview": "中華職棒15 年例行賽由 6 隊參賽；全年第一取得 54 勝、40 敗、6 和，勝率 0.574。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl15/rank_up.htm",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl15/rank_down.htm",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl15/rank_all.htm",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "統一獅3",
          50,
          28,
          18,
          4,
          "0.609"
        ],
        [
          "興農牛",
          50,
          25,
          22,
          3,
          "0.532"
        ],
        [
          "兄弟象",
          50,
          26,
          23,
          1,
          "0.531"
        ],
        [
          "誠泰Cobras",
          50,
          26,
          24,
          0,
          "0.52"
        ],
        [
          "中信鯨",
          50,
          21,
          27,
          2,
          "0.438"
        ],
        [
          "LaNew 熊",
          50,
          18,
          30,
          2,
          "0.375"
        ]
      ],
      "second": [
        [
          "興農牛",
          50,
          27,
          21,
          2,
          "0.562"
        ],
        [
          "兄弟象",
          50,
          28,
          22,
          0,
          "0.56"
        ],
        [
          "統一獅3",
          50,
          26,
          22,
          2,
          "0.542"
        ],
        [
          "中信鯨",
          50,
          24,
          23,
          3,
          "0.511"
        ],
        [
          "LaNew 熊",
          50,
          22,
          26,
          2,
          "0.458"
        ],
        [
          "誠泰Cobras",
          50,
          17,
          30,
          3,
          "0.362"
        ]
      ],
      "annual": [
        [
          "統一獅3",
          100,
          54,
          40,
          6,
          "0.574"
        ],
        [
          "興農牛",
          100,
          52,
          43,
          5,
          "0.547"
        ],
        [
          "兄弟象",
          100,
          54,
          45,
          1,
          "0.545"
        ],
        [
          "中信鯨",
          100,
          45,
          50,
          5,
          "0.474"
        ],
        [
          "誠泰Cobras",
          100,
          43,
          54,
          3,
          "0.443"
        ],
        [
          "LaNew 熊",
          100,
          40,
          56,
          4,
          "0.417"
        ]
      ]
    }
  },
  "2005": {
    "overview": "中華職棒16 年例行賽由 6 隊參賽；全年第一取得 53 勝、41 敗、6 和，勝率 0.564。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl16/rank_up.htm",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl16/rank_down.htm",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl16/rank_all.htm",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "誠泰Cobras",
          50,
          28,
          20,
          2,
          "0.583"
        ],
        [
          "興農牛",
          50,
          28,
          20,
          2,
          "0.583"
        ],
        [
          "兄弟象",
          50,
          25,
          23,
          2,
          "0.521"
        ],
        [
          "中信鯨",
          50,
          24,
          24,
          2,
          "0.5"
        ],
        [
          "統一獅4",
          50,
          24,
          26,
          0,
          "0.48"
        ],
        [
          "LaNew 熊",
          50,
          16,
          32,
          2,
          "0.333"
        ]
      ],
      "second": [
        [
          "興農牛",
          50,
          25,
          21,
          4,
          "0.543"
        ],
        [
          "LaNew 熊",
          50,
          26,
          23,
          1,
          "0.531"
        ],
        [
          "統一獅4",
          50,
          24,
          23,
          3,
          "0.511"
        ],
        [
          "中信鯨",
          50,
          23,
          25,
          2,
          "0.479"
        ],
        [
          "誠泰Cobras",
          50,
          21,
          23,
          6,
          "0.477"
        ],
        [
          "兄弟象",
          50,
          22,
          26,
          2,
          "0.458"
        ]
      ],
      "annual": [
        [
          "興農牛",
          100,
          53,
          41,
          6,
          "0.564"
        ],
        [
          "誠泰Cobras",
          100,
          49,
          43,
          8,
          "0.533"
        ],
        [
          "統一獅4",
          100,
          48,
          49,
          3,
          "0.495"
        ],
        [
          "中信鯨",
          100,
          47,
          49,
          4,
          "0.49"
        ],
        [
          "兄弟象",
          100,
          47,
          49,
          4,
          "0.49"
        ],
        [
          "LaNew 熊",
          100,
          42,
          55,
          3,
          "0.433"
        ]
      ]
    }
  },
  "2006": {
    "overview": "中華職棒17 年例行賽由 6 隊參賽；全年第一取得 62 勝、34 敗、4 和，勝率 0.646。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl17/rank_up.htm",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl17/rank_down.htm",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl17/rank_all.htm",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "LaNew 熊",
          50,
          30,
          19,
          1,
          "0.612"
        ],
        [
          "統一獅4",
          50,
          28,
          18,
          4,
          "0.609"
        ],
        [
          "興農牛",
          50,
          25,
          23,
          2,
          "0.521"
        ],
        [
          "誠泰Cobras",
          50,
          24,
          24,
          2,
          "0.500"
        ],
        [
          "兄弟象",
          50,
          20,
          29,
          1,
          "0.408"
        ],
        [
          "中信鯨",
          50,
          17,
          31,
          2,
          "0.354"
        ]
      ],
      "second": [
        [
          "LaNew 熊",
          50,
          32,
          15,
          3,
          "0.681"
        ],
        [
          "中信鯨",
          50,
          25,
          20,
          5,
          "0.556"
        ],
        [
          "誠泰Cobras",
          50,
          24,
          26,
          0,
          "0.48"
        ],
        [
          "興農牛",
          50,
          23,
          26,
          1,
          "0.469"
        ],
        [
          "統一獅4",
          50,
          20,
          27,
          3,
          "0.426"
        ],
        [
          "兄弟象",
          50,
          20,
          30,
          0,
          "0.4"
        ]
      ],
      "annual": [
        [
          "LaNew 熊",
          100,
          62,
          34,
          4,
          "0.646"
        ],
        [
          "統一獅4",
          100,
          48,
          45,
          7,
          "0.516"
        ],
        [
          "興農牛",
          100,
          48,
          49,
          3,
          "0.495"
        ],
        [
          "誠泰Cobras",
          100,
          48,
          50,
          2,
          "0.49"
        ],
        [
          "中信鯨",
          100,
          42,
          51,
          7,
          "0.452"
        ],
        [
          "兄弟象",
          100,
          40,
          59,
          1,
          "0.404"
        ]
      ]
    }
  },
  "2007": {
    "overview": "中華職棒18 年例行賽由 6 隊參賽；全年第一取得 58 勝、41 敗、1 和，勝率 0.586。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl18/rank_up.htm",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl18/rank_down.htm",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl18/rank_all.htm",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "誠泰Cobras",
          50,
          28,
          21,
          1,
          "0.571"
        ],
        [
          "統一獅5",
          50,
          27,
          23,
          0,
          "0.54"
        ],
        [
          "LaNew 熊",
          50,
          26,
          24,
          0,
          "0.52"
        ],
        [
          "興農牛",
          50,
          24,
          25,
          1,
          "0.49"
        ],
        [
          "兄弟象",
          50,
          24,
          25,
          1,
          "0.49"
        ],
        [
          "中信鯨",
          50,
          19,
          30,
          1,
          "0.388"
        ]
      ],
      "second": [
        [
          "LaNew 熊",
          50,
          32,
          18,
          0,
          "0.64"
        ],
        [
          "統一獅5",
          50,
          31,
          18,
          1,
          "0.633"
        ],
        [
          "中信鯨",
          50,
          27,
          22,
          1,
          "0.551"
        ],
        [
          "兄弟象",
          50,
          25,
          25,
          0,
          "0.5"
        ],
        [
          "興農牛",
          50,
          18,
          32,
          0,
          "0.36"
        ],
        [
          "誠泰Cobras",
          50,
          16,
          34,
          0,
          "0.32"
        ]
      ],
      "annual": [
        [
          "統一獅5",
          100,
          58,
          41,
          1,
          "0.586"
        ],
        [
          "LaNew 熊",
          100,
          58,
          42,
          0,
          "0.58"
        ],
        [
          "兄弟象",
          100,
          49,
          50,
          1,
          "0.495"
        ],
        [
          "中信鯨",
          100,
          46,
          52,
          2,
          "0.469"
        ],
        [
          "誠泰Cobras",
          100,
          44,
          55,
          1,
          "0.444"
        ],
        [
          "興農牛",
          100,
          42,
          57,
          1,
          "0.424"
        ]
      ]
    }
  },
  "2008": {
    "overview": "中華職棒19 年例行賽由 6 隊參賽；全年第一取得 67 勝、33 敗、0 和，勝率 0.67。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl19/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl19/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl19/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "統一獅5",
          50,
          34,
          16,
          0,
          "0.68"
        ],
        [
          "LaNew 熊",
          50,
          28,
          19,
          3,
          "0.596"
        ],
        [
          "兄弟象",
          50,
          24,
          23,
          3,
          "0.511"
        ],
        [
          "米迪亞暴龍",
          50,
          21,
          28,
          1,
          "0.429"
        ],
        [
          "中信鯨",
          50,
          20,
          30,
          0,
          "0.4"
        ],
        [
          "興農牛",
          50,
          19,
          30,
          1,
          "0.388"
        ]
      ],
      "second": [
        [
          "LaNew 熊",
          50,
          33,
          16,
          1,
          "0.673"
        ],
        [
          "統一獅5",
          50,
          33,
          17,
          0,
          "0.66"
        ],
        [
          "兄弟象",
          48,
          28,
          19,
          1,
          "0.596"
        ],
        [
          "中信鯨",
          50,
          19,
          31,
          0,
          "0.38"
        ],
        [
          "興農牛",
          50,
          18,
          32,
          0,
          "0.36"
        ],
        [
          "米迪亞暴龍",
          48,
          16,
          32,
          0,
          "0.333"
        ]
      ],
      "annual": [
        [
          "統一獅5",
          100,
          67,
          33,
          0,
          "0.67"
        ],
        [
          "LaNew 熊",
          100,
          61,
          35,
          4,
          "0.635"
        ],
        [
          "兄弟象",
          98,
          52,
          42,
          4,
          "0.553"
        ],
        [
          "中信鯨",
          100,
          39,
          61,
          0,
          "0.39"
        ],
        [
          "米迪亞暴龍",
          98,
          37,
          60,
          1,
          "0.381"
        ],
        [
          "興農牛",
          100,
          37,
          62,
          1,
          "0.374"
        ]
      ]
    }
  },
  "2009": {
    "overview": "中華職棒20 年例行賽由 4 隊參賽；全年第一取得 63 勝、54 敗、3 和，勝率 0.538。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl20/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl20/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl20/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "統一獅6",
          60,
          34,
          24,
          2,
          "0.586"
        ],
        [
          "LaNew 熊",
          60,
          33,
          26,
          1,
          "0.559"
        ],
        [
          "興農牛",
          60,
          29,
          29,
          2,
          "0.5"
        ],
        [
          "兄弟象",
          60,
          21,
          38,
          1,
          "0.356"
        ]
      ],
      "second": [
        [
          "兄弟象",
          60,
          33,
          25,
          2,
          "0.569"
        ],
        [
          "統一獅6",
          60,
          29,
          30,
          1,
          "0.492"
        ],
        [
          "興農牛",
          60,
          28,
          31,
          1,
          "0.475"
        ],
        [
          "LaNew 熊",
          60,
          28,
          32,
          0,
          "0.467"
        ]
      ],
      "annual": [
        [
          "統一獅6",
          120,
          63,
          54,
          3,
          "0.538"
        ],
        [
          "LaNew 熊",
          120,
          61,
          58,
          1,
          "0.513"
        ],
        [
          "興農牛",
          120,
          57,
          60,
          3,
          "0.487"
        ],
        [
          "兄弟象",
          120,
          54,
          63,
          3,
          "0.462"
        ]
      ]
    }
  },
  "2010": {
    "overview": "中華職棒21 年例行賽由 4 隊參賽；全年第一取得 65 勝、53 敗、2 和，勝率 0.551。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl21/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl21/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl21/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "興農牛",
          60,
          36,
          23,
          1,
          "0.61"
        ],
        [
          "LaNew 熊",
          60,
          31,
          27,
          2,
          "0.534"
        ],
        [
          "兄弟象",
          60,
          25,
          33,
          2,
          "0.431"
        ],
        [
          "統一獅6",
          60,
          25,
          34,
          1,
          "0.424"
        ]
      ],
      "second": [
        [
          "兄弟象",
          60,
          36,
          24,
          0,
          "0.6"
        ],
        [
          "統一獅6",
          60,
          29,
          29,
          2,
          "0.5"
        ],
        [
          "興農牛",
          60,
          29,
          30,
          1,
          "0.492"
        ],
        [
          "LaNew 熊",
          60,
          24,
          35,
          1,
          "0.407"
        ]
      ],
      "annual": [
        [
          "興農牛",
          120,
          65,
          53,
          2,
          "0.551"
        ],
        [
          "兄弟象",
          120,
          61,
          57,
          2,
          "0.517"
        ],
        [
          "LaNew 熊",
          120,
          55,
          62,
          3,
          "0.47"
        ],
        [
          "統一獅6",
          120,
          54,
          63,
          3,
          "0.462"
        ]
      ]
    }
  },
  "2011": {
    "overview": "中華職棒22 年例行賽由 4 隊參賽；全年第一取得 66 勝、52 敗、2 和，勝率 0.559。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl22/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl22/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl22/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "統一獅6",
          60,
          37,
          22,
          1,
          "0.627"
        ],
        [
          "Lamigo桃猿",
          60,
          33,
          26,
          1,
          "0.559"
        ],
        [
          "兄弟象",
          60,
          28,
          32,
          0,
          "0.467"
        ],
        [
          "興農牛",
          60,
          20,
          38,
          2,
          "0.345"
        ]
      ],
      "second": [
        [
          "Lamigo桃猿",
          60,
          33,
          26,
          1,
          "0.559"
        ],
        [
          "兄弟象",
          60,
          32,
          28,
          0,
          "0.533"
        ],
        [
          "統一獅6",
          60,
          28,
          30,
          2,
          "0.483"
        ],
        [
          "興農牛",
          60,
          25,
          34,
          1,
          "0.424"
        ]
      ],
      "annual": [
        [
          "Lamigo桃猿",
          120,
          66,
          52,
          2,
          "0.559"
        ],
        [
          "統一獅6",
          120,
          65,
          52,
          3,
          "0.556"
        ],
        [
          "兄弟象",
          120,
          60,
          60,
          0,
          "0.5"
        ],
        [
          "興農牛",
          120,
          45,
          72,
          3,
          "0.385"
        ]
      ]
    }
  },
  "2012": {
    "overview": "中華職棒23 年例行賽由 4 隊參賽；全年第一取得 71 勝、48 敗、1 和，勝率 0.597。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl23/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl23/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl23/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "統一獅6",
          60,
          41,
          19,
          0,
          "0.683"
        ],
        [
          "Lamigo桃猿",
          60,
          28,
          30,
          2,
          "0.483"
        ],
        [
          "兄弟象",
          60,
          26,
          33,
          1,
          "0.441"
        ],
        [
          "興農牛",
          60,
          22,
          35,
          3,
          "0.386"
        ]
      ],
      "second": [
        [
          "Lamigo桃猿",
          60,
          38,
          22,
          0,
          "0.633"
        ],
        [
          "兄弟象",
          60,
          34,
          25,
          1,
          "0.576"
        ],
        [
          "統一獅6",
          60,
          30,
          29,
          1,
          "0.508"
        ],
        [
          "興農牛",
          60,
          16,
          42,
          2,
          "0.276"
        ]
      ],
      "annual": [
        [
          "統一獅6",
          120,
          71,
          48,
          1,
          "0.597"
        ],
        [
          "Lamigo桃猿",
          120,
          66,
          52,
          2,
          "0.559"
        ],
        [
          "兄弟象",
          120,
          60,
          58,
          2,
          "0.508"
        ],
        [
          "興農牛",
          120,
          38,
          77,
          5,
          "0.33"
        ]
      ]
    }
  },
  "2013": {
    "overview": "中華職棒24 年例行賽由 4 隊參賽；全年第一取得 62 勝、55 敗、3 和，勝率 0.53。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl24/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl24/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl24/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "義大犀牛",
          60,
          35,
          24,
          1,
          "0.593"
        ],
        [
          "統一獅6",
          60,
          30,
          29,
          1,
          "0.508"
        ],
        [
          "Lamigo桃猿",
          60,
          28,
          32,
          0,
          "0.467"
        ],
        [
          "兄弟象",
          60,
          26,
          34,
          0,
          "0.433"
        ]
      ],
      "second": [
        [
          "統一獅6",
          60,
          32,
          26,
          2,
          "0.552"
        ],
        [
          "Lamigo桃猿",
          60,
          30,
          28,
          2,
          "0.517"
        ],
        [
          "兄弟象",
          60,
          29,
          31,
          0,
          "0.483"
        ],
        [
          "義大犀牛",
          60,
          27,
          33,
          0,
          "0.45"
        ]
      ],
      "annual": [
        [
          "統一獅6",
          120,
          62,
          55,
          3,
          "0.53"
        ],
        [
          "義大犀牛",
          120,
          62,
          57,
          1,
          "0.521"
        ],
        [
          "Lamigo桃猿",
          120,
          58,
          60,
          2,
          "0.492"
        ],
        [
          "兄弟象",
          120,
          55,
          65,
          0,
          "0.458"
        ]
      ]
    }
  },
  "2014": {
    "overview": "中華職棒25 年例行賽由 4 隊參賽；全年第一取得 66 勝、51 敗、3 和，勝率 0.564。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl25/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl25/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl25/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "Lamigo桃猿",
          60,
          39,
          19,
          2,
          "0.672"
        ],
        [
          "統一獅6",
          60,
          32,
          24,
          4,
          "0.571"
        ],
        [
          "義大犀牛",
          60,
          26,
          33,
          1,
          "0.441"
        ],
        [
          "中信兄弟",
          60,
          19,
          40,
          1,
          "0.322"
        ]
      ],
      "second": [
        [
          "中信兄弟",
          60,
          31,
          26,
          3,
          "0.544"
        ],
        [
          "義大犀牛",
          60,
          32,
          27,
          1,
          "0.542"
        ],
        [
          "Lamigo桃猿",
          60,
          27,
          32,
          1,
          "0.458"
        ],
        [
          "統一獅6",
          60,
          26,
          31,
          3,
          "0.456"
        ]
      ],
      "annual": [
        [
          "Lamigo桃猿",
          120,
          66,
          51,
          3,
          "0.564"
        ],
        [
          "統一獅6",
          120,
          58,
          55,
          7,
          "0.513"
        ],
        [
          "義大犀牛",
          120,
          58,
          60,
          2,
          "0.492"
        ],
        [
          "中信兄弟",
          120,
          50,
          66,
          4,
          "0.431"
        ]
      ]
    }
  },
  "2015": {
    "overview": "中華職棒26 年例行賽由 4 隊參賽；全年第一取得 68 勝、52 敗、0 和，勝率 0.567。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl26/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl26/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl26/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "Lamigo桃猿",
          60,
          37,
          23,
          0,
          "0.617"
        ],
        [
          "義大犀牛",
          60,
          29,
          30,
          1,
          "0.492"
        ],
        [
          "中信兄弟",
          60,
          27,
          33,
          0,
          "0.45"
        ],
        [
          "統一獅6",
          60,
          26,
          33,
          1,
          "0.441"
        ]
      ],
      "second": [
        [
          "中信兄弟",
          60,
          36,
          23,
          1,
          "0.61"
        ],
        [
          "Lamigo桃猿",
          60,
          31,
          29,
          0,
          "0.517"
        ],
        [
          "義大犀牛",
          60,
          29,
          31,
          0,
          "0.483"
        ],
        [
          "統一獅6",
          60,
          23,
          36,
          1,
          "0.39"
        ]
      ],
      "annual": [
        [
          "Lamigo桃猿",
          120,
          68,
          52,
          0,
          "0.567"
        ],
        [
          "中信兄弟",
          120,
          63,
          56,
          1,
          "0.529"
        ],
        [
          "義大犀牛",
          120,
          58,
          61,
          1,
          "0.487"
        ],
        [
          "統一獅6",
          120,
          49,
          69,
          2,
          "0.415"
        ]
      ]
    }
  },
  "2016": {
    "overview": "中華職棒27 年例行賽由 4 隊參賽；全年第一取得 68 勝、50 敗、2 和，勝率 0.576。各隊上下半季與全年名次列於戰績表。",
    "sources": [
      {
        "url": "https://zxc22.idv.tw/cpbl27/rank_up.asp",
        "label": "上半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl27/rank_down.asp",
        "label": "下半季戰績"
      },
      {
        "url": "https://zxc22.idv.tw/cpbl27/rank_all.asp",
        "label": "全年戰績"
      },
      {
        "url": "https://zxc22.idv.tw/champ.asp?clickflag=999",
        "label": "歷年冠軍紀錄"
      }
    ],
    "standings": {
      "first": [
        [
          "中信兄弟",
          60,
          35,
          23,
          2,
          "0.603"
        ],
        [
          "統一獅6",
          60,
          29,
          31,
          0,
          "0.483"
        ],
        [
          "Lamigo桃猿",
          60,
          27,
          31,
          2,
          "0.466"
        ],
        [
          "義大犀牛",
          60,
          27,
          33,
          0,
          "0.45"
        ]
      ],
      "second": [
        [
          "義大犀牛",
          60,
          34,
          25,
          1,
          "0.576"
        ],
        [
          "中信兄弟",
          60,
          33,
          27,
          0,
          "0.55"
        ],
        [
          "Lamigo桃猿",
          60,
          26,
          33,
          1,
          "0.441"
        ],
        [
          "統一獅6",
          60,
          26,
          34,
          0,
          "0.433"
        ]
      ],
      "annual": [
        [
          "中信兄弟",
          120,
          68,
          50,
          2,
          "0.576"
        ],
        [
          "義大犀牛",
          120,
          61,
          58,
          1,
          "0.513"
        ],
        [
          "統一獅6",
          120,
          55,
          65,
          0,
          "0.458"
        ],
        [
          "Lamigo桃猿",
          120,
          53,
          64,
          3,
          "0.453"
        ]
      ]
    }
  }
};
Object.assign(yearLeagueArchiveData, historicalYearLeagueArchiveData);

// 台灣大聯盟（TML）1997–2002 年例行賽全年戰績，與中華職棒分開列示。
const tmlYearStandingsData = {
    1997: {
        champion: '嘉南勇士',
        rows: [['嘉南勇士',96,53,42,1,'.558'],['台北太陽',96,53,43,0,'.552'],['高屏雷公',96,42,51,3,'.452'],['台中金剛',96,41,53,2,'.436']]
    },
    1998: {
        champion: '台北太陽',
        rows: [['高屏雷公',108,62,45,1,'.579'],['嘉南勇士',108,57,48,3,'.543'],['台北太陽',108,53,53,2,'.500'],['台中金剛',108,40,66,2,'.377']]
    },
    1999: {
        champion: '台中金剛',
        rows: [['台北太陽',84,48,33,3,'.593'],['台中金剛',84,40,42,2,'.488'],['嘉南勇士',84,40,42,2,'.488'],['高屏雷公',84,36,47,1,'.434']]
    },
    2000: {
        champion: '台北太陽',
        rows: [['台北太陽',84,52,30,2,'.634'],['高屏雷公',84,40,43,1,'.482'],['嘉南勇士',84,37,45,2,'.451'],['台中金剛',84,35,46,3,'.432']]
    },
    2001: {
        champion: '台中金剛',
        rows: [['台中金剛',60,43,16,1,'.729'],['台北太陽',60,31,27,2,'.534'],['高屏雷公',60,31,28,1,'.525'],['嘉南勇士',60,13,47,0,'.217']]
    },
    2002: {
        champion: '台中金剛',
        rows: [['台中金剛',72,47,24,1,'.662'],['高屏雷公',72,34,37,1,'.479'],['台北太陽',72,31,39,2,'.443'],['嘉南勇士',72,29,41,2,'.414']]
    }
};
const tmlYearStandingsSources = [
    { label: '台灣大聯盟歷史與冠軍紀錄', url: 'https://zh.wikipedia.org/wiki/台灣職棒大聯盟' },
    { label: '台北太陽年度紀錄', url: 'https://zh.wikipedia.org/wiki/臺北太陽' },
    { label: '台中金剛年度紀錄', url: 'https://zh.wikipedia.org/wiki/臺中金剛' },
    { label: '嘉南勇士年度紀錄', url: 'https://zh.wikipedia.org/wiki/嘉南勇士' },
    { label: '高屏雷公年度紀錄', url: 'https://zh.wikipedia.org/wiki/高屏雷公' }
];

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
        const mark = document.createElement(isFeaturedGame ? 'button' : 'span');
        mark.className = `champion-mark champion-mark-${kind}`;
        mark.title = title;
        mark.setAttribute('aria-label', title);
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

// 季後挑戰賽勝負依歷年賽事結果整理；隊名使用該年度沿革資料中的原始名稱。
// 參考：https://zh.wikipedia.org/zh-tw/中華職棒季後挑戰賽
const challengeSeriesResults = {
    1998: { winner: '味全龍1', loser: '統一獅3' },
    1999: { winner: '味全龍1', loser: '統一獅3' },
    2005: { winner: '誠泰Cobras', loser: '統一獅4' },
    2006: { winner: '統一獅4', loser: '興農牛' },
    2007: { winner: '統一獅5', loser: '誠泰Cobras' },
    2008: { winner: '兄弟象', loser: 'LaNew 熊' },
    2017: { winner: '中信兄弟', loser: '統一7-ELEVEn獅' },
    2018: { winner: '統一7-ELEVEn獅', loser: '富邦悍將' },
    2022: { winner: '中信兄弟', loser: '味全龍' },
    2023: { winner: 'Rakuten Monkeys', loser: '統一7-ELEVEn獅' },
    2024: { winner: '統一7-ELEVEn獅', loser: 'Rakuten Monkeys' },
    2025: { winner: 'Rakuten Monkeys', loser: '統一7-ELEVEn獅' },
    2026: { winner: '中信兄弟', loser: '統一7-ELEVEn獅' }
};

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

function initializeChampionshipAdmin() {
    if (typeof firebase === 'undefined' || typeof firebase.firestore !== 'function') return;

    const db = firebase.firestore();
    const auth = firebase.auth();
    const adminPanel = document.getElementById('championship-admin');
    const adminLink = document.getElementById('admin-nav-link');
    const adminStatus = document.getElementById('admin-status');
    const yearSelect = document.getElementById('admin-year');
    const saveButton = document.getElementById('save-championship-year');
    const importButton = document.getElementById('import-championship-defaults');
    const singleSeasonField = document.getElementById('admin-single-season-field');
    const firstHalfField = document.getElementById('admin-first-half-field');
    const secondHalfField = document.getElementById('admin-second-half-field');
    const collection = db.collection('championships');
    const expectedYearCount = Object.keys(seasonChampionData).length;

    [...teamHistoryData].sort((a, b) => b.year - a.year).forEach(({ year }) => {
        const option = document.createElement('option');
        option.value = String(year);
        option.textContent = `${year} 年`;
        yearSelect.appendChild(option);
    });

    function populateTeamSelect(id, year, selectedName) {
        const select = document.getElementById(id);
        const yearData = teamHistoryData.find(item => item.year === year);
        const names = [...new Set((yearData?.teams || []).filter(Boolean).map(team => team.name))];
        select.replaceChildren();
        const emptyOption = document.createElement('option');
        emptyOption.value = '';
        emptyOption.textContent = '選擇球隊';
        select.appendChild(emptyOption);
        names.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = getTeamDisplayName(name);
            select.appendChild(option);
        });
        select.value = names.includes(selectedName) ? selectedName : '';
    }

    function updateAdminEditor() {
        const year = Number(yearSelect.value);
        const record = seasonChampionData[year] || {};
        const singleSeason = year === 1998 || year === 1999;
        firstHalfField.hidden = singleSeason;
        secondHalfField.hidden = singleSeason;
        singleSeasonField.hidden = !singleSeason;
        populateTeamSelect('admin-first-half', year, record.firstHalf);
        populateTeamSelect('admin-second-half', year, record.secondHalf);
        populateTeamSelect('admin-single-season', year, record.singleSeason);
        populateTeamSelect('admin-annual', year, record.annual);
    }

    async function requireAdmin() {
        const user = auth.currentUser;
        if (!user) throw new Error('請先登入管理帳號。');
        const token = await user.getIdTokenResult(true);
        if (token.claims.admin !== true) throw new Error('此帳號沒有冠軍資料管理權限。');
        return user;
    }

    async function loadChampionSettings() {
        const snapshot = await collection.get();
        snapshot.forEach(doc => {
            const year = Number(doc.id);
            if (!seasonChampionData[year]) return;
            seasonChampionData[year] = { ...seasonChampionData[year], ...doc.data() };
        });
        refreshRenderedChampionships();
        return snapshot.size;
    }

    yearSelect.addEventListener('change', updateAdminEditor);
    updateAdminEditor();

    saveButton.addEventListener('click', async () => {
        saveButton.disabled = true;
        adminStatus.textContent = '正在儲存……';
        try {
            const user = await requireAdmin();
            const year = Number(yearSelect.value);
            const singleSeason = year === 1998 || year === 1999;
            const annual = document.getElementById('admin-annual').value;
            if (!annual) throw new Error('請選擇年度總冠軍。');
            const record = {
                firstHalf: singleSeason ? null : document.getElementById('admin-first-half').value || null,
                secondHalf: singleSeason ? null : document.getElementById('admin-second-half').value || null,
                singleSeason: singleSeason ? document.getElementById('admin-single-season').value || null : null,
                annual,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedBy: user.uid
            };
            await collection.doc(String(year)).set(record);
            seasonChampionData[year] = { ...seasonChampionData[year], ...record };
            refreshRenderedChampionships();
            adminStatus.textContent = `${year} 年冠軍資料已儲存並同步。`;
        } catch (error) {
            adminStatus.textContent = error.message || '儲存失敗，請確認 Firestore 與管理權限設定。';
        } finally {
            saveButton.disabled = false;
        }
    });

    importButton.addEventListener('click', async () => {
        importButton.disabled = true;
        adminStatus.textContent = '正在檢查雲端資料……';
        try {
            await requireAdmin();
            const existing = await collection.get();
            const existingYears = new Set(existing.docs.map(doc => doc.id));
            const missingYears = Object.keys(seasonChampionData).filter(year => !existingYears.has(year));
            if (!missingYears.length) {
                importButton.hidden = true;
                adminStatus.textContent = '所有年度都已有 Firestore 資料。';
                return;
            }
            const batch = db.batch();
            missingYears.forEach(year => {
                const record = seasonChampionData[year];
                batch.set(collection.doc(year), {
                    firstHalf: record.firstHalf || null,
                    secondHalf: record.secondHalf || null,
                    singleSeason: record.singleSeason || null,
                    annual: record.annual,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                    updatedBy: auth.currentUser.uid
                });
            });
            await batch.commit();
            const count = await loadChampionSettings();
            importButton.hidden = count >= expectedYearCount;
            adminStatus.textContent = `已補入 ${missingYears.length} 年預設資料；Firestore 現有 ${count} 年資料。`;
            updateAdminEditor();
        } catch (error) {
            adminStatus.textContent = error.message || '匯入失敗，請確認 Firestore 與管理權限設定。';
        } finally {
            importButton.disabled = false;
        }
    });

    auth.onAuthStateChanged(async user => {
        if (!user) {
            adminPanel.hidden = true;
            adminLink.hidden = true;
            return;
        }

        let isAdmin = false;
        try {
            const token = await user.getIdTokenResult();
            isAdmin = token.claims.admin === true;
        } catch (error) {
            console.warn('無法讀取 Firebase 管理者權限。', error);
        }
        adminPanel.hidden = !isAdmin;
        adminLink.hidden = !isAdmin;

        try {
            const count = await loadChampionSettings();
            if (isAdmin) {
                importButton.hidden = count >= expectedYearCount;
                adminStatus.textContent = count
                    ? `Firestore 已載入 ${count}/${expectedYearCount} 年資料，可編輯年度或補齊缺漏。`
                    : 'Firestore 尚無冠軍資料，可先匯入本頁預設名單。';
                updateAdminEditor();
            }
        } catch (error) {
            if (isAdmin) adminStatus.textContent = '讀取失敗，請確認已建立 Firestore 並套用安全規則。';
            else console.warn('Firestore 冠軍資料無法讀取，使用內建名單。', error);
        }
    });
}

// 頁面加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    console.log('初始化球隊沿革頁面...');

    // 生成動態表格
    renderTeamHistoryTable();
    initializeTeamProfileDialog();
    initializeChampionGameDialog();
    initializeSeasonProfileDialog();
    initializeYearArchiveDialog();
    initializeChampionshipAdmin();

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
