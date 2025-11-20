import{y as t,C as e,E as o,N as s,O as r,s as a,ap as n,z as i,F as c,t as l,c as m,k as d,ab as f,h as u,a4 as p,aA as h,by as b}from"./calfSystem-HVCiy-VV.js"
import{b as j}from"./batch-DqKzBoJR.js"
import{t as g}from"./toggleForce-br4z9gGd.js"
import{F}from"./FolderButtons-BuCf5paR.js"
import{g as k,M as v,d as y,i as x,a as I,b as N}from"./injectStoreItems-XjZsbQLZ.js"
import{c as C}from"./chunk-zr9rAXvK.js"
import"./dropItem-FcGA-m3d.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-NKMoPAZh.js"
import"./htmlResult-BVV0RUGi.js"
import"./InfoBoxFrom-Zar6WCPQ.js"
import"./doStatTotal-C5onnQLz.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-CEp2kJt3.js"
var E=e('<button class="custombutton svelte-wn7xht" type="button">Check All</button>&nbsp;',1)
function A(e,n){t(n,!0)
var i=E()
o(i).__click=function(){a("storeitems","Check All"),n.dispatchCheckAll()},s(e,i),r()}n(["click"])
var S=e('<tr class="fshCenter"><td colspan="3" class="svelte-105bt0i"><!></td></tr>')
function M(e,o){t(o,!0)
let a=i(o,"inv",19,()=>({folders:{}}))
var n=S(),l=c(n),m=c(l)
F(m,{get doFilter(){return o.doFilter},get folders(){return a().folders}}),s(e,n),r()}function _(t,e,o){o.checked=!1
const s=d(o),r=t.items[o.value]?.folder_id,a=-2!==e&&e!==r
g(s,a),g(s.nextElementSibling,a)}function w(t,e){a("storeitems","Filter Folder"),j([3,k(),0,m(_,t,Number(e))])}function R(t,e,o){o.checked=!1,function(t,e,o){t.items[o].folder_id=Number(e)}(t,e,o.value)
const s=d(o)
g(s,!0),g(s.nextElementSibling,!0)}async function B(t,e,o){(await y(e,o.map(t=>t.value))).s&&o.forEach(m(R,t,e))}function L(t,e){a("storeitems","Move to Folder")
const o=u('[name="storeIndex[]"]:checked')
C(30,o).forEach(m(B,t,e))}async function O(t){if(!h("enableFolderFilter"))return
const e=await I()
e?.folders&&(function(t,e){l(M,{anchor:e,props:{doFilter:m(w,t),inv:t},target:e.parentNode})}(e,t),function(t,e){const o=[{id:"-1",name:"Main"},...f(t.folders).map(([t,e])=>({id:t,name:e}))]
l(v,{anchor:e,props:{folders:o,moveItemsToFolder:m(L,t)},target:e.parentNode})}(e,t))}function T(){N().forEach(t=>{t.checked=!t.disabled&&!t.checked})}function z(){if(p())return
const[t]=document.forms
t&&(O(t),function(t){const{elements:e}=t
if(!e?.length)return
const[o]=b(e).filter(t=>"submit"===t.type)
o&&l(A,{anchor:o,props:{dispatchCheckAll:T},target:o.parentNode})}(t),x())}export{z as default}
//# sourceMappingURL=storeitems-D_-s15Te.js.map
