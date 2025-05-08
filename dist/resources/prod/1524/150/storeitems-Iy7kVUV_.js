import{R as t,X as e,au as o,a3 as s,a4 as r,s as a,a6 as n,bE as i,Z as c,ad as l,e as d,ai as m,H as f,n as u,J as p,A as h,ao as b,bk as g}from"./calfSystem-BGOTz8de.js"
import{b as j}from"./batch-DnPGAgm3.js"
import{t as v}from"./toggleForce-br4z9gGd.js"
import{F}from"./FolderButtons-D_Y6uM2p.js"
import{g as k,M as x,d as y,i as E,a as I,b as N}from"./injectStoreItems-C3MsFDsI.js"
import"./dropItem-DKA_BeJT.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-BMwt7Ul-.js"
import"./htmlResult-wAGcD4rm.js"
import"./InfoBoxFrom-BSCsEypB.js"
import"./doStatTotal-7TiKJNmH.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-BIJCb08V.js"
function S(t,e){a("storeitems","Check All"),e.dispatchCheckAll()}var A=e('<button class="custombutton svelte-vafhru" type="button">Check All</button>&nbsp;',1)
function C(e,a){t(a,!0)
var n=A()
o(n).__click=[S,a],s(e,n),r()}n(["click"])
var M=e('<tr class="fshCenter"><td colspan="3" class="svelte-1kpx3t5"><!></td></tr>')
function R(e,o){t(o,!0)
let a=i(o,"inv",19,(()=>({folders:{}})))
var n=M(),l=c(n),d=c(l)
F(d,{get doFilter(){return o.doFilter},get folders(){return a().folders}}),s(e,n),r()}function _(t,e,o){o.checked=!1
const s=m(o),r=t.items[o.value]?.folder_id,a=-2!==e&&e!==r
v(s,a),v(s.nextElementSibling,a)}function w(t,e){a("storeitems","Filter Folder"),j([3,k(),0,d(_,t,Number(e))])}function B(t,e,o){o.checked=!1,function(t,e,o){t.items[o].folder_id=Number(e)}(t,e,o.value)
const s=m(o)
v(s,!0),v(s.nextElementSibling,!0)}async function D(t,e,o){(await y(e,o.map((t=>t.value)))).s&&o.forEach(d(B,t,e))}function H(t,e){a("storeitems","Move to Folder")
const o=u('[name="storeIndex[]"]:checked')
p(30,o).forEach(d(D,t,e))}async function J(t){if(!b("enableFolderFilter"))return
const e=await I()
e?.folders&&(function(t,e){l(R,{anchor:e,props:{doFilter:d(w,t),inv:t},target:e.parentNode})}(e,t),function(t,e){const o=[{id:"-1",name:"Main"},...f(t.folders).map((([t,e])=>({id:t,name:e})))]
l(x,{anchor:e,props:{folders:o,moveItemsToFolder:d(H,t)},target:e.parentNode})}(e,t))}function T(){N().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function G(){if(h())return
const[t]=document.forms
t&&(J(t),function(t){const{elements:e}=t
if(!e?.length)return
const[o]=g(e).filter((t=>"submit"===t.type))
o&&l(C,{anchor:o,props:{dispatchCheckAll:T},target:o.parentNode})}(t),E())}export{G as default}
//# sourceMappingURL=storeitems-Iy7kVUV_.js.map
