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
// @version        _VER
// @downloadURL    _DLURL
// @grant          none
// @run-at         document-body
// ==/UserScript==

// No warranty expressed or implied. Use at your own risk.

// EVERYTHING MUST BE IN main()
async function fshMain(gmInfo) {
  const module = await import('_CALFJS');
  module.default('_VER', gmInfo);
}
// end of var main

const script = document.createElement('script');
script.textContent = `(${fshMain.toString()})("${encodeURIComponent(JSON.stringify(GM_info))}");`;
document.body.appendChild(script);
document.body.removeChild(script);
