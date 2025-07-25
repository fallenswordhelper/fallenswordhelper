import{z as t,C as e,E as o,N as s,O as r,s as a,aq as n,A as i,F as c,u as l,c as d,l as m,ab as f,k as u,ad as p,a4 as h,aB as b,bw as g}from"./calfSystem-C1X5YxJZ.js"
import{b as j}from"./batch-BNBFzvJw.js"
import{t as F}from"./toggleForce-br4z9gGd.js"
import{F as v}from"./FolderButtons-_mGyxzY5.js"
import{g as k,M as N,d as I,i as x,a as y,b as C}from"./injectStoreItems-CzW59b6O.js"
import"./dropItem-C6AxxS-X.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-CnCwTLoU.js"
import"./htmlResult-Btqom80J.js"
import"./InfoBoxFrom-CALdsMkd.js"
import"./doStatTotal-DtCeT0Ju.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-BtFcie8u.js"
function E(t,e){a("storeitems","Check All"),e.dispatchCheckAll()}var A=e('<button class="custombutton svelte-vafhru" type="button">Check All</button>&nbsp;',1)
function S(e,a){t(a,!0)
var n=A()
o(n).__click=[E,a],s(e,n),r()}n(["click"])
var M=e('<tr class="fshCenter"><td colspan="3" class="svelte-1kpx3t5"><!></td></tr>')
function _(e,o){t(o,!0)
let a=i(o,"inv",19,(()=>({folders:{}})))
var n=M(),l=c(n),d=c(l)
v(d,{get doFilter(){return o.doFilter},get folders(){return a().folders}}),s(e,n),r()}function w(t,e,o){o.checked=!1
const s=m(o),r=t.items[o.value]?.folder_id,a=-2!==e&&e!==r
F(s,a),F(s.nextElementSibling,a)}function B(t,e){a("storeitems","Filter Folder"),j([3,k(),0,d(w,t,Number(e))])}function L(t,e,o){o.checked=!1,function(t,e,o){t.items[o].folder_id=Number(e)}(t,e,o.value)
const s=m(o)
F(s,!0),F(s.nextElementSibling,!0)}async function R(t,e,o){(await I(e,o.map((t=>t.value)))).s&&o.forEach(d(L,t,e))}function T(t,e){a("storeitems","Move to Folder")
const o=u('[name="storeIndex[]"]:checked')
p(30,o).forEach(d(R,t,e))}async function q(t){if(!b("enableFolderFilter"))return
const e=await y()
e?.folders&&(function(t,e){l(_,{anchor:e,props:{doFilter:d(B,t),inv:t},target:e.parentNode})}(e,t),function(t,e){const o=[{id:"-1",name:"Main"},...f(t.folders).map((([t,e])=>({id:t,name:e})))]
l(N,{anchor:e,props:{folders:o,moveItemsToFolder:d(T,t)},target:e.parentNode})}(e,t))}function z(){C().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function D(){if(h())return
const[t]=document.forms
t&&(q(t),function(t){const{elements:e}=t
if(!e?.length)return
const[o]=g(e).filter((t=>"submit"===t.type))
o&&l(S,{anchor:o,props:{dispatchCheckAll:z},target:o.parentNode})}(t),x())}export{D as default}
//# sourceMappingURL=storeitems-xQa6YCf5.js.map
