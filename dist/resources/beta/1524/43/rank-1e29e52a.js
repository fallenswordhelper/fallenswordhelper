import{q as n,$ as t,D as r,o as e,t as s,i as o,h as a,C as i,aa as c,u,I as f,p as d,y as m,e as p,N as l}from"./calfSystem-1d588248.js"
import{b as h}from"./batch-40833b07.js"
import{g as b}from"./getMembrList-87ba8bf3.js"
import{n as g}from"./notLastUpdate-137cd5af.js"
import{b as j}from"./bitwiseAnd-9e46ad65.js"
import{c as w}from"./createInput-7d18793e.js"
import{c as N}from"./createSpan-256b26cd.js"
import{g as k}from"./guild-7ba4aee9.js"
import{r as x}from"./replaceChild-f0d784a3.js"
import{r as v}from"./roundToString-3f9085b8.js"
import{i as C}from"./insertElementBefore-23d4e956.js"
import{p as I}from"./playerName-95f1f2a8.js"
import{t as S}from"./toLowerCase-999f3196.js"
import"./currentGuildId-9fdd6aa9.js"
import"./cmdExport-a5395bb5.js"
import"./indexAjaxJson-7770951b.js"
import"./idb-dfc3696a.js"
import"./numberIsNaN-885a5556.js"
function y(n,t){return n+t}function B(t){return k(n({subcmd:"ranks"},t))}const E=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function _(n,t){const r=t.children[0],e=i(r.firstChild),s=n.find((n=>n&&n.name===e))
var o
s&&c(r,`<span class="fshBlue">(${o=s.permissions,v(E.filter((([n])=>j(o,n))).reduce(((n,[,t])=>n+t-1),0)+o.toString(2).split("").map(Number).reduce(y,0),1)}) Tax:(${s.tax}%)</span> `)}function L(n,t,r){r.s&&(n.forEach(s(_,[r.r[0]].concat(r.r.ranks))),t.classList.remove("fshSpinner"))}function U(n,r){const e=N({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
x(e,r),t(B).then(s(L,n,e))}function $(n){const t=r('#pCC a[href*="=ranks&subcmd2=add"]')
t&&function(n,t){const r=w({className:"custombutton",type:"button",value:"Get Rank Weightings"})
e(r,s(U,n,r))
const i=t.parentNode.parentNode
o(i,"&nbsp;"),a(i,r)}(n,t)}function A(n,t){return u({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}).then((()=>({s:!0})))}function G(n,t){return B({subcmd2:n,rank_id:t})}let R
function D(n,r,e){const s=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
var o,a
o=S(n.target.value),a=s[1],t(G,A,o,a)
const i=r.parentNode.rows[e]
C(r,i)
const c="Up"===n.target.value?-22:22
window.scrollBy(0,c),n.stopPropagation()}function M(n){const t=n.target.parentNode.parentNode.parentNode,r=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return R>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,r)||D(n,t,r)}function T(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&M(n)}function q(n,t){return t[0]===n}function F(n,t){const r=t.children[0],e=function(n,t){return 1===n.rowIndex?"Guild Founder":i(t)}(t,r),a=n.find(s(q,e));(function(n){return n&&n[1].length>0})(a)&&(!function(n,t){t&&t[1].includes(I())&&(R=n.rowIndex)}(t,a),o(r,` <span class="fshBlue">- ${a[1].join(", ")}</span>`))}function J(n){const t=function(){const n=d.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return l(n.rows[7].children[0].children[0].rows)}()
t&&(h([5,3,t,1,s(F,n)]),$(t),R&&f("ajaxifyRankControls")&&e(d,T,!0))}function P(n,t){const r=n.find(s(q,t[1].rank_name))
return r?r[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function W(n){return p(n).filter(g).reduce(P,[])}function z(){m()||b(!1).then(W).then(J)}export default z
//# sourceMappingURL=rank-1e29e52a.js.map
