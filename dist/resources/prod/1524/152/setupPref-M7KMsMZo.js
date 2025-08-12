import{bt as o,c as n,o as t,g as e,b as s,s as a,aw as c,bW as r,bv as f,cj as i,w as u,i as l}from"./calfSystem-BlPuMQGT.js"
import{t as p}from"./toggleForce-br4z9gGd.js"
import{s as h}from"./simpleCheckbox-W5pog9Qz.js"
const d=[]
let w=0,m=0
function g(o,n,t){o.rows.forEach(n),o.open=t}function x(o){i(o.row)}function b(o,n){a("collapse","collapseArt",o),g(n,x,!1)}function N(o){d.forEach((n=>{n.open&&b(o,n)}))}function E(o){p(o.row,!1)}function T(o,n){a("collapse","expandArt",o),g(n,E,!0)}function I(o){return"TR"===o.tagName?function(o){if(o.rowIndex%m==0)return o}(o):"TABLE"!==o.tagName?I(o.parentNode):void 0}function L(o,n){w&&function(o,n){const t=I(n.target)
if(!t)return
const e=t.rowIndex/m,s=d[e]
!1===s.open?(N(o),T(o,s)):b(o,s)}(o,n)}function j(o,n,t,e){0===n&&(t.header=o,function(o){w&&o.classList.add("fshPoint")}(o),function(o,n){f(o)&&o(n)}(e.extraFn,o)),e.articleTest(n)&&(t.rows[n]=r(t[n],{}),t.rows[n].row=o,function(o,n){w?(i(o),n.open=!1):n.open=!0}(o,t))}function P(o,n){const t=n.rowIndex%m,e=(n.rowIndex-t)/m
d[e]=r(d[e],{})
const s=d[e]
s.rows=s.rows||[],j(n,t,s,o)}function v(o){o.header.classList.toggle("fshPoint")}function A(o){a("collapse","togglePref",o),w=!w,c(o,w),w?N(o):function(o){d.forEach((n=>{n.open||T(o,n)}))}(o),d.forEach(v)}function k(a){m=a.headInd,function(o){const t=e(o)
w=t.checked,s(e(o),"change",n(A,o))}(a.prefName),o(a.theTable.rows).forEach(n(P,a)),t(a.theTable,n(L,a.prefName))}function F(o,n){const t=u({className:"fshPref",innerHTML:h(o)})
n.classList.add("fshRelative"),l(n,t)}export{k as c,F as s}
//# sourceMappingURL=setupPref-M7KMsMZo.js.map
