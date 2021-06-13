import{e,j as t,a as n,g as r,b as a,p as o,d as s,c as i,o as c,i as f,f as m,h as d,k as u,l as p,m as l}from"./calfSystem-ae2e69af.js"
import{c as h}from"./createInput-90835289.js"
import{c as j}from"./createLabel-b56d4233.js"
import{g}from"./getInventoryById-53b88638.js"
import{h as b}from"./hideElement-53ec58d4.js"
import{i as N}from"./insertElementAfterBegin-2a71a56b.js"
import{m as E}from"./makeFolderSpan-6b78b283.js"
import{t as k}from"./toggleForce-537064ea.js"
import"./getInventory-ce8ab76d.js"
import"./cmdExport-aa80361b.js"
import"./indexAjaxJson-6eadb7fa.js"
import"./insertElementBefore-c442a2a7.js"
function x(e){return E(e[0],e[1])}function y(t,n){return E("0","All")+function(e){return e?E("-2","Worn"):""}(n)+E("-1","Main")+e(t).map(x).join("")}let I,v,L,M,A,B=0
function F(e){const t=l(),n=e[0].parentNode
d(t,n),d(A,t)}function S(e){const t=e[0].parentNode.parentNode
k(t,function(e){return 0!==B&&e[2]!==B}(e)||function(e){return M.checked&&"Perfect"!==e[3]}(e))}function C(){A||(A=l({className:"fshItemGrid"}),v.forEach(F),N(I.parentNode,A),b(I)),v.forEach(S)}function P(e){if(!p("fshFolder",e.target))return
const t=Number(e.target.dataset.folder)
t!==B&&(B=t,C())}function V(e){const t=L[e[1]]
t&&e.push(function(e){return e.equipped?-2:e.folder_id}(t),t.craft)}function q(){v.forEach(V)}function G(e){if(e.items&&I){L=e.items,n(4,q)
!function(e){if("crafting"===i.cmd)return void(M={checked:!1})
const t=j({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '})
M=h({className:"fshVMid",type:"checkbox"}),m(M,"change",C),d(t,M),f(e," &ensp;"),d(e,t)}(function(e){const t=I.parentNode.parentNode.previousElementSibling.children[0]
return t.classList.add("fshCenter"),c(t,P),f(t,y(e,!0)),t}(e.folders))}}function H(e){const{tipped:t}=e.dataset
return[e,t.match(u)[2]]}function J(){I=function(){const e=a(s,o.lastElementChild)
return"crafting"===i.cmd?e[1]:e[0]}(),v=r("img",I).map(H)}function T(){t()&&(g().then(G),n(3,J))}export default T
//# sourceMappingURL=craftForge-0929aec8.js.map
