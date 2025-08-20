import{bI as n,$ as a,ae as s,b6 as t,az as r,o as e,p as o,s as i,r as c,aV as u,a4 as d,q as f,aP as l,ap as m,a5 as p,c as h,i as g,a1 as b,l as w,a2 as k,bu as N}from"./calfSystem-KFszEm2S.js"
import{b as j}from"./batch-CLh2C2gx.js"
import{b as v}from"./bitwiseAnd-C5gmj-aX.js"
import{i as x}from"./insertHtmlAfterBegin-CPPceD69.js"
import{a as C}from"./roundToString-Cj5ctVgR.js"
import{s as y}from"./sum-DdZz7_s4.js"
function B(a){return n({subcmd:"ranks",...a})}function I(n,a){return B({subcmd2:n,rank_id:a})}async function S(n,a){return await s({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:a}),{s:!0}}let U=0
const $=/rank_id=(?<rankId>\d+)/
function A(n,s,t){const r=c($,n.target.getAttribute("onclick"))
var e
e=u(n.target.value),a(I,S,e,r)
const o=s.parentNode.rows[t]
d(s,o)
const i="Up"===n.target.value?-22:22
window.scrollBy(0,i),n.stopPropagation()}function D(n){i("ranks","overrideUpDown")
const a=n.target.parentNode.parentNode.parentNode,s=a.rowIndex+("Up"===n.target.value?-1:2);(function(n,a){return U>=Math.min(n.rowIndex,a)||a<1||a>n.parentNode.rows.length})(a,s)||A(n,a,s)}function E(n){(n=>["Up","Down"].includes(n.target.value))(n)&&D(n)}const H=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],R=(n,[,a])=>n+a-1,T=n=>C((n=>H.filter(([a])=>v(n,a)).reduce(R,0))(n)+(n=>{return(a=n,a>>>0).toString(2)
var a})(n).split("").map(Number).reduce(y,0),1)
function _(n,a){const[s]=a.children,t=w(s.firstChild),r=n.find(n=>n&&n.name===t)
r&&x(s,`<span class="fshBlue">(${T(r.permissions)}) Tax:(${r.tax??0}%)</span> `)}function M(n,a){i("ranks","fetchRankData"),n.forEach(h(_,a))}function P(n,a){const s=f('#pCC a[href*="=ranks&subcmd2=add"]')
s&&function(n,a,s){const t=l({className:"fsh-weightings",innerHTML:"[ "}),r=m({className:"fshBl fsh-bli",textContent:"Get Rank Weightings"})
p(r,"click",h(M,n,a)),g(t,r),b(t," ]")
const e=s.parentNode.parentNode
g(e,t)}(n,a,s)}function q(n,a){const s=a.children[0],r=w(s),e=n.find(n=>n.name===r)
if(e?.members.length){const n=e.members.map(n=>n.name)
!function(n,a){a.includes(t())&&(U=n.rowIndex)}(a,n),b(s,` <span class="fshBlue">- ${n.join(", ")}</span>`)}}function z(n){const a=function(){const n=o().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows
if(n)return N(n)}()
a&&(j([3,a,1,h(q,n)]),P(a,n),U&&r("ajaxifyRankControls")&&e(o(),E,!0))}async function G(){if(k())return
const n=await a(B)
n?.s&&z(n.r)}export{G as default}
//# sourceMappingURL=rank-CfYbTxqi.js.map
