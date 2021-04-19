import{y as t,a as e,g as n,z as s,d as i,e as a,o as c,t as o,m as r,b as d,h as l,l as f,a5 as m,I as h,b8 as p,aq as u,E as k,c as b}from"./calfSystem-fe534823.js"
import{c as L}from"./createTr-4593cb66.js"
import{g as S}from"./getInventoryById-b86c65f0.js"
import{h as g}from"./hideElement-d197c06b.js"
import{i as j}from"./insertElementBefore-68b894c4.js"
import{i as y}from"./insertHtmlBeforeBegin-f81c2947.js"
import{n as N}from"./numberIsNaN-d0e4b349.js"
import"./getInventory-0bbc559d.js"
import"./cmdExport-5c4a04e0.js"
import"./indexAjaxJson-6f85f3e9.js"
let v
function E(t,e){e.children[0].lastElementChild.children[0].children[0].checked=!1
const n=f("fshHide",e),s="folderid0"===t,i=f(t,e);(function(t,e,n){return t&&m(e,n)})(n,s,i)&&(e.classList.remove("fshHide"),e.classList.add("fshBlock")),function(t,e,n){return!t&&!e&&!n}(n,s,i)&&(e.classList.remove("fshBlock"),g(e))}function I(t){n(i,function(){let t=s("item-div")
if(!t){t=r({id:"item-div",className:"itemDiv"})
const e=s("item-list"),n=d(i,e)
for(;n.length;)n[0].classList.add("fshBlock"),l(t,n[0])
j(t,e)}return t}()).forEach(o(E,t.target.id))}function $(t){"SPAN"===t.target.nodeName&&-1!==t.target.id.indexOf("folderid")&&I(t)}function A(t){return` &ensp;<span id="folderid${t[0]}" class="fshLink fshNoWrap" fid=${t[0]}>${t[1]}</span> `}function H(t){const e=t.children[0].lastElementChild.children[0].children[0],n=v[e.getAttribute("value")]
n&&(t.classList.add(`folderid${n.folder_id}`),v.fshHasST&&function(t,e){e.is_in_st&&t.classList.add("isInST")}(t,n),e.classList.add(`itemid${n.item_id}`),e.classList.add(`itemtype${n.type}`))}function C(t){v=t.items
n(i,s("item-list")).forEach(H),function(t){const e=L({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${a(t).map(A).join("")}`})
c(e,$)
const n=s("item-list").parentNode.parentNode
y(n,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),j(e,n)}(t.folders)}function T(t){e(3,C,[t])}function x(){t()||S().then(T)}function B(t,e){return"itemid-1"===t||function(t,e){return"itemid-2"===t&&f("itemtype12",e)}(t,e)||f(t,e)}function M(t,e){return t||!f("isInST",e)}function w(t){return t.children[0].lastElementChild.children[0].children[0]}function W(t,e){e.checked=t}function _(t){W(!1,t)}function z(t){W(!0,t)}function q(t,e){e.filter(o(M,function(){const t=s("itemsInSt")
if(t)return t.checked}())).map(w).filter(o(B,t)).slice(0,function(t){const e=parseInt(s("fshSendHowMany").value,10)
return N(e)?t.length:"-"!==b.subcmd?Math.min(100,e):e}(e)).forEach(z)}function D(t){f("fshCheckAll",t.target)&&function(t){const e=s("item-div")||s("item-list"),n=k("table:not(.fshHide)",e)
n.map(w).forEach(_),q(t.target.id,n)}(t)}function F(t){return p(`[${t}]`)}function J(){const t=F(h("sendClasses"))
return t||F(u.sendClasses)}function O(t){return` &ensp;<span id="itemid${t[1]}" class="fshCheckAll fshLink fshNoWrap">${t[0]}</span>`}function P(){const t=L({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${J().map(O).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
c(t,D)
const e=s("item-list").parentNode.parentNode
j(t,e)}function R(){e(3,x),e(3,P)}export default R
//# sourceMappingURL=trade-8e3c316e.js.map
