import{q as n,C as t,o as r,t as e,i as s,h as o,B as a,a7 as i,H as c,p as u,x as f,e as d,M as p}from"./calfSystem-7aee5245.js"
import{b as m}from"./batch-bd79b969.js"
import{g as l}from"./getMembrList-69d34b24.js"
import{n as h}from"./notLastUpdate-6ef8e096.js"
import{b}from"./bitwiseAnd-871fd88b.js"
import{c as g}from"./createInput-cd4a36ae.js"
import{c as j}from"./createSpan-08d79c06.js"
import{g as w}from"./guild-63d1a956.js"
import{r as x}from"./replaceChild-ab9b6dc5.js"
import{r as N}from"./roundToString-9dec41f7.js"
import{i as k}from"./insertElementBefore-43970b1f.js"
import{p as v}from"./playerName-87d03488.js"
import{t as C}from"./toLowerCase-51740687.js"
import"./currentGuildId-2e15c82d.js"
import"./cmdExport-ac019581.js"
import"./indexAjaxJson-d7e2ce82.js"
import"./idb-12bca0fb.js"
import"./numberIsNaN-53300e34.js"
function S(t){return w(n({subcmd:"ranks"},t))}const I=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function y(n,t){const r=t.children[0],e=a(r.firstChild),s=n.find((n=>n.name===e))
var o
s&&i(r,`<span class="fshBlue">(${o=s.permissions,N(I.filter((([n])=>b(o,n))).reduce(((n,[,t])=>n+t-1),0)+o.toString(2).split("").map(Number).reduce(((n,t)=>n+t),0),1)}) Tax:(${s.tax}%)</span> `)}function B(n,t,r){r.s&&(n.forEach(e(y,[r.r[0]].concat(r.r.ranks))),t.classList.remove("fshSpinner"))}function E(n,t){const r=j({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
x(r,t),S().then(e(B,n,r))}function L(n){const a=t('#pCC a[href*="=ranks&subcmd2=add"]')
a&&function(n,t){const a=g({className:"custombutton",type:"button",value:"Get Rank Weightings"})
r(a,e(E,n,a))
const i=t.parentNode.parentNode
s(i,"&nbsp;"),o(i,a)}(n,a)}function U(n,t){return function(n,t){return S({subcmd2:n,rank_id:t})}(n,t)}let _
function A(n){const t=n.target.parentNode.parentNode.parentNode,r=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return _>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,r)||function(n,t,r){const e=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
U(C(n.target.value),e[1])
const s=t.parentNode.rows[r]
k(t,s)
const o="Up"===n.target.value?-22:22
window.scrollBy(0,o),n.stopPropagation()}(n,t,r)}function G(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&A(n)}function M(n,t){return t[0]===n}function R(n,t){const r=t.children[0],o=function(n,t){return 1===n.rowIndex?"Guild Founder":a(t)}(t,r),i=n.find(e(M,o));(function(n){return n&&n[1].length>0})(i)&&(!function(n,t){t&&t[1].includes(v())&&(_=n.rowIndex)}(t,i),s(r,` <span class="fshBlue">- ${i[1].join(", ")}</span>`))}function $(n){const t=function(){const n=u.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return p(n.rows[7].children[0].children[0].rows)}()
t&&(m([5,3,t,1,e(R,n)]),L(t),_&&c("ajaxifyRankControls")&&r(u,G,!0))}function T(n,t){const r=n.find(e(M,t[1].rank_name))
return r?r[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function q(n){return d(n).filter(h).reduce(T,[])}function D(){f()||l(!1).then(q).then($)}export default D
//# sourceMappingURL=rank-247dea7c.js.map
