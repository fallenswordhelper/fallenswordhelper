import{x as e,a as t,g as n,y as s,d as i,e as a,o,t as c,m as r,b as d,h as l,l as f,a3 as m,H as h,b1 as p,ae as u,D as k,c as L}from"./calfSystem-0708a9bb.js"
import{c as S}from"./createTr-a3749d58.js"
import{g as b}from"./getInventoryById-0f20816d.js"
import{h as g}from"./hideElement-eb117e0e.js"
import{i as j}from"./insertElementBefore-0a7f2602.js"
import{i as y}from"./insertHtmlBeforeBegin-7b7180e1.js"
import{n as N}from"./numberIsNaN-c188f177.js"
import"./getInventory-a911be32.js"
import"./cmdExport-3f5943d2.js"
import"./indexAjaxJson-7132e6ef.js"
let v
function H(e,t){t.children[0].lastElementChild.children[0].children[0].checked=!1
const n=f("fshHide",t),s="folderid0"===e,i=f(e,t);(function(e,t,n){return e&&m(t,n)})(n,s,i)&&(t.classList.remove("fshHide"),t.classList.add("fshBlock")),function(e,t,n){return!e&&!t&&!n}(n,s,i)&&(t.classList.remove("fshBlock"),g(t))}function $(e){n(i,function(){let e=s("item-div")
if(!e){e=r({id:"item-div",className:"itemDiv"})
const t=s("item-list"),n=d(i,t)
for(;n.length;)n[0].classList.add("fshBlock"),l(e,n[0])
j(e,t)}return e}()).forEach(c(H,e.target.id))}function A(e){"SPAN"===e.target.nodeName&&-1!==e.target.id.indexOf("folderid")&&$(e)}function E(e){return` &ensp;<span id="folderid${e[0]}" class="fshLink fshNoWrap" fid=${e[0]}>${e[1]}</span> `}function I(e){const t=e.children[0].lastElementChild.children[0].children[0],n=v[t.getAttribute("value")]
n&&(e.classList.add(`folderid${n.folder_id}`),v.fshHasST&&function(e,t){t.is_in_st&&e.classList.add("isInST")}(e,n),t.classList.add(`itemid${n.item_id}`),t.classList.add(`itemtype${n.type}`))}function C(e){v=e.items
n(i,s("item-list")).forEach(I),function(e){const t=S({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${a(e).map(E).join("")}`})
o(t,A)
const n=s("item-list").parentNode.parentNode
y(n,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),j(t,n)}(e.folders)}function x(e){t(3,C,[e])}function T(){e()||b().then(x)}function B(e,t){return"itemid-1"===e||function(e,t){return"itemid-2"===e&&f("itemtype12",t)}(e,t)||f(e,t)}function M(e,t){return e||!f("isInST",t)}function w(e){return e.children[0].lastElementChild.children[0].children[0]}function W(e,t){t.checked=e}function _(e){W(!1,e)}function D(e){W(!0,e)}function z(e,t){t.filter(c(M,function(){const e=s("itemsInSt")
if(e)return e.checked}())).map(w).filter(c(B,e)).slice(0,function(e){const t=parseInt(s("fshSendHowMany").value,10)
return N(t)?e.length:"-"!==L.subcmd?Math.min(100,t):t}(t)).forEach(D)}function F(e){f("fshCheckAll",e.target)&&function(e){const t=s("item-div")||s("item-list"),n=k("table:not(.fshHide)",t)
n.map(w).forEach(_),z(e.target.id,n)}(e)}function J(e){return p(`[${e}]`)}function O(){const e=J(h("sendClasses"))
return e||J(u.sendClasses)}function P(e){return` &ensp;<span id="itemid${e[1]}" class="fshCheckAll fshLink fshNoWrap">${e[0]}</span>`}function R(){const e=S({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${O().map(P).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
o(e,F)
const t=s("item-list").parentNode.parentNode
j(e,t)}function q(){t(3,T),t(3,R)}export default q
//# sourceMappingURL=trade-04e51689.js.map
