import{aS as o,c as n,o as t,g as e,b as s,bh as a,s as c,a9 as r,aV as f,m as i,i as u}from"./calfSystem-ZGMc097r.js"
import{h as l}from"./hideElement-RABq1RME.js"
import{t as h}from"./toggleForce-4Mg38a6N.js"
import{s as p}from"./simpleCheckbox-2gTdp6jj.js"
const d=[]
let m=0,w=0
function g(o,n,t){o.rows.forEach(n),o.open=t}function x(o){l(o.row)}function E(o,n){c("collapse","collapseArt",o),g(n,x,!1)}function N(o){d.forEach((n=>{n.open&&E(o,n)}))}function T(o){h(o.row,!1)}function b(o,n){c("collapse","expandArt",o),g(n,T,!0)}function I(o){return"TR"===o.tagName?function(o){if(o.rowIndex%w==0)return o}(o):"TABLE"!==o.tagName?I(o.parentNode):void 0}function L(o,n){m&&function(o,n){const t=I(n.target)
if(!t)return
const e=t.rowIndex/w,s=d[e]
!1===s.open?(N(o),b(o,s)):E(o,s)}(o,n)}function j(o,n,t,e){0===n&&(t.header=o,function(o){m&&o.classList.add("fshPoint")}(o),function(o,n){f(o)&&o(n)}(e.extraFn,o)),e.articleTest(n)&&(t.rows[n]=a(t[n],{}),t.rows[n].row=o,function(o,n){m?(l(o),n.open=!1):n.open=!0}(o,t))}function P(o,n){const t=n.rowIndex%w,e=(n.rowIndex-t)/w
d[e]=a(d[e],{})
const s=d[e]
s.rows=s.rows||[],j(n,t,s,o)}function A(o){o.header.classList.toggle("fshPoint")}function F(o){c("collapse","togglePref",o),m=!m,r(o,m),m?N(o):function(o){d.forEach((n=>{n.open||b(o,n)}))}(o),d.forEach(A)}function k(a){w=a.headInd,function(o){const t=e(o)
m=t.checked,s(e(o),"change",n(F,o))}(a.prefName),o(a.theTable.rows).forEach(n(P,a)),t(a.theTable,n(L,a.prefName))}function v(o,n){const t=i({className:"fshPref",innerHTML:p(o)})
n.classList.add("fshRelative"),u(n,t)}export{k as c,v as s}
//# sourceMappingURL=setupPref-3pX3gf-v.js.map
