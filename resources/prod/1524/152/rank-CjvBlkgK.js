import{bH as n,$ as s,ag as t,b5 as a,aB as r,o as e,p as o,s as i,r as c,aT as u,a6 as d,q as f,b2 as l,ar as m,a7 as p,c as g,i as h,a3 as b,n as w,a4 as k,bt as N}from"./calfSystem-BlPuMQGT.js"
import{b as j}from"./batch-g9WD9nW_.js"
import{b as v}from"./bitwiseAnd-C5gmj-aX.js"
import{i as x}from"./insertHtmlAfterBegin-CRP0nRuH.js"
import{a as B}from"./roundToString-BBUMTgNH.js"
import{s as C}from"./sum-DdZz7_s4.js"
function y(s){return n({subcmd:"ranks",...s})}function I(n,s){return y({subcmd2:n,rank_id:s})}async function S(n,s){return await t({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:s}),{s:!0}}let T=0
const U=n=>["Up","Down"].includes(n.target.value)
const $=/rank_id=(?<rankId>\d+)/
function A(n,t,a){const r=c($,n.target.getAttribute("onclick"))
var e
e=u(n.target.value),s(I,S,e,r)
const o=t.parentNode.rows[a]
d(t,o)
const i="Up"===n.target.value?-22:22
window.scrollBy(0,i),n.stopPropagation()}function D(n){i("ranks","overrideUpDown")
const s=n.target.parentNode.parentNode.parentNode,t=s.rowIndex+("Up"===n.target.value?-1:2);(function(n,s){return T>=Math.min(n.rowIndex,s)||s<1||s>n.parentNode.rows.length})(s,t)||A(n,s,t)}function E(n){U(n)&&D(n)}const H=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],R=(n,[,s])=>n+s-1,_=n=>B((n=>H.filter((([s])=>v(n,s))).reduce(R,0))(n)+(n=>{return(s=n,s>>>0).toString(2)
var s})(n).split("").map(Number).reduce(C,0),1)
function M(n,s){const[t]=s.children,a=w(t.firstChild),r=n.find((n=>n&&n.name===a))
r&&x(t,`<span class="fshBlue">(${_(r.permissions)}) Tax:(${r.tax??0}%)</span> `)}function q(n,s){i("ranks","fetchRankData"),n.forEach(g(M,s))}function F(n,s){const t=f('#pCC a[href*="=ranks&subcmd2=add"]')
t&&function(n,s,t){const a=l({className:"fsh-weightings",innerHTML:"[ "}),r=m({className:"fshBl fsh-bli",textContent:"Get Rank Weightings"})
p(r,"click",g(q,n,s)),h(a,r),b(a," ]")
const e=t.parentNode.parentNode
h(e,a)}(n,s,t)}function G(n,s){const t=s.children[0],r=w(t),e=n.find((n=>n.name===r))
if(e?.members.length){const n=e.members.map((n=>n.name))
!function(n,s){s.includes(a())&&(T=n.rowIndex)}(s,n),b(t,` <span class="fshBlue">- ${n.join(", ")}</span>`)}}function L(n){const s=function(){const n=o().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows
if(n)return N(n)}()
s&&(j([3,s,1,g(G,n)]),F(s,n),T&&r("ajaxifyRankControls")&&e(o(),E,!0))}async function O(){if(k())return
const n=await s(y)
n?.s&&L(n.r)}export{O as default}
//# sourceMappingURL=rank-CjvBlkgK.js.map
