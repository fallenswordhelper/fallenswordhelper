import{a as n}from"./chunk-OCZPEVMS.js";import{a as g}from"./chunk-V2UYDYEP.js";import{a as x}from"./chunk-7M4H5O4X.js";import{a as h}from"./chunk-EREM32XP.js";import"./chunk-WXTFQ2EX.js";import{a as v}from"./chunk-WJGEKWR5.js";import{a as B}from"./chunk-HPANGB4C.js";import"./chunk-AOUMBNX5.js";import"./chunk-DAGOHXEG.js";import"./chunk-AWJUUHCF.js";import"./chunk-RS7F7ZXV.js";import{a as c}from"./chunk-BBGQNVSZ.js";import{a as l}from"./chunk-BFPR54OB.js";import"./chunk-XBR44BTF.js";import{a as p}from"./chunk-6DXFGRHV.js";import"./chunk-BX4K6PYV.js";import"./chunk-65TDUWAS.js";import{a as d}from"./chunk-L64NM3TP.js";import"./chunk-NRWJMAHH.js";import"./chunk-K4B7GDYL.js";import"./chunk-KU6X3UZY.js";import"./chunk-WS7NDR34.js";import{a}from"./chunk-AXRQ5WVZ.js";import{a as o}from"./chunk-R6LOYYKU.js";import"./chunk-NNEMTXQK.js";import"./chunk-EEFLVRLB.js";import{a as u}from"./chunk-BCLTLFAS.js";import"./chunk-BVHFLUJI.js";import"./chunk-TRTGTDIN.js";import{a as s}from"./chunk-46ONZIIB.js";import"./chunk-S6LVOURD.js";import"./chunk-LXKLJ4E3.js";import"./chunk-VNX4IMNY.js";import"./chunk-KWOXJEE6.js";import"./chunk-GBEPYIIX.js";function k(e){let t=h(e);return t?{e:{message:t},s:!1}:{s:!0}}function i(e){return d({cmd:"profile",subcmd:"unequipitem",inventory_id:e}).then(k)}function m(e){return x({subcmd:"unequipitem",inventory_id:e})}function f(e){return B(m,i,e)}var r;function q(e,t){t&&t.s&&a("",e.parentNode)}function E(e){let t=/inventory_id=(\d+)/.exec(e.href)[1];t&&f(t).then(u(q,e))}function N(){v("profile","nekidBtn");let e=r.nextElementSibling;p("a",e).forEach(E)}function b(){let e=c({className:"fshCenter"}),t=g({className:"fshBl fshBls",textContent:"Nekid"});return n(e,"[ "),l(e,t),n(e," ]"),s(t,N),e}function y(){if(r=o("profileCombatSetDiv"),!r)return;let e=r.parentNode.nextElementSibling,t=b();o("profileRightColumn").replaceChild(t,e)}export{y as default};
//# sourceMappingURL=nekidBtn-5A5PJJ43.js.map