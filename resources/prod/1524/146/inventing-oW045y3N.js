import{i as e}from"./inventing-CfX_Q21D.js"
import{b as t,$ as n,q as s,aq as o,c as a,x as i,s as r,al as c,aQ as f,aW as d,aF as m,aj as l,ak as p}from"./calfSystem-DiXGAkgN.js"
import{a as u}from"./arrayFromRadioNodeList-DcVbkydp.js"
import{e as v,s as h}from"./selfIdIs-csoTAiW4.js"
import{s as g}from"./simpleCheckbox-DsxHxozG.js"
import"./isChecked-D_0do7nT.js"
function b(t,n){return e({subcmd:"domoverecipes",target_folder_id:t,recipe_selected:n})}function _(e,n){return t({cmd:"inventing",subcmd:"domoverecipes",recipe_selected:n,target_folder_id:e},"Selected recipes have been moved to the target folder.")}const x="ajaxifyMoveRecipe"
let j=0
const N=[[h(x),function(){r("inventing","toggle ajaxify pref"),j=!j,c(x,j)}]]
function k(e){e.parentNode.classList.add("fshRelative"),e.classList.add("hideCheckbox"),d(m({className:"fshSpinner fshSpinner12"}),e)}function y(e){const t=p(e)
t&&(t.nextElementSibling.remove(),t.remove())}function C(e){e.classList.remove("hideCheckbox"),e.nextElementSibling.remove()}async function S(e,t){r("inventing","Move recipes by AJAX"),t.forEach(k)
const s=await(o=e,a=t.map((e=>Number(e.value))),n(b,_,o,a))
var o,a
!function(e,t){t.s?e.forEach(y):(l(t.e.message),e.forEach(C))}(t,s)}function E(e){if(!j)return
e.preventDefault()
const t=function(){const e=s('#pCC img[src*="/folder_on."]').parentNode.href
return f(e,"folder_id")}(),{elements:n}=e.target,o=n.target_folder_id.value
t!==o&&function(e,t){const n=e["recipe_selected[]"]
if(!n)return
const s=u(n).filter((e=>e.checked))
s.length&&S(t,s)}(n,o)}function L(){const e=s('input[value="Move Recipes"]')
e&&(!function(e){i(e.parentNode,`&nbsp;&nbsp;${g(x)}`),a(e.parentNode,"change",v(N))}(e),j=o(x),a(e.form,"submit",E))}export{L as default}
//# sourceMappingURL=inventing-oW045y3N.js.map
