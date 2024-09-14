import{b0 as o,c as n,o as t,g as e,b as s,br as a,s as c,ae as r,bM as f,b3 as i,m as u,i as l}from"./calfSystem-Dh7h0wep.js"
import{t as p}from"./toggleForce-br4z9gGd.js"
import{s as h}from"./simpleCheckbox-qN1iLL05.js"
const d=[]
let m=0,w=0
function g(o,n,t){o.rows.forEach(n),o.open=t}function b(o){f(o.row)}function x(o,n){c("collapse","collapseArt",o),g(n,b,!1)}function T(o){d.forEach((n=>{n.open&&x(o,n)}))}function E(o){p(o.row,!1)}function N(o,n){c("collapse","expandArt",o),g(n,E,!0)}function I(o){return"TR"===o.tagName?function(o){if(o.rowIndex%w==0)return o}(o):"TABLE"!==o.tagName?I(o.parentNode):void 0}function L(o,n){m&&function(o,n){const t=I(n.target)
if(!t)return
const e=t.rowIndex/w,s=d[e]
!1===s.open?(T(o),N(o,s)):x(o,s)}(o,n)}function P(o,n,t,e){0===n&&(t.header=o,function(o){m&&o.classList.add("fshPoint")}(o),function(o,n){i(o)&&o(n)}(e.extraFn,o)),e.articleTest(n)&&(t.rows[n]=a(t[n],{}),t.rows[n].row=o,function(o,n){m?(f(o),n.open=!1):n.open=!0}(o,t))}function j(o,n){const t=n.rowIndex%w,e=(n.rowIndex-t)/w
d[e]=a(d[e],{})
const s=d[e]
s.rows=s.rows||[],P(n,t,s,o)}function A(o){o.header.classList.toggle("fshPoint")}function k(o){c("collapse","togglePref",o),m=!m,r(o,m),m?T(o):function(o){d.forEach((n=>{n.open||N(o,n)}))}(o),d.forEach(A)}function v(a){w=a.headInd,function(o){const t=e(o)
m=t.checked,s(e(o),"change",n(k,o))}(a.prefName),o(a.theTable.rows).forEach(n(j,a)),t(a.theTable,n(L,a.prefName))}function C(o,n){const t=u({className:"fshPref",innerHTML:h(o)})
n.classList.add("fshRelative"),l(n,t)}export{v as c,C as s}
//# sourceMappingURL=setupPref-CH5grnKf.js.map
