import{y as o,A as t,O as e,s,h as r,k as a,m as n,b0 as i,t as m,c,q as p,aA as f,b as d,a3 as l,av as u,p as h,a4 as j,e8 as y}from"./calfSystem-HVCiy-VV.js"
import{M as g,d as b,g as k,c as w,e as S,i as v}from"./injectStoreItems-XjZsbQLZ.js"
import{Q as D}from"./QuickSelectClasses-CtRfs3_D.js"
import{c as I}from"./chunk-zr9rAXvK.js"
import{c as x}from"./closestTable-Cl0v-0VU.js"
import{r as N}from"./removeRow-CDVskRDs.js"
import{e as E}from"./errorDialog-B4_TjdGG.js"
import{e as A,s as C}from"./selfIdIs-DjCJFjQp.js"
import{s as P}from"./simpleCheckbox-CEHi-xtc.js"
import"./dropItem-FcGA-m3d.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-NKMoPAZh.js"
import"./htmlResult-BVV0RUGi.js"
import"./InfoBoxFrom-Zar6WCPQ.js"
import"./doStatTotal-C5onnQLz.js"
import"./arrayFromRadioNodeList-CEp2kJt3.js"
import"./batch-DqKzBoJR.js"
import"./createStyle-u6QR1rZp.js"
import"./isChecked-D_0do7nT.js"
function T(r,a){o(a,!1),t(),D(r,{dispatchPerf:()=>s("drop-items","doPerf"),dispatchSelect:o=>s("drop-items","doSelect",o),dispatchToggle:()=>s("drop-items","toggleSelectST")}),e()}function F(){return r('[name="removeIndex[]"]:checked')}const M=o=>({id:i(o.parentNode.href,"folder_id"),name:n(o.parentNode.parentNode)})
async function R(o,t){const e=await b(o,t.map(o=>o.value))
e?.s&&t.forEach(N)}function $(o){s("dropitems","Move to Folder"),I(30,F()).forEach(c(R,o))}function B(o){k().forEach(t=>{t.checked=Boolean(o)})}const L="ajaxifyDestroy",O="disableDestroyPrompts"
let Q=0,X=1,q=0
async function J(o){const t=await w(o.map(o=>o.value))
E(t),t.s&&o.forEach(N)}function V(o){o.returnValue&&Q&&(o.preventDefault(),I(30,F()).forEach(J),s("dropitems","Destroy by AJAX"))}function Z(){return s("dropitems","Destroy without prompts"),!0}function _(){window.confirmDestroy=X?Z:q}function z(){s("dropitems","handleAjaxifyPref"),Q=!Q,u(L,Q)}function G(){s("dropitems","handleDestroyPref"),X=!X,u(O,X),_()}function H(o){l(o.parentNode,`&nbsp;&nbsp;${P(L)}&nbsp;&nbsp;${P(O)}`),d(o.parentNode,"change",A([[C(L),z],[C(O),G]]))}const K=[function(){const o=r('#pCC img[src$="/folder.png"]')
if(!o.length)return
const t=a(x(o[0])),e=o.map(M)
m(g,{anchor:t.nextElementSibling,props:{folders:e,moveItemsToFolder:$},target:t.parentNode})},v,function(){const o=p('input[type="submit"]')
o&&(H(o),X=f(O),q=window.confirmDestroy,_(),Q=f(L),d(document.forms[0],"submit",V),window.check=B)}]
function U(){p(".backpack-manage-container")&&(m(T,{target:h()}),!j()&&S()&&y(K))}export{U as default}
//# sourceMappingURL=injectProfileDropItems-D43oCIkS.js.map
