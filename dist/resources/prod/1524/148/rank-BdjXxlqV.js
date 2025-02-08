import{by as n,$ as s,K as t,aX as a,aq as r,o as e,p as o,s as i,r as c,aL as u,A as d,q as f,aF as l,ac as m,B as p,d as h,i as g,x as b,ad as k,y as w,bk as N}from"./calfSystem-BldO1y8X.js"
import{b as x}from"./batch-CbJNJscd.js"
import{b as j}from"./bitwiseAnd-C5gmj-aX.js"
import{i as v}from"./insertHtmlAfterBegin-Bsjm51tM.js"
import{a as y}from"./roundToString-C-FKTMJy.js"
import{s as B}from"./sum-DdZz7_s4.js"
function C(s){return n({subcmd:"ranks",...s})}function A(n,s){return C({subcmd2:n,rank_id:s})}async function I(n,s){return await t({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:s}),{s:!0}}let R=0
const S=n=>["Up","Down"].includes(n.target.value)
const U=/rank_id=(?<rankId>\d+)/
function $(n,t,a){const r=c(U,n.target.getAttribute("onclick"))
var e
e=u(n.target.value),s(A,I,e,r)
const o=t.parentNode.rows[a]
d(t,o)
const i="Up"===n.target.value?-22:22
window.scrollBy(0,i),n.stopPropagation()}function D(n){i("ranks","overrideUpDown")
const s=n.target.parentNode.parentNode.parentNode,t=s.rowIndex+("Up"===n.target.value?-1:2);(function(n,s){return R>=Math.min(n.rowIndex,s)||s<1||s>n.parentNode.rows.length})(s,t)||$(n,s,t)}function E(n){S(n)&&D(n)}const H=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],T=(n,[,s])=>n+s-1,_=n=>y((n=>H.filter((([s])=>j(n,s))).reduce(T,0))(n)+(n=>{return(s=n,s>>>0).toString(2)
var s})(n).split("").map(Number).reduce(B,0),1)
function q(n,s){const[t]=s.children,a=k(t.firstChild),r=n.find((n=>n&&n.name===a))
r&&v(t,`<span class="fshBlue">(${_(r.permissions)}) Tax:(${r.tax??0}%)</span> `)}function L(n,s){i("ranks","fetchRankData"),n.forEach(h(q,s))}function M(n,s){const t=f('#pCC a[href*="=ranks&subcmd2=add"]')
t&&function(n,s,t){const a=l({className:"fsh-weightings",innerHTML:"[ "}),r=m({className:"fshBl fsh-bli",textContent:"Get Rank Weightings"})
p(r,"click",h(L,n,s)),g(a,r),b(a," ]")
const e=t.parentNode.parentNode
g(e,a)}(n,s,t)}function F(n,s){const t=s.children[0],r=k(t),e=n.find((n=>n.name===r))
if(e?.members.length){const n=e.members.map((n=>n.name))
!function(n,s){s.includes(a())&&(R=n.rowIndex)}(s,n),b(t,` <span class="fshBlue">- ${n.join(", ")}</span>`)}}function G(n){const s=function(){const n=o().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows
if(n)return N(n)}()
s&&(x([3,s,1,h(F,n)]),M(s,n),R&&r("ajaxifyRankControls")&&e(o(),E,!0))}async function K(){if(w())return
const n=await s(C)
n?.s&&G(n.r)}export{K as default}
//# sourceMappingURL=rank-BdjXxlqV.js.map
