import{c as t}from"./createStyle-334f83f9.js"
import{d as n}from"./dataRows-bf7d7651.js"
import{a as o,d as a}from"./doBuffLinkClick-ab19b184.js"
import{D as e,I as s,o as r,Z as i,t as c,e as f,h as l,H as m,F as u}from"./calfSystem-cbf77dd7.js"
import{p as d}from"./parseDateAsTimestamp-9ad12f39.js"
function p(){return e("#pCC > table:last-of-type")}let C,h
function b(t,n){let o="old"
const a=d(m(n.cells[t]))
return function(t,n){return t>20&&n<=h}((C-a)/6e4,a)||(o=a>h?"new":"seen"),[n,o]}function g(t,[n,o]){const a=n.rowIndex+1
return t[o]?t[o]={min:Math.min(t[o].min,a),max:Math.max(t[o].min,a)}:t[o]={min:a,max:a},t}function j(t,[n,{min:o,max:a}]){return`.fshLogColoring tr:nth-of-type(${t}n+${o}):nth-of-type(-${t}n+${a}) {background-color: ${"old"===n?"#CD9E4B":"#F5F298"};}`}function x(o,s,r,i){const m=n(r.rows,i,0).map(c(b,s))
!function(t,n){"Chat"===t&&n.filter((([,t])=>"old"!==t)).map((([t])=>e(u,t))).forEach(a)}(o,m)
const d=function(t,n){const o="Chat"===t?4:2
return f(n.filter((([,t])=>"seen"!==t)).reduce(g,{})).map(c(j,o))}(o,m)
d.length&&l(document.body,t(d.join("\n")))}function y(t,n,a,e){a.classList.add("fshLogColoring"),C=(new Date).setUTCSeconds(0,0)-1
const c=`last${t}Check`
h=function(t){return s(t)||C}(c),x(t,n,a,e),r(a,o),i(c,C)}function L(t,n,o){if(!s("enableLogColoring"))return
const a=function(t){return["Chat","Leader"].includes(t)?e("#pCC table table table table"):p()}(t)
a&&y(t,n,a,o)}export{L as a,p as g}
//# sourceMappingURL=addLogColoring-36440751.js.map
