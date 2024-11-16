import{i as e}from"./inventing-7vukp4k2.js"
import{$ as t,q as s,v as n,o,s as r,ad as i,ai as a,ax as c,ae as f}from"./calfSystem-Blt4DbaE.js"
import{a as m}from"./aGenericFallback-BVLHkg3J.js"
import{a as d}from"./arrayFromRadioNodeList-Cz0XwDMw.js"
import{c as l}from"./createSpan-qOSQqjTl.js"
import{c as p}from"./closestTr-BGA5O97h.js"
import{e as u,s as v}from"./selfIdIs-B-6Z33Zn.js"
import{i as h}from"./insertElementAfter-BiQpTqUp.js"
import{s as g}from"./simpleCheckbox-CjFtWivg.js"
import"./isChecked-D_0do7nT.js"
function b(t,s){return e({subcmd:"domoverecipes",target_folder_id:t,recipe_selected:s})}function j(e,t){return m({cmd:"inventing",subcmd:"domoverecipes",recipe_selected:t,target_folder_id:e},"Selected recipes have been moved to the target folder.")}const _="ajaxifyMoveRecipe"
let x=0
const N=[[v(_),function(){r("inventing","toggle ajaxify pref"),x=!x,i(_,x)}]]
function S(e){e.parentNode.classList.add("fshRelative"),e.classList.add("hideCheckbox"),h(l({className:"fshSpinner fshSpinner12"}),e)}function k(e){const t=p(e)
t&&(t.nextElementSibling.remove(),t.remove())}function y(e){e.classList.remove("hideCheckbox"),e.nextElementSibling.remove()}async function C(e,s){r("inventing","Move recipes by AJAX"),s.forEach(S)
const n=await(o=e,i=s.map((e=>Number(e.value))),t(b,j,o,i))
var o,i
!function(e,t){t.s?e.forEach(k):(f(t.e.message),e.forEach(y))}(s,n)}function E(e){if(!x)return
e.preventDefault()
const t=function(){const e=s('#pCC img[src*="/folder_on."]').parentNode.href
return c(e,"folder_id")}(),{elements:n}=e.target,o=n.target_folder_id.value
t!==o&&function(e,t){const s=e["recipe_selected[]"]
if(!s)return
const n=d(s).filter((e=>e.checked))
n.length&&C(t,n)}(n,o)}function L(){const e=s('input[value="Move Recipes"]')
e&&(!function(e){n(e.parentNode,`&nbsp;&nbsp;${g(_)}`),o(e.parentNode,"change",u(N))}(e),x=a(_),o(e.form,"submit",E))}export{L as default}
//# sourceMappingURL=inventing-c3O6bGSh.js.map
