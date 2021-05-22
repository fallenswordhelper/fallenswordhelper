import{y as t,a as e,as as s,g as n,z as i,d as a,at as r,e as c,o,t as d,m as l,b as f,h as m,l as h,a4 as p,I as u,bd as k,ar as b,E as L,c as S}from"./calfSystem-a8d582b6.js"
import{c as g}from"./createTr-0a0982d7.js"
import{g as j}from"./getInventoryById-019da233.js"
import{h as y}from"./hideElement-3be61495.js"
import{i as N}from"./insertElementBefore-7c440c87.js"
import{i as v}from"./insertHtmlBeforeBegin-5612e5d9.js"
import{n as E}from"./numberIsNaN-11f99b26.js"
import"./getInventory-32842db0.js"
import"./cmdExport-70bb9819.js"
import"./indexAjaxJson-f3656c2a.js"
let I
function $(t,e){e.children[0].lastElementChild.children[0].children[0].checked=!1
const s=h("fshHide",e),n="folderid0"===t,i=h(t,e);(function(t,e,s){return t&&p(e,s)})(s,n,i)&&(e.classList.remove("fshHide"),e.classList.add("fshBlock")),function(t,e,s){return!t&&!e&&!s}(s,n,i)&&(e.classList.remove("fshBlock"),y(e))}function A(t){n(a,function(){let t=i("item-div")
if(!t){t=l({id:"item-div",className:"itemDiv"})
const e=i("item-list"),s=f(a,e)
for(;s.length;)s[0].classList.add("fshBlock"),m(t,s[0])
N(t,e)}return t}()).forEach(d($,t.target.id))}function H(t){"SPAN"===t.target.nodeName&&-1!==t.target.id.indexOf("folderid")&&A(t)}function T(t){return` &ensp;<span id="folderid${t[0]}" class="fshLink fshNoWrap" fid=${t[0]}>${t[1]}</span> `}function C(t){const e=t.children[0].lastElementChild.children[0]
if(!e)return
const s=e.children[0],n=I[s.getAttribute("value")]
n&&(t.classList.add(`folderid${n.folder_id}`),I.fshHasST&&function(t,e){e.is_in_st&&t.classList.add("isInST")}(t,n),s.classList.add(`itemid${n.item_id}`),s.classList.add(`itemtype${n.type}`))}function x(t){s("trade.processTrade"),I=t.items
n(a,i("item-list")).forEach(C),function(t){const e=g({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${c(t).map(T).join("")}`})
o(e,H)
const s=i("item-list").parentNode.parentNode
v(s,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),N(e,s)}(t.folders),r("trade.processTrade")}function B(t){e(3,x,[t])}function M(){t()||j().then(B)}function w(t,e){return"itemid-1"===t||function(t,e){return"itemid-2"===t&&h("itemtype12",e)}(t,e)||h(t,e)}function W(t,e){return t||!h("isInST",e)}function _(t){return t.children[0].lastElementChild.children[0].children[0]}function z(t,e){e.checked=t}function D(t){z(!1,t)}function F(t){z(!0,t)}function J(t,e){e.filter(d(W,function(){const t=i("itemsInSt")
if(t)return t.checked}())).map(_).filter(d(w,t)).slice(0,function(t){const e=parseInt(i("fshSendHowMany").value,10)
return E(e)?t.length:"-"!==S.subcmd?Math.min(100,e):e}(e)).forEach(F)}function O(t){h("fshCheckAll",t.target)&&function(t){const e=i("item-div")||i("item-list"),s=L("table:not(.fshHide)",e)
s.map(_).forEach(D),J(t.target.id,s)}(t)}function P(t){return k(`[${t}]`)}function R(){const t=P(u("sendClasses"))
return t||P(b.sendClasses)}function q(t){return` &ensp;<span id="itemid${t[1]}" class="fshCheckAll fshLink fshNoWrap">${t[0]}</span>`}function G(){const t=i("item-list")
if(!t)return
const e=g({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${R().map(q).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
o(e,O),N(e,t.parentNode.parentNode)}function K(){e(3,M),e(3,G)}export default K
//# sourceMappingURL=trade-e2db7086.js.map
