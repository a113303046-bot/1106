# Firebase 冠軍後台設定

沿革頁只會對 Firebase 自訂宣告中含有 `admin: true` 的帳號顯示冠軍管理入口。一般登入者只有讀取權限；Firestore 規則也會拒絕一般帳號寫入。

## 啟用步驟

1. 在 Firebase Console 為這個專案建立 Firestore Database。
2. 將 `firestore.rules` 的規則合併到專案現有規則。這份規則只開放 `championships/{year}`；若專案有其他 Firestore 資料，請保留原有規則。登入 Firebase CLI 並選擇這個專案後，再部署規則：

   ```sh
   firebase login
   firebase use project-8285027657505595761
   firebase deploy --only firestore:rules
   ```
3. 在可信任的管理環境安裝 Firebase Admin SDK，並用該環境的 Application Default Credentials 登入：

   ```sh
   npm install firebase-admin
   gcloud auth application-default login
   ```

4. 以專案管理者身份，對要管理冠軍資料的 Firebase Authentication 帳號設定自訂宣告：

   ```sh
   node grant-firebase-admin.mjs admin@example.com
   ```

   請以實際管理者帳號信箱取代範例。不要把 Admin SDK 憑證放進網頁或提交到版本控制。
5. 管理者登出並重新登入。沿革頁登入後會出現「冠軍後台」入口；可匯入尚未登錄的預設年度，之後逐年修改並儲存。匯入會跳過已存在的年度，不會覆蓋雲端資料。

1998、1999 年以單一球季欄位管理；其他年度提供上、下半季與年度總冠軍欄位。
