import{bI as n,$ as s,ae as a,b6 as t,az as r,o as e,p as o,s as i,r as c,aV as u,a4 as f,q as d,aP as l,ap as m,a5 as p,c as h,i as b,a1 as g,l as w,a2 as k,bu as N}from"./calfSystem-CT1aM4VG.js"
import{b as j}from"./batch-CVoa0La2.js"
import{b as v}from"./bitwiseAnd-C5gmj-aX.js"
import{i as x}from"./insertHtmlAfterBegin-DfEq9-0f.js"
import{a as C}from"./roundToString-y0z7QatG.js"
import{s as y}from"./sum-DdZz7_s4.js"
function B(s){return n({subcmd:"ranks",...s})}function I(n,s){return B({subcmd2:n,rank_id:s})}async function S(n,s){return await a({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:s}),{s:!0}}let U=0
const $=n=>["Up","Down"].includes(n.target.value)
const A=/rank_id=(?<rankId>\d+)/
function D(n,a,t){const r=c(A,n.target.getAttribute("onclick"))
var e
e=u(n.target.value),s(I,S,e,r)
const o=a.parentNode.rows[t]
f(a,o)
const i="Up"===n.target.value?-22:22
window.scrollBy(0,i),n.stopPropagation()}function E(n){i("ranks","overrideUpDown")
const s=n.target.parentNode.parentNode.parentNode,a=s.rowIndex+("Up"===n.target.value?-1:2);(function(n,s){return U>=Math.min(n.rowIndex,s)||s<1||s>n.parentNode.rows.length})(s,a)||D(n,s,a)}function P(n){$(n)&&E(n)}const R=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],T=(n,[,s])=>n+s-1,_=n=>C((n=>R.filter((([s])=>v(n,s))).reduce(T,0))(n)+(n=>{return(s=n,s>>>0).toString(2)
var s})(n).split("").map(Number).reduce(y,0),1)
function G(n,s){const[a]=s.children,t=w(a.firstChild),r=n.find((n=>n&&n.name===t))
r&&x(a,`<span class="fshBlue">(${_(r.permissions)}) Tax:(${r.tax??0}%)</span> `)}function H(n,s){i("ranks","fetchRankData"),n.forEach(h(G,s))}function M(n,s){const a=d('#pCC a[href*="=ranks&subcmd2=add"]')
a&&function(n,s,a){const t=l({className:"fsh-weightings",innerHTML:"[ "}),r=m({className:"fshBl fsh-bli",textContent:"Get Rank Weightings"})
p(r,"click",h(H,n,s)),b(t,r),g(t," ]")
const e=a.parentNode.parentNode
b(e,t)}(n,s,a)}function q(n,s){const a=s.children[0],r=w(a),e=n.find((n=>n.name===r))
if(e?.members.length){const n=e.members.map((n=>n.name))
!function(n,s){s.includes(t())&&(U=n.rowIndex)}(s,n),g(a,` <span class="fshBlue">- ${n.join(", ")}</span>`)}}function z(n){const s=function(){const n=o().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows
if(n)return N(n)}()
s&&(j([3,s,1,h(q,n)]),M(s,n),U&&r("ajaxifyRankControls")&&e(o(),P,!0))}async function L(){if(k())return
const n=await s(B)
n?.s&&z(n.r)}export{L as default}
//# sourceMappingURL=rank-hQz6MEPX.js.map
