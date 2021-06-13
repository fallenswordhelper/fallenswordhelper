import{y as e,a as t,au as n,g as s,z as i,d as a,av as o,e as c,o as r,t as d,m as l,b as f,h as m,l as u,a5 as p,$ as h,D as k,E as g,I as j,bh as y,at as S,c as v}from"./calfSystem-6a3c85e0.js"
import{c as L}from"./createTr-1f4adf11.js"
import{g as b}from"./getInventoryById-e5962aec.js"
import{h as I}from"./hideElement-53ec58d4.js"
import{i as N}from"./insertElementBefore-c442a2a7.js"
import{i as B}from"./insertHtmlBeforeBegin-5d78259d.js"
import{n as E}from"./numberIsNaN-c7db67d0.js"
import{c as $}from"./createButton-82ecce7c.js"
import{a as A,s as C}from"./sendItems-68b87d4c.js"
import{i as H}from"./insertElementAfter-677202b8.js"
import"./getInventory-a569507a.js"
import"./guildStore-fcb25778.js"
import"./cmdExport-cce4a501.js"
import"./indexAjaxJson-c7dd57d3.js"
import"./htmlResult-c58d347a.js"
let T
function x(e,t){t.children[0].lastElementChild.children[0].children[0].checked=!1
const n=u("fshHide",t),s="folderid0"===e,i=u(e,t);(function(e,t,n){return e&&p(t,n)})(n,s,i)&&(t.classList.remove("fshHide"),t.classList.add("fshBlock")),function(e,t,n){return!e&&!t&&!n}(n,s,i)&&(t.classList.remove("fshBlock"),I(t))}function M(e){s(a,function(){let e=i("item-div")
if(!e){e=l({id:"item-div",className:"itemDiv"})
const t=i("item-list"),n=f(a,t)
for(;n.length;)n[0].classList.add("fshBlock"),m(e,n[0])
N(e,t)}return e}()).forEach(d(x,e.target.id))}function w(e){"SPAN"===e.target.nodeName&&-1!==e.target.id.indexOf("folderid")&&M(e)}function _(e){return` &ensp;<span id="folderid${e[0]}" class="fshLink fshNoWrap" fid=${e[0]}>${e[1]}</span> `}function O(e){const t=e.children[0].lastElementChild.children[0]
if(!t)return
const n=t.children[0],s=T[n.getAttribute("value")]
s&&(e.classList.add(`folderid${s.folder_id}`),T.fshHasST&&function(e,t){t.is_in_st&&e.classList.add("isInST")}(e,s),n.classList.add(`itemid${s.item_id}`),n.classList.add(`itemtype${s.type}`))}function W(e){n("trade.processTrade"),T=e.items
s(a,i("item-list")).forEach(O),function(e){const t=L({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${c(e).map(_).join("")}`})
r(t,w)
const n=i("item-list").parentNode.parentNode
B(n,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),N(t,n)}(e.folders),o("trade.processTrade")}function F(e){t(3,W,[e])}function R(){e()||b().then(F)}async function z(e,t){const n=await e
return console.log("promise data",n),null===n||n.s?(s=t[0],i=t[1],h(C,A,s,i)):n
var s,i}async function D(){const e=k('form[name="sendItemForm"] [name="target_username"]'),t=g('[name="sendItemList[]"]:checked').map((t=>[e.value,[t.value]])),n=await t.reduce(z,Promise.resolve(null))
console.log("finalResult",n)}function P(){const e=k('form[name="sendItemForm"] input[value="Send"]'),t=$({className:"fshBl",id:"oneByOneBtn",textContent:"OneByOne",type:"button"})
H(t,e),r(t,D)}function J(e,t){return"itemid-1"===e||function(e,t){return"itemid-2"===e&&u("itemtype12",t)}(e,t)||u(e,t)}function q(e,t){return e||!u("isInST",t)}function G(e){return e.children[0].lastElementChild.children[0].children[0]}function K(e,t){t.checked=e}function Q(e){K(!1,e)}function U(e){K(!0,e)}function V(e,t){t.filter(d(q,function(){const e=i("itemsInSt")
if(e)return e.checked}())).map(G).filter(d(J,e)).slice(0,function(e){const t=parseInt(i("fshSendHowMany").value,10)
return E(t)?e.length:"-"!==v.subcmd?Math.min(100,t):t}(t)).forEach(U)}function X(e){u("fshCheckAll",e.target)&&function(e){const t=i("item-div")||i("item-list"),n=g("table:not(.fshHide)",t)
n.map(G).forEach(Q),V(e.target.id,n)}(e)}function Y(e){return y(`[${e}]`)}function Z(){const e=Y(j("sendClasses"))
return e||Y(S.sendClasses)}function ee(e){return` &ensp;<span id="itemid${e[1]}" class="fshCheckAll fshLink fshNoWrap">${e[0]}</span>`}function te(){const e=i("item-list")
if(!e)return
const t=L({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${Z().map(ee).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
r(t,X),N(t,e.parentNode.parentNode)}function ne(){t(3,R),t(3,te),t(3,P)}export default ne
//# sourceMappingURL=trade-f055dcef.js.map
