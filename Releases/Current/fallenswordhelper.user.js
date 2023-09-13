// ==UserScript==
// @name           FallenSwordHelper
// @namespace      terrasoft.gr
// @description    Fallen Sword Helper
// @include        https://www.fallensword.com/*
// @include        https://guide.fallensword.com/*
// @include        https://fallensword.com/*
// @include        https://*.fallensword.com/*
// @include        https://local.huntedcow.com/fallensword/*
// @exclude        https://forum.fallensword.com/*
// @exclude        https://wiki.fallensword.com/*
// @exclude        https://www.fallensword.com/app.php*
// @exclude        https://www.fallensword.com/fetchdata.php*
// @version        1524
// @downloadURL    https://fallenswordhelper.github.io/fallenswordhelper/Releases/Current/fallenswordhelper.user.js
// @grant          none
// @run-at         document-body
// ==/UserScript==

// No warranty expressed or implied. Use at your own risk.

// EVERYTHING MUST BE IN main()
async function fshMain(gmInfo) {
  const module = await import('https://fallenswordhelper.github.io/fallenswordhelper/resources/prod/1524/calfSystem.min.js');
  module.default('1524', gmInfo);
}
// end of var main

const script = document.createElement('script');
script.textContent = `(${fshMain.toString()})("${encodeURIComponent(JSON.stringify(GM_info))}");`;
document.body.appendChild(script);
document.body.removeChild(script);
