import{c as t}from"./createStyle-d08244a4.js"
import{d as n}from"./dataRows-9acbc944.js"
import{a as o,d as e}from"./doBuffLinkClick-39dfc3dc.js"
import{D as a,I as s,o as r,Z as c,t as i,e as f,h as l,H as m,F as u}from"./calfSystem-e1e858cd.js"
import{p as d}from"./parseDateAsTimestamp-c6154f90.js"
function p(){return a("#pCC > table:last-of-type")}let C,h
function b(t,n){let o="old"
const e=d(m(n.cells[t]))
return function(t,n){return t>20&&n<=h}((C-e)/6e4,e)||(o=e>h?"new":"seen"),[n,o]}function g(t,[n,o]){const e=n.rowIndex+1
return t[o]?t[o]={min:Math.min(t[o].min,e),max:Math.max(t[o].min,e)}:t[o]={min:e,max:e},t}function j(t,[n,{min:o,max:e}]){return`.fshLogColoring tr:nth-of-type(${t}n+${o}):nth-of-type(-${t}n+${e}) {background-color: ${"old"===n?"#CD9E4B":"#F5F298"};}`}function x(o,s,r,c){const m=n(r.rows,c,0).map(i(b,s))
!function(t,n){"Chat"===t&&n.filter((([,t])=>"old"!==t)).map((([t])=>a(u,t))).forEach(e)}(o,m)
const d=function(t,n){const o="Chat"===t?4:2
return f(n.filter((([,t])=>"seen"!==t)).reduce(g,{})).map(i(j,o))}(o,m)
d.length&&l(document.body,t(d.join("\n")))}function y(t,n,e,a){e.classList.add("fshLogColoring"),C=(new Date).setUTCSeconds(0,0)-1
const i=`last${t}Check`
h=function(t){return s(t)||C}(i),x(t,n,e,a),r(e,o),c(i,C)}function L(t,n,o){if(!s("enableLogColoring"))return
const e=function(t){return["Chat","Leader"].includes(t)?a("#pCC table table table table"):p()}(t)
e&&y(t,n,e,o)}export{L as a,p as g}
//# sourceMappingURL=addLogColoring-343c9db5.js.map
