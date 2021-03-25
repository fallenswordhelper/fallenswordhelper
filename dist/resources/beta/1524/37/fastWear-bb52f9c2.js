import{l as a,W as t,A as e,t as n,B as s,E as o,m as c,h as r,z as i,C as f,a as p,o as b}from"./calfSystem-cb2a6f39.js"
import{e as l,u as m}from"./useItem-33ab66a6.js"
import{g as d,m as u}from"./monkeyBp-8cba5bb6.js"
import"./dialog-8dd3ba22.js"
import"./dialogMsg-f2f50c63.js"
import"./indexAjaxJson-6c7e44df.js"
import"./daUseItem-92175d3a.js"
import"./errorDialog-dd9ceb95.js"
function k([a,t,e,n],o){0===o.r?(!function(a,t){const e=a.srcData.findIndex((a=>a.a===t));-1!==e&&a.srcData.splice(e,1)}(a,n),e.classList.remove("fshSpinner"),s(`<span class="fastWorn">${t}</span>`,e.parentNode)):e.remove()}function g(a,s,o,c){t("profile",`fastAction - ${c}`)
const{target:r}=s,i=r.parentNode.parentNode.children[0].dataset.inv
e("",r),r.blur(),r.className="fastAction fshBl fshSpinner fshSpinner12",o(i).then(n(k,[a,c,r,i]))}function h(t,e){a("fastWear",e.target)&&g(t,e,l,"Worn"),a("fastUse",e.target)&&g(t,e,m,"Used")}function x(a){return a?"Use":"Wear"}function j(t,e){const n=a("backpackContextMenuUsable",e),s=c({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${o=n,o?"fastUse":"fastWear"}">${x(n)}</button>`})
var o
t.options.checkboxesEnabled&&r(s,e.parentNode.nextElementSibling.nextElementSibling),r(e.parentNode.parentNode,s)}function N(a){o(`#backpackTab_${a.type.toString()} .backpackContextMenuEquippable, #backpackTab_${a.type.toString()} .backpackContextMenuUsable`).forEach(n(j,a))}function S(a){!function(){const a=i("backpack")
a.className="fshBackpack",a.removeAttribute("style")}(),u(a,N),0!==f(i("backpack_current")).length&&p(3,N,[a]),b(i("backpackContainer"),n(h,a))}function U(){const a=d()
a&&S(a)}export default U
//# sourceMappingURL=fastWear-bb52f9c2.js.map
