import{x as t,A as e,C as o,K as s,L as r,s as a,ao as n,y as i,D as c,n as l,c as m,j as d,a9 as f,h as u,ab as p,a2 as h,az as b,bu as j}from"./calfSystem-CT1aM4VG.js"
import{b as g}from"./batch-CVoa0La2.js"
import{t as v}from"./toggleForce-br4z9gGd.js"
import{F}from"./FolderButtons-Dwd9WuFY.js"
import{g as k,M as x,d as y,i as I,a as C,b as E}from"./injectStoreItems-Bqi_Wg5n.js"
import"./dropItem-n_LbOoQu.js"
import"./dialog-CiSCF2So.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-pa-aKwib.js"
import"./htmlResult-DHLyE8PQ.js"
import"./InfoBoxFrom-Cozeh7z2.js"
import"./doStatTotal--TaVGr_k.js"
import"./errorDialog-B4_TjdGG.js"
import"./arrayFromRadioNodeList-Dl9Rr9JB.js"
function N(t,e){a("storeitems","Check All"),e.dispatchCheckAll()}var A=e('<button class="custombutton svelte-vafhru" type="button">Check All</button>&nbsp;',1)
function S(e,a){t(a,!0)
var n=A()
o(n).__click=[N,a],s(e,n),r()}n(["click"])
var M=e('<tr class="fshCenter"><td colspan="3" class="svelte-1kpx3t5"><!></td></tr>')
function _(e,o){t(o,!0)
let a=i(o,"inv",19,(()=>({folders:{}})))
var n=M(),l=c(n),m=c(l)
F(m,{get doFilter(){return o.doFilter},get folders(){return a().folders}}),s(e,n),r()}function w(t,e,o){o.checked=!1
const s=d(o),r=t.items[o.value]?.folder_id,a=-2!==e&&e!==r
v(s,a),v(s.nextElementSibling,a)}function L(t,e){a("storeitems","Filter Folder"),g([3,k(),0,m(w,t,Number(e))])}function B(t,e,o){o.checked=!1,function(t,e,o){t.items[o].folder_id=Number(e)}(t,e,o.value)
const s=d(o)
v(s,!0),v(s.nextElementSibling,!0)}async function D(t,e,o){(await y(e,o.map((t=>t.value)))).s&&o.forEach(m(B,t,e))}function R(t,e){a("storeitems","Move to Folder")
const o=u('[name="storeIndex[]"]:checked')
p(30,o).forEach(m(D,t,e))}async function T(t){if(!b("enableFolderFilter"))return
const e=await C()
e?.folders&&(function(t,e){l(_,{anchor:e,props:{doFilter:m(L,t),inv:t},target:e.parentNode})}(e,t),function(t,e){const o=[{id:"-1",name:"Main"},...f(t.folders).map((([t,e])=>({id:t,name:e})))]
l(x,{anchor:e,props:{folders:o,moveItemsToFolder:m(R,t)},target:e.parentNode})}(e,t))}function z(){E().forEach((t=>{t.checked=!t.disabled&&!t.checked}))}function H(){if(h())return
const[t]=document.forms
t&&(T(t),function(t){const{elements:e}=t
if(!e?.length)return
const[o]=j(e).filter((t=>"submit"===t.type))
o&&l(S,{anchor:o,props:{dispatchCheckAll:z},target:o.parentNode})}(t),I())}export{H as default}
//# sourceMappingURL=storeitems-DgK4Uguh.js.map
