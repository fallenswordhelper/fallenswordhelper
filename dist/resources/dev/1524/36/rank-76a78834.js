import{q as n,$ as t,D as r,o as e,t as s,i as o,h as a,C as i,ab as c,u,I as d,p as f,y as m,e as p,N as l}from"./calfSystem-eeb1d862.js"
import{b as h}from"./batch-7ea0272b.js"
import{g as b}from"./getMembrList-8d90010d.js"
import{n as g}from"./notLastUpdate-381690ef.js"
import{b as j}from"./bitwiseAnd-4098b974.js"
import{c as w}from"./createInput-c963dc21.js"
import{c as N}from"./createSpan-c8cd4d0e.js"
import{g as k}from"./guild-9a62ed17.js"
import{r as x}from"./replaceChild-94e5469d.js"
import{r as v}from"./roundToString-a9a284a9.js"
import{i as C}from"./insertElementBefore-42a90ba9.js"
import{p as I}from"./playerName-018cf18c.js"
import{t as S}from"./toLowerCase-fa335220.js"
import"./currentGuildId-5370ff7a.js"
import"./cmdExport-7e823e95.js"
import"./indexAjaxJson-2deb257d.js"
import"./idb-874d144e.js"
import"./numberIsNaN-891c59d9.js"
function y(t){return k(n({subcmd:"ranks"},t))}const B=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function E(n,t){const r=t.children[0],e=i(r.firstChild),s=n.find((n=>n&&n.name===e))
var o
s&&c(r,`<span class="fshBlue">(${o=s.permissions,v(B.filter((([n])=>j(o,n))).reduce(((n,[,t])=>n+t-1),0)+o.toString(2).split("").map(Number).reduce(((n,t)=>n+t),0),1)}) Tax:(${s.tax}%)</span> `)}function _(n,t,r){r.s&&(n.forEach(s(E,[r.r[0]].concat(r.r.ranks))),t.classList.remove("fshSpinner"))}function L(n,r){const e=N({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
x(e,r),t(y).then(s(_,n,e))}function U(n){const t=r('#pCC a[href*="=ranks&subcmd2=add"]')
t&&function(n,t){const r=w({className:"custombutton",type:"button",value:"Get Rank Weightings"})
e(r,s(L,n,r))
const i=t.parentNode.parentNode
o(i,"&nbsp;"),a(i,r)}(n,t)}function $(n,t){return u({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}).then((()=>({s:!0})))}function A(n,t){return y({subcmd2:n,rank_id:t})}let G
function R(n,r,e){const s=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
var o,a
o=S(n.target.value),a=s[1],t(A,$,o,a)
const i=r.parentNode.rows[e]
C(r,i)
const c="Up"===n.target.value?-22:22
window.scrollBy(0,c),n.stopPropagation()}function D(n){const t=n.target.parentNode.parentNode.parentNode,r=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return G>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,r)||R(n,t,r)}function M(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&D(n)}function T(n,t){return t[0]===n}function q(n,t){const r=t.children[0],e=function(n,t){return 1===n.rowIndex?"Guild Founder":i(t)}(t,r),a=n.find(s(T,e));(function(n){return n&&n[1].length>0})(a)&&(!function(n,t){t&&t[1].includes(I())&&(G=n.rowIndex)}(t,a),o(r,` <span class="fshBlue">- ${a[1].join(", ")}</span>`))}function F(n){const t=function(){const n=f.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return l(n.rows[7].children[0].children[0].rows)}()
t&&(h([5,3,t,1,s(q,n)]),U(t),G&&d("ajaxifyRankControls")&&e(f,M,!0))}function J(n,t){const r=n.find(s(T,t[1].rank_name))
return r?r[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function P(n){return p(n).filter(g).reduce(J,[])}function W(){m()||b(!1).then(P).then(F)}export default W
//# sourceMappingURL=rank-76a78834.js.map
