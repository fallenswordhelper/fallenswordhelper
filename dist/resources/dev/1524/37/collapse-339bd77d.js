import{N as o,t as n,o as t,a6 as e,z as c,f as r,a0 as a,aB as f}from"./calfSystem-5d0c721b.js"
import{h as s}from"./hideElement-4575b6b4.js"
import{t as i}from"./toggleForce-465fdd4f.js"
const u=[]
let d,h
function w(o){s(o.row)}function p(o){o.rows.forEach(w),o.open=!1}function m(o){o.open&&p(o)}function l(){u.forEach(m)}function g(o){i(o.row,!1)}function E(o){o.rows.forEach(g),o.open=!0}function x(o){o.open||E(o)}function b(o){return"TR"===o.tagName?function(o){if(o.rowIndex%h==0)return o}(o):"TABLE"!==o.tagName?b(o.parentNode):void 0}function I(o){d&&function(o){const n=b(o.target)
if(!n)return
const t=n.rowIndex/h,e=u[t]
!1===e.open?(l(),E(e)):p(e)}(o)}function N(o,n,t,c){0===n&&(t.header=o,function(o){d&&o.classList.add("fshPoint")}(o),function(o,n){f(o)&&o(n)}(c.extraFn,o)),c.articleTest(n)&&(t.rows[n]=e(t[n],{}),t.rows[n].row=o,function(o,n){d?(s(o),n.open=!1):n.open=!0}(o,t))}function T(o,n){const t=n.rowIndex%h,c=(n.rowIndex-t)/h
u[c]=e(u[c],{})
const r=u[c]
r.rows=r.rows||[],N(n,t,r,o)}function j(o){o.header.classList.toggle("fshPoint")}function L(o){d=!d,a(o,d),d?l():u.forEach(x),u.forEach(j)}function B(e){h=e.headInd,function(o){const t=c(o)
d=t.checked,r(c(o),"change",n(L,o))}(e.prefName),o(e.theTable.rows).forEach(n(T,e)),t(e.theTable,I)}export{B as c}
//# sourceMappingURL=collapse-339bd77d.js.map
