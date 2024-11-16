import{g as o,o as n,b as t,s as e,ad as s,bM as a,b0 as c,br as r,b2 as f,e as i,k as u,i as l}from"./calfSystem-Blt4DbaE.js"
import{t as p}from"./toggleForce-br4z9gGd.js"
import{s as d}from"./simpleCheckbox-CjFtWivg.js"
const h=[]
let m=0,w=0
function g(o,n,t){o.rows.forEach(n),o.open=t}function b(o){a(o.row)}function x(o,n){e("collapse","collapseArt",o),g(n,b,!1)}function E(o){h.forEach((n=>{n.open&&x(o,n)}))}function N(o){p(o.row,!1)}function T(o,n){e("collapse","expandArt",o),g(n,N,!0)}function I(o){return"TR"===o.tagName?function(o){if(o.rowIndex%w==0)return o}(o):"TABLE"!==o.tagName?I(o.parentNode):void 0}function L(o,n){m&&function(o,n){const t=I(n.target)
if(!t)return
const e=t.rowIndex/w,s=h[e]
!1===s.open?(E(o),T(o,s)):x(o,s)}(o,n)}function P(o,n,t,e){0===n&&(t.header=o,function(o){m&&o.classList.add("fshPoint")}(o),function(o,n){f(o)&&o(n)}(e.extraFn,o)),e.articleTest(n)&&(t.rows[n]=r(t[n],{}),t.rows[n].row=o,function(o,n){m?(a(o),n.open=!1):n.open=!0}(o,t))}function j(o,n){const t=n.rowIndex%w,e=(n.rowIndex-t)/w
h[e]=r(h[e],{})
const s=h[e]
s.rows=s.rows||[],P(n,t,s,o)}function k(o){o.header.classList.toggle("fshPoint")}function A(o){e("collapse","togglePref",o),m=!m,s(o,m),m?E(o):function(o){h.forEach((n=>{n.open||T(o,n)}))}(o),h.forEach(k)}function v(e){w=e.headInd,function(e){const s=o(e)
m=s.checked,n(o(e),"change",t(A,e))}(e.prefName),c(e.theTable.rows).forEach(t(j,e)),i(e.theTable,t(L,e.prefName))}function F(o,n){const t=u({className:"fshPref",innerHTML:d(o)})
n.classList.add("fshRelative"),l(n,t)}export{v as c,F as s}
//# sourceMappingURL=setupPref-BGaTHuGG.js.map
