import{bv as n,$ as s,J as t,aU as a,ao as r,o as e,p as o,s as i,r as c,aJ as u,z as d,q as f,aD as l,ab as m,A as p,c as h,i as g,w as b,ac as w,x as k,bj as N}from"./calfSystem-ChzN4Q-P.js"
import{b as j}from"./batch-CcQbYj5o.js"
import{b as v}from"./bitwiseAnd-C5gmj-aX.js"
import{i as x}from"./insertHtmlAfterBegin-eEM8BtQM.js"
import{a as C}from"./roundToString-BkWFh1Ji.js"
import{s as U}from"./sum-DdZz7_s4.js"
function y(s){return n({subcmd:"ranks",...s})}function B(n,s){return y({subcmd2:n,rank_id:s})}async function A(n,s){return await t({cmd:"guild",subcmd:"ranks",subcmd2:n,rank_id:s}),{s:!0}}let D=0
const I=n=>["Up","Down"].includes(n.target.value)
const S=/rank_id=(?<rankId>\d+)/
function $(n,t,a){const r=c(S,n.target.getAttribute("onclick"))
var e
e=u(n.target.value),s(B,A,e,r)
const o=t.parentNode.rows[a]
d(t,o)
const i="Up"===n.target.value?-22:22
window.scrollBy(0,i),n.stopPropagation()}function E(n){i("ranks","overrideUpDown")
const s=n.target.parentNode.parentNode.parentNode,t=s.rowIndex+("Up"===n.target.value?-1:2);(function(n,s){return D>=Math.min(n.rowIndex,s)||s<1||s>n.parentNode.rows.length})(s,t)||$(n,s,t)}function R(n){I(n)&&E(n)}const T=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]],_=(n,[,s])=>n+s-1,q=n=>C((n=>T.filter((([s])=>v(n,s))).reduce(_,0))(n)+(n=>{return(s=n,s>>>0).toString(2)
var s})(n).split("").map(Number).reduce(U,0),1)
function H(n,s){const[t]=s.children,a=w(t.firstChild),r=n.find((n=>n&&n.name===a))
r&&x(t,`<span class="fshBlue">(${q(r.permissions)}) Tax:(${r.tax??0}%)</span> `)}function J(n,s){i("ranks","fetchRankData"),n.forEach(h(H,s))}function M(n,s){const t=f('#pCC a[href*="=ranks&subcmd2=add"]')
t&&function(n,s,t){const a=l({className:"fsh-weightings",innerHTML:"[ "}),r=m({className:"fshBl fsh-bli",textContent:"Get Rank Weightings"})
p(r,"click",h(J,n,s)),g(a,r),b(a," ]")
const e=t.parentNode.parentNode
g(e,a)}(n,s,t)}function z(n,s){const t=s.children[0],r=w(t),e=n.find((n=>n.name===r))
if(e?.members.length){const n=e.members.map((n=>n.name))
!function(n,s){s.includes(a())&&(D=n.rowIndex)}(s,n),b(t,` <span class="fshBlue">- ${n.join(", ")}</span>`)}}function G(n){const s=function(){const n=o().lastElementChild.previousElementSibling.rows?.[7]?.children[0]?.children[0]?.rows
if(n)return N(n)}()
s&&(j([3,s,1,h(z,n)]),M(s,n),D&&r("ajaxifyRankControls")&&e(o(),R,!0))}async function K(){if(k())return
const n=await s(y)
n?.s&&G(n.r)}export{K as default}
//# sourceMappingURL=rank-8hlBcXi-.js.map
