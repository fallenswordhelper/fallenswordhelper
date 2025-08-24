import{h as o,j as s,l as t,a$ as e,n as r,s as a,ac as n,c as i,q as m,aA as c,b as p,a2 as f,av as d,a3 as l,e7 as u}from"./calfSystem-79LsojAC.js"
import{M as j,d as h,g as y,c as b,e as g,i as w}from"./injectStoreItems-SVAYVQkP.js"
import{c as v}from"./closestTable-BuyyntoH.js"
import{r as D}from"./removeRow-C6t9ORh1.js"
import{e as I}from"./errorDialog-B4_TjdGG.js"
import{e as x,s as E}from"./selfIdIs-BxVlCcNr.js"
import{s as N}from"./simpleCheckbox-GIXRLUIF.js"
import"./dropItem-ByD6N1Np.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-3-mBKBqq.js"
import"./htmlResult-VfRQZiiv.js"
import"./InfoBoxFrom-Du-lP_up.js"
import"./doStatTotal-tBEj9xvS.js"
import"./arrayFromRadioNodeList-JjADBhG9.js"
import"./batch-BGPP456i.js"
import"./isChecked-D_0do7nT.js"
function k(){return o('[name="removeIndex[]"]:checked')}const A=o=>({id:e(o.parentNode.href,"folder_id"),name:t(o.parentNode.parentNode)})
async function C(o,s){const t=await h(o,s.map(o=>o.value))
t?.s&&s.forEach(D)}function F(o){a("dropitems","Move to Folder"),n(30,k()).forEach(i(C,o))}function P(o){y().forEach(s=>{s.checked=Boolean(o)})}const R="ajaxifyDestroy",S="disableDestroyPrompts"
let $=0,B=1,M=0
async function T(o){const s=await b(o.map(o=>o.value))
I(s),s.s&&o.forEach(D)}function q(o){o.returnValue&&$&&(o.preventDefault(),n(30,k()).forEach(T),a("dropitems","Destroy by AJAX"))}function H(){return a("dropitems","Destroy without prompts"),!0}function J(){window.confirmDestroy=B?H:M}function L(){a("dropitems","handleAjaxifyPref"),$=!$,d(R,$)}function V(){a("dropitems","handleDestroyPref"),B=!B,d(S,B),J()}function X(o){f(o.parentNode,`&nbsp;&nbsp;${N(R)}&nbsp;&nbsp;${N(S)}`),p(o.parentNode,"change",x([[E(R),L],[E(S),V]]))}const Y=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(!t.length)return
const e=s(v(t[0])),a=t.map(A)
r(j,{anchor:e.nextElementSibling,props:{folders:a,moveItemsToFolder:F},target:e.parentNode})},w,function(){const o=m('input[type="submit"]')
o&&(X(o),B=c(S),M=window.confirmDestroy,J(),$=c(R),p(document.forms[0],"submit",q),window.check=P)}]
function _(){!l()&&g()&&u(Y)}export{_ as default}
//# sourceMappingURL=injectProfileDropItems-D3BKE7cr.js.map
