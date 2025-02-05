import{S as t,P as e,Q as s,T as o,U as n,_ as r,a1 as a,a3 as i,a9 as c,a5 as l,bH as m,s as f,bJ as u,bD as d,bE as p,a0 as h,bK as b,bL as j,cX as g,d as k,ak as v,F as $,l as F,H as x,y,aq as I,bk as w}from"./calfSystem-BAeDn21M.js"
import{b as S}from"./batch-DC6H1oLU.js"
import{t as E}from"./toggleForce-br4z9gGd.js"
import{F as N}from"./FolderButtons-Ced-z_wb.js"
import{g as B,M as L,d as C,i as M,a as _,b as A}from"./injectStoreItems-DUmrq6np.js"
import"./LinkButton-DewvBSzv.js"
import"./dropItem-BQ0Xs17T.js"
import"./dialog-nv9HUVDL.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-DarBfDoS.js"
import"./htmlResult-xgLNUcrb.js"
import"./InfoBoxFrom-B1Ay7uWz.js"
import"./doStatTotal-tZMNla4Z.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-C6bFFPg-.js"
import"./daLoadInventory-CO87bGXD.js"
import"./basicItem-jvMH1Iol.js"
import"./flattenItems-BaJ8xXkd.js"
import"./LinkButtonBracketed-BBtbkBtS.js"
function D(t){let e,s,m,f
return{c(){e=i("button"),e.textContent="Check All",s=c(" "),l(e,"class","custombutton svelte-vafhru"),l(e,"type","button")},m(o,n){r(o,e,n),r(o,s,n),m||(f=a(e,"click",t[0]),m=!0)},p:o,i:o,o:o,d(t){t&&(n(e),n(s)),m=!1,f()}}}function H(t){const e=m()
return[function(){f("storeitems","Check All"),e("checkall")}]}class Q extends t{constructor(t){super(),e(this,t,H,D,s,{})}}function R(t){let e,s,o,a
return o=new N({props:{folders:t[0].folders}}),o.$on("filter",t[1]),{c(){e=i("tr"),s=i("td"),j(o.$$.fragment),l(s,"colspan","3"),l(s,"class","svelte-1kpx3t5"),l(e,"class","fshCenter")},m(t,n){r(t,e,n),h(e,s),b(o,s,null),a=!0},p(t,[e]){const s={}
1&e&&(s.folders=t[0].folders),o.$set(s)},i(t){a||(p(o.$$.fragment,t),a=!0)},o(t){d(o.$$.fragment,t),a=!1},d(t){t&&n(e),u(o)}}}function T(t,e,s){let{inv:o={folders:{}}}=e
return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,function(e){g.call(this,t,e)}]}class W extends t{constructor(t){super(),e(this,t,T,R,s,{inv:0})}}function q(t,e,s){s.checked=!1
const o=v(s),n=t.items[s.value]?.folder_id,r=-2!==e&&e!==n
E(o,r),E(o.nextElementSibling,r)}function J(t,e){f("storeitems","Filter Folder"),S([3,B(),0,k(q,t,Number(e.detail))])}function K(t,e){const s=function(t,e){return new W({anchor:e,props:{inv:t},target:e.parentNode})}(t,e)
s.$on("filter",k(J,t))}function P(t,e,s){s.checked=!1,function(t,e,s){t.items[s].folder_id=Number(e)}(t,e,s.value)
const o=v(s)
E(o,!0),E(o.nextElementSibling,!0)}async function U(t,e,s){(await C(e,s.map((t=>t.value)))).s&&s.forEach(k(P,t,e))}function X(t,e){f("storeitems","Move to Folder")
const s=F('[name="storeIndex[]"]:checked')
x(30,s).forEach(k(U,t,e.detail))}function Z(t,e){const s=function(t,e){const s=[{id:"-1",name:"Main"},...$(t.folders).map((([t,e])=>({id:t,name:e})))]
return new L({anchor:e,props:{folders:s},target:e.parentNode})}(t,e)
s.$on("move",k(X,t))}function z(){A().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function G(){if(y())return
const[t]=document.forms
t&&(!async function(t){if(!I("enableFolderFilter"))return
const e=await _()
e?.folders&&(K(e,t),Z(e,t))}(t),function(t){const{elements:e}=t
if(!e?.length)return
const[s]=w(e).filter((t=>"submit"===t.type))
if(!s)return
new Q({anchor:s,target:s.parentNode}).$on("checkall",z)}(t),M())}export{G as default}
//# sourceMappingURL=storeitems-D8OKRlrh.js.map
