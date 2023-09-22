import{g as n}from"./guild-8e58b9bf.js"
import{$ as t,E as s,ax as a,ad as r,o as e,p as o,n as i,r as c,am as u,y as f,q as d,z as m,c as l,i as p,v as g,a3 as h,w as b,aT as w}from"./calfSystem-4830a18d.js"
import{b as k}from"./batch-54067b0c.js"
import{b as N}from"./bitwiseAnd-0aa6eeb8.js"
import{c as j}from"./createButton-30c5ecee.js"
import{c as v}from"./createSpan-0da7a190.js"
import{i as x}from"./insertHtmlAfterBegin-32e03ae0.js"
import{a as y}from"./roundToString-b56b87fd.js"
import"./numberIsNaN-a40c3bbb.js"
function B(n,t){return n+t}function C(t){return n({subcmd:"ranks",...t})}function I(n,t){return C({subcmd2:n,rank_id:t})}async function S(n,t){return await s({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}),{s:!0}}let E=0
const T=n=>["Up","Down"].includes(n.target.value)
const U=/rank_id=(?<rankId>\d+)/
function $(n,s,a){const r=c(U,n.target.getAttribute("onclick"))
var e
e=u(n.target.value),t(I,S,e,r)
const o=s.parentNode.rows[a]
f(s,o)
const i="Up"===n.target.value?-22:22
window.scrollBy(0,i),n.stopPropagation()}function A(n){i("ranks","overrideUpDown")
const t=n.target.parentNode.parentNode.parentNode,s=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return E>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,s)||$(n,t,s)}function D(n){T(n)&&A(n)}const H=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],R=(n,[,t])=>n+t-1,_=n=>y((n=>H.filter((([t])=>N(n,t))).reduce(R,0))(n)+(n=>{return(t=n,t>>>0).toString(2)
var t})(n).split("").map(Number).reduce(B,0),1)
function M(n,t){const[s]=t.children,a=h(s.firstChild),r=n.find((n=>n&&n.name===a))
r&&x(s,`<span class="fshBlue">(${_(r.permissions)}) Tax:(${r.tax??0}%)</span> `)}function q(n,t){i("ranks","fetchRankData"),n.forEach(l(M,t))}function z(n,t){const s=d('#pCC a[href*="=ranks&subcmd2=add"]')
s&&function(n,t,s){const a=v({className:"fsh-weightings",innerHTML:"[ "}),r=j({className:"fshBl fsh-bli",textContent:"Get Rank Weightings"})
m(r,"click",l(q,n,t)),p(a,r),g(a," ]")
const e=s.parentNode.parentNode
p(e,a)}(n,t,s)}function F(n,t){const s=t.children[0],r=h(s),e=n.find((n=>n.name===r))
if(e?.members.length){const n=e.members.map((n=>n.name))
!function(n,t){t.includes(a())&&(E=n.rowIndex)}(t,n),g(s,` <span class="fshBlue">- ${n.join(", ")}</span>`)}}function G(n){const t=function(){const n=o().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows
if(n)return w(n)}()
t&&(k([3,t,1,l(F,n)]),z(t,n),E&&r("ajaxifyRankControls")&&e(o(),D,!0))}async function L(){if(b())return
const n=await t(C)
n?.s&&G(n.r)}export{L as default}
//# sourceMappingURL=rank-578f6015.js.map
