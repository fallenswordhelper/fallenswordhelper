import{D as a,n as t,a5 as n,s,j as e,c,l as o,i,aX as r,g as f,ab as p,a4 as l,aN as u,o as b}from"./calfSystem-abb16b0d.js"
import{e as k,u as m}from"./useItem-1d2f7d6d.js"
import"./dialog-9896baf4.js"
import"./dialogMsg-7c5fba89.js"
import"./daUseItem-bb43bd02.js"
import"./errorDialog-9e633a62.js"
async function d(a,e,c,o){t("profile",`fastAction - ${o}`)
const{target:i}=e,r=i.parentNode.parentNode.children[0].dataset.inv
n("",i),i.blur(),i.className="fastAction fshBl fshSpinner fshSpinner12"
const f=await c(r)
f&&function([a,t,n,e,c]){0===c.r?(function(a,t){const n=a.srcData.findIndex((a=>a.a===t));-1!==n&&a.srcData.splice(n,1)}(a,e),n.classList.remove("fshSpinner"),s(`<span class="fastWorn">${t}</span>`,n.parentNode)):n.remove()}([a,o,i,r,f])}function g(t,n){a("fastWear",n.target)&&d(t,n,k,"Worn"),a("fastUse",n.target)&&d(t,n,m,"Used")}function h(a){return a?"Use":"Wear"}function N(t,n){const s=a("backpackContextMenuUsable",n),e=o({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${c=s,c?"fastUse":"fastWear"}">${h(s)}</button>`})
var c
t.options.checkboxesEnabled&&i(e,n.parentNode.nextElementSibling.nextElementSibling),i(n.parentNode.parentNode,e)}function x(a){e(`#backpackTab_${a.type.toString()} .backpackContextMenuEquippable, #backpackTab_${a.type.toString()} .backpackContextMenuUsable`).forEach(c(N,a))}const S=[]
let j
function U(a){const t=a._showPage
a._showPage=function(n,s){a.tabData&&(t.call(a,n,s),function(a){S.length>0&&S.forEach((t=>t(a)))}(a))},j=!0}function v(a){!function(){const a=f("backpack")
a.className="fshBackpack",a.removeAttribute("style")}(),function(a,t){S.includes(t)||(j||U(a),r(t)&&S.push(t))}(a,x),0!==l(f("backpack_current")).length&&u(3,x,[a]),b(f("backpackContainer"),c(g,a))}async function y(){const a=await p(f("backpackContainer"),"Backpack","hcs")
a&&v(a)}export{y as default}
//# sourceMappingURL=fastWear-ec56843a.js.map
