import{e as t,j as e,a as n,g as r,b as o,p as s,d as a,c as i,o as c,i as f,f as m,h as d,k as u,l as p,m as l}from"./calfSystem-5d0c721b.js"
import{c as h}from"./createInput-73c334d2.js"
import{c as j}from"./createLabel-9f14be20.js"
import{g}from"./getInventoryById-c1d4b56a.js"
import{h as b}from"./hideElement-4575b6b4.js"
import{i as N}from"./insertElementAfterBegin-57f0e737.js"
import{m as E}from"./makeFolderSpan-a509b620.js"
import{t as k}from"./toggleForce-465fdd4f.js"
import"./getInventory-181e0bd8.js"
import"./guildStore-117197b7.js"
import"./cmdExport-09ebfe19.js"
import"./indexAjaxJson-f1851d17.js"
import"./insertElementBefore-656c48d5.js"
function x(t){return E(t[0],t[1])}function y(e,n){return E("0","All")+function(t){return t?E("-2","Worn"):""}(n)+E("-1","Main")+t(e).map(x).join("")}let I,v,L,M,S,A=0
function B(t){const e=l(),n=t[0].parentNode
d(e,n),d(S,e)}function F(t){const e=t[0].parentNode.parentNode
k(e,function(t){return 0!==A&&t[2]!==A}(t)||function(t){return M.checked&&"Perfect"!==t[3]}(t))}function C(){S||(S=l({className:"fshItemGrid"}),v.forEach(B),N(I.parentNode,S),b(I)),v.forEach(F)}function P(t){if(!p("fshFolder",t.target))return
const e=Number(t.target.dataset.folder)
e!==A&&(A=e,C())}function V(t){const e=L[t[1]]
e&&t.push(function(t){return t.equipped?-2:t.folder_id}(e),e.craft)}function q(){v.forEach(V)}function G(t){if(t.items&&I){L=t.items,n(4,q)
!function(t){if("crafting"===i.cmd)return void(M={checked:!1})
const e=j({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '})
M=h({className:"fshVMid",type:"checkbox"}),m(M,"change",C),d(e,M),f(t," &ensp;"),d(t,e)}(function(t){const e=I.parentNode.parentNode.previousElementSibling.children[0]
return e.classList.add("fshCenter"),c(e,P),f(e,y(t,!0)),e}(t.folders))}}function H(t){const{tipped:e}=t.dataset
return[t,e.match(u)[2]]}function J(){I=function(){const t=o(a,s.lastElementChild)
return"crafting"===i.cmd?t[1]:t[0]}(),v=r("img",I).map(H)}function T(){e()&&(g().then(G),n(3,J))}export default T
//# sourceMappingURL=craftForge-daa11e91.js.map
