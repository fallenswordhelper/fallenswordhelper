import{j as e,a as t,g as n,b as s,p as r,d as o,c as a,o as i,i as c,e as f,f as m,h as d,k as p}from"./calfSystem-5545a3e6.js"
import{c as u}from"./createInput-836d9f1f.js"
import{c as l}from"./createLabel-062664fb.js"
import"./insertElementBefore-babbeb6f.js"
import{i as h}from"./insertElementAfterBegin-f98e43de.js"
import{h as j}from"./hideElement-f7434a50.js"
import"./indexAjaxJson-06c0d970.js"
import"./makeFolderSpan-85001e1e.js"
import{m as g}from"./makeFolderSpans-d1cf46ce.js"
import"./cmdExport-2a172ff1.js"
import"./guildStore-be1d5903.js"
import"./getInventory-e72d2901.js"
import{g as b}from"./getInventoryById-f2f6620e.js"
import{t as N}from"./toggleForce-c71db530.js"
let E,k,x,y,I,L=0
function S(e){const t=p(),n=e[0].parentNode
m(t,n),m(I,t)}function v(e){const t=e[0].parentNode.parentNode
N(t,function(e){return 0!==L&&e[2]!==L}(e)||function(e){return y.checked&&"Perfect"!==e[3]}(e))}function F(){I||(I=p({className:"fshItemGrid"}),k.forEach(S),h(E.parentNode,I),j(E)),k.forEach(v)}function B(e){if(!e.target.classList.contains("fshFolder"))return
const t=Number(e.target.dataset.folder)
t!==L&&(L=t,F())}function M(e){const t=x[e[1]]
t&&e.push(function(e){return e.equipped?-2:e.folder_id}(t),t.craft)}function A(){k.forEach(M)}function C(e){if(e.items&&E){x=e.items,t(4,A)
!function(e){if("crafting"===a.cmd)return void(y={checked:!1})
const t=l({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '})
y=u({className:"fshVMid",type:"checkbox"}),f(y,"change",F),m(t,y),c(e," &ensp;"),m(e,t)}(function(e){const t=E.parentNode.parentNode.previousElementSibling.children[0]
return t.classList.add("fshCenter"),i(t,B),c(t,g(e,!0)),t}(e.folders))}}function P(e){const{tipped:t}=e.dataset
return[e,t.match(d)[2]]}function V(){E=function(){const e=s(o,r.lastElementChild)
return"crafting"===a.cmd?e[1]:e[0]}(),k=n("img",E).map(P)}export default function(){e()&&(b().then(C),t(3,V))}
//# sourceMappingURL=craftForge-8c56ba28.js.map
