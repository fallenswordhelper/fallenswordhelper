import{y as e,a as t,at as s,g as n,z as i,d as a,au as r,e as c,o,t as d,m as l,b as f,h as m,l as u,a4 as h,I as p,be as b,as as k,E as L,c as S}from"./calfSystem-cbf77dd7.js"
import{c as g}from"./createTr-a413773a.js"
import{g as j}from"./getInventoryById-eb3b3485.js"
import{h as y}from"./hideElement-452544d4.js"
import{i as N}from"./insertElementBefore-c2bb9234.js"
import{i as v}from"./insertHtmlBeforeBegin-1377340b.js"
import{n as E}from"./numberIsNaN-c0e87dea.js"
import"./getInventory-09198b2e.js"
import"./cmdExport-cd0ba453.js"
import"./indexAjaxJson-167a69fe.js"
let I
function $(e,t){t.children[0].lastElementChild.children[0].children[0].checked=!1
const s=u("fshHide",t),n="folderid0"===e,i=u(e,t);(function(e,t,s){return e&&h(t,s)})(s,n,i)&&(t.classList.remove("fshHide"),t.classList.add("fshBlock")),function(e,t,s){return!e&&!t&&!s}(s,n,i)&&(t.classList.remove("fshBlock"),y(t))}function A(e){n(a,function(){let e=i("item-div")
if(!e){e=l({id:"item-div",className:"itemDiv"})
const t=i("item-list"),s=f(a,t)
for(;s.length;)s[0].classList.add("fshBlock"),m(e,s[0])
N(e,t)}return e}()).forEach(d($,e.target.id))}function H(e){"SPAN"===e.target.nodeName&&-1!==e.target.id.indexOf("folderid")&&A(e)}function T(e){return` &ensp;<span id="folderid${e[0]}" class="fshLink fshNoWrap" fid=${e[0]}>${e[1]}</span> `}function C(e){const t=e.children[0].lastElementChild.children[0]
if(!t)return
const s=t.children[0]
if(!s)return
const n=I[s.getAttribute("value")]
n&&(e.classList.add(`folderid${n.folder_id}`),I.fshHasST&&function(e,t){t.is_in_st&&e.classList.add("isInST")}(e,n),s.classList.add(`itemid${n.item_id}`),s.classList.add(`itemtype${n.type}`))}function x(e){s("trade.processTrade"),I=e.items
n(a,i("item-list")).forEach(C),function(e){const t=g({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${c(e).map(T).join("")}`})
o(t,H)
const s=i("item-list").parentNode.parentNode
v(s,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),N(t,s)}(e.folders),r("trade.processTrade")}function B(e){t(3,x,[e])}function M(){e()||j().then(B)}function w(e,t){return"itemid-1"===e||function(e,t){return"itemid-2"===e&&u("itemtype12",t)}(e,t)||u(e,t)}function W(e,t){return e||!u("isInST",t)}function _(e){return e.children[0].lastElementChild.children[0].children[0]}function z(e,t){t.checked=e}function D(e){z(!1,e)}function F(e){z(!0,e)}function J(e,t){t.filter(d(W,function(){const e=i("itemsInSt")
if(e)return e.checked}())).map(_).filter(d(w,e)).slice(0,function(e){const t=parseInt(i("fshSendHowMany").value,10)
return E(t)?e.length:"-"!==S.subcmd?Math.min(100,t):t}(t)).forEach(F)}function O(e){u("fshCheckAll",e.target)&&function(e){const t=i("item-div")||i("item-list"),s=L("table:not(.fshHide)",t)
s.map(_).forEach(D),J(e.target.id,s)}(e)}function P(e){return b(`[${e}]`)}function R(){const e=P(p("sendClasses"))
return e||P(k.sendClasses)}function q(e){return` &ensp;<span id="itemid${e[1]}" class="fshCheckAll fshLink fshNoWrap">${e[0]}</span>`}function G(){const e=i("item-list")
if(!e)return
const t=g({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${R().map(q).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
o(t,O),N(t,e.parentNode.parentNode)}function K(){t(3,M),t(3,G)}export default K
//# sourceMappingURL=trade-15a58b88.js.map
