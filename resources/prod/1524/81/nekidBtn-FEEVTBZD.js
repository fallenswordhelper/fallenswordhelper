import{a as i}from"./chunk-VA3RCC36.js";import{a as k}from"./chunk-T6ER74W7.js";import"./chunk-WMET5VJL.js";import"./chunk-EJAPIT2N.js";import{a as x}from"./chunk-NQGCF6DA.js";import{a as v}from"./chunk-F2ZF3AQV.js";import"./chunk-SBKSJG7Z.js";import{a as c}from"./chunk-X5DGSHWJ.js";import{a as g}from"./chunk-ARZE2BDD.js";import"./chunk-MKW45GOR.js";import"./chunk-OELRUWUL.js";import{a as l}from"./chunk-IEZDQOE5.js";import{a as s}from"./chunk-KHQZO2PT.js";import"./chunk-WMUUSPIG.js";import{a as B}from"./chunk-ZIYY5ALA.js";import{a as o}from"./chunk-CF6OUIZ5.js";import{a}from"./chunk-MVADRWN3.js";import"./chunk-B42TQDRT.js";import"./chunk-EPL4X55B.js";import"./chunk-C6UQ3IWD.js";import{a as h}from"./chunk-RY6SJUY2.js";import"./chunk-F5F7ZRBL.js";import"./chunk-4LPHXEVA.js";import"./chunk-C6CNCMW2.js";import"./chunk-RLPGZCX6.js";import"./chunk-6TE7Y3DR.js";import{a as u}from"./chunk-SOFFOM3C.js";import"./chunk-PRUVPLE4.js";import"./chunk-YVFHCM2A.js";import{a as p}from"./chunk-3WYYB24O.js";import{a as d}from"./chunk-Q4WEZP4Z.js";import"./chunk-SYO7WFPA.js";import"./chunk-FNQX6KHV.js";import"./chunk-SARQWG4K.js";import"./chunk-7Q74Q23I.js";import"./chunk-B3OIOQDS.js";import"./chunk-7X7SMYZT.js";function n(t){return x({subcmd:"unequipitem",inventory_id:t})}function q(t){let e=v(t);return e?{e:{message:e},s:!1}:{s:!0}}function m(t){return h({cmd:"profile",subcmd:"unequipitem",inventory_id:t}).then(q)}function f(t){return g(n,m,t)}var r=0;function E(t,e){e&&e.s&&B("",t.parentNode)}function C(t){let e=p(/inventory_id=(?<id>\d+)/,t.href);e&&f(e).then(u(E,t))}function N(){c("profile","nekidBtn");let t=r.nextElementSibling;a("a",t).forEach(C)}function b(){let t=l({className:"fshCenter"}),e=k({className:"fshBl fshBls",textContent:"Nekid"});return i(t,"[ "),s(t,e),i(t," ]"),d(e,N),t}function y(){if(r=o("profileCombatSetDiv"),!r)return;let t=r.parentNode.nextElementSibling,e=b();o("profileRightColumn").replaceChild(e,t)}export{y as default};
//# sourceMappingURL=nekidBtn-FEEVTBZD.js.map
