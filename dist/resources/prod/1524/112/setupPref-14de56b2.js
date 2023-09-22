import{aT as o,c as n,o as t,g as e,b as s,bi as a,n as c,a9 as r,aW as f,l as i,i as l}from"./calfSystem-4830a18d.js"
import{h as u}from"./hideElement-85f33001.js"
import{t as h}from"./toggleForce-6124e333.js"
import{s as p}from"./simpleCheckbox-ed7e63fb.js"
const d=[]
let m=0,w=0
function g(o){u(o.row)}function E(o){c("collapse","collapseArt"),o.rows.forEach(g),o.open=!1}function x(o){o.open&&E(o)}function T(){d.forEach(x)}function b(o){h(o.row,!1)}function I(o){c("collapse","expandArt"),o.rows.forEach(b),o.open=!0}function L(o){o.open||I(o)}function N(o){return"TR"===o.tagName?function(o){if(o.rowIndex%w==0)return o}(o):"TABLE"!==o.tagName?N(o.parentNode):void 0}function j(o){m&&function(o){const n=N(o.target)
if(!n)return
const t=n.rowIndex/w,e=d[t]
!1===e.open?(T(),I(e)):E(e)}(o)}function P(o,n,t,e){0===n&&(t.header=o,function(o){m&&o.classList.add("fshPoint")}(o),function(o,n){f(o)&&o(n)}(e.extraFn,o)),e.articleTest(n)&&(t.rows[n]=a(t[n],{}),t.rows[n].row=o,function(o,n){m?(u(o),n.open=!1):n.open=!0}(o,t))}function A(o,n){const t=n.rowIndex%w,e=(n.rowIndex-t)/w
d[e]=a(d[e],{})
const s=d[e]
s.rows=s.rows||[],P(n,t,s,o)}function k(o){o.header.classList.toggle("fshPoint")}function v(o){c("collapse","togglePref",o),m=!m,r(o,m),m?T():d.forEach(L),d.forEach(k)}function F(a){w=a.headInd,function(o){const t=e(o)
m=t.checked,s(e(o),"change",n(v,o))}(a.prefName),o(a.theTable.rows).forEach(n(A,a)),t(a.theTable,j)}function R(o,n){const t=i({className:"fshPref",innerHTML:p(o)})
n.classList.add("fshRelative"),l(n,t)}export{F as c,R as s}
//# sourceMappingURL=setupPref-14de56b2.js.map
