import{y as t,a as e,g as n,z as s,d as i,e as a,o as c,t as o,m as r,b as l,h as d,l as f,a4 as m,I as h,bb as u,ar as p,E as k,c as L}from"./calfSystem-6ad077b7.js"
import{c as S}from"./createTr-c031a985.js"
import{g as b}from"./getInventoryById-123c3309.js"
import{h as g}from"./hideElement-3be61495.js"
import{i as j}from"./insertElementBefore-7c440c87.js"
import{i as y}from"./insertHtmlBeforeBegin-3ff19eec.js"
import{n as N}from"./numberIsNaN-11f99b26.js"
import"./getInventory-54f666ef.js"
import"./cmdExport-f73a707b.js"
import"./indexAjaxJson-d462ea95.js"
let v
function E(t,e){e.children[0].lastElementChild.children[0].children[0].checked=!1
const n=f("fshHide",e),s="folderid0"===t,i=f(t,e);(function(t,e,n){return t&&m(e,n)})(n,s,i)&&(e.classList.remove("fshHide"),e.classList.add("fshBlock")),function(t,e,n){return!t&&!e&&!n}(n,s,i)&&(e.classList.remove("fshBlock"),g(e))}function I(t){n(i,function(){let t=s("item-div")
if(!t){t=r({id:"item-div",className:"itemDiv"})
const e=s("item-list"),n=l(i,e)
for(;n.length;)n[0].classList.add("fshBlock"),d(t,n[0])
j(t,e)}return t}()).forEach(o(E,t.target.id))}function $(t){"SPAN"===t.target.nodeName&&-1!==t.target.id.indexOf("folderid")&&I(t)}function A(t){return` &ensp;<span id="folderid${t[0]}" class="fshLink fshNoWrap" fid=${t[0]}>${t[1]}</span> `}function H(t){const e=t.children[0].lastElementChild.children[0]
if(!e)return
const n=e.children[0],s=v[n.getAttribute("value")]
s&&(t.classList.add(`folderid${s.folder_id}`),v.fshHasST&&function(t,e){e.is_in_st&&t.classList.add("isInST")}(t,s),n.classList.add(`itemid${s.item_id}`),n.classList.add(`itemtype${s.type}`))}function C(t){v=t.items
n(i,s("item-list")).forEach(H),function(t){const e=S({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${a(t).map(A).join("")}`})
c(e,$)
const n=s("item-list").parentNode.parentNode
y(n,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),j(e,n)}(t.folders)}function T(t){e(3,C,[t])}function x(){t()||b().then(T)}function B(t,e){return"itemid-1"===t||function(t,e){return"itemid-2"===t&&f("itemtype12",e)}(t,e)||f(t,e)}function M(t,e){return t||!f("isInST",e)}function w(t){return t.children[0].lastElementChild.children[0].children[0]}function W(t,e){e.checked=t}function _(t){W(!1,t)}function z(t){W(!0,t)}function D(t,e){e.filter(o(M,function(){const t=s("itemsInSt")
if(t)return t.checked}())).map(w).filter(o(B,t)).slice(0,function(t){const e=parseInt(s("fshSendHowMany").value,10)
return N(e)?t.length:"-"!==L.subcmd?Math.min(100,e):e}(e)).forEach(z)}function F(t){f("fshCheckAll",t.target)&&function(t){const e=s("item-div")||s("item-list"),n=k("table:not(.fshHide)",e)
n.map(w).forEach(_),D(t.target.id,n)}(t)}function J(t){return u(`[${t}]`)}function O(){const t=J(h("sendClasses"))
return t||J(p.sendClasses)}function P(t){return` &ensp;<span id="itemid${t[1]}" class="fshCheckAll fshLink fshNoWrap">${t[0]}</span>`}function R(){const t=s("item-list")
if(!t)return
const e=S({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${O().map(P).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
c(e,F),j(e,t.parentNode.parentNode)}function q(){e(3,x),e(3,R)}export default q
//# sourceMappingURL=trade-77d816f4.js.map
