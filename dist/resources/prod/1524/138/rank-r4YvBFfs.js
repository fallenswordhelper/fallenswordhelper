import{g as n}from"./guild-Bf0z__MQ.js"
import{$ as t,G as s,aC as a,ai as r,o as e,p as o,s as i,r as c,at as u,y as m,q as f,z as d,c as l,i as p,v as g,a8 as h,w as b,b0 as w}from"./calfSystem-BjarbvkO.js"
import{b as k}from"./batch-DNAt5oaQ.js"
import{b as j}from"./bitwiseAnd-C5gmj-aX.js"
import{c as N}from"./createButton-Bc7XEkpF.js"
import{c as v}from"./createSpan-BDkIr1HN.js"
import{i as x}from"./insertHtmlAfterBegin-Db2hAYHY.js"
import{a as C}from"./roundToString-Hif1MLyB.js"
import{s as y}from"./sum-DdZz7_s4.js"
import"./numberIsNaN-CGkd1jiA.js"
function B(t){return n({subcmd:"ranks",...t})}function S(n,t){return B({subcmd2:n,rank_id:t})}async function I(n,t){return await s({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:t}),{s:!0}}let $=0
const A=n=>["Up","Down"].includes(n.target.value)
const U=/rank_id=(?<rankId>\d+)/
function D(n,s,a){const r=c(U,n.target.getAttribute("onclick"))
var e
e=u(n.target.value),t(S,I,e,r)
const o=s.parentNode.rows[a]
m(s,o)
const i="Up"===n.target.value?-22:22
window.scrollBy(0,i),n.stopPropagation()}function E(n){i("ranks","overrideUpDown")
const t=n.target.parentNode.parentNode.parentNode,s=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return $>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,s)||D(n,t,s)}function R(n){A(n)&&E(n)}const T=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],_=(n,[,t])=>n+t-1,G=n=>C((n=>T.filter((([t])=>j(n,t))).reduce(_,0))(n)+(n=>{return(t=n,t>>>0).toString(2)
var t})(n).split("").map(Number).reduce(y,0),1)
function H(n,t){const[s]=t.children,a=h(s.firstChild),r=n.find((n=>n&&n.name===a))
r&&x(s,`<span class="fshBlue">(${G(r.permissions)}) Tax:(${r.tax??0}%)</span> `)}function M(n,t){i("ranks","fetchRankData"),n.forEach(l(H,t))}function q(n,t){const s=f('#pCC a[href*="=ranks&subcmd2=add"]')
s&&function(n,t,s){const a=v({className:"fsh-weightings",innerHTML:"[ "}),r=N({className:"fshBl fsh-bli",textContent:"Get Rank Weightings"})
d(r,"click",l(M,n,t)),p(a,r),g(a," ]")
const e=s.parentNode.parentNode
p(e,a)}(n,t,s)}function z(n,t){const s=t.children[0],r=h(s),e=n.find((n=>n.name===r))
if(e?.members.length){const n=e.members.map((n=>n.name))
!function(n,t){t.includes(a())&&($=n.rowIndex)}(t,n),g(s,` <span class="fshBlue">- ${n.join(", ")}</span>`)}}function L(n){const t=function(){const n=o().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows
if(n)return w(n)}()
t&&(k([3,t,1,l(z,n)]),q(t,n),$&&r("ajaxifyRankControls")&&e(o(),R,!0))}async function P(){if(b())return
const n=await t(B)
n?.s&&L(n.r)}export{P as default}
//# sourceMappingURL=rank-r4YvBFfs.js.map
