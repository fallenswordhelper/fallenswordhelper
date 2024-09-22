import{i as e}from"./inventing-D5EepMS8.js"
import{$ as t,q as s,ai as n,b as o,v as r,ax as i,s as a,ae as c,ab as f}from"./calfSystem-B-q5dZfX.js"
import{a as m}from"./aGenericFallback-4fu_v46p.js"
import{a as d}from"./arrayFromRadioNodeList-CwgnMs-o.js"
import{c as l}from"./createSpan-BVxoUSKY.js"
import{c as p}from"./closestTr-43FhsCY8.js"
import{e as u,s as v}from"./selfIdIs-eWxSzkmE.js"
import{i as h}from"./insertElementAfter-HCJFd2zX.js"
import{s as g}from"./simpleCheckbox-D4hKBUqE.js"
import"./isChecked-D_0do7nT.js"
function b(t,s){return e({subcmd:"domoverecipes",target_folder_id:t,recipe_selected:s})}function j(e,t){return m({cmd:"inventing",subcmd:"domoverecipes",recipe_selected:t,target_folder_id:e},"Selected recipes have been moved to the target folder.")}const _="ajaxifyMoveRecipe"
let x=0
const k=[[v(_),function(){a("inventing","toggle ajaxify pref"),x=!x,c(_,x)}]]
function N(e){e.parentNode.classList.add("fshRelative"),e.classList.add("hideCheckbox"),h(l({className:"fshSpinner fshSpinner12"}),e)}function S(e){const t=p(e)
t&&(t.nextElementSibling.remove(),t.remove())}function y(e){e.classList.remove("hideCheckbox"),e.nextElementSibling.remove()}async function C(e,s){a("inventing","Move recipes by AJAX"),s.forEach(N)
const n=await(o=e,r=s.map((e=>Number(e.value))),t(b,j,o,r))
var o,r
!function(e,t){t.s?e.forEach(S):(f(t.e.message),e.forEach(y))}(s,n)}function E(e){if(!x)return
e.preventDefault()
const t=function(){const e=s('#pCC img[src*="/folder_on."]').parentNode.href
return i(e,"folder_id")}(),{elements:n}=e.target,o=n.target_folder_id.value
t!==o&&function(e,t){const s=e["recipe_selected[]"]
if(!s)return
const n=d(s).filter((e=>e.checked))
n.length&&C(t,n)}(n,o)}function L(){const e=s('input[value="Move Recipes"]')
e&&(!function(e){r(e.parentNode,`&nbsp;&nbsp;${g(_)}`),o(e.parentNode,"change",u(k))}(e),x=n(_),o(e.form,"submit",E))}export{L as default}
//# sourceMappingURL=inventing-DM-MOkCH.js.map
