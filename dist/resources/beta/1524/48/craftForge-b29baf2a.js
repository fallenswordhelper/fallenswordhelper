import{e as t,j as e,a as n,g as r,b as o,p as s,d as a,c,o as i,i as f,f as m,h as d,k as u,l as p,m as l}from"./calfSystem-8af1dca2.js"
import{c as h}from"./createInput-75b7145b.js"
import{c as j}from"./createLabel-02b3d8e2.js"
import{g}from"./getInventoryById-3d19309e.js"
import{h as b}from"./hideElement-3852cc2c.js"
import{i as N}from"./insertElementAfterBegin-a140326f.js"
import{m as E}from"./makeFolderSpan-0671f0a0.js"
import{t as k}from"./toggleForce-5151034c.js"
import"./getInventory-791f3856.js"
import"./cmdExport-c3a6f54b.js"
import"./indexAjaxJson-6e1804ba.js"
import"./insertElementBefore-5adb1609.js"
function x(t){return E(t[0],t[1])}function y(e,n){return E("0","All")+function(t){return t?E("-2","Worn"):""}(n)+E("-1","Main")+t(e).map(x).join("")}let I,v,L,M,A,B=0
function F(t){const e=l(),n=t[0].parentNode
d(e,n),d(A,e)}function S(t){const e=t[0].parentNode.parentNode
k(e,function(t){return 0!==B&&t[2]!==B}(t)||function(t){return M.checked&&"Perfect"!==t[3]}(t))}function C(){A||(A=l({className:"fshItemGrid"}),v.forEach(F),N(I.parentNode,A),b(I)),v.forEach(S)}function P(t){if(!p("fshFolder",t.target))return
const e=Number(t.target.dataset.folder)
e!==B&&(B=e,C())}function V(t){const e=L[t[1]]
e&&t.push(function(t){return t.equipped?-2:t.folder_id}(e),e.craft)}function q(){v.forEach(V)}function G(t){if(t.items&&I){L=t.items,n(4,q)
!function(t){if("crafting"===c.cmd)return void(M={checked:!1})
const e=j({className:"fshVMid",innerHTML:'<span class="fshLink">Perfect</span> '})
M=h({className:"fshVMid",type:"checkbox"}),m(M,"change",C),d(e,M),f(t," &ensp;"),d(t,e)}(function(t){const e=I.parentNode.parentNode.previousElementSibling.children[0]
return e.classList.add("fshCenter"),i(e,P),f(e,y(t,!0)),e}(t.folders))}}function H(t){const{tipped:e}=t.dataset
return[t,e.match(u)[2]]}function J(){I=function(){const t=o(a,s.lastElementChild)
return"crafting"===c.cmd?t[1]:t[0]}(),v=r("img",I).map(H)}function T(){e()&&(g().then(G),n(3,J))}export default T
//# sourceMappingURL=craftForge-b29baf2a.js.map
