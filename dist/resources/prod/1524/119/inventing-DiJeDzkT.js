import{i as e}from"./inventing-CcnmI2VF.js"
import{$ as t,q as s,ai as n,b as o,v as r,av as i,s as a,ae as c,ab as f}from"./calfSystem-Bit7wh4p.js"
import{a as m}from"./aGenericFallback-CJ149B5U.js"
import{a as l}from"./arrayFromRadioNodeList-CsqL6Dd-.js"
import{c as d}from"./createSpan-Ctesn2Q0.js"
import{c as p}from"./closestTr-7PFr_dNI.js"
import{e as u,s as v}from"./selfIdIs-b2PKHhPf.js"
import{i as h}from"./insertElementAfter-ClbOKY3i.js"
import{s as g}from"./simpleCheckbox-B_EbohVT.js"
import"./isChecked-D_0do7nT.js"
function b(t,s){return e({subcmd:"domoverecipes",target_folder_id:t,recipe_selected:s})}function j(e,t){return m({cmd:"inventing",subcmd:"domoverecipes",recipe_selected:t,target_folder_id:e},"Selected recipes have been moved to the target folder.")}const _="ajaxifyMoveRecipe"
let x=0
const N=[[v(_),function(){a("inventing","toggle ajaxify pref"),x=!x,c(_,x)}]]
function S(e){e.parentNode.classList.add("fshRelative"),e.classList.add("hideCheckbox"),h(d({className:"fshSpinner fshSpinner12"}),e)}function k(e){const t=p(e)
t.nextElementSibling.remove(),t.remove()}function y(e){e.classList.remove("hideCheckbox"),e.nextElementSibling.remove()}async function C(e,s){a("inventing","Move recipes by AJAX"),s.forEach(S)
const n=await(o=e,r=s.map((e=>Number(e.value))),t(b,j,o,r))
var o,r
!function(e,t){t.s?e.forEach(k):(f(t.e.message),e.forEach(y))}(s,n)}function E(e){if(!x)return
e.preventDefault()
const t=function(){const e=s('#pCC img[src*="/folder_on."]').parentNode.href
return i(e,"folder_id")}(),{elements:n}=e.target,o=n.target_folder_id.value
t!==o&&function(e,t){const s=e["recipe_selected[]"]
if(!s)return
const n=l(s).filter((e=>e.checked))
n.length&&C(t,n)}(n,o)}function L(){const e=s('input[value="Move Recipes"]')
e&&(!function(e){r(e.parentNode,`&nbsp;&nbsp;${g(_)}`),o(e.parentNode,"change",u(N))}(e),x=n(_),o(e.form,"submit",E))}export{L as default}
//# sourceMappingURL=inventing-DiJeDzkT.js.map