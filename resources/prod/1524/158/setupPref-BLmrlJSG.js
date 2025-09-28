import{bw as o,c as n,o as t,g as e,b as s,s as a,au as c,bZ as r,by as f,cm as i,u,i as l}from"./calfSystem-CIuUjh4H.js"
import{t as p}from"./toggleForce-br4z9gGd.js"
import{s as h}from"./simpleCheckbox-D1e9ej5E.js"
const d=[]
let m=0,w=0
function g(o,n,t){o.rows.forEach(n),o.open=t}function x(o){i(o.row)}function b(o,n){a("collapse","collapseArt",o),g(n,x,!1)}function E(o){d.forEach(n=>{n.open&&b(o,n)})}function N(o){p(o.row,!1)}function T(o,n){a("collapse","expandArt",o),g(n,N,!0)}function I(o){return"TR"===o.tagName?function(o){if(o.rowIndex%w===0)return o}(o):"TABLE"!==o.tagName?I(o.parentNode):void 0}function L(o,n){m&&function(o,n){const t=I(n.target)
if(!t)return
const e=t.rowIndex/w,s=d[e]
!1===s.open?(E(o),T(o,s)):b(o,s)}(o,n)}function P(o,n,t,e){0===n&&(t.header=o,function(o){m&&o.classList.add("fshPoint")}(o),function(o,n){f(o)&&o(n)}(e.extraFn,o)),e.articleTest(n)&&(t.rows[n]=r(t[n],{}),t.rows[n].row=o,function(o,n){m?(i(o),n.open=!1):n.open=!0}(o,t))}function j(o,n){const t=n.rowIndex%w,e=(n.rowIndex-t)/w
d[e]=r(d[e],{})
const s=d[e]
s.rows=s.rows||[],P(n,t,s,o)}function A(o){o.header.classList.toggle("fshPoint")}function k(o){a("collapse","togglePref",o),m=!m,c(o,m),m?E(o):function(o){d.forEach(n=>{n.open||T(o,n)})}(o),d.forEach(A)}function v(a){w=a.headInd,function(o){const t=e(o)
m=t.checked,s(e(o),"change",n(k,o))}(a.prefName),o(a.theTable.rows).forEach(n(j,a)),t(a.theTable,n(L,a.prefName))}function y(o,n){const t=u({className:"fshPref",innerHTML:h(o)})
n.classList.add("fshRelative"),l(n,t)}export{v as c,y as s}
//# sourceMappingURL=setupPref-BLmrlJSG.js.map
