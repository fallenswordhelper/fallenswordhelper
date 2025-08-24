import{x as t,B as e,D as o,L as s,N as r,s as a,ap as n,y as i,E as c,n as l,c as m,j as d,aa as f,h as u,ac as p,a3 as h,aA as b,bv as j}from"./calfSystem-79LsojAC.js"
import{b as g}from"./batch-BGPP456i.js"
import{t as v}from"./toggleForce-br4z9gGd.js"
import{F}from"./FolderButtons-CD6O8sF3.js"
import{g as k,M as x,d as y,i as E,a as N,b as I}from"./injectStoreItems-SVAYVQkP.js"
import"./dropItem-ByD6N1Np.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-3-mBKBqq.js"
import"./htmlResult-VfRQZiiv.js"
import"./InfoBoxFrom-Du-lP_up.js"
import"./doStatTotal-tBEj9xvS.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-JjADBhG9.js"
function A(t,e){a("storeitems","Check All"),e.dispatchCheckAll()}var C=e('<button class="custombutton svelte-vafhru" type="button">Check All</button>&nbsp;',1)
function S(e,a){t(a,!0)
var n=C()
o(n).__click=[A,a],s(e,n),r()}n(["click"])
var B=e('<tr class="fshCenter"><td colspan="3" class="svelte-1kpx3t5"><!></td></tr>')
function M(e,o){t(o,!0)
let a=i(o,"inv",19,()=>({folders:{}}))
var n=B(),l=c(n),m=c(l)
F(m,{get doFilter(){return o.doFilter},get folders(){return a().folders}}),s(e,n),r()}function _(t,e,o){o.checked=!1
const s=d(o),r=t.items[o.value]?.folder_id,a=-2!==e&&e!==r
v(s,a),v(s.nextElementSibling,a)}function L(t,e){a("storeitems","Filter Folder"),g([3,k(),0,m(_,t,Number(e))])}function R(t,e,o){o.checked=!1,function(t,e,o){t.items[o].folder_id=Number(e)}(t,e,o.value)
const s=d(o)
v(s,!0),v(s.nextElementSibling,!0)}async function w(t,e,o){(await y(e,o.map(t=>t.value))).s&&o.forEach(m(R,t,e))}function D(t,e){a("storeitems","Move to Folder")
const o=u('[name="storeIndex[]"]:checked')
p(30,o).forEach(m(w,t,e))}async function T(t){if(!b("enableFolderFilter"))return
const e=await N()
e?.folders&&(function(t,e){l(M,{anchor:e,props:{doFilter:m(L,t),inv:t},target:e.parentNode})}(e,t),function(t,e){const o=[{id:"-1",name:"Main"},...f(t.folders).map(([t,e])=>({id:t,name:e}))]
l(x,{anchor:e,props:{folders:o,moveItemsToFolder:m(D,t)},target:e.parentNode})}(e,t))}function H(){I().forEach(t=>{t.checked=!t.disabled&&!t.checked})}function Q(){if(h())return
const[t]=document.forms
t&&(T(t),function(t){const{elements:e}=t
if(!e?.length)return
const[o]=j(e).filter(t=>"submit"===t.type)
o&&l(S,{anchor:o,props:{dispatchCheckAll:H},target:o.parentNode})}(t),E())}export{Q as default}
//# sourceMappingURL=storeitems-_ZTX1d4R.js.map
