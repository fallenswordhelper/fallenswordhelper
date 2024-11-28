import{S as t,L as e,M as s,O as o,a4 as n,Q as r,T as a,X as i,a0 as c,a1 as l,bi as m,s as f,bj as u,U as d,bk as p,be as h,bh as j,bl as b,ck as k,c as g,C as v,k as $,E as F,w as x,ai as y,b0 as I}from"./calfSystem-KuDT30_2.js"
import{b as w}from"./batch-DhoZhUBj.js"
import{c as E}from"./closestTr-DrJ2puOz.js"
import{t as N}from"./toggleForce-br4z9gGd.js"
import{F as B}from"./FolderButtons-Bp8oC0mI.js"
import{g as C,M as L,d as S,i as M,a as A,b as T}from"./injectStoreItems-DkMSFh0S.js"
import"./LinkButton-DOtoHB7L.js"
import"./dropItem-BoTEf0JC.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./isArray-eVldfhw1.js"
import"./sendItems-C1wBsOov.js"
import"./basicItem-B1znyKte.js"
import"./htmlResult-UAWBTbJ2.js"
import"./InfoBoxFrom-C3VQd94d.js"
import"./doStatTotal-D_h7gMbO.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-Dj4h0urX.js"
import"./daLoadInventory-CENe1TxJ.js"
import"./flattenItems-C4pfIrZn.js"
import"./LinkButtonBracketed-BzYwXZSS.js"
function _(t){let e,s,m,f
return{c(){e=o("button"),e.textContent="Check All",s=n(" "),r(e,"class","custombutton svelte-vafhru"),r(e,"type","button")},m(o,n){a(o,e,n),a(o,s,n),m||(f=i(e,"click",t[0]),m=!0)},p:c,i:c,o:c,d(t){t&&(l(e),l(s)),m=!1,f()}}}function R(t){const e=m()
return[function(){f("storeitems","Check All"),e("checkall")}]}class X extends t{constructor(t){super(),e(this,t,R,_,s,{})}}function Z(t){let e,s,n,i
return n=new B({props:{folders:t[0].folders}}),n.$on("filter",t[1]),{c(){e=o("tr"),s=o("td"),u(n.$$.fragment),r(s,"colspan","3"),r(s,"class","svelte-1kpx3t5"),r(e,"class","fshCenter")},m(t,o){a(t,e,o),d(e,s),p(n,s,null),i=!0},p(t,[e]){const s={}
1&e&&(s.folders=t[0].folders),n.$set(s)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){j(n.$$.fragment,t),i=!1},d(t){t&&l(e),b(n)}}}function z(t,e,s){let{inv:o={folders:{}}}=e
return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,function(e){k.call(this,t,e)}]}class D extends t{constructor(t){super(),e(this,t,z,Z,s,{inv:0})}}function G(t,e,s){s.checked=!1
const o=E(s),n=t.items[s.value]?.folder_id,r=-2!==e&&e!==n
N(o,r),N(o.nextElementSibling,r)}function H(t,e){f("storeitems","Filter Folder"),w([3,C(),0,g(G,t,Number(e.detail))])}function O(t,e){const s=function(t,e){return new D({anchor:e,props:{inv:t},target:e.parentNode})}(t,e)
s.$on("filter",g(H,t))}function Q(t,e,s){s.checked=!1,function(t,e,s){t.items[s].folder_id=Number(e)}(t,e,s.value)
const o=E(s)
N(o,!0),N(o.nextElementSibling,!0)}async function U(t,e,s){(await S(e,s.map((t=>t.value)))).s&&s.forEach(g(Q,t,e))}function Y(t,e){f("storeitems","Move to Folder")
const s=$('[name="storeIndex[]"]:checked')
F(30,s).forEach(g(U,t,e.detail))}function q(t,e){const s=function(t,e){const s=[{id:"-1",name:"Main"},...v(t.folders).map((([t,e])=>({id:t,name:e})))]
return new L({anchor:e,props:{folders:s},target:e.parentNode})}(t,e)
s.$on("move",g(Y,t))}function J(){T().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function K(){if(x())return
const[t]=document.forms
t&&(!async function(t){if(!y("enableFolderFilter"))return
const e=await A()
e?.folders&&(O(e,t),q(e,t))}(t),function(t){const{elements:e}=t
if(!e?.length)return
const[s]=I(e).filter((t=>"submit"===t.type))
if(!s)return
new X({anchor:s,target:s.parentNode}).$on("checkall",J)}(t),M())}export{K as default}
//# sourceMappingURL=storeitems-DoI3jyRB.js.map
