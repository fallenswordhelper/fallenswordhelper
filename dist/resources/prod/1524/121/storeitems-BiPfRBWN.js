import{S as t,L as e,M as s,O as o,a3 as n,Q as r,T as a,X as i,_ as c,a0 as l,bg as m,s as f,bh as u,U as d,bi as p,bc as h,bf as j,bj as b,cg as g,c as k,C as v,k as $,E as F,c2 as x,ai as y,a_ as I}from"./calfSystem-BtgQSp8m.js"
import{b as E}from"./batch-CfE5wARI.js"
import{c as w}from"./closestTr-D53dAuOz.js"
import{t as N}from"./toggleForce-br4z9gGd.js"
import{F as S}from"./FolderButtons-Cfuei8cO.js"
import{g as B,M as C,d as L,i as M,a as _,b as A}from"./injectStoreItems-DTI6XGRb.js"
import"./LinkButton-CbKrCfyn.js"
import"./dropItem-C17q5juc.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./isArray-eVldfhw1.js"
import"./sendItems-Biy61dYh.js"
import"./basicItem-bkqBRfUM.js"
import"./htmlResult-1LmLBpMt.js"
import"./InfoBoxFrom-DV7nQoQq.js"
import"./doStatTotal-C-BP9n92.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-BVbELYnv.js"
import"./daLoadInventory-DC4fUfA5.js"
import"./flattenItems-C4pfIrZn.js"
import"./LinkButtonBracketed-OjveA3bS.js"
function D(t){let e,s,m,f
return{c(){e=o("button"),e.textContent="Check All",s=n(" "),r(e,"class","custombutton svelte-vafhru"),r(e,"type","button")},m(o,n){a(o,e,n),a(o,s,n),m||(f=i(e,"click",t[0]),m=!0)},p:c,i:c,o:c,d(t){t&&(l(e),l(s)),m=!1,f()}}}function T(t){const e=m()
return[function(){f("storeitems","Check All"),e("checkall")}]}class K extends t{constructor(t){super(),e(this,t,T,D,s,{})}}function O(t){let e,s,n,i
return n=new S({props:{folders:t[0].folders}}),n.$on("filter",t[1]),{c(){e=o("tr"),s=o("td"),u(n.$$.fragment),r(s,"colspan","3"),r(s,"class","svelte-1kpx3t5"),r(e,"class","fshCenter")},m(t,o){a(t,e,o),d(e,s),p(n,s,null),i=!0},p(t,[e]){const s={}
1&e&&(s.folders=t[0].folders),n.$set(s)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){j(n.$$.fragment,t),i=!1},d(t){t&&l(e),b(n)}}}function Q(t,e,s){let{inv:o={folders:{}}}=e
return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,function(e){g.call(this,t,e)}]}class R extends t{constructor(t){super(),e(this,t,Q,O,s,{inv:0})}}function G(t,e,s){s.checked=!1
const o=w(s),n=t.items[s.value].folder_id,r=-2!==e&&e!==n
N(o,r),N(o.nextElementSibling,r)}function U(t,e){f("storeitems","Filter Folder"),E([3,B(),0,k(G,t,Number(e.detail))])}function X(t,e){const s=function(t,e){return new R({anchor:e,props:{inv:t},target:e.parentNode})}(t,e)
s.$on("filter",k(U,t))}function Z(t,e,s){s.checked=!1,function(t,e,s){t.items[s].folder_id=Number(e)}(t,e,s.value)
const o=w(s)
N(o,!0),N(o.nextElementSibling,!0)}async function q(t,e,s){(await L(e,s.map((t=>t.value)))).s&&s.forEach(k(Z,t,e))}function z(t,e){f("storeitems","Move to Folder")
const s=$('[name="storeIndex[]"]:checked')
F(30,s).forEach(k(q,t,e.detail))}function H(t,e){const s=function(t,e){const s=[{id:"-1",name:"Main"},...v(t.folders).map((([t,e])=>({id:t,name:e})))]
return new C({anchor:e,props:{folders:s},target:e.parentNode})}(t,e)
s.$on("move",k(z,t))}function J(){A().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function P(){x()&&y("enableFolderFilter")&&async function(){const t=await _()
if(!t?.folders)return
const[e]=document.forms
X(t,e),H(t,e)}(),function(){const t=document.forms[0]?.elements
if(!t?.length)return
const[e]=I(t).filter((t=>"submit"===t.type))
if(!e)return
new K({anchor:e,target:e.parentNode}).$on("checkall",J)}(),M()}export{P as default}
//# sourceMappingURL=storeitems-BiPfRBWN.js.map
