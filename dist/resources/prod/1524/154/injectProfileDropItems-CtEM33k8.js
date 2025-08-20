import{h as o,j as s,l as t,a_ as e,n as r,s as a,ab as n,c as i,q as m,az as c,b as p,a1 as f,au as d,a2 as l,eb as u}from"./calfSystem-KFszEm2S.js"
import{M as h,d as j,g as b,c as y,e as g,i as w}from"./injectStoreItems-Btmf0vTc.js"
import{c as D}from"./closestTable-D_vJ9Njb.js"
import{r as x}from"./removeRow-LcS1so3w.js"
import{e as I}from"./errorDialog-B4_TjdGG.js"
import{e as v,s as N}from"./selfIdIs-BBCydykm.js"
import{s as k}from"./simpleCheckbox-C7oDqkXH.js"
import"./dropItem-CZ_l1wv-.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-Bavaihje.js"
import"./htmlResult-Bbkz7jCU.js"
import"./InfoBoxFrom-HiOFdyZC.js"
import"./doStatTotal-C_eoXAtI.js"
import"./arrayFromRadioNodeList-CyfGJSyo.js"
import"./batch-CLh2C2gx.js"
import"./isChecked-D_0do7nT.js"
function E(){return o('[name="removeIndex[]"]:checked')}const C=o=>({id:e(o.parentNode.href,"folder_id"),name:t(o.parentNode.parentNode)})
async function F(o,s){const t=await j(o,s.map(o=>o.value))
t?.s&&s.forEach(x)}function M(o){a("dropitems","Move to Folder"),n(30,E()).forEach(i(F,o))}function S(o){b().forEach(s=>{s.checked=Boolean(o)})}const A="ajaxifyDestroy",P="disableDestroyPrompts"
let R=0,T=1,$=0
async function B(o){const s=await y(o.map(o=>o.value))
I(s),s.s&&o.forEach(x)}function J(o){o.returnValue&&R&&(o.preventDefault(),n(30,E()).forEach(B),a("dropitems","Destroy by AJAX"))}function _(){return a("dropitems","Destroy without prompts"),!0}function q(){window.confirmDestroy=T?_:$}function z(){a("dropitems","handleAjaxifyPref"),R=!R,d(A,R)}function G(){a("dropitems","handleDestroyPref"),T=!T,d(P,T),q()}function L(o){f(o.parentNode,`&nbsp;&nbsp;${k(A)}&nbsp;&nbsp;${k(P)}`),p(o.parentNode,"change",v([[N(A),z],[N(P),G]]))}const U=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(!t.length)return
const e=s(D(t[0])),a=t.map(C)
r(h,{anchor:e.nextElementSibling,props:{folders:a,moveItemsToFolder:M},target:e.parentNode})},w,function(){const o=m('input[type="submit"]')
o&&(L(o),T=c(P),$=window.confirmDestroy,q(),R=c(A),p(document.forms[0],"submit",J),window.check=S)}]
function V(){!l()&&g()&&u(U)}export{V as default}
//# sourceMappingURL=injectProfileDropItems-CtEM33k8.js.map
