import{y as t,C as e,E as o,N as s,O as r,s as a,ap as n,z as i,F as c,t as l,c as m,k as d,ab as f,h as u,a4 as p,aA as h,by as b}from"./calfSystem-CIdPz3EO.js"
import{b as j}from"./batch-DSFyFccZ.js"
import{t as g}from"./toggleForce-br4z9gGd.js"
import{F}from"./FolderButtons-CsciEMnd.js"
import{g as k,M as v,d as y,i as x,a as I,b as N}from"./injectStoreItems-B4U4zpB_.js"
import{c as C}from"./chunk-zr9rAXvK.js"
import"./dropItem-C3_j8s3A.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-Bp1OfdFE.js"
import"./htmlResult-CHYKQLWk.js"
import"./InfoBoxFrom-Dw2yPW9h.js"
import"./doStatTotal-C_bkt6VX.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-BIl6HTGq.js"
function E(t,e){a("storeitems","Check All"),e.dispatchCheckAll()}var A=e('<button class="custombutton svelte-wn7xht" type="button">Check All</button>&nbsp;',1)
function S(e,a){t(a,!0)
var n=A()
o(n).__click=[E,a],s(e,n),r()}n(["click"])
var M=e('<tr class="fshCenter"><td colspan="3" class="svelte-105bt0i"><!></td></tr>')
function _(e,o){t(o,!0)
let a=i(o,"inv",19,()=>({folders:{}}))
var n=M(),l=c(n),m=c(l)
F(m,{get doFilter(){return o.doFilter},get folders(){return a().folders}}),s(e,n),r()}function w(t,e,o){o.checked=!1
const s=d(o),r=t.items[o.value]?.folder_id,a=-2!==e&&e!==r
g(s,a),g(s.nextElementSibling,a)}function R(t,e){a("storeitems","Filter Folder"),j([3,k(),0,m(w,t,Number(e))])}function B(t,e,o){o.checked=!1,function(t,e,o){t.items[o].folder_id=Number(e)}(t,e,o.value)
const s=d(o)
g(s,!0),g(s.nextElementSibling,!0)}async function L(t,e,o){(await y(e,o.map(t=>t.value))).s&&o.forEach(m(B,t,e))}function O(t,e){a("storeitems","Move to Folder")
const o=u('[name="storeIndex[]"]:checked')
C(30,o).forEach(m(L,t,e))}async function T(t){if(!h("enableFolderFilter"))return
const e=await I()
e?.folders&&(function(t,e){l(_,{anchor:e,props:{doFilter:m(R,t),inv:t},target:e.parentNode})}(e,t),function(t,e){const o=[{id:"-1",name:"Main"},...f(t.folders).map(([t,e])=>({id:t,name:e}))]
l(v,{anchor:e,props:{folders:o,moveItemsToFolder:m(O,t)},target:e.parentNode})}(e,t))}function z(){N().forEach(t=>{t.checked=!t.disabled&&!t.checked})}function D(){if(p())return
const[t]=document.forms
t&&(T(t),function(t){const{elements:e}=t
if(!e?.length)return
const[o]=b(e).filter(t=>"submit"===t.type)
o&&l(S,{anchor:o,props:{dispatchCheckAll:z},target:o.parentNode})}(t),x())}export{D as default}
//# sourceMappingURL=storeitems-DemWOuWk.js.map
