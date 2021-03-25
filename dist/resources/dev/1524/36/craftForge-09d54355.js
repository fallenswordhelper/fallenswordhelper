import{e,j as t,a as n,g as r,b as o,p as s,d as a,c as i,o as c,i as f,f as d,h as m,k as u,l as p,m as l}from"./calfSystem-eeb1d862.js"
import{c as h}from"./createInput-c963dc21.js"
import{c as j}from"./createLabel-7969394e.js"
import{g}from"./getInventoryById-b7958825.js"
import{h as b}from"./hideElement-f0e898f0.js"
import{i as N}from"./insertElementAfterBegin-f3c5ddc0.js"
import{m as E}from"./makeFolderSpan-7699e2dd.js"
import{t as k}from"./toggleForce-a73479b0.js"
import"./getInventory-938a71f5.js"
import"./guildStore-bd4084a2.js"
import"./cmdExport-7e823e95.js"
import"./indexAjaxJson-2deb257d.js"
import"./insertElementBefore-42a90ba9.js"
function x(e){return E(e[0],e[1])}function y(t,n){return E("0","All")+function(e){return e?E("-2","Worn"):""}(n)+E("-1","Main")+e(t).map(x).join("")}let I,v,L,M,S,A=0
function B(e){const t=l(),n=e[0].parentNode
m(t,n),m(S,t)}function F(e){const t=e[0].parentNode.parentNode
k(t,function(e){return 0!==A&&e[2]!==A}(e)||function(e){return M.checked&&"Perfect"!==e[3]}(e))}function C(){S||(S=l({className:"fshItemGrid"}),v.forEach(B),N(I.parentNode,S),b(I)),v.forEach(F)}function P(e){if(!p("fshFolder",e.target))return
const t=Number(e.target.dataset.folder)
t!==A&&(A=t,C())}function V(e){const t=L[e[1]]
t&&e.push(function(e){return e.equipped?-2:e.folder_id}(t),t.craft)}function q(){v.forEach(V)}function G(e){if(e.items&&I){L=e.items,n(4,q)
!function(e){if("crafting"===i.cmd)return void(M={checked:!1})
const t=j({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '})
M=h({className:"fshVMid",type:"checkbox"}),d(M,"change",C),m(t,M),f(e," &ensp;"),m(e,t)}(function(e){const t=I.parentNode.parentNode.previousElementSibling.children[0]
return t.classList.add("fshCenter"),c(t,P),f(t,y(e,!0)),t}(e.folders))}}function H(e){const{tipped:t}=e.dataset
return[e,t.match(u)[2]]}function J(){I=function(){const e=o(a,s.lastElementChild)
return"crafting"===i.cmd?e[1]:e[0]}(),v=r("img",I).map(H)}function T(){t()&&(g().then(G),n(3,J))}export default T
//# sourceMappingURL=craftForge-09d54355.js.map
