import{x as t,A as e,C as o,K as s,L as r,s as a,ao as n,y as i,D as c,n as l,c as m,j as d,a9 as f,h as u,ab as p,a2 as h,az as b,bu as j}from"./calfSystem-UyQ_FKFu.js"
import{b as g}from"./batch-Ck9KyLhG.js"
import{t as v}from"./toggleForce-br4z9gGd.js"
import{F}from"./FolderButtons-CBTaD3Xs.js"
import{g as k,M as x,d as y,i as C,a as I,b as N}from"./injectStoreItems-DqLU2ZUY.js"
import"./dropItem-CIa01p72.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-BQXqHcQL.js"
import"./htmlResult-C3r5PHKK.js"
import"./InfoBoxFrom-B2WmDuDa.js"
import"./doStatTotal-Ck4LQhz1.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-ExIELqpW.js"
function A(t,e){a("storeitems","Check All"),e.dispatchCheckAll()}var E=e('<button class="custombutton svelte-vafhru" type="button">Check All</button>&nbsp;',1)
function M(e,a){t(a,!0)
var n=E()
o(n).__click=[A,a],s(e,n),r()}n(["click"])
var S=e('<tr class="fshCenter"><td colspan="3" class="svelte-1kpx3t5"><!></td></tr>')
function _(e,o){t(o,!0)
let a=i(o,"inv",19,()=>({folders:{}}))
var n=S(),l=c(n),m=c(l)
F(m,{get doFilter(){return o.doFilter},get folders(){return a().folders}}),s(e,n),r()}function w(t,e,o){o.checked=!1
const s=d(o),r=t.items[o.value]?.folder_id,a=-2!==e&&e!==r
v(s,a),v(s.nextElementSibling,a)}function B(t,e){a("storeitems","Filter Folder"),g([3,k(),0,m(w,t,Number(e))])}function D(t,e,o){o.checked=!1,function(t,e,o){t.items[o].folder_id=Number(e)}(t,e,o.value)
const s=d(o)
v(s,!0),v(s.nextElementSibling,!0)}async function L(t,e,o){(await y(e,o.map(t=>t.value))).s&&o.forEach(m(D,t,e))}function R(t,e){a("storeitems","Move to Folder")
const o=u('[name="storeIndex[]"]:checked')
p(30,o).forEach(m(L,t,e))}async function T(t){if(!b("enableFolderFilter"))return
const e=await I()
e?.folders&&(function(t,e){l(_,{anchor:e,props:{doFilter:m(B,t),inv:t},target:e.parentNode})}(e,t),function(t,e){const o=[{id:"-1",name:"Main"},...f(t.folders).map(([t,e])=>({id:t,name:e}))]
l(x,{anchor:e,props:{folders:o,moveItemsToFolder:m(R,t)},target:e.parentNode})}(e,t))}function z(){N().forEach(t=>{t.checked=!t.disabled&&!t.checked})}function G(){if(h())return
const[t]=document.forms
t&&(T(t),function(t){const{elements:e}=t
if(!e?.length)return
const[o]=j(e).filter(t=>"submit"===t.type)
o&&l(M,{anchor:o,props:{dispatchCheckAll:z},target:o.parentNode})}(t),C())}export{G as default}
//# sourceMappingURL=storeitems-mfZEyID0.js.map
