import{b as Q,c as R,d as z,e as G,f as J,h as K}from"./chunk-HRHTRUT4.js";import"./chunk-AN34KG43.js";import"./chunk-DWPWDKIS.js";import"./chunk-LNKMFLET.js";import"./chunk-SGH34L7E.js";import"./chunk-7Y4YWH2Z.js";import{a as P}from"./chunk-JTQOM6DC.js";import"./chunk-CWQ2N2YK.js";import"./chunk-6WHX4ZOR.js";import"./chunk-ABIM3ILR.js";import"./chunk-J6SCJFA6.js";import"./chunk-KLPBV7LZ.js";import{a as f}from"./chunk-3ZA4MRRJ.js";import{a as L}from"./chunk-CZWDZKMV.js";import{a as F}from"./chunk-3KNMYXHR.js";import"./chunk-3MTHJXSA.js";import"./chunk-QJFKOBIO.js";import{a as H}from"./chunk-GFVXFKQX.js";import"./chunk-C27N7UYP.js";import"./chunk-5RXP5SSK.js";import"./chunk-DCHQ35EH.js";import"./chunk-CXZY7U5K.js";import"./chunk-NK2VT3C7.js";import"./chunk-MGXUTQ3Y.js";import"./chunk-A7LJ5JA4.js";import"./chunk-EZTMMSK6.js";import"./chunk-24YCXMN5.js";import"./chunk-GFSCFFLZ.js";import"./chunk-CVF32JNE.js";import"./chunk-FNLB7A6P.js";import"./chunk-E5JJQSAN.js";import"./chunk-LV523QJI.js";import"./chunk-XZESHS3Q.js";import"./chunk-7RUZO2DE.js";import"./chunk-P4Q4L6W3.js";import"./chunk-37F6LHIG.js";import"./chunk-WHV3WX43.js";import"./chunk-TIZNFP3C.js";import"./chunk-NL5G2PXF.js";import"./chunk-UMRLEZUY.js";import"./chunk-AXBARIP4.js";import"./chunk-HOUKHWMK.js";import"./chunk-27OJ4RCD.js";import{a as B}from"./chunk-SBMEJVSZ.js";import"./chunk-CGJEUKDI.js";import"./chunk-Z6FGNVMR.js";import"./chunk-HI42KIAI.js";import"./chunk-I6ER4Z4U.js";import"./chunk-BYPMYDDO.js";import"./chunk-46RQZKTP.js";import"./chunk-32ZTP4QY.js";import{a as V}from"./chunk-35BCFANE.js";import"./chunk-FX7CCVWC.js";import"./chunk-LNXUNYCS.js";import{b as y}from"./chunk-5JUKP3OG.js";import"./chunk-3TICXWSZ.js";import"./chunk-CDDBOQZU.js";import{A as I,D as s,P as x,Q as w,X as M,Y as S,a as p,d as h,ea as N,fa as j,ga as q,ha as v,ia as b,s as A,t as a,u as d,w as u,x as E}from"./chunk-ZYUPJWLY.js";import"./chunk-OKHRNXU6.js";import"./chunk-VN5AHXMX.js";import{a as c}from"./chunk-E6PDYOYJ.js";import{a as D}from"./chunk-YJLZLU4M.js";import"./chunk-Y7AIRXY2.js";import{a as T}from"./chunk-EORP6S4E.js";import"./chunk-AICREXKX.js";import"./chunk-6IEFQVWJ.js";import{a as l}from"./chunk-XVK7UPUF.js";import"./chunk-5BQBSHRD.js";import"./chunk-J7LGFPI5.js";import"./chunk-LEA2LHIQ.js";import"./chunk-IHQ4NUVX.js";import"./chunk-YHV3XLCG.js";import"./chunk-MZSOSQQ4.js";function W(t){let e,o,r,i;return{c(){e=u("button"),e.textContent="Check All",o=E("\xA0"),s(e,"class","custombutton svelte-vafhru"),s(e,"type","button")},m(n,m){a(n,e,m),a(n,o,m),r||(i=I(e,"click",t[0]),r=!0)},p,i:p,o:p,d(n){n&&d(e),n&&d(o),r=!1,i()}}}function X(t){let e=x();function o(){c("storeitems","Check All"),e("checkall")}return[o]}var k=class extends b{constructor(e){super(),v(this,e,X,W,h,{})}},O=k;function Y(t){let e,o,r,i;return r=new H({props:{folders:t[0].folders}}),r.$on("filter",t[1]),{c(){e=u("tr"),o=u("td"),N(r.$$.fragment),s(o,"colspan","3"),s(o,"class","svelte-1kpx3t5"),s(e,"class","fshCenter")},m(n,m){a(n,e,m),A(e,o),j(r,o,null),i=!0},p(n,[m]){let $={};m&1&&($.folders=n[0].folders),r.$set($)},i(n){i||(M(r.$$.fragment,n),i=!0)},o(n){S(r.$$.fragment,n),i=!1},d(n){n&&d(e),q(r)}}}function Z(t,e,o){let{inv:r={folders:{}}}=e;function i(n){w.call(this,t,n)}return t.$$set=n=>{"inv"in n&&o(0,r=n.inv)},[r,i]}var g=class extends b{constructor(e){super(),v(this,e,Z,Y,h,{inv:0})}},U=g;function ee(t,e){return new U({anchor:e,props:{inv:t},target:e.parentNode})}function te(t,e,o){o.checked=!1;let r=F(o),i=t.items[o.value].folder_id,n=e!==-2&&e!==i;f(r,n),f(r.nextElementSibling,n)}function oe(t,e){c("storeitems","Filter Folder"),P([3,Q(),0,l(te,t,Number(e.detail))])}function _(t,e){ee(t,e).$on("filter",l(oe,t))}function re(t,e){let o=[{id:"-1",name:"Main"},...B(t.folders).map(([r,i])=>({id:r,name:i}))];return new z({anchor:e,props:{folders:o},target:e.parentNode})}function ne(t,e,o){t.items[o].folder_id=Number(e)}function ie(t,e,o){o.checked=!1,ne(t,e,o.value);let r=F(o);f(r,!0),f(r.nextElementSibling,!0)}async function se(t,e,o){(await R(e,o.map(i=>i.value))).s&&o.forEach(l(ie,t,e))}function le(t,e){c("storeitems","Move to Folder");let o=D('[name="storeIndex[]"]:checked');L(30,o).forEach(l(se,t,e.detail))}function C(t,e){re(t,e).$on("move",l(le,t))}async function me(){let t=await J();if(!t.folders)return;let[e]=document.forms;_(t,e),C(t,e)}function ce(){G().forEach(t=>{t.checked=!t.disabled&&!t.checked})}function fe(){let t=document.forms[0]?.elements;if(!t?.length)return;let[e]=T(t).filter(r=>r.type==="submit");new O({anchor:e,target:e.parentNode}).$on("checkall",ce)}function ae(){V()&&y("enableFolderFilter")&&me(),fe(),K()}export{ae as default};
//# sourceMappingURL=storeitems-T4574APS.js.map