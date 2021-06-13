import{c as t}from"./createStyle-65a2dcef.js"
import{d as n}from"./dataRows-fb96d443.js"
import{a as o,d as a}from"./doBuffLinkClick-1c266942.js"
import{D as e,I as s,o as r,_ as c,t as i,e as f,h as l,H as m,F as u}from"./calfSystem-d3f0a380.js"
import{p as d}from"./parseDateAsTimestamp-8de82a90.js"
function p(){return e("#pCC > table:last-of-type")}let C,h
function b(t,n){let o="old"
const a=d(m(n.cells[t]))
return function(t,n){return t>20&&n<=h}((C-a)/6e4,a)||(o=a>h?"new":"seen"),[n,o]}function g(t,[n,o]){const a=n.rowIndex+1
return t[o]?t[o]={min:Math.min(t[o].min,a),max:Math.max(t[o].min,a)}:t[o]={min:a,max:a},t}function j(t,[n,{min:o,max:a}]){return`.fshLogColoring tr:nth-of-type(${t}n+${o}):nth-of-type(-${t}n+${a}) {background-color: ${"old"===n?"#CD9E4B":"#F5F298"};}`}function x(o,s,r,c){const m=n(r.rows,c,0).map(i(b,s))
!function(t,n){"Chat"===t&&n.filter((([,t])=>"old"!==t)).map((([t])=>e(u,t))).forEach(a)}(o,m)
const d=function(t,n){const o="Chat"===t?4:2
return f(n.filter((([,t])=>"seen"!==t)).reduce(g,{})).map(i(j,o))}(o,m)
d.length&&l(document.body,t(d.join("\n")))}function y(t,n,a,e){a.classList.add("fshLogColoring"),C=(new Date).setUTCSeconds(0,0)-1
const i=`last${t}Check`
h=function(t){return s(t)||C}(i),x(t,n,a,e),r(a,o),c(i,C)}function L(t,n,o){if(!s("enableLogColoring"))return
const a=function(t){return["Chat","Leader"].includes(t)?e("#pCC table table table table"):p()}(t)
a&&y(t,n,a,o)}export{L as a,p as g}
//# sourceMappingURL=addLogColoring-08e6e490.js.map
