import{S as t,L as e,M as o,N as s,a1 as n,P as r,R as a,W as i,Y as c,Z as l,be as m,n as f,bf as u,T as d,bg as p,ba as h,bd as j,bh as b,cc as g,c as v,C as k,j as $,bZ as F,af as y,aW as x}from"./calfSystem-2fff342b.js"
import{b as I}from"./batch-02a48250.js"
import{c as N}from"./closestTr-03cebe69.js"
import{t as w}from"./toggleForce-6124e333.js"
import{F as B}from"./FolderButtons-4c054863.js"
import{g as M,M as S,d as C,i as E,a as L,b as R}from"./injectStoreItems-acb81477.js"
import{c as T}from"./chunk-cd03a005.js"
import"./each-923e83ac.js"
import"./LinkButton-484036ce.js"
import"./dropItem-55288712.js"
import"./dialog-9896baf4.js"
import"./dialogMsg-7c5fba89.js"
import"./sendItems-423ab9b4.js"
import"./htmlResult-0a0ff9a0.js"
import"./InfoBoxFrom-0d967f77.js"
import"./doStatTotal-94a01fa9.js"
import"./errorDialog-91872536.js"
import"./arrayFromRadioNodeList-abcb2f4f.js"
import"./getInventoryById-1b7626e5.js"
import"./getInventory-61ab9f2e.js"
import"./inventory-0f7de34f.js"
import"./LinkButtonBracketed-30748105.js"
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
//# sourceMappingURL=storeitems-4b019143.js.map
