// ==UserScript==
// @name        moneyforward.com / hidden unlinked account
// @version     1.0
// @author      ozelotdev
// @homepageURL https://github.com/ozelotdev/userscript/
// @downloadURL https://github.com/ozelotdev/userscript/raw/main/moneyforward.com/hidden-unlinked-account.user.user.js
// @match       https://moneyforward.com/accounts
// ==/UserScript==

document.querySelectorAll("#account-table tr").forEach((account) => {
  if (account.innerText.includes("取得を停止しています") === false) {
    return;
  }

  if (account.querySelector('input[disabled="disabled"]') === null) {
    return;
  }

  account.remove();
});
