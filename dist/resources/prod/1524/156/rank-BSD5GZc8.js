import{bJ as n,$ as a,af as s,b7 as t,aA as r,o as e,p as o,s as i,r as c,aW as u,a5 as d,q as f,aQ as l,aq as m,a6 as p,c as h,i as g,a2 as b,l as w,a3 as k,bv as N}from"./calfSystem-79LsojAC.js"
import{b as v}from"./batch-BGPP456i.js"
import{b as j}from"./bitwiseAnd-C5gmj-aX.js"
import{i as x}from"./insertHtmlAfterBegin-BEWmbMGu.js"
import{a as C}from"./roundToString-CYi3Bm0q.js"
import{s as y}from"./sum-DdZz7_s4.js"
function B(a){return n({subcmd:"ranks",...a})}function A(n,a){return B({subcmd2:n,rank_id:a})}async function D(n,a){return await s({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:a}),{s:!0}}let I=0
const S=/rank_id=(?<rankId>\d+)/
function U(n,s,t){const r=c(S,n.target.getAttribute("onclick"))
var e
e=u(n.target.value),a(A,D,e,r)
const o=s.parentNode.rows[t]
d(s,o)
const i="Up"===n.target.value?-22:22
window.scrollBy(0,i),n.stopPropagation()}function $(n){i("ranks","overrideUpDown")
const a=n.target.parentNode.parentNode.parentNode,s=a.rowIndex+("Up"===n.target.value?-1:2);(function(n,a){return I>=Math.min(n.rowIndex,a)||a<1||a>n.parentNode.rows.length})(a,s)||U(n,a,s)}function _(n){(n=>["Up","Down"].includes(n.target.value))(n)&&$(n)}const E=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],M=(n,[,a])=>n+a-1,R=n=>C((n=>E.filter(([a])=>j(n,a)).reduce(M,0))(n)+(n=>{return(a=n,a>>>0).toString(2)
var a})(n).split("").map(Number).reduce(y,0),1)
function T(n,a){const[s]=a.children,t=w(s.firstChild),r=n.find(n=>n&&n.name===t)
r&&x(s,`<span class="fshBlue">(${R(r.permissions)}) Tax:(${r.tax??0}%)</span> `)}function q(n,a){i("ranks","fetchRankData"),n.forEach(h(T,a))}function H(n,a){const s=f('#pCC a[href*="=ranks&subcmd2=add"]')
s&&function(n,a,s){const t=l({className:"fsh-weightings",innerHTML:"[ "}),r=m({className:"fshBl fsh-bli",textContent:"Get Rank Weightings"})
p(r,"click",h(q,n,a)),g(t,r),b(t," ]")
const e=s.parentNode.parentNode
g(e,t)}(n,a,s)}function W(n,a){const s=a.children[0],r=w(s),e=n.find(n=>n.name===r)
if(e?.members.length){const n=e.members.map(n=>n.name)
!function(n,a){a.includes(t())&&(I=n.rowIndex)}(a,n),b(s,` <span class="fshBlue">- ${n.join(", ")}</span>`)}}function G(n){const a=function(){const n=o().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows
if(n)return N(n)}()
a&&(v([3,a,1,h(W,n)]),H(a,n),I&&r("ajaxifyRankControls")&&e(o(),_,!0))}async function J(){if(k())return
const n=await a(B)
n?.s&&G(n.r)}export{J as default}
//# sourceMappingURL=rank-BSD5GZc8.js.map
