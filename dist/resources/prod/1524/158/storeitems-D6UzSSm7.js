import{x as t,B as e,D as o,L as s,N as r,s as a,ao as n,y as i,E as c,n as l,c as m,j as d,aa as f,h as u,a3 as p,az as h,bw as b}from"./calfSystem-CIuUjh4H.js"
import{b as j}from"./batch-BqkctEiX.js"
import{t as g}from"./toggleForce-br4z9gGd.js"
import{F as v}from"./FolderButtons-KBypcsgX.js"
import{g as F,M as k,d as x,i as N,a as y,b as E}from"./injectStoreItems-gGhukT34.js"
import{c as I}from"./chunk-zr9rAXvK.js"
import"./dropItem-DR1RMM8e.js"
import"./dialog-DuiKsz8O.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-Bk-KVFC4.js"
import"./htmlResult-Cc7d59m8.js"
import"./InfoBoxFrom-BOMuQUn_.js"
import"./doStatTotal-CiVM0LYo.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-C1e_UvkY.js"
function C(t,e){a("storeitems","Check All"),e.dispatchCheckAll()}var S=e('<button class="custombutton svelte-wn7xht" type="button">Check All</button>&nbsp;',1)
function w(e,a){t(a,!0)
var n=S()
o(n).__click=[C,a],s(e,n),r()}n(["click"])
var A=e('<tr class="fshCenter"><td colspan="3" class="svelte-105bt0i"><!></td></tr>')
function M(e,o){t(o,!0)
let a=i(o,"inv",19,()=>({folders:{}}))
var n=A(),l=c(n),m=c(l)
v(m,{get doFilter(){return o.doFilter},get folders(){return a().folders}}),s(e,n),r()}function _(t,e,o){o.checked=!1
const s=d(o),r=t.items[o.value]?.folder_id,a=-2!==e&&e!==r
g(s,a),g(s.nextElementSibling,a)}function B(t,e){a("storeitems","Filter Folder"),j([3,F(),0,m(_,t,Number(e))])}function D(t,e,o){o.checked=!1,function(t,e,o){t.items[o].folder_id=Number(e)}(t,e,o.value)
const s=d(o)
g(s,!0),g(s.nextElementSibling,!0)}async function L(t,e,o){(await x(e,o.map(t=>t.value))).s&&o.forEach(m(D,t,e))}function R(t,e){a("storeitems","Move to Folder")
const o=u('[name="storeIndex[]"]:checked')
I(30,o).forEach(m(L,t,e))}async function T(t){if(!h("enableFolderFilter"))return
const e=await y()
e?.folders&&(function(t,e){l(M,{anchor:e,props:{doFilter:m(B,t),inv:t},target:e.parentNode})}(e,t),function(t,e){const o=[{id:"-1",name:"Main"},...f(t.folders).map(([t,e])=>({id:t,name:e}))]
l(k,{anchor:e,props:{folders:o,moveItemsToFolder:m(R,t)},target:e.parentNode})}(e,t))}function z(){E().forEach(t=>{t.checked=!t.disabled&&!t.checked})}function H(){if(p())return
const[t]=document.forms
t&&(T(t),function(t){const{elements:e}=t
if(!e?.length)return
const[o]=b(e).filter(t=>"submit"===t.type)
o&&l(w,{anchor:o,props:{dispatchCheckAll:z},target:o.parentNode})}(t),N())}export{H as default}
//# sourceMappingURL=storeitems-D6UzSSm7.js.map
