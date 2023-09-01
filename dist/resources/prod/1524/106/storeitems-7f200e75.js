import{S as t,L as e,M as o,N as s,a1 as n,P as r,R as a,W as i,Y as c,Z as l,be as m,n as f,bf as u,T as d,bg as p,ba as h,bd as j,bh as b,cc as g,c as v,C as k,j as $,bZ as F,af as y,aW as x}from"./calfSystem-076d7a01.js"
import{b as I}from"./batch-87a59312.js"
import{c as N}from"./closestTr-efa2e666.js"
import{t as w}from"./toggleForce-6124e333.js"
import{F as B}from"./FolderButtons-63c4282e.js"
import{g as M,M as S,d as C,i as E,a as L,b as R}from"./injectStoreItems-f55a9521.js"
import{c as T}from"./chunk-cd03a005.js"
import"./each-d53d627d.js"
import"./LinkButton-9974bf66.js"
import"./dropItem-2080adb1.js"
import"./dialog-9896baf4.js"
import"./dialogMsg-7c5fba89.js"
import"./sendItems-e8b1b119.js"
import"./htmlResult-0d37532a.js"
import"./InfoBoxFrom-3af9d1fa.js"
import"./doStatTotal-5f1c8221.js"
import"./errorDialog-91872536.js"
import"./arrayFromRadioNodeList-428f39fd.js"
import"./getInventoryById-83dceb0e.js"
import"./getInventory-f6a60dce.js"
import"./inventory-c0d6c5e3.js"
import"./LinkButtonBracketed-430703c5.js"
function Z(t){let e,o,m,f
return{c(){e=s("button"),e.textContent="Check All",o=n(" "),r(e,"class","custombutton svelte-vafhru"),r(e,"type","button")},m(s,n){a(s,e,n),a(s,o,n),m||(f=i(e,"click",t[0]),m=!0)},p:c,i:c,o:c,d(t){t&&(l(e),l(o)),m=!1,f()}}}function A(t){const e=m()
return[function(){f("storeitems","Check All"),e("checkall")}]}class W extends t{constructor(t){super(),e(this,t,A,Z,o,{})}}function _(t){let e,o,n,i
return n=new B({props:{folders:t[0].folders}}),n.$on("filter",t[1]),{c(){e=s("tr"),o=s("td"),u(n.$$.fragment),r(o,"colspan","3"),r(o,"class","svelte-1kpx3t5"),r(e,"class","fshCenter")},m(t,s){a(t,e,s),d(e,o),p(n,o,null),i=!0},p(t,[e]){const o={}
1&e&&(o.folders=t[0].folders),n.$set(o)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){j(n.$$.fragment,t),i=!1},d(t){t&&l(e),b(n)}}}function D(t,e,o){let{inv:s={folders:{}}}=e
return t.$$set=t=>{"inv"in t&&o(0,s=t.inv)},[s,function(e){g.call(this,t,e)}]}class O extends t{constructor(t){super(),e(this,t,D,_,o,{inv:0})}}function P(t,e,o){o.checked=!1
const s=N(o),n=t.items[o.value].folder_id,r=-2!==e&&e!==n
w(s,r),w(s.nextElementSibling,r)}function X(t,e){f("storeitems","Filter Folder"),I([3,M(),0,v(P,t,Number(e.detail))])}function Y(t,e){const o=function(t,e){return new O({anchor:e,props:{inv:t},target:e.parentNode})}(t,e)
o.$on("filter",v(X,t))}function q(t,e,o){o.checked=!1,function(t,e,o){t.items[o].folder_id=Number(e)}(t,e,o.value)
const s=N(o)
w(s,!0),w(s.nextElementSibling,!0)}async function z(t,e,o){(await C(e,o.map((t=>t.value)))).s&&o.forEach(v(q,t,e))}function G(t,e){f("storeitems","Move to Folder")
const o=$('[name="storeIndex[]"]:checked')
T(30,o).forEach(v(z,t,e.detail))}function H(t,e){const o=function(t,e){const o=[{id:"-1",name:"Main"},...k(t.folders).map((([t,e])=>({id:t,name:e})))]
return new S({anchor:e,props:{folders:o},target:e.parentNode})}(t,e)
o.$on("move",v(G,t))}function J(){R().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function K(){F()&&y("enableFolderFilter")&&async function(){const t=await L()
if(!t.folders)return
const[e]=document.forms
Y(t,e),H(t,e)}(),function(){const t=document.forms[0]?.elements
if(!t?.length)return
const[e]=x(t).filter((t=>"submit"===t.type))
if(!e)return
new W({anchor:e,target:e.parentNode}).$on("checkall",J)}(),E()}export{K as default}
//# sourceMappingURL=storeitems-7f200e75.js.map
