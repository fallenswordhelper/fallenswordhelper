import{x as e,a as s,af as t,g as n,y as i,d as a,ag as c,e as o,o as r,t as d,m as l,b as f,h as m,l as h,a3 as p,H as u,b3 as k,ae as L,D as S,c as g}from"./calfSystem-c91a5c89.js"
import{c as b}from"./createTr-5ec92f3a.js"
import{g as j}from"./getInventoryById-69ad3941.js"
import{h as y}from"./hideElement-eb117e0e.js"
import{i as N}from"./insertElementBefore-0a7f2602.js"
import{i as v}from"./insertHtmlBeforeBegin-245da958.js"
import{n as H}from"./numberIsNaN-c188f177.js"
import"./getInventory-082657b0.js"
import"./cmdExport-6ed03a19.js"
import"./indexAjaxJson-6b76870e.js"
let $
function A(e,s){s.children[0].lastElementChild.children[0].children[0].checked=!1
const t=h("fshHide",s),n="folderid0"===e,i=h(e,s);(function(e,s,t){return e&&p(s,t)})(t,n,i)&&(s.classList.remove("fshHide"),s.classList.add("fshBlock")),function(e,s,t){return!e&&!s&&!t}(t,n,i)&&(s.classList.remove("fshBlock"),y(s))}function E(e){n(a,function(){let e=i("item-div")
if(!e){e=l({id:"item-div",className:"itemDiv"})
const s=i("item-list"),t=f(a,s)
for(;t.length;)t[0].classList.add("fshBlock"),m(e,t[0])
N(e,s)}return e}()).forEach(d(A,e.target.id))}function I(e){"SPAN"===e.target.nodeName&&-1!==e.target.id.indexOf("folderid")&&E(e)}function T(e){return` &ensp;<span id="folderid${e[0]}" class="fshLink fshNoWrap" fid=${e[0]}>${e[1]}</span> `}function C(e){const s=e.children[0].lastElementChild.children[0].children[0],t=$[s.getAttribute("value")]
t&&(e.classList.add(`folderid${t.folder_id}`),$.fshHasST&&function(e,s){s.is_in_st&&e.classList.add("isInST")}(e,t),s.classList.add(`itemid${t.item_id}`),s.classList.add(`itemtype${t.type}`))}function x(e){t("trade.processTrade"),$=e.items
n(a,i("item-list")).forEach(C),function(e){const s=b({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${o(e).map(T).join("")}`})
r(s,I)
const t=i("item-list").parentNode.parentNode
v(t,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),N(s,t)}(e.folders),c("trade.processTrade")}function B(e){s(3,x,[e])}function M(){e()||j().then(B)}function w(e,s){return"itemid-1"===e||function(e,s){return"itemid-2"===e&&h("itemtype12",s)}(e,s)||h(e,s)}function W(e,s){return e||!h("isInST",s)}function _(e){return e.children[0].lastElementChild.children[0].children[0]}function D(e,s){s.checked=e}function z(e){D(!1,e)}function F(e){D(!0,e)}function J(e,s){s.filter(d(W,function(){const e=i("itemsInSt")
if(e)return e.checked}())).map(_).filter(d(w,e)).slice(0,function(e){const s=parseInt(i("fshSendHowMany").value,10)
return H(s)?e.length:"-"!==g.subcmd?Math.min(100,s):s}(s)).forEach(F)}function O(e){h("fshCheckAll",e.target)&&function(e){const s=i("item-div")||i("item-list"),t=S("table:not(.fshHide)",s)
t.map(_).forEach(z),J(e.target.id,t)}(e)}function P(e){return k(`[${e}]`)}function R(){const e=P(u("sendClasses"))
return e||P(L.sendClasses)}function q(e){return` &ensp;<span id="itemid${e[1]}" class="fshCheckAll fshLink fshNoWrap">${e[0]}</span>`}function G(){const e=b({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${R().map(q).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
r(e,O)
const s=i("item-list").parentNode.parentNode
N(e,s)}function K(){s(3,M),s(3,G)}export default K
//# sourceMappingURL=trade-b1ead941.js.map
