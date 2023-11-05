// ==UserScript==
// @name siken.com / zen mode
// @version 1.0
// @author ozelotdev
// @homepageURL https://github.com/ozelotdev/userscript/
// @downloadURL https://github.com/ozelotdev/userscript/raw/main/siken.com/keyboard-shortcut.user.js
// @match https://www.itpassportsiken.com/ipkakomon.php
// @match https://www.itpassportsiken.com/kakomon/*/*.html
// @match https://www.sg-siken.com/sgkakomon.php
// @match https://www.sg-siken.com/kakomon/*/*.html
// @match https://www.fe-siken.com/fekakomon.php
// @match https://www.fe-siken.com/kakomon/*/*.html
// @match https://www.ap-siken.com/apkakomon.php
// @match https://www.ap-siken.com/kakomon/*/*.html
// @match https://www.pm-siken.com/pmkakomon.php
// @match https://www.pm-siken.com/kakomon/*/*.html
// @match https://www.nw-siken.com/nwkakomon.php
// @match https://www.nw-siken.com/kakomon/*/*.html
// @match https://www.db-siken.com/dbkakomon.php
// @match https://www.db-siken.com/kakomon/*/*.html
// @match https://www.sc-siken.com/sckakomon.php
// @match https://www.sc-siken.com/kakomon/*/*.html
// ==/UserScript==

document.querySelector("#headerWrap").remove();
document.querySelector("#headerMenuWrap").remove();
document.querySelector("#sideCol").remove();
document.querySelector("#footerWrap").remove();

const mainCol = document.querySelector("#mainCol");
mainCol.style.display = "block";
mainCol.style.width = "100%";
