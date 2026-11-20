# Firebase 冠軍後台設定

沿革頁只會對 Firebase 自訂宣告中含有 `admin: true` 的帳號顯示冠軍管理入口。一般登入者只有讀取權限；Firestore 規則也會拒絕一般帳號寫入。

## 啟用步驟

1. `index.html` 已連接 Firebase 專案 `project-8285027657505595761`，只使用 Google 帳號登入，並連接 Firestore。Google 登入會顯示帳號選擇器。於 Firebase Console 的 Authentication > Sign-in method 確認已啟用「Google」，並在 Authentication > Settings > Authorized domains 加入正式網站網域及本機測試網域（例如 `localhost`）。`.firebaserc` 將此專案設為 Firebase CLI 預設專案。
2. 在 Firebase Console 為這個專案建立 Firestore Database。
3. 將 `firestore.rules` 的規則合併到專案現有規則。這份規則只開放 `championships/{year}`；若專案有其他 Firestore 資料，請保留原有規則。部署前確認合併後規則保留其他資料路徑，再登入 Firebase CLI 並部署：

   ```sh
   npx -y firebase-tools@latest login
   npx -y firebase-tools@latest deploy --only firestore:rules
   ```

   Google 登入提供者由 Firebase Console 管理；本專案不在 `firebase.json` 宣告 Auth 提供者，因此不要使用 `deploy --only auth`。
4. 在可信任的管理環境安裝 Firebase Admin SDK，並用該環境的 Application Default Credentials 登入：

   ```sh
   npm install firebase-admin
   gcloud auth application-default login
   ```

5. 以專案管理者身份，對要管理冠軍資料的 Firebase Authentication 帳號設定自訂宣告：

   ```sh
   node grant-firebase-admin.mjs admin@example.com
   ```

   請以實際管理者帳號信箱取代範例。不要把 Admin SDK 憑證放進網頁或提交到版本控制。
6. 管理者登出並重新登入。沿革頁登入後會出現「冠軍後台」入口；可匯入尚未登錄的預設年度，之後逐年修改並儲存。匯入會跳過已存在的年度，不會覆蓋雲端資料。

1998、1999 年以單一球季欄位管理；其他年度提供上、下半季與年度總冠軍欄位。

## 匯入 `data` 資料夾

`import-data-to-firestore.mjs` 會將六份 JavaScript 資料檔整理後寫入預設 Firestore 資料庫的 `appData` 集合，每個資料檔各建立一份文件。需在可信任且具有此專案 Firestore 寫入權限的管理環境執行：

```sh
npm install firebase-admin
gcloud auth application-default login
node import-data-to-firestore.mjs --dry-run
node import-data-to-firestore.mjs
```

匯入使用 Application Default Credentials，不會把管理憑證放進網站。預設遇到同名文件就停止、不覆寫；檢查現有文件並確認要替換這六份資料後，才加上 `--overwrite`。
