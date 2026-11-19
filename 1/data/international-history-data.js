const internationalCompetitionCategories = [
    { id: 'little', name: '少棒', events: 'LLB・亞少・U12' },
    { id: 'junior', name: '青少棒', events: '' },
    { id: 'youth', name: '青棒', events: '' },
    { id: 'adult', name: '成棒', events: '' },
    { id: 'asia', name: '亞洲', events: '亞錦賽・亞運・亞冠' },
    { id: 'premier', name: '一級賽事', events: '世界盃・12 強・奧運・經典賽・資格賽' }
];

// Taiwan's LLB Little, Senior, and Big League records are limited to its pre-withdrawal period through 1996.
const internationalWorldCupSource = {
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E4%B8%96%E7%95%8C%E7%9B%83%E6%A3%92%E7%90%83%E8%B3%BD',
    label: '歷屆賽況'
};
const internationalOlympicsSource = {
    url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E5%A5%A7%E6%9E%97%E5%8C%B9%E5%85%8B%E9%81%8B%E5%8B%95%E6%9C%83',
    label: '奧運棒球'
};

const internationalCompetitionResults = {
    1969: { little: [{ event: 'LLB', result: '第一名' }], asia: [{ event: '亞錦賽', result: '第二名' }] },
    1970: { little: [{ event: 'LLB', result: '第五名' }] },
    1971: { little: [{ event: 'LLB', result: '第一名' }], asia: [{ event: '亞錦賽', result: '第五名' }] },
    1972: { little: [{ event: 'LLB', result: '第一名' }], junior: [{ event: 'LLB', result: '第一名' }], premier: [{ event: '世界盃', result: '第八名', source: internationalWorldCupSource }] },
    1973: { little: [{ event: 'LLB', result: '第一名' }], junior: [{ event: 'LLB', result: '第一名' }], asia: [{ event: '亞錦賽', result: '第三名' }], premier: [{ event: '世界盃', result: '第五名', source: internationalWorldCupSource }] },
    1974: { little: [{ event: 'LLB', result: '第一名' }], junior: [{ event: 'LLB', result: '第一名' }], youth: [{ event: 'LLB', result: '第一名' }], premier: [{ event: '世界盃', result: '第八名', source: internationalWorldCupSource }] },
    1975: { little: [{ event: 'LLB', result: '外隊未受邀' }], junior: [{ event: 'LLB', result: '第一名' }], youth: [{ event: 'LLB', result: '第一名' }], asia: [{ event: '亞錦賽', result: '第四名' }] },
    1976: { little: [{ event: 'LLB', result: '遠東區止步' }], junior: [{ event: 'LLB', result: '第一名' }], youth: [{ event: 'LLB', result: '第一名' }], premier: [{ event: '世界盃', result: '第七名', source: internationalWorldCupSource }] },
    1977: { little: [{ event: 'LLB', result: '第一名' }], junior: [{ event: 'LLB', result: '第一名' }], youth: [{ event: 'LLB', result: '第一名' }] },
    1978: { little: [{ event: 'LLB', result: '第一名' }], junior: [{ event: 'LLB', result: '第一名' }], youth: [{ event: 'LLB', result: '第一名' }] },
    1979: { little: [{ event: 'LLB', result: '第一名' }], junior: [{ event: 'LLB', result: '第一名' }], youth: [{ event: 'LLB', result: '第三名' }] },
    1980: { little: [{ event: 'LLB', result: '第一名' }], junior: [{ event: 'LLB', result: '第一名' }], youth: [{ event: 'LLB', result: '第三名' }] },
    1981: { little: [{ event: 'LLB', result: '第一名' }], junior: [{ event: 'LLB', result: '第三名' }], youth: [{ event: 'LLB', result: '第一名' }] },
    1982: { little: [{ event: 'LLB', result: '第二名' }], junior: [{ event: 'LLB', result: '第三名' }], youth: [{ event: 'LLB', result: '未進前四' }], premier: [{ event: '世界盃', result: '第四名', source: internationalWorldCupSource }] },
    1983: { little: [{ event: 'LLB', result: '遠東區止步' }], junior: [{ event: 'LLB', result: '第一名' }], youth: [{ event: 'LLB', result: '第一名' }, { event: 'U18', result: '第一名' }], asia: [{ event: '亞錦賽', result: '並列第一名' }] },
    1984: { little: [{ event: 'LLB', result: '遠東區止步' }], junior: [{ event: 'LLB', result: '第二名' }], youth: [{ event: 'LLB', result: '第一名' }, { event: 'U18', result: '第三名' }], premier: [{ event: '世界盃', result: '第二名', source: internationalWorldCupSource }, { event: '奧運', result: '第三名（示範賽）' }] },
    1985: { little: [{ event: 'LLB', result: '遠東區止步' }], junior: [{ event: 'LLB', result: '第一名' }], youth: [{ event: 'LLB', result: '未進前四' }, { event: 'U18', result: '第三名' }], asia: [{ event: '亞錦賽', result: '第三名' }] },
    1986: { little: [{ event: 'LLB', result: '第一名' }], junior: [{ event: 'LLB', result: '第一名' }], youth: [{ event: 'LLB', result: '第四名' }, { event: 'U18', result: '第二名' }], premier: [{ event: '世界盃', result: '第三名', source: internationalWorldCupSource }] },
    1987: { little: [{ event: 'LLB', result: '第一名' }], junior: [{ event: 'LLB', result: '第二輪止步' }], youth: [{ event: 'LLB', result: '第一名' }, { event: 'U18', result: '第四名' }], asia: [{ event: '亞錦賽', result: '第一名' }] },
    1988: { little: [{ event: 'LLB', result: '第一名' }], junior: [{ event: 'LLB', result: '第一名' }], youth: [{ event: 'LLB', result: '第一名' }, { event: 'U18', result: '第三名' }], premier: [{ event: '世界盃', result: '第三名', source: internationalWorldCupSource }, { event: '奧運', result: '第八名（示範賽）' }] },
    1989: { little: [{ event: 'LLB', result: '第二名' }], junior: [{ event: 'LLB', result: '第一名' }, { event: 'U15', result: '第二名' }], youth: [{ event: 'LLB', result: '第一名' }, { event: 'U18', result: '第四名' }], asia: [{ event: '亞錦賽', result: '並列第一名' }] },
    1990: { little: [{ event: 'LLB', result: '第一名' }], junior: [{ event: 'LLB', result: '第一名' }, { event: 'U15', result: '第七名' }], youth: [{ event: 'LLB', result: '第一名' }, { event: 'U18', result: '第二名' }], asia: [{ event: '亞運', result: '第一名（示範賽）' }], premier: [{ event: '世界盃', result: '第六名', source: internationalWorldCupSource }] },
    1991: { little: [{ event: 'LLB', result: '第一名' }], junior: [{ event: 'LLB', result: '第一名' }, { event: 'U15', result: '第一名' }], youth: [{ event: 'LLB', result: '第一名' }, { event: 'U18', result: '第二名' }], asia: [{ event: '亞錦賽', result: '第二名' }] },
    1992: { little: [{ event: 'LLB', result: '遠東區止步' }], junior: [{ event: 'LLB', result: '第一名' }], youth: [{ event: 'LLB', result: '第三名' }, { event: 'U18', result: '第三名' }], premier: [{ event: '奧運', result: '第二名' }] },
    1993: { little: [{ event: 'LLB', result: '取消資格' }], junior: [{ event: 'LLB', result: '第二名' }, { event: 'U15', result: '第二名' }], youth: [{ event: 'LLB', result: '第一名' }, { event: 'U18', result: '第三名' }], asia: [{ event: '亞錦賽', result: '第三名' }] },
    1994: { little: [{ event: 'LLB', result: '預賽淘汰' }], junior: [{ event: 'LLB', result: '第三名' }, { event: 'U15', result: '第四名' }], youth: [{ event: 'LLB', result: '第一名' }, { event: 'U18', result: '第三名' }, { event: '亞青', result: '第三名' }], asia: [{ event: '亞運', result: '第三名' }], premier: [{ event: '世界盃', result: '第六名', source: internationalWorldCupSource }] },
    1995: { little: [{ event: 'LLB', result: '第一名' }], junior: [{ event: 'LLB', result: '第三輪止步' }, { event: 'U15', result: '第四名' }], youth: [{ event: 'LLB', result: '第一名' }, { event: 'U18', result: '第二名' }], asia: [{ event: '亞錦賽', result: '第三名' }] },
    1996: { little: [{ event: 'LLB', result: '第一名' }], junior: [{ event: 'LLB', result: '第三輪止步' }, { event: 'U15', result: '第三名' }], youth: [{ event: 'LLB', result: '第一名' }, { event: 'U18', result: '第二名' }, { event: '亞青', result: '第二名' }], premier: [{ event: '奧運', result: '未參賽', source: internationalOlympicsSource }] },
    1997: { junior: [{ event: 'U15', result: '第二名' }], youth: [{ event: 'U18', result: '第二名' }], asia: [{ event: '亞錦賽', result: '第三名' }] },
    1998: { junior: [{ event: 'U15', result: '第二名' }], youth: [{ event: '亞青', result: '第二名' }], asia: [{ event: '亞運', result: '第三名' }], premier: [{ event: '世界盃', result: '第十三名', source: internationalWorldCupSource }] },
    1999: { youth: [{ event: 'U18', result: '第二名' }], asia: [{ event: '亞錦賽', result: '第三名' }] },
    2000: { little: [{ event: '亞少', result: '第三名' }], junior: [{ event: '亞青少', result: '第二名' }], youth: [{ event: 'U18', result: '第五名' }], premier: [{ event: '奧運', result: '未參賽', source: internationalOlympicsSource }] },
    2002: { little: [{ event: '亞少', result: '第一名' }], junior: [{ event: '亞青少', result: '第一名' }], youth: [{ event: 'U18', result: '第二名' }], asia: [{ event: '亞運', result: '第三名' }] },
    2004: { little: [{ event: '亞少', result: '第一名' }], youth: [{ event: 'U18', result: '第五名' }], premier: [{ event: '奧運', result: '第五名' }] },
    2006: { little: [{ event: '亞少', result: '第一名' }], junior: [{ event: '亞青少', result: '第一名' }], youth: [{ event: 'U18', result: '第五名' }], asia: [{ event: '亞運', result: '第一名' }], premier: [{ event: '經典賽', result: '第十二名' }] },
    2008: { little: [{ event: '亞少', result: '第一名' }], junior: [{ event: '亞青少', result: '第二名' }], youth: [{ event: 'U18', result: '第五名' }], premier: [{ event: '8搶3奧運', result: '第三名', source: { url: 'https://twbsball.dils.tku.edu.tw/index.php?title=2008%E5%B9%B4%E5%A5%A7%E9%81%8B%E6%A3%92%E7%90%83%E6%9C%80%E7%B5%82%E8%B3%87%E6%A0%BC%E6%8E%92%E5%90%8D%E8%B3%BD', label: '賽況' } }, { event: '奧運', result: '第五名' }] },
    2010: { little: [{ event: '亞少', result: '第一名' }], junior: [{ event: '亞青少', result: '第一名' }], youth: [{ event: 'U18', result: '第一名' }], asia: [{ event: '亞運', result: '第二名' }] },
    2001: { junior: [{ event: 'U15', result: '第七名' }], youth: [{ event: '亞青', result: '第一名' }], asia: [{ event: '亞錦賽', result: '第一名' }], premier: [{ event: '世界盃', result: '第三名', source: internationalWorldCupSource }] },
    2003: { junior: [{ event: 'U15', result: '第二名' }], youth: [{ event: '亞青', result: '第二名' }], asia: [{ event: '亞錦賽', result: '第二名' }], premier: [{ event: '世界盃', result: '第四名', source: internationalWorldCupSource }] },
    2005: { junior: [{ event: 'U15', result: '第五名' }, { event: '亞青少', result: '第一名' }], youth: [{ event: '亞青', result: '第三名' }], asia: [{ event: '亞錦賽', result: '第二名' }], premier: [{ event: '世界盃', result: '第十一名', source: internationalWorldCupSource }] },
    2007: { youth: [{ event: '亞青', result: '第一名' }], asia: [{ event: '亞錦賽', result: '第三名' }], premier: [{ event: '世界盃', result: '第八名', source: internationalWorldCupSource }] },
    2009: { junior: [{ event: 'U15', result: '第五名' }], youth: [{ event: '亞青', result: '第二名' }], asia: [{ event: '亞錦賽', result: '第二名' }], premier: [{ event: '世界盃', result: '第八名', source: internationalWorldCupSource }, { event: '經典賽', result: '第十四名' }] },
    2011: { little: [{ event: 'U12', result: '第一名' }], junior: [{ event: 'U15', result: '第五名' }], youth: [{ event: '亞青', result: '第三名' }], premier: [{ event: '世界盃', result: '第十三名', source: internationalWorldCupSource }] },
    2012: { little: [{ event: '亞少', result: '第二名' }], junior: [{ event: 'U15', result: '第三名' }, { event: '亞青少', result: '第一名' }], youth: [{ event: 'U18', result: '第三名' }], asia: [{ event: '亞錦賽', result: '第二名' }], premier: [{ event: '經典賽資格賽', result: '晉級會內賽' }] },
    2013: { little: [{ event: 'U12', result: '第二名' }], youth: [{ event: 'U18', result: '第四名' }], premier: [{ event: '經典賽', result: '第八名' }] },
    2014: { little: [{ event: '亞少', result: '第一名' }], junior: [{ event: 'U15', result: '第四名' }], youth: [{ event: '亞青', result: '第三名' }], adult: [{ event: '21U', result: '第一名' }], asia: [{ event: '亞運', result: '第二名' }] },
    2015: { little: [{ event: 'U12', result: '第二名' }], junior: [{ event: '亞青少', result: '第一名' }], youth: [{ event: 'U18', result: '第八名' }], asia: [{ event: '亞錦賽', result: '第二名' }], premier: [{ event: '12強', result: '第九名', source: { url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E4%B8%96%E7%95%8C12%E5%BC%B7%E6%A3%92%E7%90%83%E8%B3%BD#.E6.AD.B7.E5.B1.86.E8.B3.BD.E6.B3.81', label: '歷屆賽況' } }] },
    2016: { little: [{ event: '亞少', result: '第三名' }], junior: [{ event: 'U15', result: '第七名' }], youth: [{ event: '亞青', result: '第二名' }], adult: [{ event: 'U23', result: '第七名' }] },
    2017: { little: [{ event: 'U12', result: '第二名' }], junior: [{ event: '亞青少', result: '第二名' }], youth: [{ event: 'U18', result: '第七名' }], asia: [{ event: '亞錦賽', result: '第二名' }, { event: '亞冠', result: '第三名' }], premier: [{ event: '經典賽', result: '第十四名' }] },
    2018: { little: [{ event: '亞少', result: '第一名' }], junior: [{ event: 'U15', result: '第三名' }], youth: [{ event: '亞青', result: '第二名' }], adult: [{ event: 'U23', result: '第五名' }], asia: [{ event: '亞運', result: '第三名' }] },
    2019: { little: [{ event: 'U12', result: '第一名' }], junior: [{ event: '亞青少', result: '第二名' }], youth: [{ event: 'U18', result: '第一名' }], asia: [{ event: '亞錦賽', result: '第一名' }], premier: [{ event: '12強', result: '第五名', source: { url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E4%B8%96%E7%95%8C12%E5%BC%B7%E6%A3%92%E7%90%83%E8%B3%BD#.E6.AD.B7.E5.B1.86.E8.B3.BD.E6.B3.81', label: '歷屆賽況' } }] },
    2020: { little: [{ event: '亞少', result: '賽事取消' }], junior: [{ event: 'U15', result: '賽事取消' }], youth: [{ event: '亞青', result: '賽事取消' }], premier: [{ event: '奧運', result: '未參賽', source: internationalOlympicsSource }] },
    2021: { adult: [{ event: 'U23', result: '第六名' }] },
    2022: { little: [{ event: '亞少', result: '賽事取消' }, { event: 'U12', result: '第三名' }], junior: [{ event: 'U15', result: '第三名' }], youth: [{ event: 'U18', result: '第二名' }], adult: [{ event: 'U23', result: '第三名' }] },
    2023: { little: [{ event: 'U12', result: '第二名' }], junior: [{ event: '亞青少', result: '第一名' }], youth: [{ event: 'U18', result: '第二名' }], asia: [{ event: '亞錦賽', result: '第二名' }, { event: '亞運', result: '第二名' }, { event: '亞冠', result: '第三名' }], premier: [{ event: '經典賽', result: '第十七名' }] },
    2024: { little: [{ event: '亞少', result: '第一名' }], junior: [{ event: 'U15', result: '第三名' }], youth: [{ event: '亞青', result: '第一名' }], adult: [{ event: 'U23', result: '第八名' }], premier: [{ event: '12強', result: '第一名', source: { url: 'https://twbsball.dils.tku.edu.tw/index.php?title=%E4%B8%96%E7%95%8C12%E5%BC%B7%E6%A3%92%E7%90%83%E8%B3%BD#.E6.AD.B7.E5.B1.86.E8.B3.BD.E6.B3.81', label: '歷屆賽況' } }] },
    2025: { little: [{ event: 'U12', result: '第四名' }], junior: [{ event: '亞青少', result: '第一名' }], youth: [{ event: 'U18', result: '第三名' }], asia: [{ event: '亞錦賽', result: '第二名' }], premier: [{ event: '經典賽資格賽', result: '晉級會內賽' }] },
    2026: { little: [{ event: '亞少', result: '第二名' }], junior: [{ event: 'U15', result: '第五名' }], youth: [{ event: '亞青', result: '第三名' }], adult: [{ event: 'U23', result: '第四名' }], asia: [{ event: '亞運', result: '第三名' }, { event: '亞冠', result: '第四名' }], premier: [{ event: '經典賽', result: '第十三名' }] }
};
