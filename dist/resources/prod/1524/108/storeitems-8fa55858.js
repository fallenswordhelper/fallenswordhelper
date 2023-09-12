import{S as t,L as e,M as o,N as s,a1 as n,P as r,R as a,W as i,Y as c,Z as l,be as m,n as f,bf as u,T as d,bg as p,ba as h,bd as j,bh as b,cc as g,c as k,C as v,j as $,bZ as y,af as F,aW as x}from"./calfSystem-34913441.js"
import{b as I}from"./batch-868086f2.js"
import{c as N}from"./closestTr-316dea29.js"
import{t as E}from"./toggleForce-6124e333.js"
import{F as S}from"./FolderButtons-f2e020e7.js"
import{g as w,M as B,d as C,i as L,a as M,b as R}from"./injectStoreItems-f610faea.js"
import{c as T}from"./chunk-cd03a005.js"
import"./each-6f7f5a14.js"
import"./LinkButton-aabd28ac.js"
import"./dropItem-5553463c.js"
import"./dialog-d1c54012.js"
import"./dialogMsg-7c5fba89.js"
import"./sendItems-21d6a040.js"
import"./htmlResult-c11d9ef0.js"
import"./InfoBoxFrom-6333b8b3.js"
import"./doStatTotal-feca30dd.js"
import"./errorDialog-91872536.js"
import"./arrayFromRadioNodeList-3822df5e.js"
import"./getInventoryById-8022c7f6.js"
import"./getInventory-11b76fa4.js"
import"./inventory-ed909da9.js"
import"./LinkButtonBracketed-af66f16e.js"
function W(t){let e,o,m,f
return{c(){e=s("button"),e.textContent="Check All",o=n(" "),r(e,"class","custombutton svelte-vafhru"),r(e,"type","button")},m(s,n){a(s,e,n),a(s,o,n),m||(f=i(e,"click",t[0]),m=!0)},p:c,i:c,o:c,d(t){t&&(l(e),l(o)),m=!1,f()}}}function _(t){const e=m()
return[function(){f("storeitems","Check All"),e("checkall")}]}class A extends t{constructor(t){super(),e(this,t,_,W,o,{})}}function Y(t){let e,o,n,i
return n=new S({props:{folders:t[0].folders}}),n.$on("filter",t[1]),{c(){e=s("tr"),o=s("td"),u(n.$$.fragment),r(o,"colspan","3"),r(o,"class","svelte-1kpx3t5"),r(e,"class","fshCenter")},m(t,s){a(t,e,s),d(e,o),p(n,o,null),i=!0},p(t,[e]){const o={}
1&e&&(o.folders=t[0].folders),n.$set(o)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){j(n.$$.fragment,t),i=!1},d(t){t&&l(e),b(n)}}}function Z(t,e,o){let{inv:s={folders:{}}}=e
return t.$$set=t=>{"inv"in t&&o(0,s=t.inv)},[s,function(e){g.call(this,t,e)}]}class D extends t{constructor(t){super(),e(this,t,Z,Y,o,{inv:0})}}function P(t,e,o){o.checked=!1
const s=N(o),n=t.items[o.value].folder_id,r=-2!==e&&e!==n
E(s,r),E(s.nextElementSibling,r)}function Q(t,e){f("storeitems","Filter Folder"),I([3,w(),0,k(P,t,Number(e.detail))])}function q(t,e){const o=function(t,e){return new D({anchor:e,props:{inv:t},target:e.parentNode})}(t,e)
o.$on("filter",k(Q,t))}function z(t,e,o){o.checked=!1,function(t,e,o){t.items[o].folder_id=Number(e)}(t,e,o.value)
const s=N(o)
E(s,!0),E(s.nextElementSibling,!0)}async function G(t,e,o){(await C(e,o.map((t=>t.value)))).s&&o.forEach(k(z,t,e))}function H(t,e){f("storeitems","Move to Folder")
const o=$('[name="storeIndex[]"]:checked')
T(30,o).forEach(k(G,t,e.detail))}function J(t,e){const o=function(t,e){const o=[{id:"-1",name:"Main"},...v(t.folders).map((([t,e])=>({id:t,name:e})))]
return new B({anchor:e,props:{folders:o},target:e.parentNode})}(t,e)
o.$on("move",k(H,t))}function K(){R().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function O(){y()&&F("enableFolderFilter")&&async function(){const t=await M()
if(!t.folders)return
const[e]=document.forms
q(t,e),J(t,e)}(),function(){const t=document.forms[0]?.elements
if(!t?.length)return
const[e]=x(t).filter((t=>"submit"===t.type))
if(!e)return
new A({anchor:e,target:e.parentNode}).$on("checkall",K)}(),L()}export{O as default}
//# sourceMappingURL=storeitems-8fa55858.js.map
