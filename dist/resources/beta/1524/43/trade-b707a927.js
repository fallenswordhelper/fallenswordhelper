import{y as e,a as t,ar as s,g as n,z as i,d as a,as as r,e as o,o as c,t as d,m as l,b as f,h as m,l as h,a5 as p,I as u,bb as k,aq as b,E as L,c as S}from"./calfSystem-1d588248.js"
import{c as g}from"./createTr-a65a0ac0.js"
import{g as j}from"./getInventoryById-5ab299aa.js"
import{h as y}from"./hideElement-0d0f9065.js"
import{i as N}from"./insertElementBefore-23d4e956.js"
import{i as v}from"./insertHtmlBeforeBegin-73f71ef1.js"
import{n as E}from"./numberIsNaN-885a5556.js"
import"./getInventory-1268b5ea.js"
import"./cmdExport-a5395bb5.js"
import"./indexAjaxJson-7770951b.js"
let I
function $(e,t){t.children[0].lastElementChild.children[0].children[0].checked=!1
const s=h("fshHide",t),n="folderid0"===e,i=h(e,t);(function(e,t,s){return e&&p(t,s)})(s,n,i)&&(t.classList.remove("fshHide"),t.classList.add("fshBlock")),function(e,t,s){return!e&&!t&&!s}(s,n,i)&&(t.classList.remove("fshBlock"),y(t))}function A(e){n(a,function(){let e=i("item-div")
if(!e){e=l({id:"item-div",className:"itemDiv"})
const t=i("item-list"),s=f(a,t)
for(;s.length;)s[0].classList.add("fshBlock"),m(e,s[0])
N(e,t)}return e}()).forEach(d($,e.target.id))}function H(e){"SPAN"===e.target.nodeName&&-1!==e.target.id.indexOf("folderid")&&A(e)}function T(e){return` &ensp;<span id="folderid${e[0]}" class="fshLink fshNoWrap" fid=${e[0]}>${e[1]}</span> `}function C(e){const t=e.children[0].lastElementChild.children[0]
if(!t)return
const s=t.children[0],n=I[s.getAttribute("value")]
n&&(e.classList.add(`folderid${n.folder_id}`),I.fshHasST&&function(e,t){t.is_in_st&&e.classList.add("isInST")}(e,n),s.classList.add(`itemid${n.item_id}`),s.classList.add(`itemtype${n.type}`))}function x(e){s("trade.processTrade"),I=e.items
n(a,i("item-list")).forEach(C),function(e){const t=g({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${o(e).map(T).join("")}`})
c(t,H)
const s=i("item-list").parentNode.parentNode
v(s,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),N(t,s)}(e.folders),r("trade.processTrade")}function B(e){t(3,x,[e])}function M(){e()||j().then(B)}function w(e,t){return"itemid-1"===e||function(e,t){return"itemid-2"===e&&h("itemtype12",t)}(e,t)||h(e,t)}function W(e,t){return e||!h("isInST",t)}function _(e){return e.children[0].lastElementChild.children[0].children[0]}function z(e,t){t.checked=e}function q(e){z(!1,e)}function D(e){z(!0,e)}function F(e,t){t.filter(d(W,function(){const e=i("itemsInSt")
if(e)return e.checked}())).map(_).filter(d(w,e)).slice(0,function(e){const t=parseInt(i("fshSendHowMany").value,10)
return E(t)?e.length:"-"!==S.subcmd?Math.min(100,t):t}(t)).forEach(D)}function J(e){h("fshCheckAll",e.target)&&function(e){const t=i("item-div")||i("item-list"),s=L("table:not(.fshHide)",t)
s.map(_).forEach(q),F(e.target.id,s)}(e)}function O(e){return k(`[${e}]`)}function P(){const e=O(u("sendClasses"))
return e||O(b.sendClasses)}function R(e){return` &ensp;<span id="itemid${e[1]}" class="fshCheckAll fshLink fshNoWrap">${e[0]}</span>`}function G(){const e=i("item-list")
if(!e)return
const t=g({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${P().map(R).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
c(t,J),N(t,e.parentNode.parentNode)}function K(){t(3,M),t(3,G)}export default K
//# sourceMappingURL=trade-b707a927.js.map
