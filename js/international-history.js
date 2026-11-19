function initializeInternationalHistory() {
    const head = document.getElementById('international-results-head');
    const body = document.getElementById('international-results-body');
    const status = document.getElementById('international-history-status');
    const tableWrap = document.querySelector('.international-table-wrap');
    const scrollLeftButton = document.getElementById('international-scroll-left');
    const scrollRightButton = document.getElementById('international-scroll-right');
    if (!head || !body || !status || !tableWrap || !scrollLeftButton || !scrollRightButton) return;

    const scrollTable = direction => tableWrap.scrollBy({
        left: direction * Math.max(280, Math.round(tableWrap.clientWidth * 0.75)),
        behavior: 'smooth'
    });
    const updateScrollButtons = () => {
        scrollLeftButton.disabled = tableWrap.scrollLeft <= 1;
        scrollRightButton.disabled = tableWrap.scrollLeft + tableWrap.clientWidth >= tableWrap.scrollWidth - 1;
    };
    scrollLeftButton.addEventListener('click', () => scrollTable(-1));
    scrollRightButton.addEventListener('click', () => scrollTable(1));
    tableWrap.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);

    const firstYear = 1969;
    const currentYear = new Date().getFullYear();
    const worldCupEditions = {
        1972: '第二十屆', 1973: '第二十二屆', 1974: '第二十三屆', 1976: '第二十四屆',
        1982: '第二十七屆', 1984: '第二十八屆', 1986: '第二十九屆', 1988: '第三十屆',
        1990: '第三十一屆', 1994: '第三十二屆', 1998: '第三十三屆', 2001: '第三十四屆',
        2003: '第三十五屆', 2005: '第三十六屆', 2007: '第三十七屆', 2009: '第三十八屆',
        2011: '第三十九屆'
    };
    const olympicBaseballEditions = {
        1984: '1984年第二十三屆洛杉磯奧林匹克運動會',
        1988: '1988年第二十四屆漢城奧林匹克運動會',
        1992: '1992年第二十五屆巴塞隆納奧林匹克運動會',
        2004: '2004年第二十八屆雅典奧林匹克運動會',
        2008: '2008年第二十九屆北京奧林匹克運動會'
    };
    const asianGamesEditions = {
        1990: '1990年第十一屆北京亞洲運動會',
        1994: '1994年第十二屆廣島亞洲運動會',
        1998: '1998年第十三屆曼谷亞洲運動會',
        2002: '2002年第十四屆釜山亞洲運動會',
        2006: '2006年第十五屆杜哈亞洲運動會',
        2010: '2010年第十六屆廣州亞洲運動會',
        2014: '2014年第十七屆仁川亞洲運動會',
        2018: '2018年第十八屆雅加達-巨港亞洲運動會',
        2023: '2022年第十九屆杭州亞洲運動會',
        2026: '2026年第二十屆愛知-名古屋亞洲運動會'
    };
    const asianProfessionalBaseballEditions = {
        2017: '2017年第一屆亞洲職棒冠軍爭霸賽',
        2023: '2023年第二屆亞洲職棒冠軍爭霸賽',
        2026: '2026年第三屆亞洲職棒冠軍爭霸賽'
    };
    const chineseNumber = number => {
        const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
        if (number < 10) return digits[number];
        const tens = Math.floor(number / 10);
        const ones = number % 10;
        if (tens === 1) return `十${ones ? digits[ones] : ''}`;
        return `${digits[tens]}十${ones ? digits[ones] : ''}`;
    };
    const editionTitle = (year, edition, eventName) =>
        edition ? `${year}年第${chineseNumber(edition)}屆${eventName}` : null;
    const eventEditions = {
        asianBaseball: {
            1969: 8, 1971: 9, 1973: 10, 1975: 11, 1983: 12, 1985: 13, 1987: 14,
            1989: 15, 1991: 16, 1993: 17, 1995: 18, 1997: 19, 1999: 20, 2001: 21,
            2003: 22, 2005: 23, 2007: 24, 2009: 25, 2012: 26, 2015: 27, 2017: 28,
            2019: 29, 2023: 30, 2025: 31
        },
        asianLittle: { 2000: 1, 2002: 2, 2004: 3, 2006: 4, 2008: 5, 2010: 6, 2012: 7, 2014: 8, 2016: 9, 2018: 10, 2024: 11, 2026: 12 },
        asianJunior: { 2000: 1, 2002: 2, 2005: 3, 2006: 4, 2008: 5, 2010: 6, 2012: 7, 2015: 8, 2017: 9, 2019: 10, 2023: 11, 2025: 12 },
        asianYouth: { 1994: 1, 1996: 2, 1998: 3, 2001: 4, 2003: 5, 2005: 6, 2007: 7, 2009: 8, 2011: 9, 2014: 10, 2016: 11, 2018: 12, 2024: 13, 2026: 14 },
        u12: { 2013: 2, 2015: 3, 2017: 4, 2019: 5, 2022: 6, 2023: 7, 2025: 8 },
        u15Iba: { 1989: 1, 1990: 2, 1991: 3, 1993: 4, 1994: 5, 1995: 6, 1996: 7, 1997: 8, 1998: 9, 2001: 10, 2003: 11, 2005: 12, 2007: 13, 2009: 14, 2011: 15 },
        u15: { 2012: 1, 2014: 2, 2016: 3, 2018: 4, 2022: 5, 2024: 6, 2026: 7 },
        u18Iba: { 1981: 1, 1982: 2, 1983: 3, 1984: 4, 1985: 5, 1986: 6, 1987: 7, 1988: 8, 1989: 9, 1990: 10, 1991: 11, 1992: 12, 1993: 13, 1994: 14, 1995: 15, 1996: 16, 1997: 17, 1999: 18, 2000: 19, 2002: 20, 2004: 21, 2006: 22, 2008: 23 },
        u18IbaF: { 2010: 24, 2012: 25 },
        u18: { 2013: 26, 2015: 27, 2017: 28, 2019: 29, 2021: 30, 2023: 31, 2025: 32 },
        u23: { 2016: 1, 2018: 2, 2021: 3, 2022: 4, 2024: 5, 2026: 6 },
        worldBaseballClassic: { 2006: 1, 2009: 2, 2013: 3, 2017: 4, 2023: 5, 2026: 6 }
    };
    const sourceUrlForRecord = (year, categoryId, record) => {
        let title;
        if (record.event === '世界盃' && worldCupEditions[year]) {
            title = `${year}年${worldCupEditions[year]}世界盃棒球錦標賽`;
        } else if (record.event === '12強') {
            const editions = { 2015: '第一屆', 2019: '第二屆', 2024: '第三屆' };
            if (editions[year]) title = `${year}年${editions[year]}世界12強棒球賽`;
        } else if (record.event === '經典賽') {
            title = editionTitle(year, eventEditions.worldBaseballClassic[year], '世界棒球經典賽');
        } else if (record.event === '經典賽資格賽') {
            const qualifierTitles = {
                2012: '2012年世界棒球經典賽資格賽',
                2025: '2026年世界棒球經典賽資格賽'
            };
            title = qualifierTitles[year];
        } else if (record.event === '奧運') {
            title = olympicBaseballEditions[year];
        } else if (record.event === '亞運') {
            title = asianGamesEditions[year];
        } else if (record.event === '亞冠') {
            title = asianProfessionalBaseballEditions[year];
        } else if (record.event === 'LLB' && categoryId === 'little') {
            const name = year < 1976 ? '世界盃少年棒球錦標賽' : '世界少年棒球錦標賽';
            title = editionTitle(year, year - 1946, name);
        } else if (record.event === 'LLB' && categoryId === 'junior') {
            title = editionTitle(year, year - 1960, '世界青少棒賽');
        } else if (record.event === 'LLB' && categoryId === 'youth') {
            title = editionTitle(year, year - 1967, '世界青棒賽');
        } else if (record.event === '亞錦賽') {
            title = editionTitle(year, eventEditions.asianBaseball[year], '亞洲棒球錦標賽');
        } else if (record.event === '亞少') {
            title = editionTitle(year, eventEditions.asianLittle[year], '亞洲少棒錦標賽');
        } else if (record.event === '亞青少') {
            title = editionTitle(year, eventEditions.asianJunior[year], '亞洲青少棒錦標賽');
        } else if (record.event === '亞青') {
            title = editionTitle(year, eventEditions.asianYouth[year], '亞洲青棒錦標賽');
        } else if (record.event === 'U12') {
            title = year === 2011
                ? editionTitle(year, 1, 'IBAF世界少棒錦標賽')
                : editionTitle(year, eventEditions.u12[year], 'U-12世界盃棒球賽');
        } else if (record.event === 'U15') {
            title = eventEditions.u15Iba[year]
                ? editionTitle(year, eventEditions.u15Iba[year], 'IBA世界青少棒錦標賽')
                : editionTitle(year, eventEditions.u15[year], 'U-15世界盃棒球賽');
        } else if (record.event === 'U18') {
            const edition = eventEditions.u18Iba[year];
            if (edition) title = editionTitle(year, edition, 'IBA世界青棒錦標賽');
            else if (eventEditions.u18IbaF[year]) title = editionTitle(year, eventEditions.u18IbaF[year], 'IBAF世界青棒錦標賽');
            else if (year === 2022) title = editionTitle(2021, 30, 'U-18世界盃棒球賽');
            else title = editionTitle(year, eventEditions.u18[year], 'U-18世界盃棒球賽');
        } else if (record.event === '21U' && year === 2014) {
            title = editionTitle(year, 1, 'U-21世界盃棒球賽');
        } else if (record.event === 'U23') {
            title = editionTitle(year, eventEditions.u23[year], 'U-23世界盃棒球賽');
        }
        return title
            ? `https://twbsball.dils.tku.edu.tw/index.php?title=${encodeURIComponent(title)}`
            : record.source?.url;
    };

    const appendEventResult = (container, result) => {
        if (!result) return;
        const rank = result.match(/^(並列)?(第一|第二|第三)名(.*)$/);
        if (!rank) {
            container.appendChild(document.createTextNode(result));
            return;
        }

        if (rank[1]) container.appendChild(document.createTextNode(`${rank[1]} `));
        const medal = document.createElement('span');
        medal.className = 'international-medal-icon';
        medal.setAttribute('aria-hidden', 'true');
        medal.textContent = { 第一: '🥇', 第二: '🥈', 第三: '🥉' }[rank[2]];
        container.appendChild(medal);
        if (rank[3]) container.appendChild(document.createTextNode(rank[3]));
    };

    const headerRow = document.createElement('tr');
    const yearHeading = document.createElement('th');
    yearHeading.scope = 'col';
    yearHeading.className = 'international-year-heading';
    yearHeading.textContent = '年度';
    headerRow.appendChild(yearHeading);
    internationalCompetitionCategories.forEach(category => {
        const heading = document.createElement('th');
        heading.scope = 'col';
        const name = document.createElement('span');
        name.className = 'international-category-name';
        name.textContent = category.name;
        heading.appendChild(name);
        if (category.events) {
            const events = document.createElement('small');
            events.className = 'international-category-events';
            events.textContent = category.events;
            heading.appendChild(events);
        }
        headerRow.appendChild(heading);
    });
    head.replaceChildren(headerRow);

    const renderCell = (year, category) => {
        const cell = document.createElement('td');
        const records = internationalCompetitionResults[year]?.[category.id] || [];
        if (!records.length) {
            cell.className = 'international-empty-cell';
            cell.textContent = '—';
            return cell;
        }

        const list = document.createElement('ul');
        list.className = 'international-result-list';
        records.forEach(record => {
            const item = document.createElement('li');
            const sourceUrl = sourceUrlForRecord(year, category.id, record);
            const label = document.createElement(sourceUrl ? 'a' : 'span');
            label.className = 'international-event-label';
            const eventName = record.event || '國際賽';
            const event = document.createElement('span');
            event.className = 'international-event-name';
            event.textContent = eventName;
            label.appendChild(event);
            const result = document.createElement('span');
            result.className = 'international-event-result';
            appendEventResult(result, record.result);
            label.appendChild(result);
            if (record.result) label.setAttribute('aria-label', `${eventName}/${record.result}`);
            if (sourceUrl) {
                label.href = sourceUrl;
                label.target = '_blank';
                label.rel = 'noopener noreferrer';
            }
            item.appendChild(label);
            if (record.note) {
                const note = document.createElement('span');
                note.className = 'international-event-note';
                note.textContent = record.note;
                item.appendChild(note);
            }
            list.appendChild(item);
        });
        cell.appendChild(list);
        return cell;
    };

    const renderAllYears = () => {
        const rows = [];
        let recordCount = 0;
        for (let year = firstYear; year <= currentYear; year++) {
            const row = document.createElement('tr');
            const yearCell = document.createElement('th');
            yearCell.scope = 'row';
            yearCell.className = 'international-year-cell';
            yearCell.textContent = String(year);
            row.appendChild(yearCell);
            internationalCompetitionCategories.forEach(category => {
                const records = internationalCompetitionResults[year]?.[category.id] || [];
                recordCount += records.length;
                row.appendChild(renderCell(year, category));
            });
            rows.push(row);
        }
        body.replaceChildren(...rows);
        status.textContent = `${firstYear}–${currentYear} 年｜共 ${currentYear - firstYear + 1} 個年度，已建檔 ${recordCount} 筆賽事成績。`;
    };

    renderAllYears();
    requestAnimationFrame(updateScrollButtons);
}
