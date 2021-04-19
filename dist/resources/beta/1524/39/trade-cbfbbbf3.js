import{y as e,a as s,ar as t,g as n,z as i,d as a,as as c,e as o,o as r,t as d,m as l,b as f,h as m,l as h,a5 as p,I as u,ba as k,aq as b,E as L,c as S}from"./calfSystem-26fbeaeb.js"
import{c as g}from"./createTr-f500fe98.js"
import{g as j}from"./getInventoryById-29cc4c9d.js"
import{h as y}from"./hideElement-d197c06b.js"
import{i as N}from"./insertElementBefore-68b894c4.js"
import{i as v}from"./insertHtmlBeforeBegin-b1243fca.js"
import{n as E}from"./numberIsNaN-d0e4b349.js"
import"./getInventory-08cad8a3.js"
import"./cmdExport-c9d580f0.js"
import"./indexAjaxJson-0408c27b.js"
let I
function $(e,s){s.children[0].lastElementChild.children[0].children[0].checked=!1
const t=h("fshHide",s),n="folderid0"===e,i=h(e,s);(function(e,s,t){return e&&p(s,t)})(t,n,i)&&(s.classList.remove("fshHide"),s.classList.add("fshBlock")),function(e,s,t){return!e&&!s&&!t}(t,n,i)&&(s.classList.remove("fshBlock"),y(s))}function A(e){n(a,function(){let e=i("item-div")
if(!e){e=l({id:"item-div",className:"itemDiv"})
const s=i("item-list"),t=f(a,s)
for(;t.length;)t[0].classList.add("fshBlock"),m(e,t[0])
N(e,s)}return e}()).forEach(d($,e.target.id))}function H(e){"SPAN"===e.target.nodeName&&-1!==e.target.id.indexOf("folderid")&&A(e)}function T(e){return` &ensp;<span id="folderid${e[0]}" class="fshLink fshNoWrap" fid=${e[0]}>${e[1]}</span> `}function C(e){const s=e.children[0].lastElementChild.children[0].children[0],t=I[s.getAttribute("value")]
t&&(e.classList.add(`folderid${t.folder_id}`),I.fshHasST&&function(e,s){s.is_in_st&&e.classList.add("isInST")}(e,t),s.classList.add(`itemid${t.item_id}`),s.classList.add(`itemtype${t.type}`))}function x(e){t("trade.processTrade"),I=e.items
n(a,i("item-list")).forEach(C),function(e){const s=g({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${o(e).map(T).join("")}`})
r(s,H)
const t=i("item-list").parentNode.parentNode
v(t,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),N(s,t)}(e.folders),c("trade.processTrade")}function B(e){s(3,x,[e])}function M(){e()||j().then(B)}function w(e,s){return"itemid-1"===e||function(e,s){return"itemid-2"===e&&h("itemtype12",s)}(e,s)||h(e,s)}function W(e,s){return e||!h("isInST",s)}function _(e){return e.children[0].lastElementChild.children[0].children[0]}function z(e,s){s.checked=e}function q(e){z(!1,e)}function D(e){z(!0,e)}function F(e,s){s.filter(d(W,function(){const e=i("itemsInSt")
if(e)return e.checked}())).map(_).filter(d(w,e)).slice(0,function(e){const s=parseInt(i("fshSendHowMany").value,10)
return E(s)?e.length:"-"!==S.subcmd?Math.min(100,s):s}(s)).forEach(D)}function J(e){h("fshCheckAll",e.target)&&function(e){const s=i("item-div")||i("item-list"),t=L("table:not(.fshHide)",s)
t.map(_).forEach(q),F(e.target.id,t)}(e)}function O(e){return k(`[${e}]`)}function P(){const e=O(u("sendClasses"))
return e||O(b.sendClasses)}function R(e){return` &ensp;<span id="itemid${e[1]}" class="fshCheckAll fshLink fshNoWrap">${e[0]}</span>`}function G(){const e=g({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${P().map(R).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
r(e,J)
const s=i("item-list").parentNode.parentNode
N(e,s)}function K(){s(3,M),s(3,G)}export default K
//# sourceMappingURL=trade-cbfbbbf3.js.map
