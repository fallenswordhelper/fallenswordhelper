import{b as Q,c as R,d as z,e as G,f as J,h as K}from"./chunk-OGYFDTYZ.js";import"./chunk-VSYDJSCF.js";import"./chunk-YST2PS2O.js";import"./chunk-3B6P7YP4.js";import"./chunk-HTZ7JNTZ.js";import"./chunk-OODHIOJX.js";import{a as P}from"./chunk-I6ODEZJL.js";import"./chunk-TECORI6J.js";import"./chunk-FY3XU6M5.js";import"./chunk-3DYPIVHU.js";import"./chunk-GTOOW2SE.js";import"./chunk-MXVFCLDU.js";import{a as f}from"./chunk-MYTTOPEE.js";import{a as L}from"./chunk-EI35CQNF.js";import{a as F}from"./chunk-LGOCL6DR.js";import"./chunk-IRP5WSWS.js";import"./chunk-YSY4P2RT.js";import{a as H}from"./chunk-AUDAU55A.js";import"./chunk-DKPG2F3L.js";import"./chunk-YMCAJAIA.js";import"./chunk-ZRFLJ24M.js";import"./chunk-IJJZ4KIO.js";import"./chunk-X7QKS5QT.js";import"./chunk-DBGON5DJ.js";import"./chunk-NRLNCZXP.js";import"./chunk-VUEGQZWA.js";import"./chunk-SRJJLYDL.js";import"./chunk-VO3KFTFM.js";import"./chunk-RBXG55G6.js";import"./chunk-P4BHCUK7.js";import"./chunk-5SHHX74D.js";import"./chunk-F4ALFBQ7.js";import"./chunk-TO3ZPNNL.js";import"./chunk-EPZ5F5RD.js";import"./chunk-UNI23447.js";import"./chunk-7GWH2CT6.js";import"./chunk-UKCKIFDS.js";import"./chunk-CBGKHJZW.js";import"./chunk-FWZSNZAY.js";import"./chunk-4VG4DFKD.js";import"./chunk-EFYYJBIY.js";import"./chunk-DUL3ONJJ.js";import"./chunk-DXTBWQDH.js";import"./chunk-Y25KTRBX.js";import{a as E}from"./chunk-C5OL3C5E.js";import"./chunk-OUAWI7GT.js";import"./chunk-CEGFUXSK.js";import"./chunk-IPM72WAR.js";import"./chunk-4QCWA2KR.js";import{a as I}from"./chunk-N3IQY6XI.js";import"./chunk-YDFKUGEP.js";import"./chunk-5FY3IDHS.js";import"./chunk-5UHNJGH2.js";import{A as S,D as l,O as N,P as j,W as q,X as T,a as p,e as h,ea as B,fa as V,ga as D,ha as v,ia as b,s as x,t as a,u as d,w as u,x as M}from"./chunk-ZYLGT2XQ.js";import"./chunk-DEEEN4LX.js";import"./chunk-RYN2ZACS.js";import{a as c}from"./chunk-JHXBLTXS.js";import{a as w}from"./chunk-4QZL53LG.js";import"./chunk-OV3YZUE5.js";import{a as A}from"./chunk-DPQVBB2M.js";import"./chunk-YIUTYHR2.js";import"./chunk-HM2JVXT6.js";import{a as s}from"./chunk-PDKME2CZ.js";import"./chunk-S2QHLOQ6.js";import"./chunk-ZLYAP3OF.js";import"./chunk-W5N63RWR.js";import{b as y}from"./chunk-5P435J5Q.js";import"./chunk-PJBH3ZC7.js";import"./chunk-GHLTWNNP.js";import"./chunk-JLE65JRD.js";import"./chunk-C3WFXZUW.js";import"./chunk-TM6O52J7.js";function W(t){let e,o,r,i;return{c(){e=u("button"),e.textContent="Check All",o=M("\xA0"),l(e,"class","custombutton svelte-1recp8w"),l(e,"type","button")},m(n,m){a(n,e,m),a(n,o,m),r||(i=S(e,"click",t[0]),r=!0)},p,i:p,o:p,d(n){n&&d(e),n&&d(o),r=!1,i()}}}function X(t){let e=N();function o(){c("storeitems","Check All"),e("checkall")}return[o]}var k=class extends b{constructor(e){super(),v(this,e,X,W,h,{})}},O=k;function Y(t){let e,o,r,i;return r=new H({props:{folders:t[0].folders}}),r.$on("filter",t[1]),{c(){e=u("tr"),o=u("td"),B(r.$$.fragment),l(o,"colspan","3"),l(o,"class","svelte-1kpx3t5"),l(e,"class","fshCenter")},m(n,m){a(n,e,m),x(e,o),V(r,o,null),i=!0},p(n,[m]){let $={};m&1&&($.folders=n[0].folders),r.$set($)},i(n){i||(q(r.$$.fragment,n),i=!0)},o(n){T(r.$$.fragment,n),i=!1},d(n){n&&d(e),D(r)}}}function Z(t,e,o){let{inv:r={folders:{}}}=e;function i(n){j.call(this,t,n)}return t.$$set=n=>{"inv"in n&&o(0,r=n.inv)},[r,i]}var g=class extends b{constructor(e){super(),v(this,e,Z,Y,h,{inv:0})}},U=g;function ee(t,e){return new U({anchor:e,props:{inv:t},target:e.parentNode})}function te(t,e,o){o.checked=!1;let r=F(o),i=t.items[o.value].folder_id,n=e!==-2&&e!==i;f(r,n),f(r.nextElementSibling,n)}function oe(t,e){c("storeitems","Filter Folder"),P([3,Q(),0,s(te,t,Number(e.detail))])}function _(t,e){ee(t,e).$on("filter",s(oe,t))}function re(t,e){let o=[{id:"-1",name:"Main"},...E(t.folders).map(([r,i])=>({id:r,name:i}))];return new z({anchor:e,props:{folders:o},target:e.parentNode})}function ne(t,e,o){t.items[o].folder_id=Number(e)}function ie(t,e,o){o.checked=!1,ne(t,e,o.value);let r=F(o);f(r,!0),f(r.nextElementSibling,!0)}async function se(t,e,o){(await R(e,o.map(i=>i.value))).s&&o.forEach(s(ie,t,e))}function le(t,e){c("storeitems","Move to Folder");let o=w('[name="storeIndex[]"]:checked');L(30,o).forEach(s(se,t,e.detail))}function C(t,e){re(t,e).$on("move",s(le,t))}async function me(){let t=await J();if(!t.folders)return;let[e]=document.forms;_(t,e),C(t,e)}function ce(){G().forEach(t=>{t.checked=!t.disabled&&!t.checked})}function fe(){let[t]=A(document.forms[0].elements).filter(o=>o.type==="submit");new O({anchor:t,target:t.parentNode}).$on("checkall",ce)}function ae(){I()&&y("enableFolderFilter")&&me(),fe(),K()}export{ae as default};
//# sourceMappingURL=storeitems-AEK4C63E.js.map