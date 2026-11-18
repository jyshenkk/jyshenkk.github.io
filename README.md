# 沈玨妤 個人學術網站

網址：https://jyshenkk.github.io

不用寫程式也能更新。存檔後約 1–2 分鐘網站會自動更新。

---

## 網站結構與檔案說明

本網站採用現代資料夾結構與靜態架構（Jekyll），結構清楚直覺：

```
jyshenkk.github.io/
├── index.html              首頁（形象照、自述、研究領域、最新近況、代表著作）
├── publications/
│   └── index.html          著作頁（期刊論文、研討會發表，支援 BibTeX 複製與摘要展開）
├── experience/
│   └── index.html          經歷頁（學歷時間軸、榮譽與獲獎、專業研習）
├── _data/                  ★ 網站所有文字內容都在這裡修改
│   ├── profile.yml         個人基本資料、自我介紹、學歷、聯絡資訊
│   ├── news.yml            首頁「近況」列表
│   ├── publications.yml    著作與研討會發表清單
│   └── awards.yml          榮譽、獲獎與專業研習清單
├── assets/
│   ├── css/style.css       全站樣式表（含配色設定）
│   ├── images/             照片、論文摘要圖與獎狀圖片
│   └── js/main.js          圖片燈箱放大與互動功能
├── _includes/              通用元件樣板
├── _layouts/               全站頁面外框
├── .pages.yml              Pages CMS 後台表單設定
└── sitemap.xml             搜尋引擎網站地圖
```

---

## 如何更新內容

所有內容都在 `_data` 資料夾中，直接在 GitHub 網頁上點開檔案即可修改：

| 想修改的內容 | 對應檔案 |
|---|---|
| 改自我介紹、大頭照、學歷、聯絡方式 | `_data/profile.yml` |
| 新增或修改首頁「近況」 | `_data/news.yml` |
| 新增或調整期刊論文、研討會發表 | `_data/publications.yml` |
| 新增或修改獲獎、榮譽、專業研習 | `_data/awards.yml` |

### 操作步驟：
1. 在 GitHub 上點進對應的 `.yml` 檔案。
2. 點擊右上角鉛筆圖示 ✏️（Edit this file）進行編輯。
3. 修改完成後，點擊右上角綠色按鈕 **Commit changes** 儲存。
4. 等待 1~2 分鐘，GitHub Pages 即會自動編譯發布至線上網站。

### 小提醒（YAML 格式）：
- 每一筆資料以 `- ` 開頭，各欄位**對齊兩個空白縮排**。
- 欄位內容若含有英文冒號 `:`，請用雙引號 `""` 包起來，例如 `title: "Green DEGs: Novel ..."`。
- 不需要的欄位留 `""` 即可，前端不會顯示。
