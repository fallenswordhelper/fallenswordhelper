import{e,j as t,a as n,g as r,b as o,p as a,d as s,c,o as i,i as f,f as m,h as d,k as u,l as p,m as l}from"./calfSystem-6a3c85e0.js"
import{c as h}from"./createInput-9bf3eee1.js"
import{c as j}from"./createLabel-c7919725.js"
import{g}from"./getInventoryById-e5962aec.js"
import{h as b}from"./hideElement-53ec58d4.js"
import{i as N}from"./insertElementAfterBegin-808a95bf.js"
import{m as E}from"./makeFolderSpan-6b78b283.js"
import{t as k}from"./toggleForce-537064ea.js"
import"./getInventory-a569507a.js"
import"./guildStore-fcb25778.js"
import"./cmdExport-cce4a501.js"
import"./indexAjaxJson-c7dd57d3.js"
import"./insertElementBefore-c442a2a7.js"
function x(e){return E(e[0],e[1])}function y(t,n){return E("0","All")+function(e){return e?E("-2","Worn"):""}(n)+E("-1","Main")+e(t).map(x).join("")}let I,v,L,M,S,A=0
function B(e){const t=l(),n=e[0].parentNode
d(t,n),d(S,t)}function F(e){const t=e[0].parentNode.parentNode
k(t,function(e){return 0!==A&&e[2]!==A}(e)||function(e){return M.checked&&"Perfect"!==e[3]}(e))}function C(){S||(S=l({className:"fshItemGrid"}),v.forEach(B),N(I.parentNode,S),b(I)),v.forEach(F)}function P(e){if(!p("fshFolder",e.target))return
const t=Number(e.target.dataset.folder)
t!==A&&(A=t,C())}function V(e){const t=L[e[1]]
t&&e.push(function(e){return e.equipped?-2:e.folder_id}(t),t.craft)}function q(){v.forEach(V)}function G(e){if(e.items&&I){L=e.items,n(4,q)
!function(e){if("crafting"===c.cmd)return void(M={checked:!1})
const t=j({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '})
M=h({className:"fshVMid",type:"checkbox"}),m(M,"change",C),d(t,M),f(e," &ensp;"),d(e,t)}(function(e){const t=I.parentNode.parentNode.previousElementSibling.children[0]
return t.classList.add("fshCenter"),i(t,P),f(t,y(e,!0)),t}(e.folders))}}function H(e){const{tipped:t}=e.dataset
return[e,t.match(u)[2]]}function J(){I=function(){const e=o(s,a.lastElementChild)
return"crafting"===c.cmd?e[1]:e[0]}(),v=r("img",I).map(H)}function T(){t()&&(g().then(G),n(3,J))}export default T
//# sourceMappingURL=craftForge-9774efec.js.map
