import{a as i}from"./chunk-ZJSHMI5B.js";import{a as k}from"./chunk-SGALRFNE.js";import{a as g}from"./chunk-2KSJFNPR.js";import{a as v}from"./chunk-24UDG3FH.js";import"./chunk-GP5AV6MD.js";import{a as h}from"./chunk-TWHHUG4E.js";import"./chunk-DU4LUWGY.js";import"./chunk-N4PCIVE3.js";import{a as l}from"./chunk-NBYXTQFH.js";import{a as s}from"./chunk-XVTH24AL.js";import"./chunk-5AWGL262.js";import{a as B}from"./chunk-ACOFHTYC.js";import{a as o}from"./chunk-RVP3BZF7.js";import{a as u}from"./chunk-NLWOAVHY.js";import"./chunk-F5Q5KOPJ.js";import"./chunk-BMHVDIFE.js";import{a as x}from"./chunk-XNL3JTED.js";import"./chunk-HNXEOKKJ.js";import"./chunk-WLWXTJVR.js";import"./chunk-YYW2XVVC.js";import"./chunk-LGXHSUMA.js";import{a as d}from"./chunk-HCQKHTWX.js";import"./chunk-S5SWZJQ4.js";import"./chunk-MEWLLVXN.js";import{a as c}from"./chunk-RIAQP6AM.js";import"./chunk-RGSHZW7Q.js";import"./chunk-232WRRJZ.js";import{a}from"./chunk-OQC4RYIZ.js";import"./chunk-WGISVX7D.js";import"./chunk-PC7TOLHT.js";import{a as p}from"./chunk-NVWIQHSW.js";import"./chunk-AVWEVNGS.js";import"./chunk-6C22U5JX.js";import"./chunk-VSTJBSW7.js";import"./chunk-3DLQUZR2.js";import"./chunk-BUBKPU26.js";import"./chunk-4P22QABU.js";function n(t){return g({subcmd:"unequipitem",inventory_id:t})}function q(t){let e=v(t);return e?{e:{message:e},s:!1}:{s:!0}}function m(t){return x({cmd:"profile",subcmd:"unequipitem",inventory_id:t}).then(q)}function f(t){return h(n,m,t)}var r=0;function E(t,e){e&&e.s&&B("",t.parentNode)}function C(t){let e=p(/inventory_id=(?<id>\d+)/,t.href);e&&f(e).then(a(E,t))}function N(){c("profile","nekidBtn");let t=r.nextElementSibling;u("a",t).forEach(C)}function b(){let t=l({className:"fshCenter"}),e=k({className:"fshBl fshBls",textContent:"Nekid"});return i(t,"[ "),s(t,e),i(t," ]"),d(e,N),t}function y(){if(r=o("profileCombatSetDiv"),!r)return;let t=r.parentNode.nextElementSibling;if(!t)return;let e=b();o("profileRightColumn").replaceChild(e,t)}export{y as default};
//# sourceMappingURL=nekidBtn-EFBUK7ZW.js.map
