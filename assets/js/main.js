// 圖片放大 + 複製 BibTeX（一般不需要修改）
(function () {
  var box = document.getElementById("lightbox");

  function openImage(src, caption) {
    if (!box || typeof box.showModal !== "function") { window.open(src, "_blank"); return; }
    box.querySelector("img").src = src;
    box.querySelector("img").alt = caption || "";
    box.querySelector(".lightbox-caption").textContent = caption || "";
    box.showModal();
  }

  // 文章內的圖片也可以點擊放大
  document.querySelectorAll(".prose img").forEach(function (img) {
    if (!img.dataset.zoom) img.dataset.zoom = img.currentSrc || img.src;
    if (!img.dataset.caption) img.dataset.caption = img.alt;
  });

  document.addEventListener("click", function (e) {
    var zoom = e.target.closest("[data-zoom]");
    if (zoom) { e.preventDefault(); openImage(zoom.dataset.zoom, zoom.dataset.caption); return; }

    var copy = e.target.closest("[data-copy]");
    if (copy) {
      var tpl = document.getElementById(copy.dataset.copy);
      var text = tpl ? tpl.innerHTML.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">") : "";
      var label = copy.textContent;
      navigator.clipboard.writeText(text).then(function () {
        copy.textContent = "已複製 ✓";
        copy.classList.add("done");
        setTimeout(function () { copy.textContent = label; copy.classList.remove("done"); }, 1800);
      }, function () { window.prompt("請手動複製：", text); });
    }
  });

  // 點背景關閉
  if (box) {
    box.addEventListener("click", function (e) { if (e.target === box) box.close(); });
  }
})();
