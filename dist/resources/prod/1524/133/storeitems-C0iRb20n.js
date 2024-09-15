import{S as t,L as e,M as s,O as o,a3 as n,Q as r,T as a,X as i,_ as c,a0 as l,bi as m,s as f,bj as u,U as d,bk as p,be as h,bh as j,bl as b,ck as k,c as g,C as $,k as v,E as F,w as x,ai as y,b0 as I}from"./calfSystem-DKih1pr1.js"
import{b as w}from"./batch-mrnrvHBt.js"
import{c as E}from"./closestTr-DKMGvQT_.js"
import{t as N}from"./toggleForce-br4z9gGd.js"
import{F as C}from"./FolderButtons-COMWwz1L.js"
import{g as S,M as B,d as L,i as M,a as A,b as T}from"./injectStoreItems-f9HFilph.js"
import"./LinkButton-BabjyGGe.js"
import"./dropItem-DFQLzw_G.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./isArray-eVldfhw1.js"
import"./sendItems-BpPRH8Xd.js"
import"./basicItem-B_OaPnWs.js"
import"./htmlResult-BwXuziZA.js"
import"./InfoBoxFrom-DVBQINJD.js"
import"./doStatTotal-BesuVsPp.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-BEISgyHI.js"
import"./daLoadInventory-D-vXDyC_.js"
import"./flattenItems-C4pfIrZn.js"
import"./LinkButtonBracketed-D4LPe4vQ.js"
function _(t){let e,s,m,f
return{c(){e=o("button"),e.textContent="Check All",s=n(" "),r(e,"class","custombutton svelte-vafhru"),r(e,"type","button")},m(o,n){a(o,e,n),a(o,s,n),m||(f=i(e,"click",t[0]),m=!0)},p:c,i:c,o:c,d(t){t&&(l(e),l(s)),m=!1,f()}}}function D(t){const e=m()
return[function(){f("storeitems","Check All"),e("checkall")}]}class J extends t{constructor(t){super(),e(this,t,D,_,s,{})}}function R(t){let e,s,n,i
return n=new C({props:{folders:t[0].folders}}),n.$on("filter",t[1]),{c(){e=o("tr"),s=o("td"),u(n.$$.fragment),r(s,"colspan","3"),r(s,"class","svelte-1kpx3t5"),r(e,"class","fshCenter")},m(t,o){a(t,e,o),d(e,s),p(n,s,null),i=!0},p(t,[e]){const s={}
1&e&&(s.folders=t[0].folders),n.$set(s)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){j(n.$$.fragment,t),i=!1},d(t){t&&l(e),b(n)}}}function G(t,e,s){let{inv:o={folders:{}}}=e
return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,function(e){k.call(this,t,e)}]}class O extends t{constructor(t){super(),e(this,t,G,R,s,{inv:0})}}function P(t,e,s){s.checked=!1
const o=E(s),n=t.items[s.value].folder_id,r=-2!==e&&e!==n
N(o,r),N(o.nextElementSibling,r)}function Q(t,e){f("storeitems","Filter Folder"),w([3,S(),0,g(P,t,Number(e.detail))])}function U(t,e){const s=function(t,e){return new O({anchor:e,props:{inv:t},target:e.parentNode})}(t,e)
s.$on("filter",g(Q,t))}function X(t,e,s){s.checked=!1,function(t,e,s){t.items[s].folder_id=Number(e)}(t,e,s.value)
const o=E(s)
N(o,!0),N(o.nextElementSibling,!0)}async function Z(t,e,s){(await L(e,s.map((t=>t.value)))).s&&s.forEach(g(X,t,e))}function q(t,e){f("storeitems","Move to Folder")
const s=v('[name="storeIndex[]"]:checked')
F(30,s).forEach(g(Z,t,e.detail))}function z(t,e){const s=function(t,e){const s=[{id:"-1",name:"Main"},...$(t.folders).map((([t,e])=>({id:t,name:e})))]
return new B({anchor:e,props:{folders:s},target:e.parentNode})}(t,e)
s.$on("move",g(q,t))}function H(){T().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function K(){if(x())return
const[t]=document.forms
t&&(!async function(t){if(!y("enableFolderFilter"))return
const e=await A()
e?.folders&&(U(e,t),z(e,t))}(t),function(t){const{elements:e}=t
if(!e?.length)return
const[s]=I(e).filter((t=>"submit"===t.type))
if(!s)return
new J({anchor:s,target:s.parentNode}).$on("checkall",H)}(t),M())}export{K as default}
//# sourceMappingURL=storeitems-C0iRb20n.js.map
