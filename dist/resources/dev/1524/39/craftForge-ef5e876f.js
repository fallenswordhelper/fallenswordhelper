import{e as t,j as e,a as n,g as r,b as o,p as a,d as s,c,o as i,i as f,f as d,h as m,k as u,l as p,m as l}from"./calfSystem-b31aba65.js"
import{c as h}from"./createInput-d7f942e4.js"
import{c as j}from"./createLabel-0603163a.js"
import{g}from"./getInventoryById-cae61a80.js"
import{h as b}from"./hideElement-d197c06b.js"
import{i as N}from"./insertElementAfterBegin-1439c9a9.js"
import{m as E}from"./makeFolderSpan-ad0d3bcb.js"
import{t as k}from"./toggleForce-5182a27d.js"
import"./getInventory-56961d1a.js"
import"./guildStore-288b0535.js"
import"./cmdExport-8d5cf03e.js"
import"./indexAjaxJson-0fdc3cdc.js"
import"./insertElementBefore-68b894c4.js"
function x(t){return E(t[0],t[1])}function y(e,n){return E("0","All")+function(t){return t?E("-2","Worn"):""}(n)+E("-1","Main")+t(e).map(x).join("")}let I,v,L,M,S,A=0
function B(t){const e=l(),n=t[0].parentNode
m(e,n),m(S,e)}function F(t){const e=t[0].parentNode.parentNode
k(e,function(t){return 0!==A&&t[2]!==A}(t)||function(t){return M.checked&&"Perfect"!==t[3]}(t))}function C(){S||(S=l({className:"fshItemGrid"}),v.forEach(B),N(I.parentNode,S),b(I)),v.forEach(F)}function P(t){if(!p("fshFolder",t.target))return
const e=Number(t.target.dataset.folder)
e!==A&&(A=e,C())}function V(t){const e=L[t[1]]
e&&t.push(function(t){return t.equipped?-2:t.folder_id}(e),e.craft)}function q(){v.forEach(V)}function G(t){if(t.items&&I){L=t.items,n(4,q)
!function(t){if("crafting"===c.cmd)return void(M={checked:!1})
const e=j({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '})
M=h({className:"fshVMid",type:"checkbox"}),d(M,"change",C),m(e,M),f(t," &ensp;"),m(t,e)}(function(t){const e=I.parentNode.parentNode.previousElementSibling.children[0]
return e.classList.add("fshCenter"),i(e,P),f(e,y(t,!0)),e}(t.folders))}}function H(t){const{tipped:e}=t.dataset
return[t,e.match(u)[2]]}function J(){I=function(){const t=o(s,a.lastElementChild)
return"crafting"===c.cmd?t[1]:t[0]}(),v=r("img",I).map(H)}function T(){e()&&(g().then(G),n(3,J))}export default T
//# sourceMappingURL=craftForge-ef5e876f.js.map
