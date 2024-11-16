import{c as t}from"./createStyle-C5mK_M_l.js"
import{d as n}from"./dataRows-B6_VtVvQ.js"
import{a as o,d as a}from"./doBuffLinkClick-CcIlwlsz.js"
import{q as e,ai as s,b as r,as as i,C as c,i as f,e as l,ad as m,t as u}from"./calfSystem-Blt4DbaE.js"
import{p as d}from"./parseDateAsTimestamp-CKw0dWec.js"
function p(){return e("#pCC > table:last-of-type")}let C=0,h=0
function b(t,n){let o="old"
const a=d(i(n.cells[t]))
return function(t,n){return t>20&&n<=h}((C-a)/6e4,a)||(o=a>h?"new":"seen"),[n,o]}function g(t,[n,o]){const a=n.rowIndex+1
return t[o]?t[o]={min:Math.min(t[o].min,a),max:Math.max(t[o].min,a)}:t[o]={min:a,max:a},t}function j(t,[n,{min:o,max:a}]){return`.fshLogColoring tr:nth-of-type(${t}n+${o}):nth-of-type(-${t}n+${a}) {background-color: ${"old"===n?"#CD9E4B":"#F5F298"};}`}function x(o,s,i,l){const m=n(i,l,0).map(r(b,s))
!function(t,n){"Chat"===t&&n.filter((([,t])=>"old"!==t)).map((([t])=>e(u,t))).forEach(a)}(o,m)
const d=function(t,n){const o="Chat"===t?4:2
return c(n.filter((([,t])=>"seen"!==t)).reduce(g,{})).map(r(j,o))}(o,m)
d.length&&f(document.body,t(d.join("\n")))}function y(t,n,a,e){a.classList.add("fshLogColoring"),C=(new Date).setUTCSeconds(0,0)-1
const r=`last${t}Check`
h=function(t){return s(t)||C}(r),x(t,n,a,e),l(a,o),m(r,C)}function L(t,n,o){if(!s("enableLogColoring"))return
const a=function(t){return["Chat","Leader"].includes(t)?e("#pCC table table table table"):p()}(t)
a&&y(t,n,a,o)}export{L as a,p as g}
//# sourceMappingURL=addLogColoring-iZi4QL__.js.map
