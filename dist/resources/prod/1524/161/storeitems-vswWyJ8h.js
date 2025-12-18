import{y as t,C as e,E as o,N as s,O as r,s as a,ap as n,z as i,F as c,t as l,c as m,k as d,ab as f,h as u,a4 as p,aA as h,bz as b}from"./calfSystem-Cs6CSxoU.js"
import{b as g}from"./batch-BtMyX_wP.js"
import{t as j}from"./toggleForce-br4z9gGd.js"
import{F}from"./FolderButtons-DemK7XcK.js"
import{g as k,M as v,d as y,i as N,a as x,b as C}from"./injectStoreItems-zTGuyh4P.js"
import{c as E}from"./chunk-zr9rAXvK.js"
import"./dropItem-CsZlrJDb.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-Pw0D8xc-.js"
import"./htmlResult-zJJ1KGba.js"
import"./InfoBoxFrom-DFKUvyJC.js"
import"./doStatTotal-CYFlRYmG.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-B2UaM4Hg.js"
var I=e('<button class="custombutton svelte-wn7xht" type="button">Check All</button>&nbsp;',1)
function A(e,n){t(n,!0)
var i=I()
o(i).__click=function(){a("storeitems","Check All"),n.dispatchCheckAll()},s(e,i),r()}n(["click"])
var M=e('<tr class="fshCenter"><td colspan="3" class="svelte-105bt0i"><!></td></tr>')
function S(e,o){t(o,!0)
let a=i(o,"inv",19,()=>({folders:{}}))
var n=M(),l=c(n),m=c(l)
F(m,{get doFilter(){return o.doFilter},get folders(){return a().folders}}),s(e,n),r()}function _(t,e,o){o.checked=!1
const s=d(o),r=t.items[o.value]?.folder_id,a=-2!==e&&e!==r
j(s,a),j(s.nextElementSibling,a)}function w(t,e){a("storeitems","Filter Folder"),g([3,k(),0,m(_,t,Number(e))])}function T(t,e,o){o.checked=!1,function(t,e,o){t.items[o].folder_id=Number(e)}(t,e,o.value)
const s=d(o)
j(s,!0),j(s.nextElementSibling,!0)}async function z(t,e,o){(await y(e,o.map(t=>t.value))).s&&o.forEach(m(T,t,e))}function B(t,e){a("storeitems","Move to Folder")
const o=u('[name="storeIndex[]"]:checked')
E(30,o).forEach(m(z,t,e))}async function R(t){if(!h("enableFolderFilter"))return
const e=await x()
e?.folders&&(function(t,e){l(S,{anchor:e,props:{doFilter:m(w,t),inv:t},target:e.parentNode})}(e,t),function(t,e){const o=[{id:"-1",name:"Main"},...f(t.folders).map(([t,e])=>({id:t,name:e}))]
l(v,{anchor:e,props:{folders:o,moveItemsToFolder:m(B,t)},target:e.parentNode})}(e,t))}function D(){C().forEach(t=>{t.checked=!t.disabled&&!t.checked})}function J(){if(p())return
const[t]=document.forms
t&&(R(t),function(t){const{elements:e}=t
if(!e?.length)return
const[o]=b(e).filter(t=>"submit"===t.type)
o&&l(A,{anchor:o,props:{dispatchCheckAll:D},target:o.parentNode})}(t),N())}export{J as default}
//# sourceMappingURL=storeitems-vswWyJ8h.js.map
