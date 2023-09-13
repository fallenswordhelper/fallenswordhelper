import{S as t,L as e,M as o,N as s,a1 as n,P as r,R as a,W as i,Y as c,Z as l,be as m,n as f,bf as u,T as d,bg as p,ba as h,bd as j,bh as b,cb as g,c as k,C as v,j as $,bZ as F,af as x,aW as N}from"./calfSystem-2f15e074.js"
import{b as y}from"./batch-70cc157a.js"
import{c as I}from"./closestTr-ce435b3a.js"
import{t as S}from"./toggleForce-6124e333.js"
import{F as w}from"./FolderButtons-ea5f2c96.js"
import{g as E,M,d as B,i as C,a as L,b as R}from"./injectStoreItems-7478335d.js"
import{c as T}from"./chunk-cd03a005.js"
import"./each-d93fc3a2.js"
import"./LinkButton-5d5c853c.js"
import"./dropItem-e1f6f6f1.js"
import"./dialog-d1c54012.js"
import"./dialogMsg-7c5fba89.js"
import"./sendItems-fd48f4bf.js"
import"./htmlResult-27fd54be.js"
import"./InfoBoxFrom-20286709.js"
import"./doStatTotal-86e70b40.js"
import"./errorDialog-91872536.js"
import"./arrayFromRadioNodeList-fd82689b.js"
import"./daLoadInventory-d83b540d.js"
import"./flattenItems-d494759a.js"
import"./LinkButtonBracketed-0c040929.js"
function Z(t){let e,o,m,f
return{c(){e=s("button"),e.textContent="Check All",o=n(" "),r(e,"class","custombutton svelte-vafhru"),r(e,"type","button")},m(s,n){a(s,e,n),a(s,o,n),m||(f=i(e,"click",t[0]),m=!0)},p:c,i:c,o:c,d(t){t&&(l(e),l(o)),m=!1,f()}}}function A(t){const e=m()
return[function(){f("storeitems","Check All"),e("checkall")}]}class W extends t{constructor(t){super(),e(this,t,A,Z,o,{})}}function _(t){let e,o,n,i
return n=new w({props:{folders:t[0].folders}}),n.$on("filter",t[1]),{c(){e=s("tr"),o=s("td"),u(n.$$.fragment),r(o,"colspan","3"),r(o,"class","svelte-1kpx3t5"),r(e,"class","fshCenter")},m(t,s){a(t,e,s),d(e,o),p(n,o,null),i=!0},p(t,[e]){const o={}
1&e&&(o.folders=t[0].folders),n.$set(o)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){j(n.$$.fragment,t),i=!1},d(t){t&&l(e),b(n)}}}function D(t,e,o){let{inv:s={folders:{}}}=e
return t.$$set=t=>{"inv"in t&&o(0,s=t.inv)},[s,function(e){g.call(this,t,e)}]}class P extends t{constructor(t){super(),e(this,t,D,_,o,{inv:0})}}function Q(t,e,o){o.checked=!1
const s=I(o),n=t.items[o.value].folder_id,r=-2!==e&&e!==n
S(s,r),S(s.nextElementSibling,r)}function X(t,e){f("storeitems","Filter Folder"),y([3,E(),0,k(Q,t,Number(e.detail))])}function Y(t,e){const o=function(t,e){return new P({anchor:e,props:{inv:t},target:e.parentNode})}(t,e)
o.$on("filter",k(X,t))}function q(t,e,o){o.checked=!1,function(t,e,o){t.items[o].folder_id=Number(e)}(t,e,o.value)
const s=I(o)
S(s,!0),S(s.nextElementSibling,!0)}async function z(t,e,o){(await B(e,o.map((t=>t.value)))).s&&o.forEach(k(q,t,e))}function G(t,e){f("storeitems","Move to Folder")
const o=$('[name="storeIndex[]"]:checked')
T(30,o).forEach(k(z,t,e.detail))}function H(t,e){const o=function(t,e){const o=[{id:"-1",name:"Main"},...v(t.folders).map((([t,e])=>({id:t,name:e})))]
return new M({anchor:e,props:{folders:o},target:e.parentNode})}(t,e)
o.$on("move",k(G,t))}function J(){R().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function K(){F()&&x("enableFolderFilter")&&async function(){const t=await L()
if(!t.folders)return
const[e]=document.forms
Y(t,e),H(t,e)}(),function(){const t=document.forms[0]?.elements
if(!t?.length)return
const[e]=N(t).filter((t=>"submit"===t.type))
if(!e)return
new W({anchor:e,target:e.parentNode}).$on("checkall",J)}(),C()}export{K as default}
//# sourceMappingURL=storeitems-93914c0c.js.map
