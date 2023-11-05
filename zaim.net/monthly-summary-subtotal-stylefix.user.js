// ==UserScript==
// @name        zaim.net / monthly summary subtotal stylefix
// @version     1.0
// @author      ozelotdev
// @homepageURL https://github.com/ozelotdev/userscript/
// @downloadURL https://github.com/ozelotdev/userscript/raw/main/zaim.net/monthly-summary-subtotal-stylefix.user.js
// @match       https://zaim.net/summary/monthly_summary
// ==/UserScript==

document.querySelectorAll(".subtotal").forEach((el) => {
  el.style.backgroundColor = "#f5f5f5";
});
