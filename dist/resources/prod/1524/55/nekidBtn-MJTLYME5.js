import{a as r}from"./chunk-D6XBZTM7.js";import{a as x}from"./chunk-RAXXQ6UC.js";import{a as c}from"./chunk-MF5BZBCN.js";import"./chunk-EQNCUII2.js";import"./chunk-5NIAUQBB.js";import"./chunk-FIYDSWPU.js";import{a as s}from"./chunk-ZD6KR2JJ.js";import{a as u}from"./chunk-TV5KWDG5.js";import"./chunk-EXPYEXEP.js";import{a as v}from"./chunk-IN6RVGDO.js";import{a as g}from"./chunk-LJSNN3UL.js";import"./chunk-375QMJKQ.js";import{a as E}from"./chunk-ZACGLTFX.js";import"./chunk-QJQL33BB.js";import"./chunk-FMNM33OL.js";import"./chunk-DPUM55LY.js";import{a as B}from"./chunk-CJ5MYL4D.js";import"./chunk-BPJKI26M.js";import"./chunk-7FXPMHZ5.js";import"./chunk-TUWDUCWH.js";import"./chunk-TEW6YNEY.js";import{a as p}from"./chunk-BUYHT5WE.js";import{a as d}from"./chunk-BXVF4M5G.js";import"./chunk-SNSTWQSS.js";import{a as l}from"./chunk-LFXZGYGZ.js";import"./chunk-B5XQQNQZ.js";import{a as n}from"./chunk-OCPSJVCN.js";import"./chunk-NIYIBTJZ.js";import"./chunk-V5W6AOGE.js";import"./chunk-LFCR6ZTM.js";import"./chunk-CN4P2KLK.js";import"./chunk-XJX3OTSZ.js";import"./chunk-GUUYKSUL.js";import"./chunk-D6HZ4P35.js";import"./chunk-E72VSDOE.js";import"./chunk-U4WGNCSF.js";import{a as f}from"./chunk-3XQ73JET.js";function q(e){let t=g(e);return t?{e:{message:t},s:!1}:{s:!0}}function i(e){return B({cmd:"profile",subcmd:"unequipitem",inventory_id:e}).then(q)}function m(e){return v({subcmd:"unequipitem",inventory_id:e})}function a(e){return E(m,i,e)}var o;function h(e,t){t&&t.s&&p("",e.parentNode)}function k(e){let t=/inventory_id=(\d+)/.exec(e.href)[1];t&&a(t).then(f(h,e))}function y(){l("profile","nekidBtn");let e=o.nextElementSibling;c("a",e).forEach(k)}function I(){let e=u({className:"fshCenter"}),t=x({className:"fshBl fshBls",textContent:"Nekid"});return r(e,"[ "),s(e,t),r(e," ]"),d(t,y),e}function D(){if(o=n("profileCombatSetDiv"),!o)return;let e=o.parentNode.nextElementSibling,t=I();n("profileRightColumn").replaceChild(t,e)}export{D as default};
//# sourceMappingURL=nekidBtn-MJTLYME5.js.map
