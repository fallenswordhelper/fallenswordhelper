import{b as R,c as z,d as G,e as J,g as K}from"./chunk-AVGLWWOW.js";import"./chunk-4WNHCVQ6.js";import"./chunk-V4AXZAFC.js";import"./chunk-LZAO3MKM.js";import"./chunk-F56D37LN.js";import"./chunk-LJADHMCS.js";import{a as Q}from"./chunk-QEGHLHZU.js";import"./chunk-H3UI3CHJ.js";import"./chunk-HWPLYWAJ.js";import"./chunk-U5QXLEFQ.js";import{a as P}from"./chunk-AR6EUPJF.js";import"./chunk-G6SFDQ22.js";import"./chunk-55JYMPLZ.js";import{a as L}from"./chunk-Q3HCQCDP.js";import{a as f}from"./chunk-OS4RBOWH.js";import{a as F}from"./chunk-MQSDDZVA.js";import{a as H}from"./chunk-4B4RSO73.js";import"./chunk-6TFYAOUC.js";import"./chunk-XX54RQJZ.js";import"./chunk-M34ZVTSL.js";import"./chunk-SWN5GBXU.js";import"./chunk-BDFQCMKF.js";import"./chunk-4EPHHB5V.js";import"./chunk-7AADGAEQ.js";import"./chunk-VNRHH6ZI.js";import"./chunk-2BRTHILW.js";import"./chunk-AOXRIH6C.js";import{C as l,N as S,O as N,U as j,V as q,a as p,ba as T,ca as B,d as h,da as V,ea as v,fa as b,r as w,s as a,t as d,v as u,w as x,z as M}from"./chunk-YOLLD3EX.js";import"./chunk-NQGCF6DA.js";import"./chunk-F2ZF3AQV.js";import"./chunk-SBKSJG7Z.js";import"./chunk-ZCOVPDKX.js";import"./chunk-WKDTOFNZ.js";import{a as c}from"./chunk-X5DGSHWJ.js";import"./chunk-ARZE2BDD.js";import"./chunk-MKW45GOR.js";import"./chunk-OELRUWUL.js";import"./chunk-DG3IU753.js";import"./chunk-JXJ4P3KT.js";import"./chunk-HOFZHHFM.js";import"./chunk-DHIC45XN.js";import{a as D}from"./chunk-VIE5ZNPH.js";import"./chunk-OKCEI7IO.js";import"./chunk-U2LW7DMT.js";import"./chunk-CF6OUIZ5.js";import"./chunk-DKRMOVVB.js";import"./chunk-RVROEHXL.js";import{a as A}from"./chunk-EPL4X55B.js";import"./chunk-C6UQ3IWD.js";import"./chunk-RY6SJUY2.js";import"./chunk-F5F7ZRBL.js";import"./chunk-4LPHXEVA.js";import"./chunk-C6CNCMW2.js";import"./chunk-RLPGZCX6.js";import{a as E}from"./chunk-6TE7Y3DR.js";import"./chunk-JNLLRLHL.js";import"./chunk-IPQXTCLP.js";import"./chunk-3FPE4KHJ.js";import{a as s}from"./chunk-SOFFOM3C.js";import"./chunk-C56KTMKY.js";import"./chunk-J47S26DS.js";import{a as I}from"./chunk-2YJNQKIS.js";import"./chunk-2DIHMK5L.js";import"./chunk-PRUVPLE4.js";import"./chunk-YVFHCM2A.js";import"./chunk-3WYYB24O.js";import"./chunk-Q4WEZP4Z.js";import{b as y}from"./chunk-SYO7WFPA.js";import"./chunk-FNQX6KHV.js";import"./chunk-SARQWG4K.js";import"./chunk-7Q74Q23I.js";import"./chunk-B3OIOQDS.js";import"./chunk-7X7SMYZT.js";function W(t){let e,o,r,i;return{c(){e=u("button"),e.textContent="Check All",o=x("\xA0"),l(e,"class","custombutton svelte-1recp8w"),l(e,"type","button")},m(n,m){a(n,e,m),a(n,o,m),r||(i=M(e,"click",t[0]),r=!0)},p,i:p,o:p,d(n){n&&d(e),n&&d(o),r=!1,i()}}}function X(t){let e=S();function o(){c("storeitems","Check All"),e("checkall")}return[o]}var k=class extends b{constructor(e){super(),v(this,e,X,W,h,{})}},O=k;function Y(t){let e,o,r,i;return r=new H({props:{folders:t[0].folders}}),r.$on("filter",t[1]),{c(){e=u("tr"),o=u("td"),T(r.$$.fragment),l(o,"colspan","3"),l(o,"class","svelte-1kpx3t5"),l(e,"class","fshCenter")},m(n,m){a(n,e,m),w(e,o),B(r,o,null),i=!0},p(n,[m]){let $={};m&1&&($.folders=n[0].folders),r.$set($)},i(n){i||(j(r.$$.fragment,n),i=!0)},o(n){q(r.$$.fragment,n),i=!1},d(n){n&&d(e),V(r)}}}function Z(t,e,o){let{inv:r={folders:{}}}=e;function i(n){N.call(this,t,n)}return t.$$set=n=>{"inv"in n&&o(0,r=n.inv)},[r,i]}var g=class extends b{constructor(e){super(),v(this,e,Z,Y,h,{inv:0})}},U=g;function ee(t,e){return new U({anchor:e,props:{inv:t},target:e.parentNode})}function te(t,e,o){o.checked=!1;let r=F(o),i=t.items[o.value].folder_id,n=e!==-2&&e!==i;f(r,n),f(r.nextElementSibling,n)}function oe(t,e){c("storeitems","Filter Folder"),Q([3,R(),0,s(te,t,Number(e.detail))])}function _(t,e){ee(t,e).$on("filter",s(oe,t))}function re(t,e){let o=[{id:"-1",name:"Main"},...E(t.folders).map(([r,i])=>({id:r,name:i}))];return new G({anchor:e,props:{folders:o},target:e.parentNode})}function ne(t,e,o){t.items[o].folder_id=Number(e)}function ie(t,e,o){o.checked=!1,ne(t,e,o.value);let r=F(o);f(r,!0),f(r.nextElementSibling,!0)}async function se(t,e,o){(await z(e,o.map(i=>i.value))).s&&o.forEach(s(ie,t,e))}function le(t,e){c("storeitems","Move to Folder");let o=D('[name="storeIndex[]"]:checked');L(30,o).forEach(s(se,t,e.detail))}function C(t,e){re(t,e).$on("move",s(le,t))}async function me(){let t=await P();if(!t.folders)return;let[e]=document.forms;_(t,e),C(t,e)}function ce(){J().forEach(t=>{t.checked=!t.disabled&&!t.checked})}function fe(){let[t]=A(document.forms[0].elements).filter(o=>o.type==="submit");new O({anchor:t,target:t.parentNode}).$on("checkall",ce)}function ae(){I()&&y("enableFolderFilter")&&me(),fe(),K()}export{ae as default};
//# sourceMappingURL=storeitems-WLNIGTZY.js.map