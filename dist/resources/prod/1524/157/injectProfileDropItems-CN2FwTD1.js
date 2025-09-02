import{h as o,j as s,l as t,b0 as e,n as r,s as a,ac as n,c as i,q as m,aA as c,b as p,a2 as f,av as d,a3 as l,e8 as u}from"./calfSystem-CQOGdqPv.js"
import{M as h,d as j,g as y,c as b,e as g,i as w}from"./injectStoreItems-BqehzxQt.js"
import{c as D}from"./closestTable-Cs7gyt8-.js"
import{r as v}from"./removeRow-9IzwYdof.js"
import{e as x}from"./errorDialog-B4_TjdGG.js"
import{e as I,s as N}from"./selfIdIs-PWCsXJ1f.js"
import{s as k}from"./simpleCheckbox-BcIXGyya.js"
import"./dropItem-DFhw6fWl.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-Cnqsnjio.js"
import"./htmlResult-BYIVInNx.js"
import"./InfoBoxFrom-GavcHhIs.js"
import"./doStatTotal-C5V1waCr.js"
import"./arrayFromRadioNodeList-CmcePKfh.js"
import"./batch-ZfzqhoeD.js"
import"./isChecked-D_0do7nT.js"
function E(){return o('[name="removeIndex[]"]:checked')}const A=o=>({id:e(o.parentNode.href,"folder_id"),name:t(o.parentNode.parentNode)})
async function C(o,s){const t=await j(o,s.map(o=>o.value))
t?.s&&s.forEach(v)}function F(o){a("dropitems","Move to Folder"),n(30,E()).forEach(i(C,o))}function M(o){y().forEach(s=>{s.checked=Boolean(o)})}const S="ajaxifyDestroy",P="disableDestroyPrompts"
let R=0,T=1,$=0
async function B(o){const s=await b(o.map(o=>o.value))
x(s),s.s&&o.forEach(v)}function J(o){o.returnValue&&R&&(o.preventDefault(),n(30,E()).forEach(B),a("dropitems","Destroy by AJAX"))}function q(){return a("dropitems","Destroy without prompts"),!0}function G(){window.confirmDestroy=T?q:$}function L(){a("dropitems","handleAjaxifyPref"),R=!R,d(S,R)}function U(){a("dropitems","handleDestroyPref"),T=!T,d(P,T),G()}function V(o){f(o.parentNode,`&nbsp;&nbsp;${k(S)}&nbsp;&nbsp;${k(P)}`),p(o.parentNode,"change",I([[N(S),L],[N(P),U]]))}const W=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(!t.length)return
const e=s(D(t[0])),a=t.map(A)
r(h,{anchor:e.nextElementSibling,props:{folders:a,moveItemsToFolder:F},target:e.parentNode})},w,function(){const o=m('input[type="submit"]')
o&&(V(o),T=c(P),$=window.confirmDestroy,G(),R=c(S),p(document.forms[0],"submit",J),window.check=M)}]
function X(){!l()&&g()&&u(W)}export{X as default}
//# sourceMappingURL=injectProfileDropItems-CN2FwTD1.js.map
