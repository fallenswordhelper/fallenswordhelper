import{y as t,a as n,g as e,z as s,d as i,e as a,o as c,t as o,m as r,b as d,h as l,l as f,a4 as m,I as h,bc as u,as as p,E as k,c as L}from"./calfSystem-7991d843.js"
import{c as S}from"./createTr-78cd56c3.js"
import{g as b}from"./getInventoryById-215c7d87.js"
import{h as g}from"./hideElement-452544d4.js"
import{i as j}from"./insertElementBefore-c2bb9234.js"
import{i as y}from"./insertHtmlBeforeBegin-a672866f.js"
import{n as N}from"./numberIsNaN-c0e87dea.js"
import"./getInventory-c0f829a1.js"
import"./cmdExport-07db8246.js"
import"./indexAjaxJson-2cb21664.js"
let v
function E(t,n){n.children[0].lastElementChild.children[0].children[0].checked=!1
const e=f("fshHide",n),s="folderid0"===t,i=f(t,n);(function(t,n,e){return t&&m(n,e)})(e,s,i)&&(n.classList.remove("fshHide"),n.classList.add("fshBlock")),function(t,n,e){return!t&&!n&&!e}(e,s,i)&&(n.classList.remove("fshBlock"),g(n))}function I(t){e(i,function(){let t=s("item-div")
if(!t){t=r({id:"item-div",className:"itemDiv"})
const n=s("item-list"),e=d(i,n)
for(;e.length;)e[0].classList.add("fshBlock"),l(t,e[0])
j(t,n)}return t}()).forEach(o(E,t.target.id))}function $(t){"SPAN"===t.target.nodeName&&-1!==t.target.id.indexOf("folderid")&&I(t)}function A(t){return` &ensp;<span id="folderid${t[0]}" class="fshLink fshNoWrap" fid=${t[0]}>${t[1]}</span> `}function H(t){const n=t.children[0].lastElementChild.children[0]
if(!n)return
const e=n.children[0]
if(!e)return
const s=v[e.getAttribute("value")]
s&&(t.classList.add(`folderid${s.folder_id}`),v.fshHasST&&function(t,n){n.is_in_st&&t.classList.add("isInST")}(t,s),e.classList.add(`itemid${s.item_id}`),e.classList.add(`itemtype${s.type}`))}function C(t){v=t.items
e(i,s("item-list")).forEach(H),function(t){const n=S({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${a(t).map(A).join("")}`})
c(n,$)
const e=s("item-list").parentNode.parentNode
y(e,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),j(n,e)}(t.folders)}function T(t){n(3,C,[t])}function x(){t()||b().then(T)}function B(t,n){return"itemid-1"===t||function(t,n){return"itemid-2"===t&&f("itemtype12",n)}(t,n)||f(t,n)}function M(t,n){return t||!f("isInST",n)}function w(t){return t.children[0].lastElementChild.children[0].children[0]}function W(t,n){n.checked=t}function _(t){W(!1,t)}function z(t){W(!0,t)}function D(t,n){n.filter(o(M,function(){const t=s("itemsInSt")
if(t)return t.checked}())).map(w).filter(o(B,t)).slice(0,function(t){const n=parseInt(s("fshSendHowMany").value,10)
return N(n)?t.length:"-"!==L.subcmd?Math.min(100,n):n}(n)).forEach(z)}function F(t){f("fshCheckAll",t.target)&&function(t){const n=s("item-div")||s("item-list"),e=k("table:not(.fshHide)",n)
e.map(w).forEach(_),D(t.target.id,e)}(t)}function J(t){return u(`[${t}]`)}function O(){const t=J(h("sendClasses"))
return t||J(p.sendClasses)}function P(t){return` &ensp;<span id="itemid${t[1]}" class="fshCheckAll fshLink fshNoWrap">${t[0]}</span>`}function R(){const t=s("item-list")
if(!t)return
const n=S({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${O().map(P).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
c(n,F),j(n,t.parentNode.parentNode)}function q(){n(3,x),n(3,R)}export default q
//# sourceMappingURL=trade-1583bcde.js.map
