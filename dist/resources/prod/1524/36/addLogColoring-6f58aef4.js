import{c as t}from"./createStyle-c0c54ad2.js"
import{d as n}from"./dataRows-76d5eebd.js"
import{a as o,d as e}from"./doBuffLinkClick-916179ac.js"
import{I as a,D as s,o as r,_ as c,t as i,e as f,h as m,H as l,F as u}from"./calfSystem-e7bde0c3.js"
import{p as d}from"./parseDateAsTimestamp-f3b13d3e.js"
let p,C
function h(t,n){let o="old"
const e=d(l(n.cells[t]))
return function(t,n){return t>20&&n<=C}((p-e)/6e4,e)||(o=e>C?"new":"seen"),[n,o]}function b(t,[n,o]){const e=n.rowIndex+1
return t[o]?t[o]={min:Math.min(t[o].min,e),max:Math.max(t[o].min,e)}:t[o]={min:e,max:e},t}function g(t,[n,{min:o,max:e}]){return`.fshLogColoring tr:nth-of-type(${t}n+${o}):nth-of-type(-${t}n+${e}) {background-color: ${"old"===n?"#CD9E4B":"#F5F298"};}`}function j(o,a,r){const c=n(r.rows,3,0).map(i(h,a))
!function(t,n){"Chat"===t&&n.filter((([,t])=>"old"!==t)).map((([t])=>s(u,t))).forEach(e)}(o,c)
const l=function(t,n){const o="Chat"===t?4:2
return f(n.filter((([,t])=>"seen"!==t)).reduce(b,{})).map(i(g,o))}(o,c)
l.length&&m(document.body,t(l.join("\n")))}function x(t,n,e){e.classList.add("fshLogColoring"),p=(new Date).setUTCSeconds(0,0)-1
const s=`last${t}Check`
C=function(t){return a(t)||p}(s),j(t,n,e),r(e,o),c(s,p)}function y(t,n){if(!a("enableLogColoring"))return
const o=function(t){return s("Chat"===t?"#pCC table table table table":"#pCC > table:last-of-type")}(t)
o&&x(t,n,o)}export{y as a}
//# sourceMappingURL=addLogColoring-6f58aef4.js.map
