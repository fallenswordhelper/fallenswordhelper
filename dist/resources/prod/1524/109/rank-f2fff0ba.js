import{g as n}from"./guild-07edae00.js"
import{$ as t,G as s,aA as a,af as r,o as e,p as o,n as i,r as c,ao as u,y as f,q as d,z as m,c as l,i as p,v as g,a5 as h,w as b,aW as w}from"./calfSystem-2f15e074.js"
import{b as k}from"./batch-70cc157a.js"
import{b as N}from"./bitwiseAnd-0aa6eeb8.js"
import{c as j}from"./createButton-afda5474.js"
import{c as v}from"./createSpan-14f0ab30.js"
import{i as x}from"./insertHtmlAfterBegin-3d3b4702.js"
import{a as y}from"./roundToString-b56b87fd.js"
import"./numberIsNaN-a40c3bbb.js"
function B(n,t){return n+t}function C(t){return n({subcmd:"ranks",...t})}function I(n,t){return C({subcmd2:n,rank_id:t})}async function S(n,t){return await s({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}),{s:!0}}let A=0
const U=n=>["Up","Down"].includes(n.target.value)
const $=/rank_id=(?<rankId>\d+)/
function D(n,s,a){const r=c($,n.target.getAttribute("onclick"))
var e
e=u(n.target.value),t(I,S,e,r)
const o=s.parentNode.rows[a]
f(s,o)
const i="Up"===n.target.value?-22:22
window.scrollBy(0,i),n.stopPropagation()}function E(n){i("ranks","overrideUpDown")
const t=n.target.parentNode.parentNode.parentNode,s=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return A>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,s)||D(n,t,s)}function G(n){U(n)&&E(n)}const R=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],T=(n,[,t])=>n+t-1,_=n=>y((n=>R.filter((([t])=>N(n,t))).reduce(T,0))(n)+(n=>{return(t=n,t>>>0).toString(2)
var t})(n).split("").map(Number).reduce(B,0),1)
function H(n,t){const[s]=t.children,a=h(s.firstChild),r=n.find((n=>n&&n.name===a))
r&&x(s,`<span class="fshBlue">(${_(r.permissions)}) Tax:(${r.tax??0}%)</span> `)}function M(n,t){i("ranks","fetchRankData"),n.forEach(l(H,t))}function W(n,t){const s=d('#pCC a[href*="=ranks&subcmd2=add"]')
s&&function(n,t,s){const a=v({className:"fsh-weightings",innerHTML:"[ "}),r=j({className:"fshBl fsh-bli",textContent:"Get Rank Weightings"})
m(r,"click",l(M,n,t)),p(a,r),g(a," ]")
const e=s.parentNode.parentNode
p(e,a)}(n,t,s)}function q(n,t){const s=t.children[0],r=h(s),e=n.find((n=>n.name===r))
if(e?.members.length){const n=e.members.map((n=>n.name))
!function(n,t){t.includes(a())&&(A=n.rowIndex)}(t,n),g(s,` <span class="fshBlue">- ${n.join(", ")}</span>`)}}function z(n){const t=function(){const n=o().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows
if(n)return w(n)}()
t&&(k([3,t,1,l(q,n)]),W(t,n),A&&r("ajaxifyRankControls")&&e(o(),G,!0))}async function L(){if(b())return
const n=await t(C)
n?.s&&z(n.r)}export{L as default}
//# sourceMappingURL=rank-f2fff0ba.js.map
