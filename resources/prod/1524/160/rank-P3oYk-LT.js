import{bM as n,$ as a,af as s,b8 as t,aA as r,o as e,p as o,s as i,r as c,aX as u,a6 as f,q as d,aR as l,aq as m,a7 as p,c as g,i as h,a3 as b,m as k,a4 as w,by as N}from"./calfSystem-HVCiy-VV.js"
import{b as j}from"./batch-DqKzBoJR.js"
import{b as v}from"./bitwiseAnd-C5gmj-aX.js"
import{i as x}from"./insertHtmlAfterBegin-LoU4yv4O.js"
import{a as y}from"./roundToString-BFNdgMs_.js"
import{s as C}from"./sum-DdZz7_s4.js"
function B(a){return n({subcmd:"ranks",...a})}function I(n,a){return B({subcmd2:n,rank_id:a})}async function S(n,a){return await s({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:a}),{s:!0}}let A=0
const R=/rank_id=(?<rankId>\d+)/
function U(n,s,t){const r=c(R,n.target.getAttribute("onclick"))
var e
e=u(n.target.value),a(I,S,e,r)
const o=s.parentNode.rows[t]
f(s,o)
const i="Up"===n.target.value?-22:22
window.scrollBy(0,i),n.stopPropagation()}function $(n){i("ranks","overrideUpDown")
const a=n.target.parentNode.parentNode.parentNode,s=a.rowIndex+("Up"===n.target.value?-1:2);(function(n,a){return A>=Math.min(n.rowIndex,a)||a<1||a>n.parentNode.rows.length})(a,s)||U(n,a,s)}function D(n){(n=>["Up","Down"].includes(n.target.value))(n)&&$(n)}const E=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],M=(n,[,a])=>n+a-1,T=n=>y((n=>E.filter(([a])=>v(n,a)).reduce(M,0))(n)+(n=>{return(a=n,a>>>0).toString(2)
var a})(n).split("").map(Number).reduce(C,0),1)
function _(n,a){const[s]=a.children,t=k(s.firstChild),r=n.find(n=>n&&n.name===t)
r&&x(s,`<span class="fshBlue">(${T(r.permissions)}) Tax:(${r.tax??0}%)</span> `)}function q(n,a){i("ranks","fetchRankData"),n.forEach(g(_,a))}function H(n,a){const s=d('#pCC a[href*="=ranks&subcmd2=add"]')
s&&function(n,a,s){const t=l({className:"fsh-weightings",innerHTML:"[ "}),r=m({className:"fshBl fsh-bli",textContent:"Get Rank Weightings"})
p(r,"click",g(q,n,a)),h(t,r),b(t," ]")
const e=s.parentNode.parentNode
h(e,t)}(n,a,s)}function G(n,a){const s=a.children[0],r=k(s),e=n.find(n=>n.name===r)
if(e?.members.length){const n=e.members.map(n=>n.name)
!function(n,a){a.includes(t())&&(A=n.rowIndex)}(a,n),b(s,` <span class="fshBlue">- ${n.join(", ")}</span>`)}}function L(n){const a=function(){const n=o().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows
if(n)return N(n)}()
a&&(j([3,a,1,g(G,n)]),H(a,n),A&&r("ajaxifyRankControls")&&e(o(),D,!0))}async function P(){if(w())return
const n=await a(B)
n?.s&&L(n.r)}export{P as default}
//# sourceMappingURL=rank-P3oYk-LT.js.map
