import{k as o,ax as t,a8 as s,s as e,E as r,c as n,q as a,ai as i,b as m,v as c,ae as p,w as f,du as d}from"./calfSystem-DKih1pr1.js"
import{M as u,d as l,g as j,c as h,e as y,i as b}from"./injectStoreItems-f9HFilph.js"
import{c as w}from"./closestTable-BpwC4ZYl.js"
import{c as g}from"./closestTr-DKMGvQT_.js"
import{r as I}from"./removeRow-Cna-DR5w.js"
import{e as k}from"./errorDialog-B4_TjdGG.js"
import{e as D,s as v}from"./selfIdIs-CZ6ssAzI.js"
import{s as x}from"./simpleCheckbox-Cd5715L9.js"
import"./dropItem-DFQLzw_G.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./isArray-eVldfhw1.js"
import"./sendItems-BpPRH8Xd.js"
import"./basicItem-B_OaPnWs.js"
import"./htmlResult-BwXuziZA.js"
import"./InfoBoxFrom-DVBQINJD.js"
import"./doStatTotal-BesuVsPp.js"
import"./arrayFromRadioNodeList-BEISgyHI.js"
import"./daLoadInventory-D-vXDyC_.js"
import"./flattenItems-C4pfIrZn.js"
import"./LinkButtonBracketed-D4LPe4vQ.js"
import"./LinkButton-BabjyGGe.js"
import"./batch-mrnrvHBt.js"
import"./isChecked-D_0do7nT.js"
function E(){return o('[name="removeIndex[]"]:checked')}const N=o=>({id:t(o.parentNode.href,"folder_id"),name:s(o.parentNode.parentNode)})
async function B(o,t){const s=await l(o,t.map((o=>o.value)))
s?.s&&t.forEach(I)}function $(o){e("dropitems","Move to Folder"),r(30,E()).forEach(n(B,o.detail))}function A(o){j().forEach((t=>{t.checked=Boolean(o)}))}const C="ajaxifyDestroy",L="disableDestroyPrompts"
let P=0,S=1,T=0
async function F(o){const t=await h(o.map((o=>o.value)))
k(t),t.s&&o.forEach(I)}function J(o){o.returnValue&&P&&(o.preventDefault(),r(30,E()).forEach(F),e("dropitems","Destroy by AJAX"))}function M(){return e("dropitems","Destroy without prompts"),!0}function R(){window.confirmDestroy=S?M:T}function _(){e("dropitems","handleAjaxifyPref"),P=!P,p(C,P)}function q(){e("dropitems","handleDestroyPref"),S=!S,p(L,S),R()}const G=()=>D([[v(C),_],[v(L),q]])
const V=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(0===t.length)return
const s=g(w(t[0]));(function(o,t){return new u({anchor:t.nextElementSibling,props:{folders:o},target:t.parentNode})})(t.map(N),s).$on("move",$)},b,function(){const o=a('input[type="submit"]')
o&&(!function(o){c(o.parentNode,`&nbsp;&nbsp;${x(C)}&nbsp;&nbsp;${x(L)}`),m(o.parentNode,"change",G())}(o),S=i(L),T=window.confirmDestroy,R(),P=i(C),m(document.forms[0],"submit",J),window.check=A)}]
function X(){!f()&&y()&&d(V)}export{X as default}
//# sourceMappingURL=injectProfileDropItems-t05HMYSt.js.map
