# 沈玨妤 個人學術網站

網址：https://jyshenkk.github.io

不用寫程式也能更新。存檔後約 1–2 分鐘網站會自動更新。

---

## 方法一：用 Pages CMS 表單編輯（推薦）

第一次使用（只要做一次）：

1. 打開 https://app.pagescms.org ，用 GitHub 帳號登入
2. 依照畫面指示安裝 Pages CMS（GitHub App），選擇 `jyshenkk.github.io` 這個 repo
3. 進入 repo 後，左邊會出現：**部落格文章、近況、著作、產學合作、榮譽與活動、個人資料**

之後要更新時：

| 想做的事 | 點左邊 | 操作 |
|---|---|---|
| 寫一篇部落格 | 部落格文章 | 右上 **Add an entry** → 填標題、日期、內文 → **Save** |
| 加一則近況 | 近況 | 點 **+** 新增一筆 → 填日期與一句話 → **Save** |
| 新增論文 | 著作 | 新增一筆 → 填標題、作者、期刊、年份、DOI → **Save** |
| 加獎項 / 活動 | 榮譽與活動 | 新增一筆，可上傳獎狀照片 |
| 改自我介紹、照片、連結 | 個人資料 | 直接改 → **Save** |

圖片可以直接在表單裡上傳，會存到 `assets/images/`。

## 方法二：直接在 GitHub 網頁上改

所有內容都在 `_data` 資料夾和 `_posts` 資料夾：

```
_data/profile.yml       個人資料、自我介紹、學歷、聯絡方式、學術連結
_data/news.yml          首頁「近況」
_data/publications.yml  著作（期刊論文、研討會發表）
_data/awards.yml        榮譽與活動
_posts/                 部落格文章（一篇一個 .md 檔）
assets/images/          圖片
```

在 GitHub 上點開檔案 → 右上角鉛筆圖示 ✏️ → 修改 → **Commit changes**。

### 小提醒（YAML 格式）

- 每一筆資料以 `- ` 開頭，下面的欄位**要對齊縮排（兩個空白）**，照著上一筆複製貼上最安全
- 內容裡有英文冒號 `:` 的話，整段用雙引號包起來，例如 `title: "Green DEGs: Novel ..."`
- 不需要的欄位留 `""` 就好，網站上不會顯示

### 寫新文章

在 `_posts` 新增檔案，檔名格式：`年-月-日-英文代稱.md`，例如 `2027-03-15-acs-meeting.md`：

```markdown
---
title: 文章標題
date: 2027-03-15
cover: /assets/images/某張圖.jpg
excerpt: 一句話摘要，會顯示在文章列表
---

內文從這裡開始，空一行就是新段落。

## 小標題

![圖片說明](/assets/images/某張圖.jpg)
```

---

## 網站結構

| 頁面 | 內容 |
|---|---|
| 首頁 `/` | 照片、自我介紹、研究興趣、近況、代表著作、最新文章 |
| 著作 `/publications/` | 期刊論文、研討會發表（含摘要、BibTeX 自動產生） |
| 經歷 `/experience/` | 學歷、產學合作、榮譽與活動、聯絡方式 |
| 部落格 `/blog/` | 文章列表 |

網站使用 GitHub Pages 內建的 Jekyll 自動產生，不需要另外安裝任何東西。
想換顏色：改 `assets/css/style.css` 最上面 `:root` 裡的色碼。
