import{q as n,$ as t,D as r,o as s,t as e,i as a,h as o,C as i,aa as c,u,I as f,p as d,y as m,e as p,N as l}from"./calfSystem-4a40365f.js"
import{b as h}from"./batch-7e6fa7bc.js"
import{g as b}from"./getMembrList-e395a723.js"
import{n as g}from"./notLastUpdate-381690ef.js"
import{b as j}from"./bitwiseAnd-4098b974.js"
import{c as w}from"./createInput-7fa974b4.js"
import{c as N}from"./createSpan-3ab35394.js"
import{g as k}from"./guild-973c4909.js"
import{r as x}from"./replaceChild-94e5469d.js"
import{r as v}from"./roundToString-a9a284a9.js"
import{i as C}from"./insertElementBefore-42a90ba9.js"
import{p as I}from"./playerName-9305cfda.js"
import{t as S}from"./toLowerCase-fa335220.js"
import"./currentGuildId-014a0323.js"
import"./cmdExport-92971757.js"
import"./indexAjaxJson-6d511c0e.js"
import"./idb-2c15fd0c.js"
import"./numberIsNaN-891c59d9.js"
function y(t){return k(n({subcmd:"ranks"},t))}const B=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function E(n,t){const r=t.children[0],s=i(r.firstChild),e=n.find((n=>n&&n.name===s))
var a
e&&c(r,`<span class="fshBlue">(${a=e.permissions,v(B.filter((([n])=>j(a,n))).reduce(((n,[,t])=>n+t-1),0)+a.toString(2).split("").map(Number).reduce(((n,t)=>n+t),0),1)}) Tax:(${e.tax}%)</span> `)}function _(n,t,r){r.s&&(n.forEach(e(E,[r.r[0]].concat(r.r.ranks))),t.classList.remove("fshSpinner"))}function L(n,r){const s=N({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
x(s,r),t(y).then(e(_,n,s))}function U(n){const t=r('#pCC a[href*="=ranks&subcmd2=add"]')
t&&function(n,t){const r=w({className:"custombutton",type:"button",value:"Get Rank Weightings"})
s(r,e(L,n,r))
const i=t.parentNode.parentNode
a(i,"&nbsp;"),o(i,r)}(n,t)}function $(n,t){return u({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}).then((()=>({s:!0})))}function A(n,t){return y({subcmd2:n,rank_id:t})}let G
function R(n,r,s){const e=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
var a,o
a=S(n.target.value),o=e[1],t(A,$,a,o)
const i=r.parentNode.rows[s]
C(r,i)
const c="Up"===n.target.value?-22:22
window.scrollBy(0,c),n.stopPropagation()}function D(n){const t=n.target.parentNode.parentNode.parentNode,r=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return G>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,r)||R(n,t,r)}function M(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&D(n)}function T(n,t){return t[0]===n}function q(n,t){const r=t.children[0],s=function(n,t){return 1===n.rowIndex?"Guild Founder":i(t)}(t,r),o=n.find(e(T,s));(function(n){return n&&n[1].length>0})(o)&&(!function(n,t){t&&t[1].includes(I())&&(G=n.rowIndex)}(t,o),a(r,` <span class="fshBlue">- ${o[1].join(", ")}</span>`))}function F(n){const t=function(){const n=d.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return l(n.rows[7].children[0].children[0].rows)}()
t&&(h([5,3,t,1,e(q,n)]),U(t),G&&f("ajaxifyRankControls")&&s(d,M,!0))}function J(n,t){const r=n.find(e(T,t[1].rank_name))
return r?r[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function P(n){return p(n).filter(g).reduce(J,[])}function W(){m()||b(!1).then(P).then(F)}export default W
//# sourceMappingURL=rank-c4bfcaf9.js.map
