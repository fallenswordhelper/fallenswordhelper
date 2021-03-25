import{q as n,$ as t,D as r,o as s,t as e,i as o,h as a,C as i,ab as c,u as d,I as u,p as f,y as m,e as p,N as l}from"./calfSystem-5d0c721b.js"
import{b as h}from"./batch-388cd4bf.js"
import{g as b}from"./getMembrList-adbb0514.js"
import{n as g}from"./notLastUpdate-16d56e83.js"
import{b as j}from"./bitwiseAnd-fdb0d8d5.js"
import{c as w}from"./createInput-73c334d2.js"
import{c as N}from"./createSpan-6854a1c4.js"
import{g as k}from"./guild-f2d7df88.js"
import{r as x}from"./replaceChild-464fc721.js"
import{r as v}from"./roundToString-17a19d90.js"
import{i as C}from"./insertElementBefore-656c48d5.js"
import{p as I}from"./playerName-6d380f14.js"
import{t as S}from"./toLowerCase-9d38da0b.js"
import"./currentGuildId-01b0f97a.js"
import"./cmdExport-09ebfe19.js"
import"./indexAjaxJson-f1851d17.js"
import"./idb-a2aaccdb.js"
import"./numberIsNaN-a6723163.js"
function y(t){return k(n({subcmd:"ranks"},t))}const B=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function E(n,t){const r=t.children[0],s=i(r.firstChild),e=n.find((n=>n&&n.name===s))
var o
e&&c(r,`<span class="fshBlue">(${o=e.permissions,v(B.filter((([n])=>j(o,n))).reduce(((n,[,t])=>n+t-1),0)+o.toString(2).split("").map(Number).reduce(((n,t)=>n+t),0),1)}) Tax:(${e.tax}%)</span> `)}function _(n,t,r){r.s&&(n.forEach(e(E,[r.r[0]].concat(r.r.ranks))),t.classList.remove("fshSpinner"))}function L(n,r){const s=N({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
x(s,r),t(y).then(e(_,n,s))}function U(n){const t=r('#pCC a[href*="=ranks&subcmd2=add"]')
t&&function(n,t){const r=w({className:"custombutton",type:"button",value:"Get Rank Weightings"})
s(r,e(L,n,r))
const i=t.parentNode.parentNode
o(i,"&nbsp;"),a(i,r)}(n,t)}function $(n,t){return d({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}).then((()=>({s:!0})))}function A(n,t){return y({subcmd2:n,rank_id:t})}let G
function R(n,r,s){const e=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
var o,a
o=S(n.target.value),a=e[1],t(A,$,o,a)
const i=r.parentNode.rows[s]
C(r,i)
const c="Up"===n.target.value?-22:22
window.scrollBy(0,c),n.stopPropagation()}function D(n){const t=n.target.parentNode.parentNode.parentNode,r=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return G>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,r)||R(n,t,r)}function M(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&D(n)}function T(n,t){return t[0]===n}function q(n,t){const r=t.children[0],s=function(n,t){return 1===n.rowIndex?"Guild Founder":i(t)}(t,r),a=n.find(e(T,s));(function(n){return n&&n[1].length>0})(a)&&(!function(n,t){t&&t[1].includes(I())&&(G=n.rowIndex)}(t,a),o(r,` <span class="fshBlue">- ${a[1].join(", ")}</span>`))}function F(n){const t=function(){const n=f.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return l(n.rows[7].children[0].children[0].rows)}()
t&&(h([5,3,t,1,e(q,n)]),U(t),G&&u("ajaxifyRankControls")&&s(f,M,!0))}function J(n,t){const r=n.find(e(T,t[1].rank_name))
return r?r[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function P(n){return p(n).filter(g).reduce(J,[])}function W(){m()||b(!1).then(P).then(F)}export default W
//# sourceMappingURL=rank-f6b75bb5.js.map
