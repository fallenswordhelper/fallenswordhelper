import{q as n,$ as t,D as r,o as s,t as e,i as o,h as a,C as i,aa as c,u,I as f,p as d,y as m,e as p,ap as l}from"./calfSystem-f7cf24f6.js"
import{b as h}from"./batch-a8223d61.js"
import{g as b}from"./getMembrList-5ed7c7b2.js"
import{n as g}from"./notLastUpdate-1f197514.js"
import{b as j}from"./bitwiseAnd-9ac724a1.js"
import{c as w}from"./createInput-8f2d1a63.js"
import{c as k}from"./createSpan-0636b0fd.js"
import{g as x}from"./guild-587e1e6d.js"
import{r as N}from"./replaceChild-e2c92fef.js"
import{r as v}from"./roundToString-8b06d154.js"
import{s as C}from"./sum-17ba0b43.js"
import{i as I}from"./insertElementBefore-7c440c87.js"
import{p as S}from"./playerName-c3c6c732.js"
import{t as y}from"./toLowerCase-c964d32b.js"
import"./currentGuildId-d5258e6c.js"
import"./cmdExport-a23d53af.js"
import"./indexAjaxJson-57024e17.js"
import"./idb-62b65e66.js"
import"./numberIsNaN-11f99b26.js"
function B(t){return x(n({subcmd:"ranks"},t))}const E=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function _(n,t){const r=t.children[0],s=i(r.firstChild),e=n.find((n=>n&&n.name===s))
var o
e&&c(r,`<span class="fshBlue">(${o=e.permissions,v(E.filter((([n])=>j(o,n))).reduce(((n,[,t])=>n+t-1),0)+o.toString(2).split("").map(Number).reduce(C,0),1)}) Tax:(${e.tax}%)</span> `)}function L(n,t,r){r.s&&(n.forEach(e(_,[r.r[0]].concat(r.r.ranks))),t.classList.remove("fshSpinner"))}function U(n,r){const s=k({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
N(s,r),t(B).then(e(L,n,s))}function $(n){const t=r('#pCC a[href*="=ranks&subcmd2=add"]')
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
//# sourceMappingURL=rank-83170a0d.js.map
