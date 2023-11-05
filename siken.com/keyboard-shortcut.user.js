// ==UserScript==
// @name siken.com / keyboard shortcut
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

const selectAnswer = (index) => {
  document.querySelectorAll(".selectBtn")[index].click();
};

const scrollAnswerBox = () => {
  $("html")
    .stop()
    .animate({
      scrollTop: $(".answerBox").offset().top - 50,
    });
};

const isShowingKaisetu = () => {
  return document.querySelector("#kaisetsu").style.display === "block";
};

const selectNext = () => {
  document.querySelectorAll(".submit")[0].click();
};

document.addEventListener("keydown", (event) => {
  // 午後問題は対象外
  if (document.URL.match("pm*.html")) {
    return;
  }

  switch (event.key) {
    case "a":
    case "1":
      selectAnswer(0);
      scrollAnswerBox();
      break;
    case "i":
    case "2":
      selectAnswer(1);
      scrollAnswerBox();
      break;
    case "u":
    case "3":
      selectAnswer(2);
      scrollAnswerBox();
      break;
    case "e":
    case "4":
      selectAnswer(3);
      scrollAnswerBox();
      break;
    case "Enter":
      if (isShowingKaisetu()) {
        selectNext();
      }
  }
});
