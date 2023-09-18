import{S as t,K as e,L as s,M as o,a0 as n,O as r,Q as a,V as i,X as c,Y as l,ba as m,n as f,bb as u,R as d,bc as p,b6 as j,b9 as h,bd as b,c9 as g,c as k,C as v,j as $,bX as F,ae as x,aU as y}from"./calfSystem-abb16b0d.js"
import{b as I}from"./batch-49be00bd.js"
import{c as N}from"./closestTr-d0dbc351.js"
import{t as w}from"./toggleForce-6124e333.js"
import{F as C}from"./FolderButtons-ade79818.js"
import{g as S,M as B,d as E,i as L,a as M,b as _}from"./injectStoreItems-ecac846e.js"
import{c as A}from"./chunk-cd03a005.js"
import"./each-13c4feae.js"
import"./LinkButton-e3c794a4.js"
import"./dropItem-6a02803c.js"
import"./dialog-9896baf4.js"
import"./dialogMsg-7c5fba89.js"
import"./isArray-09a53da7.js"
import"./sendItems-ad34279c.js"
import"./basicItem-890121ae.js"
import"./htmlResult-6b7c7e7e.js"
import"./InfoBoxFrom-2b40207c.js"
import"./doStatTotal-7ecf6088.js"
import"./errorDialog-9e633a62.js"
import"./arrayFromRadioNodeList-cc7c3968.js"
import"./daLoadInventory-c2278c3f.js"
import"./flattenItems-03659160.js"
import"./LinkButtonBracketed-4d890186.js"
function D(t){let e,s,m,f
return{c(){e=o("button"),e.textContent="Check All",s=n(" "),r(e,"class","custombutton svelte-vafhru"),r(e,"type","button")},m(o,n){a(o,e,n),a(o,s,n),m||(f=i(e,"click",t[0]),m=!0)},p:c,i:c,o:c,d(t){t&&(l(e),l(s)),m=!1,f()}}}function K(t){const e=m()
return[function(){f("storeitems","Check All"),e("checkall")}]}class R extends t{constructor(t){super(),e(this,t,K,D,s,{})}}function T(t){let e,s,n,i
return n=new C({props:{folders:t[0].folders}}),n.$on("filter",t[1]),{c(){e=o("tr"),s=o("td"),u(n.$$.fragment),r(s,"colspan","3"),r(s,"class","svelte-1kpx3t5"),r(e,"class","fshCenter")},m(t,o){a(t,e,o),d(e,s),p(n,s,null),i=!0},p(t,[e]){const s={}
1&e&&(s.folders=t[0].folders),n.$set(s)},i(t){i||(j(n.$$.fragment,t),i=!0)},o(t){h(n.$$.fragment,t),i=!1},d(t){t&&l(e),b(n)}}}function X(t,e,s){let{inv:o={folders:{}}}=e
return t.$$set=t=>{"inv"in t&&s(0,o=t.inv)},[o,function(e){g.call(this,t,e)}]}class Y extends t{constructor(t){super(),e(this,t,X,T,s,{inv:0})}}function O(t,e,s){s.checked=!1
const o=N(s),n=t.items[s.value].folder_id,r=-2!==e&&e!==n
w(o,r),w(o.nextElementSibling,r)}function P(t,e){f("storeitems","Filter Folder"),I([3,S(),0,k(O,t,Number(e.detail))])}function Q(t,e){const s=function(t,e){return new Y({anchor:e,props:{inv:t},target:e.parentNode})}(t,e)
s.$on("filter",k(P,t))}function U(t,e,s){s.checked=!1,function(t,e,s){t.items[s].folder_id=Number(e)}(t,e,s.value)
const o=N(s)
w(o,!0),w(o.nextElementSibling,!0)}async function V(t,e,s){(await E(e,s.map((t=>t.value)))).s&&s.forEach(k(U,t,e))}function W(t,e){f("storeitems","Move to Folder")
const s=$('[name="storeIndex[]"]:checked')
A(30,s).forEach(k(V,t,e.detail))}function q(t,e){const s=function(t,e){const s=[{id:"-1",name:"Main"},...v(t.folders).map((([t,e])=>({id:t,name:e})))]
return new B({anchor:e,props:{folders:s},target:e.parentNode})}(t,e)
s.$on("move",k(W,t))}function z(){_().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function G(){F()&&x("enableFolderFilter")&&async function(){const t=await M()
if(!t.folders)return
const[e]=document.forms
Q(t,e),q(t,e)}(),function(){const t=document.forms[0]?.elements
if(!t?.length)return
const[e]=y(t).filter((t=>"submit"===t.type))
if(!e)return
new R({anchor:e,target:e.parentNode}).$on("checkall",z)}(),L()}export{G as default}
//# sourceMappingURL=storeitems-1317c61e.js.map
