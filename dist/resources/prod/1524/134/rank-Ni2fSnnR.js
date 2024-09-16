import{g as n}from"./guild-DQ2t4FWm.js"
import{$ as t,G as s,aD as a,ai as r,o as e,p as o,s as i,r as c,at as u,y as f,q as m,z as d,c as l,i as p,v as g,a8 as h,w as b,b0 as w}from"./calfSystem-CyLCrHqa.js"
import{b as k}from"./batch-jdMtKUfP.js"
import{b as j}from"./bitwiseAnd-C5gmj-aX.js"
import{c as N}from"./createButton-CJVDkk6b.js"
import{c as v}from"./createSpan-BwBXwdpR.js"
import{i as x}from"./insertHtmlAfterBegin-BLgGdU9i.js"
import{a as y}from"./roundToString-Hif1MLyB.js"
import{s as B}from"./sum-DdZz7_s4.js"
import"./numberIsNaN-CGkd1jiA.js"
function C(t){return n({subcmd:"ranks",...t})}function D(n,t){return C({subcmd2:n,rank_id:t})}async function I(n,t){return await s({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}),{s:!0}}let S=0
const U=n=>["Up","Down"].includes(n.target.value)
const $=/rank_id=(?<rankId>\d+)/
function _(n,s,a){const r=c($,n.target.getAttribute("onclick"))
var e
e=u(n.target.value),t(D,I,e,r)
const o=s.parentNode.rows[a]
f(s,o)
const i="Up"===n.target.value?-22:22
window.scrollBy(0,i),n.stopPropagation()}function A(n){i("ranks","overrideUpDown")
const t=n.target.parentNode.parentNode.parentNode,s=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return S>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,s)||_(n,t,s)}function E(n){U(n)&&A(n)}const R=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],T=(n,[,t])=>n+t-1,G=n=>y((n=>R.filter((([t])=>j(n,t))).reduce(T,0))(n)+(n=>{return(t=n,t>>>0).toString(2)
var t})(n).split("").map(Number).reduce(B,0),1)
function H(n,t){const[s]=t.children,a=h(s.firstChild),r=n.find((n=>n&&n.name===a))
r&&x(s,`<span class="fshBlue">(${G(r.permissions)}) Tax:(${r.tax??0}%)</span> `)}function M(n,t){i("ranks","fetchRankData"),n.forEach(l(H,t))}function q(n,t){const s=m('#pCC a[href*="=ranks&subcmd2=add"]')
s&&function(n,t,s){const a=v({className:"fsh-weightings",innerHTML:"[ "}),r=N({className:"fshBl fsh-bli",textContent:"Get Rank Weightings"})
d(r,"click",l(M,n,t)),p(a,r),g(a," ]")
const e=s.parentNode.parentNode
p(e,a)}(n,t,s)}function z(n,t){const s=t.children[0],r=h(s),e=n.find((n=>n.name===r))
if(e?.members.length){const n=e.members.map((n=>n.name))
!function(n,t){t.includes(a())&&(S=n.rowIndex)}(t,n),g(s,` <span class="fshBlue">- ${n.join(", ")}</span>`)}}function F(n){const t=function(){const n=o().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows
if(n)return w(n)}()
t&&(k([3,t,1,l(z,n)]),q(t,n),S&&r("ajaxifyRankControls")&&e(o(),E,!0))}async function L(){if(b())return
const n=await t(C)
n?.s&&F(n.r)}export{L as default}
//# sourceMappingURL=rank-Ni2fSnnR.js.map
