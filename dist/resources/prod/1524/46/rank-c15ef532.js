import{q as n,$ as t,D as r,o as e,t as s,i as o,h as a,C as i,a9 as c,u,I as f,p as d,ae as p,y as m,e as l,ap as h}from"./calfSystem-7991d843.js"
import{b}from"./batch-44f9cf79.js"
import{g}from"./getMembrList-479139ba.js"
import{n as j}from"./notLastUpdate-41bcbbb5.js"
import{b as w}from"./bitwiseAnd-c837f771.js"
import{c as k}from"./createInput-e6426c85.js"
import{c as x}from"./createSpan-462a14d2.js"
import{g as N}from"./guild-a6c2c23e.js"
import{r as v}from"./replaceChild-53904b1e.js"
import{r as I}from"./roundToString-34b7c935.js"
import{i as S}from"./insertElementBefore-c2bb9234.js"
import{p as y}from"./playerName-541d216c.js"
import"./currentGuildId-abfe3237.js"
import"./cmdExport-07db8246.js"
import"./indexAjaxJson-2cb21664.js"
import"./idb-89606f1a.js"
import"./numberIsNaN-c0e87dea.js"
function C(n,t){return n+t}function B(t){return N(n({subcmd:"ranks"},t))}const E=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function _(n,t){const r=t.children[0],e=i(r.firstChild),s=n.find((n=>n&&n.name===e))
var o
s&&c(r,`<span class="fshBlue">(${o=s.permissions,I(E.filter((([n])=>w(o,n))).reduce(((n,[,t])=>n+t-1),0)+o.toString(2).split("").map(Number).reduce(C,0),1)}) Tax:(${s.tax}%)</span> `)}function U(n,t,r){r.s&&(n.forEach(s(_,[r.r[0]].concat(r.r.ranks))),t.classList.remove("fshSpinner"))}function $(n,r){const e=x({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
v(e,r),t(B).then(s(U,n,e))}function A(n){const t=r('#pCC a[href*="=ranks&subcmd2=add"]')
t&&function(n,t){const r=k({className:"custombutton",type:"button",value:"Get Rank Weightings"})
e(r,s($,n,r))
const i=t.parentNode.parentNode
o(i,"&nbsp;"),a(i,r)}(n,t)}function G(n,t){return u({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}).then((()=>({s:!0})))}function L(n,t){return B({subcmd2:n,rank_id:t})}let R
function D(n,r,e){const s=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
var o,a
o=p(n.target.value),a=s[1],t(L,G,o,a)
const i=r.parentNode.rows[e]
S(r,i)
const c="Up"===n.target.value?-22:22
window.scrollBy(0,c),n.stopPropagation()}function M(n){const t=n.target.parentNode.parentNode.parentNode,r=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return R>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,r)||D(n,t,r)}function T(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&M(n)}function q(n,t){return t[0]===n}function F(n,t){const r=t.children[0],e=function(n,t){return 1===n.rowIndex?"Guild Founder":i(t)}(t,r),a=n.find(s(q,e));(function(n){return n&&n[1].length>0})(a)&&(!function(n,t){t&&t[1].includes(y())&&(R=n.rowIndex)}(t,a),o(r,` <span class="fshBlue">- ${a[1].join(", ")}</span>`))}function J(n){const t=function(){const n=d.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return h(n.rows[7].children[0].children[0].rows)}()
t&&(b([5,3,t,1,s(F,n)]),A(t),R&&f("ajaxifyRankControls")&&e(d,T,!0))}function P(n,t){const r=n.find(s(q,t[1].rank_name))
return r?r[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function W(n){return l(n).filter(j).reduce(P,[])}function z(){m()||g(!1).then(W).then(J)}export default z
//# sourceMappingURL=rank-c15ef532.js.map
