import{S as t,L as e,M as s,O as o,Z as n,R as r,a2 as a,U as i,V as c,X as l,bl as m,s as f,be as u,bf as d,bg as p,T as h,bh as b,bi as j,ck as g,b as k,C as v,n as $,E as F,w as x,ai as y,b0 as I}from"./calfSystem-Blt4DbaE.js"
import{b as w}from"./batch-C_j5R0ng.js"
import{c as E}from"./closestTr-BGA5O97h.js"
import{t as N}from"./toggleForce-br4z9gGd.js"
import{F as B}from"./FolderButtons-D-g1wp0m.js"
import{g as C,M as L,d as S,a as M,b as A,i as R}from"./injectStoreItems-DinmFb6T.js"
import"./LinkButton-CTQrdC0s.js"
import"./dropItem-B8Cjt0uN.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./isArray-eVldfhw1.js"
import"./sendItems-C0afaFYQ.js"
import"./basicItem-B4VQEJwm.js"
import"./htmlResult-CMCcQMTR.js"
import"./InfoBoxFrom-CMB3qrKm.js"
import"./doStatTotal-CybaE_J0.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-Cz0XwDMw.js"
import"./daLoadInventory-XbR6QBDO.js"
import"./flattenItems-C4pfIrZn.js"
import"./LinkButtonBracketed-C9l9Kpoo.js"
function T(t){let e,s,m,f
return{c(){e=i("button"),e.textContent="Check All",s=c(" "),l(e,"class","custombutton svelte-vafhru"),l(e,"type","button")},m(o,n){r(o,e,n),r(o,s,n),m||(f=a(e,"click",t[0]),m=!0)},p:n,i:n,o:n,d(t){t&&(o(e),o(s)),m=!1,f()}}}function Z(t){const e=m()
return[function(){f("storeitems","Check All"),e("checkall")}]}class _ extends t{constructor(t){super(),e(this,t,Z,T,s,{})}}function X(t){let e,s,n,a
return n=new B({props:{folders:t[0].folders}}),n.$on("filter",t[1]),{c(){e=i("tr"),s=i("td"),j(n.$$.fragment),l(s,"colspan","3"),l(s,"class","svelte-1kpx3t5"),l(e,"class","fshCenter")},m(t,o){r(t,e,o),h(e,s),b(n,s,null),a=!0},p(t,[e]){const s={}
1&e&&(s.folders=t[0].folders),n.$set(s)},i(t){a||(p(n.$$.fragment,t),a=!0)},o(t){d(n.$$.fragment,t),a=!1},d(t){t&&o(e),u(n)}}}function z(t,e,s){let{inv:o={folders:{}}}=e
return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,function(e){g.call(this,t,e)}]}class D extends t{constructor(t){super(),e(this,t,z,X,s,{inv:0})}}function G(t,e,s){s.checked=!1
const o=E(s),n=t.items[s.value]?.folder_id,r=-2!==e&&e!==n
N(o,r),N(o.nextElementSibling,r)}function H(t,e){f("storeitems","Filter Folder"),w([3,C(),0,k(G,t,Number(e.detail))])}function O(t,e){const s=function(t,e){return new D({anchor:e,props:{inv:t},target:e.parentNode})}(t,e)
s.$on("filter",k(H,t))}function U(t,e,s){s.checked=!1,function(t,e,s){t.items[s].folder_id=Number(e)}(t,e,s.value)
const o=E(s)
N(o,!0),N(o.nextElementSibling,!0)}async function V(t,e,s){(await S(e,s.map((t=>t.value)))).s&&s.forEach(k(U,t,e))}function Y(t,e){f("storeitems","Move to Folder")
const s=$('[name="storeIndex[]"]:checked')
F(30,s).forEach(k(V,t,e.detail))}function q(t,e){const s=function(t,e){const s=[{id:"-1",name:"Main"},...v(t.folders).map((([t,e])=>({id:t,name:e})))]
return new L({anchor:e,props:{folders:s},target:e.parentNode})}(t,e)
s.$on("move",k(Y,t))}function J(){A().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function K(){if(x())return
const[t]=document.forms
t&&(!async function(t){if(!y("enableFolderFilter"))return
const e=await M()
e?.folders&&(O(e,t),q(e,t))}(t),function(t){const{elements:e}=t
if(!e?.length)return
const[s]=I(e).filter((t=>"submit"===t.type))
if(!s)return
new _({anchor:s,target:s.parentNode}).$on("checkall",J)}(t),R())}export{K as default}
//# sourceMappingURL=storeitems-BZlEgC5B.js.map
