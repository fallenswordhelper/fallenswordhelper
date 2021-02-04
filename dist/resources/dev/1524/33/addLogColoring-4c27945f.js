import{c as t}from"./createStyle-39dd6366.js"
import{d as n}from"./dataRows-927736f3.js"
import{a as o,d as a}from"./doBuffLinkClick-6dfce1f9.js"
import{H as e,C as s,o as r,_ as f,t as i,e as c,h as m,G as l,E as u}from"./calfSystem-37f70deb.js"
import{p as d}from"./parseDateAsTimestamp-9ffa0af6.js"
let p,C
function h(t,n){let o="old"
const a=d(l(n.cells[t]))
return function(t,n){return t>20&&n<=C}((p-a)/6e4,a)||(o=a>C?"new":"seen"),[n,o]}function b(t,[n,o]){const a=n.rowIndex+1
return t[o]?t[o]={min:Math.min(t[o].min,a),max:Math.max(t[o].min,a)}:t[o]={min:a,max:a},t}function g(t,[n,{min:o,max:a}]){return`.fshLogColoring tr:nth-of-type(${t}n+${o}):nth-of-type(-${t}n+${a}) {background-color: ${"old"===n?"#CD9E4B":"#F5F298"};}`}function j(o,e,r){const f=n(r.rows,3,0).map(i(h,e))
!function(t,n){"Chat"===t&&n.filter((([,t])=>"old"!==t)).map((([t])=>s(u,t))).forEach(a)}(o,f)
const l=function(t,n){const o="Chat"===t?4:2
return c(n.filter((([,t])=>"seen"!==t)).reduce(b,{})).map(i(g,o))}(o,f)
l.length&&m(document.body,t(l.join("\n")))}function x(t,n,a){a.classList.add("fshLogColoring"),p=(new Date).setUTCSeconds(0,0)-1
const s=`last${t}Check`
C=function(t){return e(t)||p}(s),j(t,n,a),r(a,o),f(s,p)}function y(t,n){if(!e("enableLogColoring"))return
const o=function(t){return s("Chat"===t?"#pCC table table table table":"#pCC > table:last-of-type")}(t)
o&&x(t,n,o)}export{y as a}
//# sourceMappingURL=addLogColoring-4c27945f.js.map
