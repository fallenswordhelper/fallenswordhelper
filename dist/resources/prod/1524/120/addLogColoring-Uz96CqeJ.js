import{c as n}from"./createStyle-DpCrKQtR.js"
import{d as t}from"./dataRows-D8bQOpHy.js"
import{a as o,d as a}from"./doBuffLinkClick-2phCWCvA.js"
import{q as e,ai as s,o as r,ae as i,c,i as f,aq as l,l as m,C as u}from"./calfSystem-BpHkrDYD.js"
import{p as d}from"./parseDateAsTimestamp-GUQAnPhX.js"
function p(){return e("#pCC > table:last-of-type")}let C=0,h=0
function g(n,t){let o="old"
const a=d(l(t.cells[n]))
return function(n,t){return n>20&&t<=h}((C-a)/6e4,a)||(o=a>h?"new":"seen"),[t,o]}function b(n,[t,o]){const a=t.rowIndex+1
return n[o]?n[o]={min:Math.min(n[o].min,a),max:Math.max(n[o].min,a)}:n[o]={min:a,max:a},n}function j(n,[t,{min:o,max:a}]){return`.fshLogColoring tr:nth-of-type(${n}n+${o}):nth-of-type(-${n}n+${a}) {background-color: ${"old"===t?"#CD9E4B":"#F5F298"};}`}function x(o,s,r,i){const l=t(r,i,0).map(c(g,s))
!function(n,t){"Chat"===n&&t.filter((([,n])=>"old"!==n)).map((([n])=>e(m,n))).forEach(a)}(o,l)
const d=function(n,t){const o="Chat"===n?4:2
return u(t.filter((([,n])=>"seen"!==n)).reduce(b,{})).map(c(j,o))}(o,l)
d.length&&f(document.body,n(d.join("\n")))}function y(n,t,a,e){a.classList.add("fshLogColoring"),C=(new Date).setUTCSeconds(0,0)-1
const c=`last${n}Check`
h=function(n){return s(n)||C}(c),x(n,t,a,e),r(a,o),i(c,C)}function L(n,t,o){if(!s("enableLogColoring"))return
const a=function(n){return["Chat","Leader"].includes(n)?e("#pCC table table table table"):p()}(n)
a&&y(n,t,a,o)}export{L as a,p as g}
//# sourceMappingURL=addLogColoring-Uz96CqeJ.js.map
