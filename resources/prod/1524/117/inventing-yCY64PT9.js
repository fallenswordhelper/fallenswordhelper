import{i as e}from"./inventing-oWTenFBB.js"
import{$ as t,q as s,ai as n,b as o,v as r,av as i,s as a,ae as c,ab as f}from"./calfSystem-G1dN925O.js"
import{a as m}from"./aGenericFallback-1wEaiKk2.js"
import{a as l}from"./arrayFromRadioNodeList-tL6xxVCt.js"
import{c as d}from"./createSpan-E64hPGZD.js"
import{c as p}from"./closestTr-ewZQ2axu.js"
import{e as u,s as v}from"./selfIdIs-htpkhmDE.js"
import{i as h}from"./insertElementAfter-Pj5qjSoU.js"
import{s as g}from"./simpleCheckbox-8V_A9jhn.js"
import"./isChecked-k2ijSL8v.js"
function b(t,s){return e({subcmd:"domoverecipes",target_folder_id:t,recipe_selected:s})}function j(e,t){return m({cmd:"inventing",subcmd:"domoverecipes",recipe_selected:t,target_folder_id:e},"Selected recipes have been moved to the target folder.")}const _="ajaxifyMoveRecipe"
let x=0
const k=[[v(_),function(){a("inventing","toggle ajaxify pref"),x=!x,c(_,x)}]]
function N(e){e.parentNode.classList.add("fshRelative"),e.classList.add("hideCheckbox"),h(d({className:"fshSpinner fshSpinner12"}),e)}function S(e){const t=p(e)
t.nextElementSibling.remove(),t.remove()}function y(e){e.classList.remove("hideCheckbox"),e.nextElementSibling.remove()}async function C(e,s){a("inventing","Move recipes by AJAX"),s.forEach(N)
const n=await(o=e,r=s.map((e=>Number(e.value))),t(b,j,o,r))
var o,r
!function(e,t){t.s?e.forEach(S):(f(t.e.message),e.forEach(y))}(s,n)}function E(e){if(!x)return
e.preventDefault()
const t=function(){const e=s('#pCC img[src*="/folder_on."]').parentNode.href
return i(e,"folder_id")}(),{elements:n}=e.target,o=n.target_folder_id.value
t!==o&&function(e,t){const s=e["recipe_selected[]"]
if(!s)return
const n=l(s).filter((e=>e.checked))
n.length&&C(t,n)}(n,o)}function L(){const e=s('input[value="Move Recipes"]')
e&&(!function(e){r(e.parentNode,`&nbsp;&nbsp;${g(_)}`),o(e.parentNode,"change",u(k))}(e),x=n(_),o(e.form,"submit",E))}export{L as default}
//# sourceMappingURL=inventing-yCY64PT9.js.map
