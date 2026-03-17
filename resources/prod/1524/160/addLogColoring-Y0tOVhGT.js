import{c as n}from"./createStyle-u6QR1rZp.js"
import{q as t,aA as a,o,av as e,aZ as s,c as r,i,aT as c,Z as f,ab as l}from"./calfSystem-HVCiy-VV.js"
import{a as u,d as m}from"./doBuffLinkClick-BbAestUz.js"
import{p}from"./parseDateAsTimestamp-BU-Z3fV9.js"
function d(){return t("#pCC > table:last-of-type")}let C=0,h=0
function b(n,t){let a="old"
const o=p(c(t.cells[n]))
return function(n,t){return n>20&&t<=h}((C-o)/6e4,o)||(a=o>h?"new":"seen"),[t,a]}function g(n,[t,a]){const o=t.rowIndex+1
return n[a]?n[a]={min:Math.min(n[a].min,o),max:Math.max(n[a].min,o)}:n[a]={min:o,max:o},n}function x(n,[t,{min:a,max:o}]){return`.fshLogColoring tr:nth-of-type(${n}n+${a}):nth-of-type(-${n}n+${o}) {background-color: ${"old"===t?"#CD9E4B":"#F5F298"};}`}function y(a,o,e,c){const u=s(e,c,0).map(r(b,o))
!function(n,a){"Chat"===n&&a.filter(([,n])=>"old"!==n).map(([n])=>t(f,n)).forEach(m)}(a,u)
const p=function(n,t){const a="Chat"===n?4:2
return l(t.filter(([,n])=>"seen"!==n).reduce(g,{})).map(r(x,a))}(a,u)
p.length&&i(document.body,n(p.join("\n")))}function L(n,t,s,r){s.classList.add("fshLogColoring"),C=(new Date).setUTCSeconds(0,0)-1
const i=`last${n}Check`
h=function(n){return a(n)||C}(i),y(n,t,s,r),o(s,u),e(i,C)}function $(n,o,e){if(!a("enableLogColoring"))return
const s=function(n){return["Chat","Leader"].includes(n)?t("#pCC table table table table"):d()}(n)
s&&L(n,o,s,e)}export{$ as a,d as g}
//# sourceMappingURL=addLogColoring-Y0tOVhGT.js.map
