import{a as i}from"./chunk-HJW4AAKJ.js";import{a as k}from"./chunk-X7A5XKIN.js";import{a as g}from"./chunk-DBGON5DJ.js";import{a as v}from"./chunk-NRLNCZXP.js";import"./chunk-VUEGQZWA.js";import{a as h}from"./chunk-SRJJLYDL.js";import"./chunk-VUSAQDTJ.js";import"./chunk-QP2MBTPU.js";import{a as l}from"./chunk-UISE34LJ.js";import{a as s}from"./chunk-RPUEVZVZ.js";import"./chunk-TSPN45E2.js";import{a as B}from"./chunk-DA7MQ2AW.js";import{a as o}from"./chunk-UKCKIFDS.js";import{a}from"./chunk-PGEAU7BE.js";import"./chunk-RPQRAYS7.js";import"./chunk-FWZSNZAY.js";import{a as x}from"./chunk-4VG4DFKD.js";import"./chunk-EFYYJBIY.js";import"./chunk-DXTBWQDH.js";import"./chunk-Y25KTRBX.js";import"./chunk-C5OL3C5E.js";import{a as d}from"./chunk-5FY3IDHS.js";import"./chunk-DEEEN4LX.js";import"./chunk-RYN2ZACS.js";import{a as c}from"./chunk-JHXBLTXS.js";import"./chunk-DPQVBB2M.js";import"./chunk-YIUTYHR2.js";import{a as u}from"./chunk-PDKME2CZ.js";import"./chunk-S2QHLOQ6.js";import"./chunk-ZLYAP3OF.js";import{a as p}from"./chunk-W5N63RWR.js";import"./chunk-5P435J5Q.js";import"./chunk-PJBH3ZC7.js";import"./chunk-GHLTWNNP.js";import"./chunk-JLE65JRD.js";import"./chunk-C3WFXZUW.js";import"./chunk-TM6O52J7.js";function n(t){return g({subcmd:"unequipitem",inventory_id:t})}function q(t){let e=v(t);return e?{e:{message:e},s:!1}:{s:!0}}function m(t){return x({cmd:"profile",subcmd:"unequipitem",inventory_id:t}).then(q)}function f(t){return h(n,m,t)}var r=0;function E(t,e){e&&e.s&&B("",t.parentNode)}function C(t){let e=p(/inventory_id=(?<id>\d+)/,t.href);e&&f(e).then(u(E,t))}function N(){c("profile","nekidBtn");let t=r.nextElementSibling;a("a",t).forEach(C)}function b(){let t=l({className:"fshCenter"}),e=k({className:"fshBl fshBls",textContent:"Nekid"});return i(t,"[ "),s(t,e),i(t," ]"),d(e,N),t}function y(){if(r=o("profileCombatSetDiv"),!r)return;let t=r.parentNode.nextElementSibling;if(!t)return;let e=b();o("profileRightColumn").replaceChild(e,t)}export{y as default};
//# sourceMappingURL=nekidBtn-OGA6LY5S.js.map
