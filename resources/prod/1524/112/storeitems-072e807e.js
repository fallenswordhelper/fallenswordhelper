import{S as t,J as s,K as e,L as o,_ as n,N as r,P as a,U as i,W as c,X as l,b9 as m,n as f,ba as u,Q as d,bb as p,b5 as h,b8 as j,bc as b,c8 as g,c as k,C as $,j as v,bW as F,ad as x,aT as y}from"./calfSystem-4830a18d.js"
import{b as I}from"./batch-54067b0c.js"
import{c as L}from"./closestTr-a662daf2.js"
import{t as N}from"./toggleForce-6124e333.js"
import{F as w}from"./FolderButtons-25d41dc9.js"
import{g as C,M as E,d as S,i as B,a as M,b as A}from"./injectStoreItems-bf814ef1.js"
import{c as T}from"./chunk-cd03a005.js"
import"./each-1f09c43f.js"
import"./LinkButton-59368dc4.js"
import"./dropItem-09106184.js"
import"./dialog-9896baf4.js"
import"./dialogMsg-7c5fba89.js"
import"./isArray-09a53da7.js"
import"./sendItems-2a530a59.js"
import"./basicItem-cb072d2b.js"
import"./htmlResult-7fa1a7c5.js"
import"./InfoBoxFrom-29ddbf6c.js"
import"./doStatTotal-331c56c0.js"
import"./errorDialog-9e633a62.js"
import"./arrayFromRadioNodeList-08483635.js"
import"./daLoadInventory-9c7bd6b5.js"
import"./flattenItems-03659160.js"
import"./LinkButtonBracketed-0fb81602.js"
function W(t){let s,e,m,f
return{c(){s=o("button"),s.textContent="Check All",e=n(" "),r(s,"class","custombutton svelte-vafhru"),r(s,"type","button")},m(o,n){a(o,s,n),a(o,e,n),m||(f=i(s,"click",t[0]),m=!0)},p:c,i:c,o:c,d(t){t&&(l(s),l(e)),m=!1,f()}}}function _(t){const s=m()
return[function(){f("storeitems","Check All"),s("checkall")}]}class D extends t{constructor(t){super(),s(this,t,_,W,e,{})}}function Q(t){let s,e,n,i
return n=new w({props:{folders:t[0].folders}}),n.$on("filter",t[1]),{c(){s=o("tr"),e=o("td"),u(n.$$.fragment),r(e,"colspan","3"),r(e,"class","svelte-1kpx3t5"),r(s,"class","fshCenter")},m(t,o){a(t,s,o),d(s,e),p(n,e,null),i=!0},p(t,[s]){const e={}
1&s&&(e.folders=t[0].folders),n.$set(e)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){j(n.$$.fragment,t),i=!1},d(t){t&&l(s),b(n)}}}function R(t,s,e){let{inv:o={folders:{}}}=s
return t.$$set=t=>{"inv"in t&&e(0,o=t.inv)},[o,function(s){g.call(this,t,s)}]}class J extends t{constructor(t){super(),s(this,t,R,Q,e,{inv:0})}}function K(t,s,e){e.checked=!1
const o=L(e),n=t.items[e.value].folder_id,r=-2!==s&&s!==n
N(o,r),N(o.nextElementSibling,r)}function O(t,s){f("storeitems","Filter Folder"),I([3,C(),0,k(K,t,Number(s.detail))])}function P(t,s){const e=function(t,s){return new J({anchor:s,props:{inv:t},target:s.parentNode})}(t,s)
e.$on("filter",k(O,t))}function U(t,s,e){e.checked=!1,function(t,s,e){t.items[e].folder_id=Number(s)}(t,s,e.value)
const o=L(e)
N(o,!0),N(o.nextElementSibling,!0)}async function X(t,s,e){(await S(s,e.map((t=>t.value)))).s&&e.forEach(k(U,t,s))}function Y(t,s){f("storeitems","Move to Folder")
const e=v('[name="storeIndex[]"]:checked')
T(30,e).forEach(k(X,t,s.detail))}function q(t,s){const e=function(t,s){const e=[{id:"-1",name:"Main"},...$(t.folders).map((([t,s])=>({id:t,name:s})))]
return new E({anchor:s,props:{folders:e},target:s.parentNode})}(t,s)
e.$on("move",k(Y,t))}function z(){A().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function G(){F()&&x("enableFolderFilter")&&async function(){const t=await M()
if(!t.folders)return
const[s]=document.forms
P(t,s),q(t,s)}(),function(){const t=document.forms[0]?.elements
if(!t?.length)return
const[s]=y(t).filter((t=>"submit"===t.type))
if(!s)return
new D({anchor:s,target:s.parentNode}).$on("checkall",z)}(),B()}export{G as default}
//# sourceMappingURL=storeitems-072e807e.js.map
