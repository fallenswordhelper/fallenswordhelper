import{i as e}from"./inventing-arhzwkuy.js"
import{$ as t,b as n,q as s,ao as o,c as a,z as i,s as r,aj as c,aQ as f,aX as d,aF as m,ah as l,ai as p}from"./calfSystem-BGOTz8de.js"
import{a as u}from"./arrayFromRadioNodeList-BIJCb08V.js"
import{e as v,s as h}from"./selfIdIs-7BV1yzfH.js"
import{s as g}from"./simpleCheckbox-BSi4KRpL.js"
import"./isChecked-D_0do7nT.js"
function b(t,n){return e({subcmd:"domoverecipes",target_folder_id:t,recipe_selected:n})}function _(e,t){return n({cmd:"inventing",subcmd:"domoverecipes",recipe_selected:t,target_folder_id:e},"Selected recipes have been moved to the target folder.")}const j="ajaxifyMoveRecipe"
let x=0
const N=[[h(j),function(){r("inventing","toggle ajaxify pref"),x=!x,c(j,x)}]]
function y(e){e.parentNode.classList.add("fshRelative"),e.classList.add("hideCheckbox"),d(m({className:"fshSpinner fshSpinner12"}),e)}function C(e){const t=p(e)
t&&(t.nextElementSibling.remove(),t.remove())}function S(e){e.classList.remove("hideCheckbox"),e.nextElementSibling.remove()}async function k(e,n){r("inventing","Move recipes by AJAX"),n.forEach(y)
const s=await(o=e,a=n.map((e=>Number(e.value))),t(b,_,o,a))
var o,a
!function(e,t){t.s?e.forEach(C):(l(t.e.message),e.forEach(S))}(n,s)}function E(e){if(!x)return
e.preventDefault()
const t=function(){const e=s('#pCC img[src*="/folder_on."]').parentNode.href
return f(e,"folder_id")}(),{elements:n}=e.target,o=n.target_folder_id.value
t!==o&&function(e,t){const n=e["recipe_selected[]"]
if(!n)return
const s=u(n).filter((e=>e.checked))
s.length&&k(t,s)}(n,o)}function L(){const e=s('input[value="Move Recipes"]')
e&&(!function(e){i(e.parentNode,`&nbsp;&nbsp;${g(j)}`),a(e.parentNode,"change",v(N))}(e),x=o(j),a(e.form,"submit",E))}export{L as default}
//# sourceMappingURL=inventing-TdCNNQaV.js.map
