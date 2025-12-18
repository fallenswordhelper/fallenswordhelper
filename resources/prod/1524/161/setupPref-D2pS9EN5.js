import{bz as o,c as n,o as t,g as e,b as s,s as a,av as c,bZ as r,bB as f,cl as i,v as u,i as l}from"./calfSystem-Cs6CSxoU.js"
import{t as p}from"./toggleForce-br4z9gGd.js"
import{s as h}from"./simpleCheckbox-C-dxZ6vG.js"
const d=[]
let m=0,w=0
function g(o,n,t){o.rows.forEach(n),o.open=t}function x(o){i(o.row)}function b(o,n){a("collapse","collapseArt",o),g(n,x,!1)}function T(o){d.forEach(n=>{n.open&&b(o,n)})}function E(o){p(o.row,!1)}function N(o,n){a("collapse","expandArt",o),g(n,E,!0)}function I(o){return"TR"===o.tagName?function(o){if(o.rowIndex%w===0)return o}(o):"TABLE"!==o.tagName?I(o.parentNode):void 0}function L(o,n){m&&function(o,n){const t=I(n.target)
if(!t)return
const e=t.rowIndex/w,s=d[e]
!1===s.open?(T(o),N(o,s)):b(o,s)}(o,n)}function v(o,n,t,e){0===n&&(t.header=o,function(o){m&&o.classList.add("fshPoint")}(o),function(o,n){f(o)&&o(n)}(e.extraFn,o)),e.articleTest(n)&&(t.rows[n]=r(t[n],{}),t.rows[n].row=o,function(o,n){m?(i(o),n.open=!1):n.open=!0}(o,t))}function P(o,n){const t=n.rowIndex%w,e=(n.rowIndex-t)/w
d[e]=r(d[e],{})
const s=d[e]
s.rows=s.rows||[],v(n,t,s,o)}function j(o){o.header.classList.toggle("fshPoint")}function A(o){a("collapse","togglePref",o),m=!m,c(o,m),m?T(o):function(o){d.forEach(n=>{n.open||N(o,n)})}(o),d.forEach(j)}function k(a){w=a.headInd,function(o){const t=e(o)
m=t.checked,s(e(o),"change",n(A,o))}(a.prefName),o(a.theTable.rows).forEach(n(P,a)),t(a.theTable,n(L,a.prefName))}function B(o,n){const t=u({className:"fshPref",innerHTML:h(o)})
n.classList.add("fshRelative"),l(n,t)}export{k as c,B as s}
//# sourceMappingURL=setupPref-D2pS9EN5.js.map
