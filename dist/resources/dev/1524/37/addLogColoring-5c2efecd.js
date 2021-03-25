import{c as t}from"./createStyle-25d3e16a.js"
import{d as n}from"./dataRows-299a295b.js"
import{a as o,d as a}from"./doBuffLinkClick-3ed1a3bb.js"
import{I as e,D as s,o as r,a0 as c,t as i,e as f,h as m,H as l,F as u}from"./calfSystem-5d0c721b.js"
import{p as d}from"./parseDateAsTimestamp-fab4c5a9.js"
let p,C
function b(t,n){let o="old"
const a=d(l(n.cells[t]))
return function(t,n){return t>20&&n<=C}((p-a)/6e4,a)||(o=a>C?"new":"seen"),[n,o]}function h(t,[n,o]){const a=n.rowIndex+1
return t[o]?t[o]={min:Math.min(t[o].min,a),max:Math.max(t[o].min,a)}:t[o]={min:a,max:a},t}function g(t,[n,{min:o,max:a}]){return`.fshLogColoring tr:nth-of-type(${t}n+${o}):nth-of-type(-${t}n+${a}) {background-color: ${"old"===n?"#CD9E4B":"#F5F298"};}`}function j(o,e,r){const c=n(r.rows,3,0).map(i(b,e))
!function(t,n){"Chat"===t&&n.filter((([,t])=>"old"!==t)).map((([t])=>s(u,t))).forEach(a)}(o,c)
const l=function(t,n){const o="Chat"===t?4:2
return f(n.filter((([,t])=>"seen"!==t)).reduce(h,{})).map(i(g,o))}(o,c)
l.length&&m(document.body,t(l.join("\n")))}function x(t,n,a){a.classList.add("fshLogColoring"),p=(new Date).setUTCSeconds(0,0)-1
const s=`last${t}Check`
C=function(t){return e(t)||p}(s),j(t,n,a),r(a,o),c(s,p)}function y(t,n){if(!e("enableLogColoring"))return
const o=function(t){return s("Chat"===t?"#pCC table table table table":"#pCC > table:last-of-type")}(t)
o&&x(t,n,o)}export{y as a}
//# sourceMappingURL=addLogColoring-5c2efecd.js.map
