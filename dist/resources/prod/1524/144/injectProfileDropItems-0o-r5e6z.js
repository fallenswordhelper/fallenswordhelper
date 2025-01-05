import{k as o,ai as t,aN as s,ac as e,s as r,G as n,c as a,q as i,ao as m,b as c,w as p,aj as f,x as d,d_ as u}from"./calfSystem-fMW-YMyF.js"
import{M as l,d as j,g as h,c as y,e as b,i as w}from"./injectStoreItems-BU1RVAga.js"
import{c as g}from"./closestTable-aoGd549m.js"
import{r as k}from"./removeRow-DM-csPUt.js"
import{e as I}from"./errorDialog-B4_TjdGG.js"
import{e as x,s as D}from"./selfIdIs-BxgmyerJ.js"
import{s as v}from"./simpleCheckbox-DVyS3vVd.js"
import"./dropItem-BWXTQknt.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-CLqdpc-M.js"
import"./basicItem-Co_lZL1x.js"
import"./htmlResult-DQb6ND1_.js"
import"./InfoBoxFrom-BQSTjSr-.js"
import"./doStatTotal-ZW6rfEGB.js"
import"./arrayFromRadioNodeList-DeAz6Is4.js"
import"./daLoadInventory-C5VqDf3X.js"
import"./flattenItems-DBwSgTaC.js"
import"./LinkButtonBracketed-BncsiWAk.js"
import"./LinkButton-9QqGD9_1.js"
import"./batch-DG981iST.js"
import"./isChecked-D_0do7nT.js"
function N(){return o('[name="removeIndex[]"]:checked')}const E=o=>({id:s(o.parentNode.href,"folder_id"),name:e(o.parentNode.parentNode)})
async function B(o,t){const s=await j(o,t.map((o=>o.value)))
s?.s&&t.forEach(k)}function C(o){r("dropitems","Move to Folder"),n(30,N()).forEach(a(B,o.detail))}function L(o){h().forEach((t=>{t.checked=Boolean(o)}))}const S="ajaxifyDestroy",$="disableDestroyPrompts"
let A=0,F=1,M=0
async function P(o){const t=await y(o.map((o=>o.value)))
I(t),t.s&&o.forEach(k)}function R(o){o.returnValue&&A&&(o.preventDefault(),n(30,N()).forEach(P),r("dropitems","Destroy by AJAX"))}function _(){return r("dropitems","Destroy without prompts"),!0}function q(){window.confirmDestroy=F?_:M}function T(){r("dropitems","handleAjaxifyPref"),A=!A,f(S,A)}function G(){r("dropitems","handleDestroyPref"),F=!F,f($,F),q()}const J=()=>x([[D(S),T],[D($),G]])
const U=[function(){const s=o('#pCC img[src$="/folder.png"]')
if(0===s.length)return
const e=t(g(s[0]));(function(o,t){return new l({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(s.map(E),e).$on("move",C)},w,function(){const o=i('input[type="submit"]')
o&&(!function(o){p(o.parentNode,`&nbsp;&nbsp;${v(S)}&nbsp;&nbsp;${v($)}`),c(o.parentNode,"change",J())}(o),F=m($),M=window.confirmDestroy,q(),A=m(S),c(document.forms[0],"submit",R),window.check=L)}]
function V(){!d()&&b()&&u(U)}export{V as default}
//# sourceMappingURL=injectProfileDropItems-0o-r5e6z.js.map
