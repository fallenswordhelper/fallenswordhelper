import{c as t}from"./createStyle-bdad4a3a.js"
import{d as n}from"./dataRows-fbdbdd02.js"
import{a,d as o}from"./doBuffLinkClick-6adaeb27.js"
import{H as e,C as s,o as r,Z as i,t as c,e as f,h as m,G as l,E as u}from"./calfSystem-dfa26790.js"
import{p as d}from"./parseDateAsTimestamp-5cae868a.js"
let p,C
function h(t,n){let a="old"
const o=d(l(n.cells[t]))
return function(t,n){return t>20&&n<=C}((p-o)/6e4,o)||(a=o>C?"new":"seen"),[n,a]}function b(t,[n,a]){const o=n.rowIndex+1
return t[a]?t[a]={min:Math.min(t[a].min,o),max:Math.max(t[a].min,o)}:t[a]={min:o,max:o},t}function g(t,[n,{min:a,max:o}]){return`.fshLogColoring tr:nth-of-type(${t}n+${a}):nth-of-type(-${t}n+${o}) {background-color: ${"old"===n?"#CD9E4B":"#F5F298"};}`}function j(a,e,r){const i=n(r.rows,3,0).map(c(h,e))
!function(t,n){"Chat"===t&&n.filter((([,t])=>"old"!==t)).map((([t])=>s(u,t))).forEach(o)}(a,i)
const l=function(t,n){const a="Chat"===t?4:2
return f(n.filter((([,t])=>"seen"!==t)).reduce(b,{})).map(c(g,a))}(a,i)
l.length&&m(document.body,t(l.join("\n")))}function x(t,n,o){o.classList.add("fshLogColoring"),p=(new Date).setUTCSeconds(0,0)-1
const s=`last${t}Check`
C=function(t){return e(t)||p}(s),j(t,n,o),r(o,a),i(s,p)}function y(t,n){if(!e("enableLogColoring"))return
const a=function(t){return s("Chat"===t?"#pCC table table table table":"#pCC > table:last-of-type")}(t)
a&&x(t,n,a)}export{y as a}
//# sourceMappingURL=addLogColoring-14811dca.js.map
