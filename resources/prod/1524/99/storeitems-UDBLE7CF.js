import{b as Q,c as R,d as z,e as G,f as J,h as K}from"./chunk-CPPSMBKH.js";import"./chunk-D7IG7UJJ.js";import"./chunk-DLSZOOUS.js";import"./chunk-FM3QW7VX.js";import"./chunk-WA3H7ER5.js";import"./chunk-SPJCMGGN.js";import{a as P}from"./chunk-Z5EERCZ3.js";import"./chunk-ZRKB3GUT.js";import"./chunk-ZFZOAJ2A.js";import"./chunk-QM7CXXZU.js";import"./chunk-ZKVLRAVK.js";import"./chunk-6BS3WSSC.js";import{a as f}from"./chunk-LJXDSEJM.js";import{a as L}from"./chunk-S56GVATQ.js";import{a as F}from"./chunk-MIFA5OAH.js";import"./chunk-2WDG4YTT.js";import"./chunk-5VW74BYB.js";import{a as H}from"./chunk-BVLSYDNU.js";import"./chunk-K3NFH5JU.js";import"./chunk-AU7MCEIK.js";import"./chunk-DRVHXDBX.js";import"./chunk-RQFQSBXN.js";import"./chunk-GS6VXPUV.js";import"./chunk-R6627LCS.js";import"./chunk-2PJZ6D5W.js";import"./chunk-P5TR4C7O.js";import"./chunk-ENJPFQDL.js";import"./chunk-FLBDELZS.js";import"./chunk-3JIGWNI6.js";import"./chunk-JQSGGOG4.js";import"./chunk-WEOKG4DE.js";import"./chunk-V4X4HJXK.js";import"./chunk-OZO3C2DW.js";import"./chunk-GMLTBP5U.js";import"./chunk-MVLZ5DIF.js";import"./chunk-RLMEWYFJ.js";import"./chunk-R27ZUPLV.js";import"./chunk-Q4ISSEWQ.js";import"./chunk-N3BAHO2U.js";import"./chunk-MCKCLPTM.js";import"./chunk-HDDSTVDW.js";import"./chunk-3M4JV256.js";import"./chunk-3VGCM7V6.js";import{a as B}from"./chunk-5AMVPEUS.js";import"./chunk-BSRRLYDA.js";import"./chunk-EEOI3QHS.js";import"./chunk-E5RHLETX.js";import"./chunk-XKHKWWUO.js";import"./chunk-BKQ5B4GS.js";import"./chunk-DRO6BEBO.js";import"./chunk-U2RDL7AF.js";import{a as V}from"./chunk-YERAUQ3J.js";import"./chunk-OC2AAQPF.js";import"./chunk-KDMA4L6I.js";import{b as y}from"./chunk-5IFOIBKY.js";import"./chunk-LGYGKPKS.js";import"./chunk-5P222UOI.js";import{C as I,F as s,U as w,V as x,a as p,aa as M,ba as S,e as h,ka as N,la as j,ma as q,na as v,oa as b,u as A,v as a,w as d,y as u,z as E}from"./chunk-FYI3FYOY.js";import"./chunk-XJTFL7TK.js";import"./chunk-SAUPNLY3.js";import{a as c}from"./chunk-5SYR2ZZN.js";import{a as D}from"./chunk-A4HY7BPZ.js";import"./chunk-XR4XHCV2.js";import{a as T}from"./chunk-VX5V3MQE.js";import"./chunk-U5QRCCLA.js";import"./chunk-C4N36YS5.js";import{a as l}from"./chunk-DG6P646J.js";import"./chunk-K4LSLGQK.js";import"./chunk-MC4TDBQ5.js";import"./chunk-OXVY43H4.js";import"./chunk-HN4Q5DUC.js";import"./chunk-QDZWRTTK.js";import"./chunk-WWWWNWRL.js";function W(t){let e,o,r,i;return{c(){e=u("button"),e.textContent="Check All",o=E("\xA0"),s(e,"class","custombutton svelte-1recp8w"),s(e,"type","button")},m(n,m){a(n,e,m),a(n,o,m),r||(i=I(e,"click",t[0]),r=!0)},p,i:p,o:p,d(n){n&&d(e),n&&d(o),r=!1,i()}}}function X(t){let e=w();function o(){c("storeitems","Check All"),e("checkall")}return[o]}var k=class extends b{constructor(e){super(),v(this,e,X,W,h,{})}},O=k;function Y(t){let e,o,r,i;return r=new H({props:{folders:t[0].folders}}),r.$on("filter",t[1]),{c(){e=u("tr"),o=u("td"),N(r.$$.fragment),s(o,"colspan","3"),s(o,"class","svelte-1kpx3t5"),s(e,"class","fshCenter")},m(n,m){a(n,e,m),A(e,o),j(r,o,null),i=!0},p(n,[m]){let $={};m&1&&($.folders=n[0].folders),r.$set($)},i(n){i||(M(r.$$.fragment,n),i=!0)},o(n){S(r.$$.fragment,n),i=!1},d(n){n&&d(e),q(r)}}}function Z(t,e,o){let{inv:r={folders:{}}}=e;function i(n){x.call(this,t,n)}return t.$$set=n=>{"inv"in n&&o(0,r=n.inv)},[r,i]}var g=class extends b{constructor(e){super(),v(this,e,Z,Y,h,{inv:0})}},U=g;function ee(t,e){return new U({anchor:e,props:{inv:t},target:e.parentNode})}function te(t,e,o){o.checked=!1;let r=F(o),i=t.items[o.value].folder_id,n=e!==-2&&e!==i;f(r,n),f(r.nextElementSibling,n)}function oe(t,e){c("storeitems","Filter Folder"),P([3,Q(),0,l(te,t,Number(e.detail))])}function _(t,e){ee(t,e).$on("filter",l(oe,t))}function re(t,e){let o=[{id:"-1",name:"Main"},...B(t.folders).map(([r,i])=>({id:r,name:i}))];return new z({anchor:e,props:{folders:o},target:e.parentNode})}function ne(t,e,o){t.items[o].folder_id=Number(e)}function ie(t,e,o){o.checked=!1,ne(t,e,o.value);let r=F(o);f(r,!0),f(r.nextElementSibling,!0)}async function se(t,e,o){(await R(e,o.map(i=>i.value))).s&&o.forEach(l(ie,t,e))}function le(t,e){c("storeitems","Move to Folder");let o=D('[name="storeIndex[]"]:checked');L(30,o).forEach(l(se,t,e.detail))}function C(t,e){re(t,e).$on("move",l(le,t))}async function me(){let t=await J();if(!t.folders)return;let[e]=document.forms;_(t,e),C(t,e)}function ce(){G().forEach(t=>{t.checked=!t.disabled&&!t.checked})}function fe(){let[t]=T(document.forms[0].elements).filter(o=>o.type==="submit");new O({anchor:t,target:t.parentNode}).$on("checkall",ce)}function ae(){V()&&y("enableFolderFilter")&&me(),fe(),K()}export{ae as default};
//# sourceMappingURL=storeitems-UDBLE7CF.js.map
