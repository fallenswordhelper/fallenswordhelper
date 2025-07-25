import{bK as n,$ as s,ag as a,b8 as t,aB as r,o as e,p as o,s as i,r as c,aX as u,a6 as d,q as f,aR as l,ar as m,a7 as p,c as g,i as h,a3 as b,n as w,a4 as k,bw as N}from"./calfSystem-C1X5YxJZ.js"
import{b as j}from"./batch-BNBFzvJw.js"
import{b as v}from"./bitwiseAnd-C5gmj-aX.js"
import{i as x}from"./insertHtmlAfterBegin-UHwjB-kO.js"
import{a as B}from"./roundToString-BGDlzdGc.js"
import{s as C}from"./sum-DdZz7_s4.js"
function y(s){return n({subcmd:"ranks",...s})}function I(n,s){return y({subcmd2:n,rank_id:s})}async function R(n,s){return await a({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:s}),{s:!0}}let S=0
const U=n=>["Up","Down"].includes(n.target.value)
const $=/rank_id=(?<rankId>\d+)/
function A(n,a,t){const r=c($,n.target.getAttribute("onclick"))
var e
e=u(n.target.value),s(I,R,e,r)
const o=a.parentNode.rows[t]
d(a,o)
const i="Up"===n.target.value?-22:22
window.scrollBy(0,i),n.stopPropagation()}function D(n){i("ranks","overrideUpDown")
const s=n.target.parentNode.parentNode.parentNode,a=s.rowIndex+("Up"===n.target.value?-1:2);(function(n,s){return S>=Math.min(n.rowIndex,s)||s<1||s>n.parentNode.rows.length})(s,a)||A(n,s,a)}function E(n){U(n)&&D(n)}const T=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],_=(n,[,s])=>n+s-1,H=n=>B((n=>T.filter((([s])=>v(n,s))).reduce(_,0))(n)+(n=>{return(s=n,s>>>0).toString(2)
var s})(n).split("").map(Number).reduce(C,0),1)
function M(n,s){const[a]=s.children,t=w(a.firstChild),r=n.find((n=>n&&n.name===t))
r&&x(a,`<span class="fshBlue">(${H(r.permissions)}) Tax:(${r.tax??0}%)</span> `)}function q(n,s){i("ranks","fetchRankData"),n.forEach(g(M,s))}function F(n,s){const a=f('#pCC a[href*="=ranks&subcmd2=add"]')
a&&function(n,s,a){const t=l({className:"fsh-weightings",innerHTML:"[ "}),r=m({className:"fshBl fsh-bli",textContent:"Get Rank Weightings"})
p(r,"click",g(q,n,s)),h(t,r),b(t," ]")
const e=a.parentNode.parentNode
h(e,t)}(n,s,a)}function G(n,s){const a=s.children[0],r=w(a),e=n.find((n=>n.name===r))
if(e?.members.length){const n=e.members.map((n=>n.name))
!function(n,s){s.includes(t())&&(S=n.rowIndex)}(s,n),b(a,` <span class="fshBlue">- ${n.join(", ")}</span>`)}}function K(n){const s=function(){const n=o().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows
if(n)return N(n)}()
s&&(j([3,s,1,g(G,n)]),F(s,n),S&&r("ajaxifyRankControls")&&e(o(),E,!0))}async function L(){if(k())return
const n=await s(y)
n?.s&&K(n.r)}export{L as default}
//# sourceMappingURL=rank-CVce5BII.js.map
