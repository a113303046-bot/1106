# 頁面互動程式

這些檔案以一般 `<script>` 載入，順序由根目錄的 `index.html` 控制。資料檔先載入，互動模組接著載入，最後由根目錄的 `script.js` 初始化頁面。

- `team-ui.js`：球隊圖示、冠軍標記、互動效果與統計數字。
- `team-history.js`：球隊沿革表格的繪製與更新。
- `profile-dialogs.js`：球隊簡介、單季資料與年度戰績視窗。
- `championship-charts.js`：冠軍沿革統計圖與頁面導覽。
- `championship-admin.js`：冠軍資料管理功能。
- `../script.js`：頁面啟動與公開的重新載入方法。

這些模組仍使用傳統全域 `<script>`，因此新增模組或調整依賴時，請同步維護 `index.html` 的載入順序。
