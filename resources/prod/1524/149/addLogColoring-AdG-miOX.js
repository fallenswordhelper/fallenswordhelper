import{c as n}from"./createStyle-Cr9lLj8G.js"
import{q as t,ao as o,o as a,aj as e,aN as s,e as r,i,aH as c,t as f,H as l}from"./calfSystem-BGW9cdWN.js"
import{a as u,d as m}from"./doBuffLinkClick-CubYVCKw.js"
import{p}from"./parseDateAsTimestamp-puTZ2BjJ.js"
function d(){return t("#pCC > table:last-of-type")}let C=0,h=0
function g(n,t){let o="old"
const a=p(c(t.cells[n]))
return function(n,t){return n>20&&t<=h}((C-a)/6e4,a)||(o=a>h?"new":"seen"),[t,o]}function b(n,[t,o]){const a=t.rowIndex+1
return n[o]?n[o]={min:Math.min(n[o].min,a),max:Math.max(n[o].min,a)}:n[o]={min:a,max:a},n}function j(n,[t,{min:o,max:a}]){return`.fshLogColoring tr:nth-of-type(${n}n+${o}):nth-of-type(-${n}n+${a}) {background-color: ${"old"===t?"#CD9E4B":"#F5F298"};}`}function x(o,a,e,c){const u=s(e,c,0).map(r(g,a))
!function(n,o){"Chat"===n&&o.filter((([,n])=>"old"!==n)).map((([n])=>t(f,n))).forEach(m)}(o,u)
const p=function(n,t){const o="Chat"===n?4:2
return l(t.filter((([,n])=>"seen"!==n)).reduce(b,{})).map(r(j,o))}(o,u)
p.length&&i(document.body,n(p.join("\n")))}function y(n,t,s,r){s.classList.add("fshLogColoring"),C=(new Date).setUTCSeconds(0,0)-1
const i=`last${n}Check`
h=function(n){return o(n)||C}(i),x(n,t,s,r),a(s,u),e(i,C)}function L(n,a,e){if(!o("enableLogColoring"))return
const s=function(n){return["Chat","Leader"].includes(n)?t("#pCC table table table table"):d()}(n)
s&&y(n,a,s,e)}export{L as a,d as g}
//# sourceMappingURL=addLogColoring-AdG-miOX.js.map
