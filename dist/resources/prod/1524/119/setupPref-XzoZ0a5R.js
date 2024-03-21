import{a_ as o,c as n,o as e,g as t,b as s,bp as a,s as c,ae as r,b1 as f,m as i,i as u}from"./calfSystem-Bit7wh4p.js"
import{h as l}from"./hideElement--vKgDzDU.js"
import{t as p}from"./toggleForce-br4z9gGd.js"
import{s as h}from"./simpleCheckbox-B_EbohVT.js"
const d=[]
let m=0,w=0
function g(o,n,e){o.rows.forEach(n),o.open=e}function x(o){l(o.row)}function E(o,n){c("collapse","collapseArt",o),g(n,x,!1)}function T(o){d.forEach((n=>{n.open&&E(o,n)}))}function b(o){p(o.row,!1)}function N(o,n){c("collapse","expandArt",o),g(n,b,!0)}function I(o){return"TR"===o.tagName?function(o){if(o.rowIndex%w==0)return o}(o):"TABLE"!==o.tagName?I(o.parentNode):void 0}function L(o,n){m&&function(o,n){const e=I(n.target)
if(!e)return
const t=e.rowIndex/w,s=d[t]
!1===s.open?(T(o),N(o,s)):E(o,s)}(o,n)}function j(o,n,e,t){0===n&&(e.header=o,function(o){m&&o.classList.add("fshPoint")}(o),function(o,n){f(o)&&o(n)}(t.extraFn,o)),t.articleTest(n)&&(e.rows[n]=a(e[n],{}),e.rows[n].row=o,function(o,n){m?(l(o),n.open=!1):n.open=!0}(o,e))}function P(o,n){const e=n.rowIndex%w,t=(n.rowIndex-e)/w
d[t]=a(d[t],{})
const s=d[t]
s.rows=s.rows||[],j(n,e,s,o)}function A(o){o.header.classList.toggle("fshPoint")}function k(o){c("collapse","togglePref",o),m=!m,r(o,m),m?T(o):function(o){d.forEach((n=>{n.open||N(o,n)}))}(o),d.forEach(A)}function v(a){w=a.headInd,function(o){const e=t(o)
m=e.checked,s(t(o),"change",n(k,o))}(a.prefName),o(a.theTable.rows).forEach(n(P,a)),e(a.theTable,n(L,a.prefName))}function C(o,n){const e=i({className:"fshPref",innerHTML:h(o)})
n.classList.add("fshRelative"),u(n,e)}export{v as c,C as s}
//# sourceMappingURL=setupPref-XzoZ0a5R.js.map
