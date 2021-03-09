import{x as t,a as e,g as n,y as s,d as i,e as a,o as c,t as o,m as d,b as r,h as l,l as f,a3 as m,H as h,b1 as p,ae as u,D as k,c as L}from"./calfSystem-793da633.js"
import{c as S}from"./createTr-c01c4f0c.js"
import{g as b}from"./getInventoryById-24f6669b.js"
import{h as g}from"./hideElement-7b9c883f.js"
import{i as j}from"./insertElementBefore-9e5d02cd.js"
import{i as y}from"./insertHtmlBeforeBegin-b4245dd6.js"
import{n as N}from"./numberIsNaN-738f2a3f.js"
import"./getInventory-0617d3ff.js"
import"./cmdExport-6a61d44d.js"
import"./indexAjaxJson-bfa28533.js"
let v
function H(t,e){e.children[0].lastElementChild.children[0].children[0].checked=!1
const n=f("fshHide",e),s="folderid0"===t,i=f(t,e);(function(t,e,n){return t&&m(e,n)})(n,s,i)&&(e.classList.remove("fshHide"),e.classList.add("fshBlock")),function(t,e,n){return!t&&!e&&!n}(n,s,i)&&(e.classList.remove("fshBlock"),g(e))}function $(t){n(i,function(){let t=s("item-div")
if(!t){t=d({id:"item-div",className:"itemDiv"})
const e=s("item-list"),n=r(i,e)
for(;n.length;)n[0].classList.add("fshBlock"),l(t,n[0])
j(t,e)}return t}()).forEach(o(H,t.target.id))}function A(t){"SPAN"===t.target.nodeName&&-1!==t.target.id.indexOf("folderid")&&$(t)}function E(t){return` &ensp;<span id="folderid${t[0]}" class="fshLink fshNoWrap" fid=${t[0]}>${t[1]}</span> `}function I(t){const e=t.children[0].lastElementChild.children[0].children[0],n=v[e.getAttribute("value")]
n&&(t.classList.add(`folderid${n.folder_id}`),v.fshHasST&&function(t,e){e.is_in_st&&t.classList.add("isInST")}(t,n),e.classList.add(`itemid${n.item_id}`),e.classList.add(`itemtype${n.type}`))}function C(t){v=t.items
n(i,s("item-list")).forEach(I),function(t){const e=S({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${a(t).map(E).join("")}`})
c(e,A)
const n=s("item-list").parentNode.parentNode
y(n,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),j(e,n)}(t.folders)}function x(t){e(3,C,[t])}function T(){t()||b().then(x)}function B(t,e){return"itemid-1"===t||function(t,e){return"itemid-2"===t&&f("itemtype12",e)}(t,e)||f(t,e)}function M(t,e){return t||!f("isInST",e)}function w(t){return t.children[0].lastElementChild.children[0].children[0]}function W(t,e){e.checked=t}function _(t){W(!1,t)}function D(t){W(!0,t)}function z(t,e){e.filter(o(M,function(){const t=s("itemsInSt")
if(t)return t.checked}())).map(w).filter(o(B,t)).slice(0,function(t){const e=parseInt(s("fshSendHowMany").value,10)
return N(e)?t.length:"-"!==L.subcmd?Math.min(100,e):e}(e)).forEach(D)}function F(t){f("fshCheckAll",t.target)&&function(t){const e=s("item-div")||s("item-list"),n=k("table:not(.fshHide)",e)
n.map(w).forEach(_),z(t.target.id,n)}(t)}function J(t){return p(`[${t}]`)}function O(){const t=J(h("sendClasses"))
return t||J(u.sendClasses)}function P(t){return` &ensp;<span id="itemid${t[1]}" class="fshCheckAll fshLink fshNoWrap">${t[0]}</span>`}function R(){const t=S({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${O().map(P).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
c(t,F)
const e=s("item-list").parentNode.parentNode
j(t,e)}function q(){e(3,T),e(3,R)}export default q
//# sourceMappingURL=trade-45f856d0.js.map
