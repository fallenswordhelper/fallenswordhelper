import{g as n}from"./guild-014ef050.js"
import{$ as t,G as s,aA as a,af as r,o as e,p as o,n as i,r as c,ao as u,y as f,q as d,z as m,c as l,i as p,v as g,a5 as h,w as b,aW as w}from"./calfSystem-34913441.js"
import{b as k}from"./batch-868086f2.js"
import{b as N}from"./bitwiseAnd-0aa6eeb8.js"
import{c as j}from"./createButton-ae13c659.js"
import{c as v}from"./createSpan-d7c936c3.js"
import{i as x}from"./insertHtmlAfterBegin-0b693b95.js"
import{a as y}from"./roundToString-b56b87fd.js"
import"./numberIsNaN-a40c3bbb.js"
function B(n,t){return n+t}function C(t){return n({subcmd:"ranks",...t})}function I(n,t){return C({subcmd2:n,rank_id:t})}async function S(n,t){return await s({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}),{s:!0}}let $=0
const A=n=>["Up","Down"].includes(n.target.value)
const U=/rank_id=(?<rankId>\d+)/
function D(n,s,a){const r=c(U,n.target.getAttribute("onclick"))
var e
e=u(n.target.value),t(I,S,e,r)
const o=s.parentNode.rows[a]
f(s,o)
const i="Up"===n.target.value?-22:22
window.scrollBy(0,i),n.stopPropagation()}function E(n){i("ranks","overrideUpDown")
const t=n.target.parentNode.parentNode.parentNode,s=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return $>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,s)||D(n,t,s)}function H(n){A(n)&&E(n)}const R=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],T=(n,[,t])=>n+t-1,_=n=>y((n=>R.filter((([t])=>N(n,t))).reduce(T,0))(n)+(n=>{return(t=n,t>>>0).toString(2)
var t})(n).split("").map(Number).reduce(B,0),1)
function q(n,t){const[s]=t.children,a=h(s.firstChild),r=n.find((n=>n&&n.name===a))
r&&x(s,`<span class="fshBlue">(${_(r.permissions)}) Tax:(${r.tax??0}%)</span> `)}function G(n,t){i("ranks","fetchRankData"),n.forEach(l(q,t))}function M(n,t){const s=d('#pCC a[href*="=ranks&subcmd2=add"]')
s&&function(n,t,s){const a=v({className:"fsh-weightings",innerHTML:"[ "}),r=j({className:"fshBl fsh-bli",textContent:"Get Rank Weightings"})
m(r,"click",l(G,n,t)),p(a,r),g(a," ]")
const e=s.parentNode.parentNode
p(e,a)}(n,t,s)}function W(n,t){const s=t.children[0],r=h(s),e=n.find((n=>n.name===r))
if(e?.members.length){const n=e.members.map((n=>n.name))
!function(n,t){t.includes(a())&&($=n.rowIndex)}(t,n),g(s,` <span class="fshBlue">- ${n.join(", ")}</span>`)}}function z(n){const t=function(){const n=o().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows
if(n)return w(n)}()
t&&(k([3,t,1,l(W,n)]),M(t,n),$&&r("ajaxifyRankControls")&&e(o(),H,!0))}async function F(){if(b())return
const n=await t(C)
n?.s&&z(n.r)}export{F as default}
//# sourceMappingURL=rank-6f1fb8f2.js.map
