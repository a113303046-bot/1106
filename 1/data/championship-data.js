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
    },
    {
        year: 2003,
        predecessorNames: ['台中金剛', '嘉南勇士'],
        successorName: '誠泰太陽'
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
                slogan: '尚勇',
                heading: '上半季封王，季後賽遭樂天逆轉', record: '66 勝・54 敗', rank: '全年第 2 名', distinction: '上半季冠軍・季後挑戰賽止步',
                summary: '統一獅以 36 勝 24 敗奪下上半季冠軍，拿下隊史第 18 座季冠軍；全年以 66 勝 54 敗排名第二。季後挑戰賽先取得 2 勝 0 敗聽牌，最終遭樂天桃猿連追三勝逆轉，無緣臺灣大賽。',
                highlights: ['6 月 29 日在保留賽以 4：1 擊敗樂天桃猿，以上半季 36 勝 24 敗封王。', '上半季冠軍是隊史第 18 座季冠軍，也是連續第三年拿下上半季冠軍。', '季後挑戰賽一度取得 2 勝 0 敗聽牌；樂天第四戰延長賽以 4：3 獲勝，最終完成「讓二追三」。'],
                sources: [
                    { label: '統一獅年度口號「尚勇」', url: 'https://video.udn.com/news/1300833' },
                    { label: '中央社：統一獅奪隊史第 18 座季冠軍', url: 'https://www.cna.com.tw/news/aspt/202506290185.aspx' },
                    { label: 'CPBL 季後挑戰賽第四戰', url: 'https://cpbl.com.tw/xmdoc/cont?sid=0P287004028052498155' }
                ]
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
