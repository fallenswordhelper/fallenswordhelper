import{a as r}from"./chunk-BXDTTZDJ.js";import{a as B}from"./chunk-633OEY6F.js";import{a as c}from"./chunk-57PZ6XJI.js";import"./chunk-ZLI5KJBW.js";import"./chunk-EUBCJC2U.js";import"./chunk-UWAT3VA7.js";import{a as v}from"./chunk-YYZHVDZH.js";import"./chunk-VI3RZM5G.js";import{a as g}from"./chunk-WV4YXE4F.js";import"./chunk-WPRJK6Q2.js";import{a as x}from"./chunk-PJ32ASZ7.js";import"./chunk-F5QOVYT2.js";import{a as s}from"./chunk-R5ZZQ5HH.js";import{a as u}from"./chunk-XQ3ZEJ26.js";import"./chunk-PO34EML4.js";import"./chunk-QFSH2B2J.js";import"./chunk-2PFHY365.js";import{a as E}from"./chunk-QVQPQPMX.js";import"./chunk-ZDFDMUO4.js";import"./chunk-2V5OQ7JE.js";import"./chunk-GGKSIQST.js";import"./chunk-JSWEJZHY.js";import"./chunk-JZLUF437.js";import{a as p}from"./chunk-4OJTKSB2.js";import{a as d}from"./chunk-G3O526VI.js";import"./chunk-GHQYBWLT.js";import{a as l}from"./chunk-N2KVYLIG.js";import"./chunk-PKDG64MH.js";import{a as n}from"./chunk-2B42SRXB.js";import"./chunk-3IGXKFMQ.js";import"./chunk-TDNJGM62.js";import"./chunk-HAINOYE5.js";import"./chunk-AN5TC666.js";import"./chunk-B7PLPUHK.js";import"./chunk-YNXRNCRL.js";import"./chunk-7DPOBF7C.js";import{a as f}from"./chunk-DEDCEYVR.js";function q(e){let t=v(e);return t?{e:{message:t},s:!1}:{s:!0}}function i(e){return x({cmd:"profile",subcmd:"unequipitem",inventory_id:e}).then(q)}function m(e){return E({subcmd:"unequipitem",inventory_id:e})}function a(e){return g(m,i,e)}var o;function h(e,t){t&&t.s&&p("",e.parentNode)}function k(e){let t=/inventory_id=(\d+)/.exec(e.href)[1];t&&a(t).then(f(h,e))}function y(){l("profile","nekidBtn");let e=o.nextElementSibling;c("a",e).forEach(k)}function D(){let e=u({className:"fshCenter"}),t=B({className:"fshBl fshBls",textContent:"Nekid"});return r(e,"[ "),s(e,t),r(e," ]"),d(t,y),e}function I(){if(o=n("profileCombatSetDiv"),!o)return;let e=o.parentNode.nextElementSibling,t=D();n("profileRightColumn").replaceChild(t,e)}export{I as default};
//# sourceMappingURL=nekidBtn-YSH3O3VI.js.map
