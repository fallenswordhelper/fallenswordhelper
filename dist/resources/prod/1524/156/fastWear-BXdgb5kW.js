import{ab as a,s as t,k as n,d as s,h as e,c,u as o,i,bx as r,g as f,ax as p,l,bn as u,o as b}from"./calfSystem-79LsojAC.js"
import{e as k,u as d}from"./useItem-BLNRjwtu.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./errorDialog-B4_TjdGG.js"
async function h(a,e,c,o){t("profile",`fastAction - ${o}`)
const{target:i}=e,r=i.parentNode.parentNode.children[0].dataset.inv
n("",i),i.blur(),i.className="fastAction fshBl fshSpinner fshSpinner12"
const f=await c(r)
f&&function([a,t,n,e,c]){0===c.r?(function(a,t){const n=a.srcData.findIndex(a=>a.a===t);-1!==n&&a.srcData.splice(n,1)}(a,e),n.classList.remove("fshSpinner"),s(`<span class="fastWorn">${t}</span>`,n.parentNode)):n.remove()}([a,o,i,r,f])}function m(t,n){a("fastWear",n.target)&&h(t,n,k,"Worn"),a("fastUse",n.target)&&h(t,n,d,"Used")}function g(a){return a?"Use":"Wear"}function x(t,n){const s=a("backpackContextMenuUsable",n),e=o({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${c=s,c?"fastUse":"fastWear"}">${g(s)}</button>`})
var c
t.options.checkboxesEnabled&&i(e,n.parentNode.nextElementSibling.nextElementSibling),i(n.parentNode.parentNode,e)}function N(a){e(`#backpackTab_${a.type.toString()} .backpackContextMenuEquippable, #backpackTab_${a.type.toString()} .backpackContextMenuUsable`).forEach(c(x,a))}const S=[]
let E=0
function v(a){const t=a._showPage
a._showPage=function(n,s){a.tabData&&(t.call(a,n,s),function(a){S.length>0&&S.forEach(t=>t(a))}(a))},E=!0}function y(a){!function(){const a=f("backpack")
a&&(a.className="fshBackpack",a.removeAttribute("style"))}(),function(a,t){S.includes(t)||(E||v(a),r(t)&&S.push(t))}(a,N),0!==l(f("backpack_current")).length&&u(3,N,[a]),b(f("backpackContainer"),c(m,a))}async function D(){const a=await p(f("backpackContainer"),"Backpack","hcs")
a&&y(a)}export{D as default}
//# sourceMappingURL=fastWear-BXdgb5kW.js.map
