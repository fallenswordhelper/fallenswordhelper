import{S as t,J as s,K as o,L as e,_ as n,N as r,P as a,U as i,W as c,X as l,b8 as m,s as f,b9 as u,Q as d,ba as p,b4 as h,b7 as j,bb as b,c7 as g,c as k,C as v,k as $,bV as F,ad as x,aS as N}from"./calfSystem-dEoRVG2S.js"
import{b as y}from"./batch-1A8LZPWm.js"
import{c as I}from"./closestTr-gWCg9Nqr.js"
import{t as S}from"./toggleForce-4Mg38a6N.js"
import{F as w}from"./FolderButtons-smce6lbn.js"
import{g as C,M as B,d as E,i as L,a as M,b as A}from"./injectStoreItems-fC10xGHD.js"
import{c as R}from"./chunk-joYXv2f3.js"
import"./each-rfoBEd-I.js"
import"./LinkButton-QDAQbbJK.js"
import"./dropItem-qD2jDgqA.js"
import"./dialog-ewu4mmhi.js"
import"./dialogMsg-6-T2JNn4.js"
import"./isArray-bNviZzJA.js"
import"./sendItems-D2CL_tyu.js"
import"./basicItem-LexK_yLX.js"
import"./htmlResult-asgFAD4H.js"
import"./InfoBoxFrom-ZVWIhJtP.js"
import"./doStatTotal-eoofXakC.js"
import"./errorDialog-UVurWbsP.js"
import"./arrayFromRadioNodeList-QpWAuTUu.js"
import"./daLoadInventory-91dpda39.js"
import"./flattenItems-OuxkqZMH.js"
import"./LinkButtonBracketed-WOCGf0UU.js"
function T(t){let s,o,m,f
return{c(){s=e("button"),s.textContent="Check All",o=n(" "),r(s,"class","custombutton svelte-vafhru"),r(s,"type","button")},m(e,n){a(e,s,n),a(e,o,n),m||(f=i(s,"click",t[0]),m=!0)},p:c,i:c,o:c,d(t){t&&(l(s),l(o)),m=!1,f()}}}function _(t){const s=m()
return[function(){f("storeitems","Check All"),s("checkall")}]}class D extends t{constructor(t){super(),s(this,t,_,T,o,{})}}function W(t){let s,o,n,i
return n=new w({props:{folders:t[0].folders}}),n.$on("filter",t[1]),{c(){s=e("tr"),o=e("td"),u(n.$$.fragment),r(o,"colspan","3"),r(o,"class","svelte-1kpx3t5"),r(s,"class","fshCenter")},m(t,e){a(t,s,e),d(s,o),p(n,o,null),i=!0},p(t,[s]){const o={}
1&s&&(o.folders=t[0].folders),n.$set(o)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){j(n.$$.fragment,t),i=!1},d(t){t&&l(s),b(n)}}}function J(t,s,o){let{inv:e={folders:{}}}=s
return t.$$set=t=>{"inv"in t&&o(0,e=t.inv)},[e,function(s){g.call(this,t,s)}]}class K extends t{constructor(t){super(),s(this,t,J,W,o,{inv:0})}}function P(t,s,o){o.checked=!1
const e=I(o),n=t.items[o.value].folder_id,r=-2!==s&&s!==n
S(e,r),S(e.nextElementSibling,r)}function Q(t,s){f("storeitems","Filter Folder"),y([3,C(),0,k(P,t,Number(s.detail))])}function U(t,s){const o=function(t,s){return new K({anchor:s,props:{inv:t},target:s.parentNode})}(t,s)
o.$on("filter",k(Q,t))}function V(t,s,o){o.checked=!1,function(t,s,o){t.items[o].folder_id=Number(s)}(t,s,o.value)
const e=I(o)
S(e,!0),S(e.nextElementSibling,!0)}async function X(t,s,o){(await E(s,o.map((t=>t.value)))).s&&o.forEach(k(V,t,s))}function Y(t,s){f("storeitems","Move to Folder")
const o=$('[name="storeIndex[]"]:checked')
R(30,o).forEach(k(X,t,s.detail))}function q(t,s){const o=function(t,s){const o=[{id:"-1",name:"Main"},...v(t.folders).map((([t,s])=>({id:t,name:s})))]
return new B({anchor:s,props:{folders:o},target:s.parentNode})}(t,s)
o.$on("move",k(Y,t))}function z(){A().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function G(){F()&&x("enableFolderFilter")&&async function(){const t=await M()
if(!t.folders)return
const[s]=document.forms
U(t,s),q(t,s)}(),function(){const t=document.forms[0]?.elements
if(!t?.length)return
const[s]=N(t).filter((t=>"submit"===t.type))
if(!s)return
new D({anchor:s,target:s.parentNode}).$on("checkall",z)}(),L()}export{G as default}
//# sourceMappingURL=storeitems-jPuVF6XL.js.map
