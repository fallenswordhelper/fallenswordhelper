import{S as t,L as e,M as s,O as o,a3 as n,Q as r,T as a,X as i,_ as c,a0 as l,bg as m,s as f,bh as u,U as d,bi as p,bc as h,bf as j,bj as b,cf as g,c as k,C as v,k as $,E as F,c1 as x,ai as I,a_ as y}from"./calfSystem-G1dN925O.js"
import{b as w}from"./batch-0zyYgCi-.js"
import{c as B}from"./closestTr-ewZQ2axu.js"
import{t as C}from"./toggleForce-4Mg38a6N.js"
import{F as E}from"./FolderButtons-Cd2zUx7G.js"
import{g as N,M as S,d as L,i as M,a as _,b as A}from"./injectStoreItems-I0fI8oCm.js"
import"./LinkButton-V4dDaBVi.js"
import"./dropItem-vwbY25QT.js"
import"./dialog-RW6TE77j.js"
import"./dialogMsg-6-T2JNn4.js"
import"./isArray-bNviZzJA.js"
import"./sendItems-PYurMEkJ.js"
import"./basicItem-w_tHNJN5.js"
import"./htmlResult-kLg7g2OU.js"
import"./InfoBoxFrom-T4bMs0ax.js"
import"./doStatTotal-KBtXKxVq.js"
import"./errorDialog-UVurWbsP.js"
import"./arrayFromRadioNodeList-tL6xxVCt.js"
import"./daLoadInventory-20Qn11vN.js"
import"./flattenItems-OuxkqZMH.js"
import"./LinkButtonBracketed-LziWkhDZ.js"
function T(t){let e,s,m,f
return{c(){e=o("button"),e.textContent="Check All",s=n(" "),r(e,"class","custombutton svelte-vafhru"),r(e,"type","button")},m(o,n){a(o,e,n),a(o,s,n),m||(f=i(e,"click",t[0]),m=!0)},p:c,i:c,o:c,d(t){t&&(l(e),l(s)),m=!1,f()}}}function D(t){const e=m()
return[function(){f("storeitems","Check All"),e("checkall")}]}class O extends t{constructor(t){super(),e(this,t,D,T,s,{})}}function Q(t){let e,s,n,i
return n=new E({props:{folders:t[0].folders}}),n.$on("filter",t[1]),{c(){e=o("tr"),s=o("td"),u(n.$$.fragment),r(s,"colspan","3"),r(s,"class","svelte-1kpx3t5"),r(e,"class","fshCenter")},m(t,o){a(t,e,o),d(e,s),p(n,s,null),i=!0},p(t,[e]){const s={}
1&e&&(s.folders=t[0].folders),n.$set(s)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){j(n.$$.fragment,t),i=!1},d(t){t&&l(e),b(n)}}}function R(t,e,s){let{inv:o={folders:{}}}=e
return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,function(e){g.call(this,t,e)}]}class K extends t{constructor(t){super(),e(this,t,R,Q,s,{inv:0})}}function U(t,e,s){s.checked=!1
const o=B(s),n=t.items[s.value].folder_id,r=-2!==e&&e!==n
C(o,r),C(o.nextElementSibling,r)}function X(t,e){f("storeitems","Filter Folder"),w([3,N(),0,k(U,t,Number(e.detail))])}function Y(t,e){const s=function(t,e){return new K({anchor:e,props:{inv:t},target:e.parentNode})}(t,e)
s.$on("filter",k(X,t))}function q(t,e,s){s.checked=!1,function(t,e,s){t.items[s].folder_id=Number(e)}(t,e,s.value)
const o=B(s)
C(o,!0),C(o.nextElementSibling,!0)}async function z(t,e,s){(await L(e,s.map((t=>t.value)))).s&&s.forEach(k(q,t,e))}function G(t,e){f("storeitems","Move to Folder")
const s=$('[name="storeIndex[]"]:checked')
F(30,s).forEach(k(z,t,e.detail))}function H(t,e){const s=function(t,e){const s=[{id:"-1",name:"Main"},...v(t.folders).map((([t,e])=>({id:t,name:e})))]
return new S({anchor:e,props:{folders:s},target:e.parentNode})}(t,e)
s.$on("move",k(G,t))}function J(){A().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function P(){x()&&I("enableFolderFilter")&&async function(){const t=await _()
if(!t?.folders)return
const[e]=document.forms
Y(t,e),H(t,e)}(),function(){const t=document.forms[0]?.elements
if(!t?.length)return
const[e]=y(t).filter((t=>"submit"===t.type))
if(!e)return
new O({anchor:e,target:e.parentNode}).$on("checkall",J)}(),M()}export{P as default}
//# sourceMappingURL=storeitems-XhkvGRI6.js.map
