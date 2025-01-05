import{S as t,O as e,P as s,R as o,a7 as n,U as r,W as a,_ as i,a3 as c,a4 as l,bE as m,s as f,bF as u,X as d,bG as p,bA as h,bD as b,bH as j,cN as g,c as k,ai as v,E as $,k as x,G as F,x as I,ao as w,bj as y}from"./calfSystem-fMW-YMyF.js"
import{b as E}from"./batch-DG981iST.js"
import{t as N}from"./toggleForce-br4z9gGd.js"
import{F as S}from"./FolderButtons-CBiifoK5.js"
import{g as B,M as C,d as L,i as M,a as _,b as A}from"./injectStoreItems-BU1RVAga.js"
import"./LinkButton-9QqGD9_1.js"
import"./dropItem-BWXTQknt.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-CLqdpc-M.js"
import"./basicItem-Co_lZL1x.js"
import"./htmlResult-DQb6ND1_.js"
import"./InfoBoxFrom-BQSTjSr-.js"
import"./doStatTotal-ZW6rfEGB.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-DeAz6Is4.js"
import"./daLoadInventory-C5VqDf3X.js"
import"./flattenItems-DBwSgTaC.js"
import"./LinkButtonBracketed-BncsiWAk.js"
function R(t){let e,s,m,f
return{c(){e=o("button"),e.textContent="Check All",s=n(" "),r(e,"class","custombutton svelte-vafhru"),r(e,"type","button")},m(o,n){a(o,e,n),a(o,s,n),m||(f=i(e,"click",t[0]),m=!0)},p:c,i:c,o:c,d(t){t&&(l(e),l(s)),m=!1,f()}}}function U(t){const e=m()
return[function(){f("storeitems","Check All"),e("checkall")}]}class D extends t{constructor(t){super(),e(this,t,U,R,s,{})}}function G(t){let e,s,n,i
return n=new S({props:{folders:t[0].folders}}),n.$on("filter",t[1]),{c(){e=o("tr"),s=o("td"),u(n.$$.fragment),r(s,"colspan","3"),r(s,"class","svelte-1kpx3t5"),r(e,"class","fshCenter")},m(t,o){a(t,e,o),d(e,s),p(n,s,null),i=!0},p(t,[e]){const s={}
1&e&&(s.folders=t[0].folders),n.$set(s)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){b(n.$$.fragment,t),i=!1},d(t){t&&l(e),j(n)}}}function q(t,e,s){let{inv:o={folders:{}}}=e
return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,function(e){g.call(this,t,e)}]}class H extends t{constructor(t){super(),e(this,t,q,G,s,{inv:0})}}function O(t,e,s){s.checked=!1
const o=v(s),n=t.items[s.value]?.folder_id,r=-2!==e&&e!==n
N(o,r),N(o.nextElementSibling,r)}function P(t,e){f("storeitems","Filter Folder"),E([3,B(),0,k(O,t,Number(e.detail))])}function T(t,e){const s=function(t,e){return new H({anchor:e,props:{inv:t},target:e.parentNode})}(t,e)
s.$on("filter",k(P,t))}function W(t,e,s){s.checked=!1,function(t,e,s){t.items[s].folder_id=Number(e)}(t,e,s.value)
const o=v(s)
N(o,!0),N(o.nextElementSibling,!0)}async function X(t,e,s){(await L(e,s.map((t=>t.value)))).s&&s.forEach(k(W,t,e))}function Y(t,e){f("storeitems","Move to Folder")
const s=x('[name="storeIndex[]"]:checked')
F(30,s).forEach(k(X,t,e.detail))}function Z(t,e){const s=function(t,e){const s=[{id:"-1",name:"Main"},...$(t.folders).map((([t,e])=>({id:t,name:e})))]
return new C({anchor:e,props:{folders:s},target:e.parentNode})}(t,e)
s.$on("move",k(Y,t))}function z(){A().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function J(){if(I())return
const[t]=document.forms
t&&(!async function(t){if(!w("enableFolderFilter"))return
const e=await _()
e?.folders&&(T(e,t),Z(e,t))}(t),function(t){const{elements:e}=t
if(!e?.length)return
const[s]=y(e).filter((t=>"submit"===t.type))
if(!s)return
new D({anchor:s,target:s.parentNode}).$on("checkall",z)}(t),M())}export{J as default}
//# sourceMappingURL=storeitems-CdcDhtfZ.js.map
