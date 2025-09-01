import{x as t,B as e,D as o,L as s,N as r,s as a,ap as n,y as i,E as c,n as l,c as m,j as d,aa as f,h as u,ac as p,a3 as h,aA as b,bx as g}from"./calfSystem-CQOGdqPv.js"
import{b as j}from"./batch-ZfzqhoeD.js"
import{t as v}from"./toggleForce-br4z9gGd.js"
import{F}from"./FolderButtons-CrDgfyi3.js"
import{g as k,M as x,d as y,i as N,a as E,b as I}from"./injectStoreItems-BqehzxQt.js"
import"./dropItem-DFhw6fWl.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-Cnqsnjio.js"
import"./htmlResult-BYIVInNx.js"
import"./InfoBoxFrom-GavcHhIs.js"
import"./doStatTotal-C5V1waCr.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-CmcePKfh.js"
function A(t,e){a("storeitems","Check All"),e.dispatchCheckAll()}var C=e('<button class="custombutton svelte-vafhru" type="button">Check All</button>&nbsp;',1)
function M(e,a){t(a,!0)
var n=C()
o(n).__click=[A,a],s(e,n),r()}n(["click"])
var S=e('<tr class="fshCenter"><td colspan="3" class="svelte-1kpx3t5"><!></td></tr>')
function _(e,o){t(o,!0)
let a=i(o,"inv",19,()=>({folders:{}}))
var n=S(),l=c(n),m=c(l)
F(m,{get doFilter(){return o.doFilter},get folders(){return a().folders}}),s(e,n),r()}function w(t,e,o){o.checked=!1
const s=d(o),r=t.items[o.value]?.folder_id,a=-2!==e&&e!==r
v(s,a),v(s.nextElementSibling,a)}function B(t,e){a("storeitems","Filter Folder"),j([3,k(),0,m(w,t,Number(e))])}function D(t,e,o){o.checked=!1,function(t,e,o){t.items[o].folder_id=Number(e)}(t,e,o.value)
const s=d(o)
v(s,!0),v(s.nextElementSibling,!0)}async function L(t,e,o){(await y(e,o.map(t=>t.value))).s&&o.forEach(m(D,t,e))}function R(t,e){a("storeitems","Move to Folder")
const o=u('[name="storeIndex[]"]:checked')
p(30,o).forEach(m(L,t,e))}async function T(t){if(!b("enableFolderFilter"))return
const e=await E()
e?.folders&&(function(t,e){l(_,{anchor:e,props:{doFilter:m(B,t),inv:t},target:e.parentNode})}(e,t),function(t,e){const o=[{id:"-1",name:"Main"},...f(t.folders).map(([t,e])=>({id:t,name:e}))]
l(x,{anchor:e,props:{folders:o,moveItemsToFolder:m(R,t)},target:e.parentNode})}(e,t))}function G(){I().forEach(t=>{t.checked=!t.disabled&&!t.checked})}function J(){if(h())return
const[t]=document.forms
t&&(T(t),function(t){const{elements:e}=t
if(!e?.length)return
const[o]=g(e).filter(t=>"submit"===t.type)
o&&l(M,{anchor:o,props:{dispatchCheckAll:G},target:o.parentNode})}(t),N())}export{J as default}
//# sourceMappingURL=storeitems-Dp7hA6HO.js.map
