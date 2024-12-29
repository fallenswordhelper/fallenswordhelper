import{k as o,ai as t,aN as s,ac as e,s as r,G as n,c as a,q as i,ao as m,b as c,w as p,aj as f,x as d,d_ as u}from"./calfSystem-ChzN4Q-P.js"
import{M as l,d as j,g as h,c as y,e as b,i as w}from"./injectStoreItems-CJhTEwHt.js"
import{c as g}from"./closestTable-DvVVJKGM.js"
import{r as k}from"./removeRow-PLa4t2mP.js"
import{e as I}from"./errorDialog-B4_TjdGG.js"
import{e as v,s as x}from"./selfIdIs-WfPktJTx.js"
import{s as D}from"./simpleCheckbox-CwefujnB.js"
import"./dropItem-C0wwOEuw.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-B0eTyDSi.js"
import"./basicItem-Dp_qF4zf.js"
import"./htmlResult-BuU0L_lS.js"
import"./InfoBoxFrom-C34rFa80.js"
import"./doStatTotal-CXgr6RmM.js"
import"./arrayFromRadioNodeList-C70oEO0t.js"
import"./daLoadInventory-BJGfaSuo.js"
import"./flattenItems-DRKC5Ux6.js"
import"./LinkButtonBracketed-DOkZNd-3.js"
import"./LinkButton-BclPa9W-.js"
import"./batch-CcQbYj5o.js"
import"./isChecked-D_0do7nT.js"
function N(){return o('[name="removeIndex[]"]:checked')}const E=o=>({id:s(o.parentNode.href,"folder_id"),name:e(o.parentNode.parentNode)})
async function B(o,t){const s=await j(o,t.map((o=>o.value)))
s?.s&&t.forEach(k)}function C(o){r("dropitems","Move to Folder"),n(30,N()).forEach(a(B,o.detail))}function L(o){h().forEach((t=>{t.checked=Boolean(o)}))}const S="ajaxifyDestroy",$="disableDestroyPrompts"
let A=0,F=1,M=0
async function P(o){const t=await y(o.map((o=>o.value)))
I(t),t.s&&o.forEach(k)}function R(o){o.returnValue&&A&&(o.preventDefault(),n(30,N()).forEach(P),r("dropitems","Destroy by AJAX"))}function T(){return r("dropitems","Destroy without prompts"),!0}function q(){window.confirmDestroy=F?T:M}function X(){r("dropitems","handleAjaxifyPref"),A=!A,f(S,A)}function _(){r("dropitems","handleDestroyPref"),F=!F,f($,F),q()}const G=()=>v([[x(S),X],[x($),_]])
const J=[function(){const s=o('#pCC img[src$="/folder.png"]')
if(0===s.length)return
const e=t(g(s[0]));(function(o,t){return new l({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(s.map(E),e).$on("move",C)},w,function(){const o=i('input[type="submit"]')
o&&(!function(o){p(o.parentNode,`&nbsp;&nbsp;${D(S)}&nbsp;&nbsp;${D($)}`),c(o.parentNode,"change",G())}(o),F=m($),M=window.confirmDestroy,q(),A=m(S),c(document.forms[0],"submit",R),window.check=L)}]
function V(){!d()&&b()&&u(J)}export{V as default}
//# sourceMappingURL=injectProfileDropItems-BVFQHqFp.js.map
