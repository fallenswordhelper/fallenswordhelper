import{aH as n,v as o,o as t,aa as a,A as c,f as e,a4 as r,n as s,al as f,t as i}from"./calfSystem-99da704d.js"
const u=[]
let d,h
function w(n){s(n.row)}function p(n){n.rows.forEach(w),n.open=!1}function l(n){n.open&&p(n)}function E(){u.forEach(l)}function g(n){i(n.row,!1)}function m(n){n.rows.forEach(g),n.open=!0}function x(n){n.open||m(n)}function I(n){return"TR"===n.tagName?function(n){if(n.rowIndex%h==0)return n}(n):"TABLE"!==n.tagName?I(n.parentNode):void 0}function T(n){d&&function(n){const o=I(n.target)
if(!o)return
const t=o.rowIndex/h,a=u[t]
!1===a.open?(E(),m(a)):p(a)}(n)}function N(n,o,t,c){0===o&&(t.header=n,function(n){d&&n.classList.add("fshPoint")}(n),function(n,o){f(n)&&n(o)}(c.extraFn,n)),c.articleTest(o)&&(t.rows[o]=a(t[o],{}),t.rows[o].row=n,function(n,o){d?(s(n),o.open=!1):o.open=!0}(n,t))}function L(n,o){const t=o.rowIndex%h,c=(o.rowIndex-t)/h
u[c]=a(u[c],{})
const e=u[c]
e.rows=e.rows||[],N(o,t,e,n)}function b(n){n.header.classList.toggle("fshPoint")}function v(n){d=!d,r(n,d),d?E():u.forEach(x),u.forEach(b)}function A(a){h=a.headInd,function(n){const t=c(n)
d=t.checked,e(c(n),"change",o(v,n))}(a.prefName),n(a.theTable.rows).forEach(o(L,a)),t(a.theTable,T)}export{A as c}
//# sourceMappingURL=collapse-b2d9e1e8.js.map
