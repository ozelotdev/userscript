// ==UserScript==
// @name musasi.jp / keyboard shortcut
// @version 1.0
// @author ozelotdev
// @homepageURL https://github.com/ozelotdev/userscript/
// @downloadURL https://github.com/ozelotdev/userscript/raw/main/musasi.jp/keyboard-shortcut.user.js
// @match https://www.musasi.jp/question/*.html
// ==/UserScript==

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "1":
      document.getElementsByClassName("btn_true")[0].click();
      break;
    case "2":
      document.getElementsByClassName("btn_false")[0].click();
      break;
    case "3":
      document.getElementById("btn_unsure").click();
      break;
    case "Enter":
      document.getElementById("btn_nextQuestion").click();
      break;
  }
});
