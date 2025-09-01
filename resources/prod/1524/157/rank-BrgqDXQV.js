import{bL as n,$ as a,af as s,b8 as t,aA as r,o as e,p as o,s as i,r as c,aX as u,a5 as f,q as d,aR as l,aq as m,a6 as p,c as h,i as g,a2 as b,l as w,a3 as k,bx as N}from"./calfSystem-CQOGdqPv.js"
import{b as x}from"./batch-ZfzqhoeD.js"
import{b as j}from"./bitwiseAnd-C5gmj-aX.js"
import{i as v}from"./insertHtmlAfterBegin-DTotz0_m.js"
import{a as C}from"./roundToString-DBxc6kHT.js"
import{s as y}from"./sum-DdZz7_s4.js"
function B(a){return n({subcmd:"ranks",...a})}function A(n,a){return B({subcmd2:n,rank_id:a})}async function I(n,a){return await s({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:a}),{s:!0}}let R=0
const S=/rank_id=(?<rankId>\d+)/
function U(n,s,t){const r=c(S,n.target.getAttribute("onclick"))
var e
e=u(n.target.value),a(A,I,e,r)
const o=s.parentNode.rows[t]
f(s,o)
const i="Up"===n.target.value?-22:22
window.scrollBy(0,i),n.stopPropagation()}function $(n){i("ranks","overrideUpDown")
const a=n.target.parentNode.parentNode.parentNode,s=a.rowIndex+("Up"===n.target.value?-1:2);(function(n,a){return R>=Math.min(n.rowIndex,a)||a<1||a>n.parentNode.rows.length})(a,s)||U(n,a,s)}function D(n){(n=>["Up","Down"].includes(n.target.value))(n)&&$(n)}const E=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],T=(n,[,a])=>n+a-1,_=n=>C((n=>E.filter(([a])=>j(n,a)).reduce(T,0))(n)+(n=>{return(a=n,a>>>0).toString(2)
var a})(n).split("").map(Number).reduce(y,0),1)
function q(n,a){const[s]=a.children,t=w(s.firstChild),r=n.find(n=>n&&n.name===t)
r&&v(s,`<span class="fshBlue">(${_(r.permissions)}) Tax:(${r.tax??0}%)</span> `)}function G(n,a){i("ranks","fetchRankData"),n.forEach(h(q,a))}function H(n,a){const s=d('#pCC a[href*="=ranks&subcmd2=add"]')
s&&function(n,a,s){const t=l({className:"fsh-weightings",innerHTML:"[ "}),r=m({className:"fshBl fsh-bli",textContent:"Get Rank Weightings"})
p(r,"click",h(G,n,a)),g(t,r),b(t," ]")
const e=s.parentNode.parentNode
g(e,t)}(n,a,s)}function L(n,a){const s=a.children[0],r=w(s),e=n.find(n=>n.name===r)
if(e?.members.length){const n=e.members.map(n=>n.name)
!function(n,a){a.includes(t())&&(R=n.rowIndex)}(a,n),b(s,` <span class="fshBlue">- ${n.join(", ")}</span>`)}}function M(n){const a=function(){const n=o().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows
if(n)return N(n)}()
a&&(x([3,a,1,h(L,n)]),H(a,n),R&&r("ajaxifyRankControls")&&e(o(),D,!0))}async function P(){if(k())return
const n=await a(B)
n?.s&&M(n.r)}export{P as default}
//# sourceMappingURL=rank-BrgqDXQV.js.map
