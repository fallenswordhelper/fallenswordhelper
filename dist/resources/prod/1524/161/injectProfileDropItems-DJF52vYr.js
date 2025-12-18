import{y as o,A as t,O as e,s,h as r,k as a,m as n,b0 as i,t as m,c,q as p,aA as f,b as d,a3 as l,av as u,p as h,a4 as j,e9 as g}from"./calfSystem-Cs6CSxoU.js"
import{M as y,d as b,g as k,c as w,e as S,i as D}from"./injectStoreItems-zTGuyh4P.js"
import{Q as v}from"./QuickSelectClasses-CCxO6YjX.js"
import{c as I}from"./chunk-zr9rAXvK.js"
import{c as x}from"./closestTable-CWRa1z_C.js"
import{r as N}from"./removeRow-DGR2Oyx6.js"
import{e as E}from"./errorDialog-B4_TjdGG.js"
import{e as P,s as A}from"./selfIdIs-BJkQHLVH.js"
import{s as C}from"./simpleCheckbox-C-dxZ6vG.js"
import"./dropItem-CsZlrJDb.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-Pw0D8xc-.js"
import"./htmlResult-zJJ1KGba.js"
import"./InfoBoxFrom-DFKUvyJC.js"
import"./doStatTotal-CYFlRYmG.js"
import"./arrayFromRadioNodeList-B2UaM4Hg.js"
import"./batch-BtMyX_wP.js"
import"./createStyle-SGEMbHV8.js"
import"./isChecked-D_0do7nT.js"
function T(r,a){o(a,!1),t(),v(r,{dispatchPerf:()=>s("drop-items","doPerf"),dispatchSelect:o=>s("drop-items","doSelect",o),dispatchToggle:()=>s("drop-items","toggleSelectST")}),e()}function F(){return r('[name="removeIndex[]"]:checked')}const M=o=>({id:i(o.parentNode.href,"folder_id"),name:n(o.parentNode.parentNode)})
async function R(o,t){const e=await b(o,t.map(o=>o.value))
e?.s&&t.forEach(N)}function $(o){s("dropitems","Move to Folder"),I(30,F()).forEach(c(R,o))}function B(o){k().forEach(t=>{t.checked=Boolean(o)})}const J="ajaxifyDestroy",Q="disableDestroyPrompts"
let _=0,q=1,z=0
async function L(o){const t=await w(o.map(o=>o.value))
E(t),t.s&&o.forEach(N)}function O(o){o.returnValue&&_&&(o.preventDefault(),I(30,F()).forEach(L),s("dropitems","Destroy by AJAX"))}function V(){return s("dropitems","Destroy without prompts"),!0}function X(){window.confirmDestroy=q?V:z}function Y(){s("dropitems","handleAjaxifyPref"),_=!_,u(J,_)}function G(){s("dropitems","handleDestroyPref"),q=!q,u(Q,q),X()}function H(o){l(o.parentNode,`&nbsp;&nbsp;${C(J)}&nbsp;&nbsp;${C(Q)}`),d(o.parentNode,"change",P([[A(J),Y],[A(Q),G]]))}const K=[function(){const o=r('#pCC img[src$="/folder.png"]')
if(!o.length)return
const t=a(x(o[0])),e=o.map(M)
m(y,{anchor:t.nextElementSibling,props:{folders:e,moveItemsToFolder:$},target:t.parentNode})},D,function(){const o=p('input[type="submit"]')
o&&(H(o),q=f(Q),z=window.confirmDestroy,X(),_=f(J),d(document.forms[0],"submit",O),window.check=B)}]
function U(){p(".backpack-manage-container")&&(m(T,{target:h()}),!j()&&S()&&g(K))}export{U as default}
//# sourceMappingURL=injectProfileDropItems-DJF52vYr.js.map
