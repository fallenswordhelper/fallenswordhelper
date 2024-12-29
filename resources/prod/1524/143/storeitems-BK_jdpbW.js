import{S as t,O as e,P as s,R as o,a7 as n,U as r,W as a,_ as i,a3 as c,a4 as l,bE as m,s as f,bF as u,X as d,bG as p,bA as h,bD as j,bH as b,cN as k,c as g,ai as v,E as $,k as F,G as x,x as I,ao as w,bj as y}from"./calfSystem-ChzN4Q-P.js"
import{b as E}from"./batch-CcQbYj5o.js"
import{t as N}from"./toggleForce-br4z9gGd.js"
import{F as S}from"./FolderButtons-9IFoeziH.js"
import{g as B,M as C,d as L,i as M,a as A,b as R}from"./injectStoreItems-CJhTEwHt.js"
import"./LinkButton-BclPa9W-.js"
import"./dropItem-C0wwOEuw.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-B0eTyDSi.js"
import"./basicItem-Dp_qF4zf.js"
import"./htmlResult-BuU0L_lS.js"
import"./InfoBoxFrom-C34rFa80.js"
import"./doStatTotal-CXgr6RmM.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-C70oEO0t.js"
import"./daLoadInventory-BJGfaSuo.js"
import"./flattenItems-DRKC5Ux6.js"
import"./LinkButtonBracketed-DOkZNd-3.js"
function T(t){let e,s,m,f
return{c(){e=o("button"),e.textContent="Check All",s=n(" "),r(e,"class","custombutton svelte-vafhru"),r(e,"type","button")},m(o,n){a(o,e,n),a(o,s,n),m||(f=i(e,"click",t[0]),m=!0)},p:c,i:c,o:c,d(t){t&&(l(e),l(s)),m=!1,f()}}}function _(t){const e=m()
return[function(){f("storeitems","Check All"),e("checkall")}]}class D extends t{constructor(t){super(),e(this,t,_,T,s,{})}}function G(t){let e,s,n,i
return n=new S({props:{folders:t[0].folders}}),n.$on("filter",t[1]),{c(){e=o("tr"),s=o("td"),u(n.$$.fragment),r(s,"colspan","3"),r(s,"class","svelte-1kpx3t5"),r(e,"class","fshCenter")},m(t,o){a(t,e,o),d(e,s),p(n,s,null),i=!0},p(t,[e]){const s={}
1&e&&(s.folders=t[0].folders),n.$set(s)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){j(n.$$.fragment,t),i=!1},d(t){t&&l(e),b(n)}}}function X(t,e,s){let{inv:o={folders:{}}}=e
return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,function(e){k.call(this,t,e)}]}class q extends t{constructor(t){super(),e(this,t,X,G,s,{inv:0})}}function H(t,e,s){s.checked=!1
const o=v(s),n=t.items[s.value]?.folder_id,r=-2!==e&&e!==n
N(o,r),N(o.nextElementSibling,r)}function O(t,e){f("storeitems","Filter Folder"),E([3,B(),0,g(H,t,Number(e.detail))])}function P(t,e){const s=function(t,e){return new q({anchor:e,props:{inv:t},target:e.parentNode})}(t,e)
s.$on("filter",g(O,t))}function U(t,e,s){s.checked=!1,function(t,e,s){t.items[s].folder_id=Number(e)}(t,e,s.value)
const o=v(s)
N(o,!0),N(o.nextElementSibling,!0)}async function W(t,e,s){(await L(e,s.map((t=>t.value)))).s&&s.forEach(g(U,t,e))}function Y(t,e){f("storeitems","Move to Folder")
const s=F('[name="storeIndex[]"]:checked')
x(30,s).forEach(g(W,t,e.detail))}function Z(t,e){const s=function(t,e){const s=[{id:"-1",name:"Main"},...$(t.folders).map((([t,e])=>({id:t,name:e})))]
return new C({anchor:e,props:{folders:s},target:e.parentNode})}(t,e)
s.$on("move",g(Y,t))}function z(){R().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function J(){if(I())return
const[t]=document.forms
t&&(!async function(t){if(!w("enableFolderFilter"))return
const e=await A()
e?.folders&&(P(e,t),Z(e,t))}(t),function(t){const{elements:e}=t
if(!e?.length)return
const[s]=y(e).filter((t=>"submit"===t.type))
if(!s)return
new D({anchor:s,target:s.parentNode}).$on("checkall",z)}(t),M())}export{J as default}
//# sourceMappingURL=storeitems-BK_jdpbW.js.map
