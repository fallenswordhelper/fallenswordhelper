import{bz as n,$ as s,M as a,aY as t,ao as r,o as e,p as o,s as i,r as c,aL as u,C as d,q as f,aF as l,a9 as m,D as p,e as h,i as g,z as b,aa as k,A as w,bk as N}from"./calfSystem-BGW9cdWN.js"
import{b as j}from"./batch-CqnDRKjm.js"
import{b as v}from"./bitwiseAnd-C5gmj-aX.js"
import{i as x}from"./insertHtmlAfterBegin-DtSVBFQz.js"
import{a as C}from"./roundToString-C0GNTaDU.js"
import{s as y}from"./sum-DdZz7_s4.js"
function B(s){return n({subcmd:"ranks",...s})}function I(n,s){return B({subcmd2:n,rank_id:s})}async function A(n,s){return await a({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:s}),{s:!0}}let D=0
const S=n=>["Up","Down"].includes(n.target.value)
const U=/rank_id=(?<rankId>\d+)/
function $(n,a,t){const r=c(U,n.target.getAttribute("onclick"))
var e
e=u(n.target.value),s(I,A,e,r)
const o=a.parentNode.rows[t]
d(a,o)
const i="Up"===n.target.value?-22:22
window.scrollBy(0,i),n.stopPropagation()}function z(n){i("ranks","overrideUpDown")
const s=n.target.parentNode.parentNode.parentNode,a=s.rowIndex+("Up"===n.target.value?-1:2);(function(n,s){return D>=Math.min(n.rowIndex,s)||s<1||s>n.parentNode.rows.length})(s,a)||$(n,s,a)}function E(n){S(n)&&z(n)}const M=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],R=(n,[,s])=>n+s-1,T=n=>C((n=>M.filter((([s])=>v(n,s))).reduce(R,0))(n)+(n=>{return(s=n,s>>>0).toString(2)
var s})(n).split("").map(Number).reduce(y,0),1)
function _(n,s){const[a]=s.children,t=k(a.firstChild),r=n.find((n=>n&&n.name===t))
r&&x(a,`<span class="fshBlue">(${T(r.permissions)}) Tax:(${r.tax??0}%)</span> `)}function H(n,s){i("ranks","fetchRankData"),n.forEach(h(_,s))}function L(n,s){const a=f('#pCC a[href*="=ranks&subcmd2=add"]')
a&&function(n,s,a){const t=l({className:"fsh-weightings",innerHTML:"[ "}),r=m({className:"fshBl fsh-bli",textContent:"Get Rank Weightings"})
p(r,"click",h(H,n,s)),g(t,r),b(t," ]")
const e=a.parentNode.parentNode
g(e,t)}(n,s,a)}function W(n,s){const a=s.children[0],r=k(a),e=n.find((n=>n.name===r))
if(e?.members.length){const n=e.members.map((n=>n.name))
!function(n,s){s.includes(t())&&(D=n.rowIndex)}(s,n),b(a,` <span class="fshBlue">- ${n.join(", ")}</span>`)}}function q(n){const s=function(){const n=o().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows
if(n)return N(n)}()
s&&(j([3,s,1,h(W,n)]),L(s,n),D&&r("ajaxifyRankControls")&&e(o(),E,!0))}async function F(){if(w())return
const n=await s(B)
n?.s&&q(n.r)}export{F as default}
//# sourceMappingURL=rank-DVbVJDxn.js.map
