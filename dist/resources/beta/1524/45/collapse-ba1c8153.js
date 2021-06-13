import{ap as o,t as n,o as t,a4 as e,z as a,f as c,Z as r,aL as f}from"./calfSystem-ae2e69af.js"
import{h as s}from"./hideElement-53ec58d4.js"
import{t as i}from"./toggleForce-537064ea.js"
const u=[]
let h,d
function p(o){s(o.row)}function w(o){o.rows.forEach(p),o.open=!1}function m(o){o.open&&w(o)}function l(){u.forEach(m)}function g(o){i(o.row,!1)}function E(o){o.rows.forEach(g),o.open=!0}function x(o){o.open||E(o)}function I(o){return"TR"===o.tagName?function(o){if(o.rowIndex%d==0)return o}(o):"TABLE"!==o.tagName?I(o.parentNode):void 0}function T(o){h&&function(o){const n=I(o.target)
if(!n)return
const t=n.rowIndex/d,e=u[t]
!1===e.open?(l(),E(e)):w(e)}(o)}function L(o,n,t,a){0===n&&(t.header=o,function(o){h&&o.classList.add("fshPoint")}(o),function(o,n){f(o)&&o(n)}(a.extraFn,o)),a.articleTest(n)&&(t.rows[n]=e(t[n],{}),t.rows[n].row=o,function(o,n){h?(s(o),n.open=!1):n.open=!0}(o,t))}function N(o,n){const t=n.rowIndex%d,a=(n.rowIndex-t)/d
u[a]=e(u[a],{})
const c=u[a]
c.rows=c.rows||[],L(n,t,c,o)}function j(o){o.header.classList.toggle("fshPoint")}function b(o){h=!h,r(o,h),h?l():u.forEach(x),u.forEach(j)}function F(e){d=e.headInd,function(o){const t=a(o)
h=t.checked,c(a(o),"change",n(b,o))}(e.prefName),o(e.theTable.rows).forEach(n(N,e)),t(e.theTable,T)}export{F as c}
//# sourceMappingURL=collapse-ba1c8153.js.map
