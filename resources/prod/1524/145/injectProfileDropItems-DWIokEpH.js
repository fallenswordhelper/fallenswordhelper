import{k as o,ai as t,aN as s,ac as e,s as r,G as n,c as a,q as i,ao as m,b as c,w as p,aj as f,x as d,d_ as u}from"./calfSystem-CvwhhJv4.js"
import{M as l,d as j,g as h,c as y,e as b,i as w}from"./injectStoreItems-DBauqNYg.js"
import{c as g}from"./closestTable-DA5PEIxg.js"
import{r as k}from"./removeRow-BV8rREkH.js"
import{e as I}from"./errorDialog-B4_TjdGG.js"
import{e as x,s as D}from"./selfIdIs-C_9SPYFc.js"
import{s as v}from"./simpleCheckbox-n2TKkJvn.js"
import"./dropItem-BszxNwUZ.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-B9CLITPM.js"
import"./basicItem-BMNuU5Rv.js"
import"./htmlResult-CRj7vbsR.js"
import"./InfoBoxFrom-CWtMVvia.js"
import"./doStatTotal-CKI0MEYY.js"
import"./arrayFromRadioNodeList-Cwqoboj0.js"
import"./daLoadInventory-4yalcPvn.js"
import"./flattenItems-DOc6e0_m.js"
import"./LinkButtonBracketed-CA2auUeo.js"
import"./LinkButton-DGK9y3f9.js"
import"./batch-CmNsoLM6.js"
import"./isChecked-D_0do7nT.js"
function N(){return o('[name="removeIndex[]"]:checked')}const E=o=>({id:s(o.parentNode.href,"folder_id"),name:e(o.parentNode.parentNode)})
async function B(o,t){const s=await j(o,t.map((o=>o.value)))
s?.s&&t.forEach(k)}function $(o){r("dropitems","Move to Folder"),n(30,N()).forEach(a(B,o.detail))}function C(o){h().forEach((t=>{t.checked=Boolean(o)}))}const L="ajaxifyDestroy",S="disableDestroyPrompts"
let A=0,F=1,M=0
async function P(o){const t=await y(o.map((o=>o.value)))
I(t),t.s&&o.forEach(k)}function R(o){o.returnValue&&A&&(o.preventDefault(),n(30,N()).forEach(P),r("dropitems","Destroy by AJAX"))}function q(){return r("dropitems","Destroy without prompts"),!0}function T(){window.confirmDestroy=F?q:M}function _(){r("dropitems","handleAjaxifyPref"),A=!A,f(L,A)}function G(){r("dropitems","handleDestroyPref"),F=!F,f(S,F),T()}const J=()=>x([[D(L),_],[D(S),G]])
const U=[function(){const s=o('#pCC img[src$="/folder.png"]')
if(0===s.length)return
const e=t(g(s[0]));(function(o,t){return new l({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(s.map(E),e).$on("move",$)},w,function(){const o=i('input[type="submit"]')
o&&(!function(o){p(o.parentNode,`&nbsp;&nbsp;${v(L)}&nbsp;&nbsp;${v(S)}`),c(o.parentNode,"change",J())}(o),F=m(S),M=window.confirmDestroy,T(),A=m(L),c(document.forms[0],"submit",R),window.check=C)}]
function V(){!d()&&b()&&u(U)}export{V as default}
//# sourceMappingURL=injectProfileDropItems-DWIokEpH.js.map
