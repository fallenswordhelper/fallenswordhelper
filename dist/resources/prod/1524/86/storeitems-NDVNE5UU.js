import{b as Q,c as R,d as z,e as G,f as J,h as K}from"./chunk-LASHY2EN.js";import"./chunk-JFAXQA6N.js";import"./chunk-ABB6DOLH.js";import"./chunk-QXZA4FY2.js";import"./chunk-SHGJ2CMX.js";import"./chunk-Q2OGUZ22.js";import{a as P}from"./chunk-2HCLSUIF.js";import"./chunk-NMD3LEPY.js";import"./chunk-2B4NNUOJ.js";import"./chunk-LQD3HX2F.js";import"./chunk-LR27HOEZ.js";import"./chunk-P675CNE6.js";import{a as f}from"./chunk-F5TKB4DO.js";import{a as L}from"./chunk-J33OX3Y5.js";import{a as F}from"./chunk-YPLJMAPK.js";import"./chunk-HKXPROZQ.js";import"./chunk-G46EHOXE.js";import{a as H}from"./chunk-AN4PMKRO.js";import"./chunk-WVF3JUJJ.js";import"./chunk-C2S7QRQI.js";import"./chunk-IX3WKT6J.js";import"./chunk-OJQUNC32.js";import"./chunk-RUXMRPWO.js";import"./chunk-4ISOJ4PK.js";import"./chunk-JAU6G2IH.js";import"./chunk-L3GFMSQU.js";import"./chunk-5OE6VIM4.js";import"./chunk-L7G65KBU.js";import"./chunk-ISOS4C4V.js";import"./chunk-64UJOAXK.js";import"./chunk-RYZO2JAI.js";import"./chunk-DWCINR7J.js";import"./chunk-LR2SCTKO.js";import"./chunk-U2TRZZ3E.js";import"./chunk-3PHXQQEO.js";import"./chunk-FYVHQY7A.js";import"./chunk-XR7PDYD5.js";import"./chunk-M4ZWNXVF.js";import"./chunk-5S2Z7IMU.js";import"./chunk-QML5ST72.js";import"./chunk-HTCWUR6R.js";import"./chunk-6RGWX5PS.js";import"./chunk-GFNJ36RU.js";import"./chunk-J5ZL3IGX.js";import{a as E}from"./chunk-5Q7RHZGG.js";import"./chunk-HJS3N6S5.js";import"./chunk-QIECT37T.js";import"./chunk-26MRNMTX.js";import"./chunk-RUYWS2HZ.js";import{a as I}from"./chunk-N4PL4CWN.js";import"./chunk-LEYSBAA7.js";import"./chunk-ZAKOHFGC.js";import"./chunk-NZVVD5CP.js";import{C as l,N,O as j,U as q,V as T,a as p,ba as B,ca as V,d as h,da as D,ea as v,fa as b,r as x,s as a,t as d,v as u,w as M,z as S}from"./chunk-3HLYMUH7.js";import"./chunk-PGTVN5WS.js";import"./chunk-7GQUMFYA.js";import{a as c}from"./chunk-MW3ALH4C.js";import{a as w}from"./chunk-JXYF35XK.js";import"./chunk-WISUPKUO.js";import{a as A}from"./chunk-WXBVGAKI.js";import"./chunk-B4FGMBGY.js";import"./chunk-QO35KWHZ.js";import{a as s}from"./chunk-RM2JYA44.js";import"./chunk-YCZNYBUF.js";import"./chunk-V5RRAW3X.js";import"./chunk-7Q474OAN.js";import{b as y}from"./chunk-HSRR66FY.js";import"./chunk-F3NA4W52.js";import"./chunk-GVXOGB5A.js";import"./chunk-HQDTBPDS.js";import"./chunk-VKUT7MVK.js";import"./chunk-LIIL5MFW.js";function W(t){let e,o,r,i;return{c(){e=u("button"),e.textContent="Check All",o=M("\xA0"),l(e,"class","custombutton svelte-1recp8w"),l(e,"type","button")},m(n,m){a(n,e,m),a(n,o,m),r||(i=S(e,"click",t[0]),r=!0)},p,i:p,o:p,d(n){n&&d(e),n&&d(o),r=!1,i()}}}function X(t){let e=N();function o(){c("storeitems","Check All"),e("checkall")}return[o]}var k=class extends b{constructor(e){super(),v(this,e,X,W,h,{})}},O=k;function Y(t){let e,o,r,i;return r=new H({props:{folders:t[0].folders}}),r.$on("filter",t[1]),{c(){e=u("tr"),o=u("td"),B(r.$$.fragment),l(o,"colspan","3"),l(o,"class","svelte-1kpx3t5"),l(e,"class","fshCenter")},m(n,m){a(n,e,m),x(e,o),V(r,o,null),i=!0},p(n,[m]){let $={};m&1&&($.folders=n[0].folders),r.$set($)},i(n){i||(q(r.$$.fragment,n),i=!0)},o(n){T(r.$$.fragment,n),i=!1},d(n){n&&d(e),D(r)}}}function Z(t,e,o){let{inv:r={folders:{}}}=e;function i(n){j.call(this,t,n)}return t.$$set=n=>{"inv"in n&&o(0,r=n.inv)},[r,i]}var g=class extends b{constructor(e){super(),v(this,e,Z,Y,h,{inv:0})}},U=g;function ee(t,e){return new U({anchor:e,props:{inv:t},target:e.parentNode})}function te(t,e,o){o.checked=!1;let r=F(o),i=t.items[o.value].folder_id,n=e!==-2&&e!==i;f(r,n),f(r.nextElementSibling,n)}function oe(t,e){c("storeitems","Filter Folder"),P([3,Q(),0,s(te,t,Number(e.detail))])}function _(t,e){ee(t,e).$on("filter",s(oe,t))}function re(t,e){let o=[{id:"-1",name:"Main"},...E(t.folders).map(([r,i])=>({id:r,name:i}))];return new z({anchor:e,props:{folders:o},target:e.parentNode})}function ne(t,e,o){t.items[o].folder_id=Number(e)}function ie(t,e,o){o.checked=!1,ne(t,e,o.value);let r=F(o);f(r,!0),f(r.nextElementSibling,!0)}async function se(t,e,o){(await R(e,o.map(i=>i.value))).s&&o.forEach(s(ie,t,e))}function le(t,e){c("storeitems","Move to Folder");let o=w('[name="storeIndex[]"]:checked');L(30,o).forEach(s(se,t,e.detail))}function C(t,e){re(t,e).$on("move",s(le,t))}async function me(){let t=await J();if(!t.folders)return;let[e]=document.forms;_(t,e),C(t,e)}function ce(){G().forEach(t=>{t.checked=!t.disabled&&!t.checked})}function fe(){let[t]=A(document.forms[0].elements).filter(o=>o.type==="submit");new O({anchor:t,target:t.parentNode}).$on("checkall",ce)}function ae(){I()&&y("enableFolderFilter")&&me(),fe(),K()}export{ae as default};
//# sourceMappingURL=storeitems-NDVNE5UU.js.map
