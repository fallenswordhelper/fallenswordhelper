import{q as n,$ as t,D as r,o as s,t as e,i as o,h as a,C as i,ab as c,u,I as f,p as d,y as m,e as p,N as l}from"./calfSystem-b31aba65.js"
import{b as h}from"./batch-4b6ac500.js"
import{g as b}from"./getMembrList-74c180d1.js"
import{n as g}from"./notLastUpdate-59e13b8d.js"
import{b as j}from"./bitwiseAnd-b3a8756a.js"
import{c as w}from"./createInput-d7f942e4.js"
import{c as N}from"./createSpan-1160b622.js"
import{g as k}from"./guild-c7514cf3.js"
import{r as x}from"./replaceChild-0ba7ddeb.js"
import{r as v}from"./roundToString-f45536fa.js"
import{s as C}from"./sum-48ca1ce6.js"
import{i as I}from"./insertElementBefore-68b894c4.js"
import{p as S}from"./playerName-68c14b2a.js"
import{t as y}from"./toLowerCase-179aa35f.js"
import"./currentGuildId-c379e204.js"
import"./cmdExport-8d5cf03e.js"
import"./indexAjaxJson-0fdc3cdc.js"
import"./idb-71729176.js"
import"./numberIsNaN-d0e4b349.js"
function B(t){return k(n({subcmd:"ranks"},t))}const E=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function _(n,t){const r=t.children[0],s=i(r.firstChild),e=n.find((n=>n&&n.name===s))
var o
e&&c(r,`<span class="fshBlue">(${o=e.permissions,v(E.filter((([n])=>j(o,n))).reduce(((n,[,t])=>n+t-1),0)+o.toString(2).split("").map(Number).reduce(C,0),1)}) Tax:(${e.tax}%)</span> `)}function L(n,t,r){r.s&&(n.forEach(e(_,[r.r[0]].concat(r.r.ranks))),t.classList.remove("fshSpinner"))}function U(n,r){const s=N({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
x(s,r),t(B).then(e(L,n,s))}function $(n){const t=r('#pCC a[href*="=ranks&subcmd2=add"]')
t&&function(n,t){const r=w({className:"custombutton",type:"button",value:"Get Rank Weightings"})
s(r,e(U,n,r))
const i=t.parentNode.parentNode
o(i,"&nbsp;"),a(i,r)}(n,t)}function A(n,t){return u({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}).then((()=>({s:!0})))}function G(n,t){return B({subcmd2:n,rank_id:t})}let R
function D(n,r,s){const e=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
var o,a
o=y(n.target.value),a=e[1],t(G,A,o,a)
const i=r.parentNode.rows[s]
I(r,i)
const c="Up"===n.target.value?-22:22
window.scrollBy(0,c),n.stopPropagation()}function M(n){const t=n.target.parentNode.parentNode.parentNode,r=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return R>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,r)||D(n,t,r)}function T(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&M(n)}function q(n,t){return t[0]===n}function F(n,t){const r=t.children[0],s=function(n,t){return 1===n.rowIndex?"Guild Founder":i(t)}(t,r),a=n.find(e(q,s));(function(n){return n&&n[1].length>0})(a)&&(!function(n,t){t&&t[1].includes(S())&&(R=n.rowIndex)}(t,a),o(r,` <span class="fshBlue">- ${a[1].join(", ")}</span>`))}function J(n){const t=function(){const n=d.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return l(n.rows[7].children[0].children[0].rows)}()
t&&(h([5,3,t,1,e(F,n)]),$(t),R&&f("ajaxifyRankControls")&&s(d,T,!0))}function P(n,t){const r=n.find(e(q,t[1].rank_name))
return r?r[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function W(n){return p(n).filter(g).reduce(P,[])}function z(){m()||b(!1).then(W).then(J)}export default z
//# sourceMappingURL=rank-b65c836d.js.map
