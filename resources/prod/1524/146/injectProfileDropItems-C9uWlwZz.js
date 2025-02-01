import{l as o,ak as t,ad as s,aQ as e,s as r,H as n,d as a,q as i,aq as m,c,x as p,al as f,y as d,e7 as u}from"./calfSystem-DiXGAkgN.js"
import{M as l,d as j,g as h,c as y,e as b,i as g}from"./injectStoreItems-ogCBova1.js"
import{c as w}from"./closestTable-CvmnyUCu.js"
import{r as k}from"./removeRow-B6ImbrMe.js"
import{e as I}from"./errorDialog-B4_TjdGG.js"
import{e as x,s as D}from"./selfIdIs-csoTAiW4.js"
import{s as v}from"./simpleCheckbox-DsxHxozG.js"
import"./dropItem-Czf2Zf9J.js"
import"./dialog-nv9HUVDL.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-CwPHFt3g.js"
import"./htmlResult-Dd8ykCD8.js"
import"./InfoBoxFrom-9BNu4fuB.js"
import"./doStatTotal-DEO625vL.js"
import"./arrayFromRadioNodeList-DcVbkydp.js"
import"./daLoadInventory-DgtAUlVi.js"
import"./basicItem-jvMH1Iol.js"
import"./flattenItems-DhYCzXK-.js"
import"./LinkButtonBracketed-BJfzmIPV.js"
import"./LinkButton-BZVcIUNH.js"
import"./batch-C8ATbTx-.js"
import"./isChecked-D_0do7nT.js"
function N(){return o('[name="removeIndex[]"]:checked')}const E=o=>({id:e(o.parentNode.href,"folder_id"),name:s(o.parentNode.parentNode)})
async function B(o,t){const s=await j(o,t.map((o=>o.value)))
s?.s&&t.forEach(k)}function S(o){r("dropitems","Move to Folder"),n(30,N()).forEach(a(B,o.detail))}function C(o){h().forEach((t=>{t.checked=Boolean(o)}))}const L="ajaxifyDestroy",$="disableDestroyPrompts"
let A=0,F=1,M=0
async function P(o){const t=await y(o.map((o=>o.value)))
I(t),t.s&&o.forEach(k)}function R(o){o.returnValue&&A&&(o.preventDefault(),n(30,N()).forEach(P),r("dropitems","Destroy by AJAX"))}function q(){return r("dropitems","Destroy without prompts"),!0}function T(){window.confirmDestroy=F?q:M}function W(){r("dropitems","handleAjaxifyPref"),A=!A,f(L,A)}function H(){r("dropitems","handleDestroyPref"),F=!F,f($,F),T()}const J=()=>x([[D(L),W],[D($),H]])
const Q=[function(){const s=o('#pCC img[src$="/folder.png"]')
if(0===s.length)return
const e=t(w(s[0]));(function(o,t){return new l({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(s.map(E),e).$on("move",S)},g,function(){const o=i('input[type="submit"]')
o&&(!function(o){p(o.parentNode,`&nbsp;&nbsp;${v(L)}&nbsp;&nbsp;${v($)}`),c(o.parentNode,"change",J())}(o),F=m($),M=window.confirmDestroy,T(),A=m(L),c(document.forms[0],"submit",R),window.check=C)}]
function V(){!d()&&b()&&u(Q)}export{V as default}
//# sourceMappingURL=injectProfileDropItems-C9uWlwZz.js.map
