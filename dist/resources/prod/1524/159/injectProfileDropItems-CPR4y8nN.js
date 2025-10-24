import{h as o,k as s,m as t,b0 as e,t as r,s as a,c as n,q as i,aA as m,b as c,a3 as p,av as f,a4 as d,e8 as u}from"./calfSystem-CIdPz3EO.js"
import{M as l,d as j,g as h,c as y,e as b,i as g}from"./injectStoreItems-B4U4zpB_.js"
import{c as w}from"./chunk-zr9rAXvK.js"
import{c as v}from"./closestTable-CLMP9U5y.js"
import{r as D}from"./removeRow-CyfDLLYd.js"
import{e as I}from"./errorDialog-B4_TjdGG.js"
import{e as k,s as x}from"./selfIdIs-VADzkGzQ.js"
import{s as N}from"./simpleCheckbox-cwzWQeYd.js"
import"./dropItem-C3_j8s3A.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-Bp1OfdFE.js"
import"./htmlResult-CHYKQLWk.js"
import"./InfoBoxFrom-Dw2yPW9h.js"
import"./doStatTotal-C_bkt6VX.js"
import"./arrayFromRadioNodeList-BIl6HTGq.js"
import"./batch-DSFyFccZ.js"
import"./isChecked-D_0do7nT.js"
function E(){return o('[name="removeIndex[]"]:checked')}const A=o=>({id:e(o.parentNode.href,"folder_id"),name:t(o.parentNode.parentNode)})
async function C(o,s){const t=await j(o,s.map(o=>o.value))
t?.s&&s.forEach(D)}function F(o){a("dropitems","Move to Folder"),w(30,E()).forEach(n(C,o))}function S(o){h().forEach(s=>{s.checked=Boolean(o)})}const M="ajaxifyDestroy",P="disableDestroyPrompts"
let R=0,T=1,$=0
async function B(o){const s=await y(o.map(o=>o.value))
I(s),s.s&&o.forEach(D)}function L(o){o.returnValue&&R&&(o.preventDefault(),w(30,E()).forEach(B),a("dropitems","Destroy by AJAX"))}function X(){return a("dropitems","Destroy without prompts"),!0}function q(){window.confirmDestroy=T?X:$}function J(){a("dropitems","handleAjaxifyPref"),R=!R,f(M,R)}function O(){a("dropitems","handleDestroyPref"),T=!T,f(P,T),q()}function V(o){p(o.parentNode,`&nbsp;&nbsp;${N(M)}&nbsp;&nbsp;${N(P)}`),c(o.parentNode,"change",k([[x(M),J],[x(P),O]]))}const Z=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(!t.length)return
const e=s(v(t[0])),a=t.map(A)
r(l,{anchor:e.nextElementSibling,props:{folders:a,moveItemsToFolder:F},target:e.parentNode})},g,function(){const o=i('input[type="submit"]')
o&&(V(o),T=m(P),$=window.confirmDestroy,q(),R=m(M),c(document.forms[0],"submit",L),window.check=S)}]
function _(){!d()&&b()&&u(Z)}export{_ as default}
//# sourceMappingURL=injectProfileDropItems-CPR4y8nN.js.map
