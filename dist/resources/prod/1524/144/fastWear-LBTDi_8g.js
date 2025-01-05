import{F as a,s as t,ad as n,d as s,k as e,c,m as o,i,bm as r,g as p,al as f,ac as l,bb as u,o as b}from"./calfSystem-fMW-YMyF.js"
import{e as k,u as m}from"./useItem-JApxkOKQ.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./daUseItem-BS7q08-a.js"
import"./errorDialog-B4_TjdGG.js"
async function d(a,e,c,o){t("profile",`fastAction - ${o}`)
const{target:i}=e,r=i.parentNode.parentNode.children[0].dataset.inv
n("",i),i.blur(),i.className="fastAction fshBl fshSpinner fshSpinner12"
const p=await c(r)
p&&function([a,t,n,e,c]){0===c.r?(function(a,t){const n=a.srcData.findIndex((a=>a.a===t));-1!==n&&a.srcData.splice(n,1)}(a,e),n.classList.remove("fshSpinner"),s(`<span class="fastWorn">${t}</span>`,n.parentNode)):n.remove()}([a,o,i,r,p])}function g(t,n){a("fastWear",n.target)&&d(t,n,k,"Worn"),a("fastUse",n.target)&&d(t,n,m,"Used")}function h(a){return a?"Use":"Wear"}function N(t,n){const s=a("backpackContextMenuUsable",n),e=o({className:"fastDiv",innerHTML:`<button class="fshBl fastAction ${c=s,c?"fastUse":"fastWear"}">${h(s)}</button>`})
var c
t.options.checkboxesEnabled&&i(e,n.parentNode.nextElementSibling.nextElementSibling),i(n.parentNode.parentNode,e)}function x(a){e(`#backpackTab_${a.type.toString()} .backpackContextMenuEquippable, #backpackTab_${a.type.toString()} .backpackContextMenuUsable`).forEach(c(N,a))}const S=[]
let U=0
function $(a){const t=a._showPage
a._showPage=function(n,s){a.tabData&&(t.call(a,n,s),function(a){S.length>0&&S.forEach((t=>t(a)))}(a))},U=!0}function j(a){!function(){const a=p("backpack")
a&&(a.className="fshBackpack",a.removeAttribute("style"))}(),function(a,t){S.includes(t)||(U||$(a),r(t)&&S.push(t))}(a,x),0!==l(p("backpack_current")).length&&u(3,x,[a]),b(p("backpackContainer"),c(g,a))}async function v(){const a=await f(p("backpackContainer"),"Backpack","hcs")
a&&j(a)}export{v as default}
//# sourceMappingURL=fastWear-LBTDi_8g.js.map
