import{g as n}from"./guild-CuLUwg__.js"
import{$ as t,G as s,aC as a,ai as r,o as e,p as o,s as i,r as c,at as u,y as f,q as m,z as d,c as l,i as p,v as g,a8 as h,w as b,b0 as w}from"./calfSystem-CUgWHLtG.js"
import{b as k}from"./batch-DgzuJJDl.js"
import{b as j}from"./bitwiseAnd-C5gmj-aX.js"
import{c as N}from"./createButton-CMC5towu.js"
import{c as v}from"./createSpan-C6zT5DkE.js"
import{i as x}from"./insertHtmlAfterBegin-DFptfzkk.js"
import{a as C}from"./roundToString-Hif1MLyB.js"
import{s as y}from"./sum-DdZz7_s4.js"
import"./numberIsNaN-CGkd1jiA.js"
function B(t){return n({subcmd:"ranks",...t})}function I(n,t){return B({subcmd2:n,rank_id:t})}async function S(n,t){return await s({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}),{s:!0}}let D=0
const U=n=>["Up","Down"].includes(n.target.value)
const $=/rank_id=(?<rankId>\d+)/
function _(n,s,a){const r=c($,n.target.getAttribute("onclick"))
var e
e=u(n.target.value),t(I,S,e,r)
const o=s.parentNode.rows[a]
f(s,o)
const i="Up"===n.target.value?-22:22
window.scrollBy(0,i),n.stopPropagation()}function A(n){i("ranks","overrideUpDown")
const t=n.target.parentNode.parentNode.parentNode,s=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return D>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,s)||_(n,t,s)}function E(n){U(n)&&A(n)}const R=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],T=(n,[,t])=>n+t-1,G=n=>C((n=>R.filter((([t])=>j(n,t))).reduce(T,0))(n)+(n=>{return(t=n,t>>>0).toString(2)
var t})(n).split("").map(Number).reduce(y,0),1)
function H(n,t){const[s]=t.children,a=h(s.firstChild),r=n.find((n=>n&&n.name===a))
r&&x(s,`<span class="fshBlue">(${G(r.permissions)}) Tax:(${r.tax??0}%)</span> `)}function M(n,t){i("ranks","fetchRankData"),n.forEach(l(H,t))}function q(n,t){const s=m('#pCC a[href*="=ranks&subcmd2=add"]')
s&&function(n,t,s){const a=v({className:"fsh-weightings",innerHTML:"[ "}),r=N({className:"fshBl fsh-bli",textContent:"Get Rank Weightings"})
d(r,"click",l(M,n,t)),p(a,r),g(a," ]")
const e=s.parentNode.parentNode
p(e,a)}(n,t,s)}function z(n,t){const s=t.children[0],r=h(s),e=n.find((n=>n.name===r))
if(e?.members.length){const n=e.members.map((n=>n.name))
!function(n,t){t.includes(a())&&(D=n.rowIndex)}(t,n),g(s,` <span class="fshBlue">- ${n.join(", ")}</span>`)}}function F(n){const t=function(){const n=o().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows
if(n)return w(n)}()
t&&(k([3,t,1,l(z,n)]),q(t,n),D&&r("ajaxifyRankControls")&&e(o(),E,!0))}async function L(){if(b())return
const n=await t(B)
n?.s&&F(n.r)}export{L as default}
//# sourceMappingURL=rank-kueZjr-4.js.map
