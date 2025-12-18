import{bJ as n,$ as a,af as s,b8 as t,aA as r,o as e,p as o,s as i,r as c,aX as u,a6 as f,q as d,aR as m,aq as l,a7 as p,c as h,i as g,a3 as b,m as w,a4 as k,bz as N}from"./calfSystem-Cs6CSxoU.js"
import{b as j}from"./batch-BtMyX_wP.js"
import{b as v}from"./bitwiseAnd-C5gmj-aX.js"
import{i as x}from"./insertHtmlAfterBegin-D5kb2h-H.js"
import{a as C}from"./roundToString-D6ZndNDA.js"
import{s as y}from"./sum-DdZz7_s4.js"
function B(a){return n({subcmd:"ranks",...a})}function U(n,a){return B({subcmd2:n,rank_id:a})}async function A(n,a){return await s({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:a}),{s:!0}}let I=0
const R=/rank_id=(?<rankId>\d+)/
function S(n,s,t){const r=c(R,n.target.getAttribute("onclick"))
var e
e=u(n.target.value),a(U,A,e,r)
const o=s.parentNode.rows[t]
f(s,o)
const i="Up"===n.target.value?-22:22
window.scrollBy(0,i),n.stopPropagation()}function $(n){i("ranks","overrideUpDown")
const a=n.target.parentNode.parentNode.parentNode,s=a.rowIndex+("Up"===n.target.value?-1:2);(function(n,a){return I>=Math.min(n.rowIndex,a)||a<1||a>n.parentNode.rows.length})(a,s)||S(n,a,s)}function D(n){(n=>["Up","Down"].includes(n.target.value))(n)&&$(n)}const E=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],T=(n,[,a])=>n+a-1,_=n=>C((n=>E.filter(([a])=>v(n,a)).reduce(T,0))(n)+(n=>{return(a=n,a>>>0).toString(2)
var a})(n).split("").map(Number).reduce(y,0),1)
function q(n,a){const[s]=a.children,t=w(s.firstChild),r=n.find(n=>n&&n.name===t)
r&&x(s,`<span class="fshBlue">(${_(r.permissions)}) Tax:(${r.tax??0}%)</span> `)}function H(n,a){i("ranks","fetchRankData"),n.forEach(h(q,a))}function J(n,a){const s=d('#pCC a[href*="=ranks&subcmd2=add"]')
s&&function(n,a,s){const t=m({className:"fsh-weightings",innerHTML:"[ "}),r=l({className:"fshBl fsh-bli",textContent:"Get Rank Weightings"})
p(r,"click",h(H,n,a)),g(t,r),b(t," ]")
const e=s.parentNode.parentNode
g(e,t)}(n,a,s)}function M(n,a){const s=a.children[0],r=w(s),e=n.find(n=>n.name===r)
if(e?.members.length){const n=e.members.map(n=>n.name)
!function(n,a){a.includes(t())&&(I=n.rowIndex)}(a,n),b(s,` <span class="fshBlue">- ${n.join(", ")}</span>`)}}function z(n){const a=function(){const n=o().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows
if(n)return N(n)}()
a&&(j([3,a,1,h(M,n)]),J(a,n),I&&r("ajaxifyRankControls")&&e(o(),D,!0))}async function G(){if(k())return
const n=await a(B)
n?.s&&z(n.r)}export{G as default}
//# sourceMappingURL=rank-B8sw90PP.js.map
