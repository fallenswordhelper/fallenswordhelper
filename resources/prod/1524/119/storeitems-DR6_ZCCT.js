import{S as t,L as s,M as e,O as o,a3 as n,Q as r,T as a,X as i,_ as c,a0 as l,bg as m,s as f,bh as u,U as d,bi as p,bc as h,bf as j,bj as b,cf as g,c as k,C as v,k as $,E as F,c1 as x,ai as y,a_ as I}from"./calfSystem-Bit7wh4p.js"
import{b as E}from"./batch-DXm8fBED.js"
import{c as w}from"./closestTr-7PFr_dNI.js"
import{t as C}from"./toggleForce-br4z9gGd.js"
import{F as L}from"./FolderButtons-CXmxDh40.js"
import{g as N,M as S,d as B,i as M,a as _,b as A}from"./injectStoreItems-BccHUCiA.js"
import"./LinkButton-DERL_IYP.js"
import"./dropItem-CTgJ-63J.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./isArray-eVldfhw1.js"
import"./sendItems-LdjNuxgR.js"
import"./basicItem-Dcz7UpP9.js"
import"./htmlResult-cFuEh6cZ.js"
import"./InfoBoxFrom-B7gWwsy_.js"
import"./doStatTotal-BMszkFli.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-CsqL6Dd-.js"
import"./daLoadInventory-BRjJiMm5.js"
import"./flattenItems-C4pfIrZn.js"
import"./LinkButtonBracketed-Z7zL1rKJ.js"
function R(t){let s,e,m,f
return{c(){s=o("button"),s.textContent="Check All",e=n(" "),r(s,"class","custombutton svelte-vafhru"),r(s,"type","button")},m(o,n){a(o,s,n),a(o,e,n),m||(f=i(s,"click",t[0]),m=!0)},p:c,i:c,o:c,d(t){t&&(l(s),l(e)),m=!1,f()}}}function T(t){const s=m()
return[function(){f("storeitems","Check All"),s("checkall")}]}class D extends t{constructor(t){super(),s(this,t,T,R,e,{})}}function G(t){let s,e,n,i
return n=new L({props:{folders:t[0].folders}}),n.$on("filter",t[1]),{c(){s=o("tr"),e=o("td"),u(n.$$.fragment),r(e,"colspan","3"),r(e,"class","svelte-1kpx3t5"),r(s,"class","fshCenter")},m(t,o){a(t,s,o),d(s,e),p(n,e,null),i=!0},p(t,[s]){const e={}
1&s&&(e.folders=t[0].folders),n.$set(e)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){j(n.$$.fragment,t),i=!1},d(t){t&&l(s),b(n)}}}function J(t,s,e){let{inv:o={folders:{}}}=s
return t.$$set=t=>{"inv"in t&&e(0,o=t.inv)},[o,function(s){g.call(this,t,s)}]}class O extends t{constructor(t){super(),s(this,t,J,G,e,{inv:0})}}function P(t,s,e){e.checked=!1
const o=w(e),n=t.items[e.value].folder_id,r=-2!==s&&s!==n
C(o,r),C(o.nextElementSibling,r)}function Q(t,s){f("storeitems","Filter Folder"),E([3,N(),0,k(P,t,Number(s.detail))])}function U(t,s){const e=function(t,s){return new O({anchor:s,props:{inv:t},target:s.parentNode})}(t,s)
e.$on("filter",k(Q,t))}function X(t,s,e){e.checked=!1,function(t,s,e){t.items[e].folder_id=Number(s)}(t,s,e.value)
const o=w(e)
C(o,!0),C(o.nextElementSibling,!0)}async function Z(t,s,e){(await B(s,e.map((t=>t.value)))).s&&e.forEach(k(X,t,s))}function q(t,s){f("storeitems","Move to Folder")
const e=$('[name="storeIndex[]"]:checked')
F(30,e).forEach(k(Z,t,s.detail))}function z(t,s){const e=function(t,s){const e=[{id:"-1",name:"Main"},...v(t.folders).map((([t,s])=>({id:t,name:s})))]
return new S({anchor:s,props:{folders:e},target:s.parentNode})}(t,s)
e.$on("move",k(q,t))}function H(){A().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function K(){x()&&y("enableFolderFilter")&&async function(){const t=await _()
if(!t?.folders)return
const[s]=document.forms
U(t,s),z(t,s)}(),function(){const t=document.forms[0]?.elements
if(!t?.length)return
const[s]=I(t).filter((t=>"submit"===t.type))
if(!s)return
new D({anchor:s,target:s.parentNode}).$on("checkall",H)}(),M()}export{K as default}
//# sourceMappingURL=storeitems-DR6_ZCCT.js.map
