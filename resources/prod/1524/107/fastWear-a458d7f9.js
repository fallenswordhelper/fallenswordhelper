import{D as a,n as t,a6 as n,s,j as e,c,l as o,i,aZ as r,g as f,ac as p,a5 as l,aP as u,o as b}from"./calfSystem-2fff342b.js"
import{e as k,u as m}from"./useItem-fd326ee8.js"
import"./dialog-9896baf4.js"
import"./dialogMsg-7c5fba89.js"
import"./daUseItem-7c37c6b1.js"
import"./errorDialog-91872536.js"
async function d(a,e,c,o){t("profile",`fastAction - ${o}`)
const{target:i}=e,r=i.parentNode.parentNode.children[0].dataset.inv
n("",i),i.blur(),i.className="fastAction fshBl fshSpinner fshSpinner12"
const f=await c(r)
f&&function([a,t,n,e,c]){0===c.r?(function(a,t){const n=a.srcData.findIndex((a=>a.a===t));-1!==n&&a.srcData.splice(n,1)}(a,e),n.classList.remove("fshSpinner"),s(`<span class="fastWorn">${t}</span>`,n.parentNode)):n.remove()}([a,o,i,r,f])}function g(t,n){a("fastWear",n.target)&&d(t,n,k,"Worn"),a("fastUse",n.target)&&d(t,n,m,"Used")}function h(a){return a?"Use":"Wear"}function N(t,n){const s=a("backpackContextMenuUsable",n),e=o({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${c=s,c?"fastUse":"fastWear"}">${h(s)}</button>`})
var c
t.options.checkboxesEnabled&&i(e,n.parentNode.nextElementSibling.nextElementSibling),i(n.parentNode.parentNode,e)}function j(a){e(`#backpackTab_${a.type.toString()} .backpackContextMenuEquippable, #backpackTab_${a.type.toString()} .backpackContextMenuUsable`).forEach(c(N,a))}const x=[]
let S
function U(a){const t=a._showPage
a._showPage=function(n,s){a.tabData&&(t.call(a,n,s),function(a){x.length>0&&x.forEach((t=>t(a)))}(a))},S=!0}function v(a){!function(){const a=f("backpack")
a.className="fshBackpack",a.removeAttribute("style")}(),function(a,t){x.includes(t)||(S||U(a),r(t)&&x.push(t))}(a,j),0!==l(f("backpack_current")).length&&u(3,j,[a]),b(f("backpackContainer"),c(g,a))}async function y(){const a=await p(f("backpackContainer"),"Backpack","hcs")
a&&v(a)}export{y as default}
//# sourceMappingURL=fastWear-a458d7f9.js.map
