import{q as n,$ as t,D as r,o as s,t as e,i as o,h as a,C as i,aa as c,u,I as f,p as d,af as m,y as p,e as l,aq as b}from"./calfSystem-d3f0a380.js"
import{b as h}from"./batch-7c0362d6.js"
import{g}from"./getMembrList-a58b1ab2.js"
import{n as j}from"./notLastUpdate-41bcbbb5.js"
import{b as w}from"./bitwiseAnd-c837f771.js"
import{c as k}from"./createInput-816cd771.js"
import{c as x}from"./createSpan-6440fa04.js"
import{g as N}from"./guild-b0e3687a.js"
import{r as v}from"./replaceChild-53904b1e.js"
import{r as I}from"./roundToString-34b7c935.js"
import{s as S}from"./sum-f3d60567.js"
import{i as y}from"./insertElementBefore-c2bb9234.js"
import{p as C}from"./playerName-9d5fb2c2.js"
import"./currentGuildId-574c8e9f.js"
import"./cmdExport-2e38b85e.js"
import"./indexAjaxJson-00baab20.js"
import"./idb-13440348.js"
import"./numberIsNaN-c0e87dea.js"
function B(t){return N(n({subcmd:"ranks"},t))}const E=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function _(n,t){const r=t.children[0],s=i(r.firstChild),e=n.find((n=>n&&n.name===s))
var o
e&&c(r,`<span class="fshBlue">(${o=e.permissions,I(E.filter((([n])=>w(o,n))).reduce(((n,[,t])=>n+t-1),0)+o.toString(2).split("").map(Number).reduce(S,0),1)}) Tax:(${e.tax}%)</span> `)}function U(n,t,r){r.s&&(n.forEach(e(_,[r.r[0]].concat(r.r.ranks))),t.classList.remove("fshSpinner"))}function $(n,r){const s=x({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
v(s,r),t(B).then(e(U,n,s))}function A(n){const t=r('#pCC a[href*="=ranks&subcmd2=add"]')
t&&function(n,t){const r=k({className:"custombutton",type:"button",value:"Get Rank Weightings"})
s(r,e($,n,r))
const i=t.parentNode.parentNode
o(i,"&nbsp;"),a(i,r)}(n,t)}function G(n,t){return u({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}).then((()=>({s:!0})))}function L(n,t){return B({subcmd2:n,rank_id:t})}let R
function q(n,r,s){const e=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
var o,a
o=m(n.target.value),a=e[1],t(L,G,o,a)
const i=r.parentNode.rows[s]
y(r,i)
const c="Up"===n.target.value?-22:22
window.scrollBy(0,c),n.stopPropagation()}function D(n){const t=n.target.parentNode.parentNode.parentNode,r=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return R>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,r)||q(n,t,r)}function M(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&D(n)}function T(n,t){return t[0]===n}function F(n,t){const r=t.children[0],s=function(n,t){return 1===n.rowIndex?"Guild Founder":i(t)}(t,r),a=n.find(e(T,s));(function(n){return n&&n[1].length>0})(a)&&(!function(n,t){t&&t[1].includes(C())&&(R=n.rowIndex)}(t,a),o(r,` <span class="fshBlue">- ${a[1].join(", ")}</span>`))}function J(n){const t=function(){const n=d.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return b(n.rows[7].children[0].children[0].rows)}()
t&&(h([5,3,t,1,e(F,n)]),A(t),R&&f("ajaxifyRankControls")&&s(d,M,!0))}function P(n,t){const r=n.find(e(T,t[1].rank_name))
return r?r[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function W(n){return l(n).filter(j).reduce(P,[])}function z(){p()||g(!1).then(W).then(J)}export default z
//# sourceMappingURL=rank-e7fcc297.js.map
