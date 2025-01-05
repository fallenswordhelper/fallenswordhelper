import{i as e}from"./inventing-BNZYx4Sp.js"
import{$ as t,q as n,ao as s,b as a,w as o,aN as i,s as r,aj as c,aT as f,aD as d,af as m,ai as l}from"./calfSystem-fMW-YMyF.js"
import{a as p}from"./aGenericFallback-BKHVSwNN.js"
import{a as u}from"./arrayFromRadioNodeList-DeAz6Is4.js"
import{e as v,s as h}from"./selfIdIs-BxgmyerJ.js"
import{s as g}from"./simpleCheckbox-DVyS3vVd.js"
import"./isChecked-D_0do7nT.js"
function b(t,n){return e({subcmd:"domoverecipes",target_folder_id:t,recipe_selected:n})}function _(e,t){return p({cmd:"inventing",subcmd:"domoverecipes",recipe_selected:t,target_folder_id:e},"Selected recipes have been moved to the target folder.")}const j="ajaxifyMoveRecipe"
let x=0
const N=[[h(j),function(){r("inventing","toggle ajaxify pref"),x=!x,c(j,x)}]]
function y(e){e.parentNode.classList.add("fshRelative"),e.classList.add("hideCheckbox"),f(d({className:"fshSpinner fshSpinner12"}),e)}function k(e){const t=l(e)
t&&(t.nextElementSibling.remove(),t.remove())}function C(e){e.classList.remove("hideCheckbox"),e.nextElementSibling.remove()}async function S(e,n){r("inventing","Move recipes by AJAX"),n.forEach(y)
const s=await(a=e,o=n.map((e=>Number(e.value))),t(b,_,a,o))
var a,o
!function(e,t){t.s?e.forEach(k):(m(t.e.message),e.forEach(C))}(n,s)}function E(e){if(!x)return
e.preventDefault()
const t=function(){const e=n('#pCC img[src*="/folder_on."]').parentNode.href
return i(e,"folder_id")}(),{elements:s}=e.target,a=s.target_folder_id.value
t!==a&&function(e,t){const n=e["recipe_selected[]"]
if(!n)return
const s=u(n).filter((e=>e.checked))
s.length&&S(t,s)}(s,a)}function L(){const e=n('input[value="Move Recipes"]')
e&&(!function(e){o(e.parentNode,`&nbsp;&nbsp;${g(j)}`),a(e.parentNode,"change",v(N))}(e),x=s(j),a(e.form,"submit",E))}export{L as default}
//# sourceMappingURL=inventing-BQ5G7TK9.js.map
