import{c as t}from"./createStyle-6a43018a.js"
import{d as n}from"./dataRows-60f8d94a.js"
import{a as o,d as a}from"./doBuffLinkClick-ab961b4c.js"
import{I as e,D as s,o as r,_ as i,t as c,e as f,h as l,H as m,F as u}from"./calfSystem-9942149b.js"
import{p as d}from"./parseDateAsTimestamp-214240ae.js"
let p,C
function h(t,n){let o="old"
const a=d(m(n.cells[t]))
return function(t,n){return t>20&&n<=C}((p-a)/6e4,a)||(o=a>C?"new":"seen"),[n,o]}function b(t,[n,o]){const a=n.rowIndex+1
return t[o]?t[o]={min:Math.min(t[o].min,a),max:Math.max(t[o].min,a)}:t[o]={min:a,max:a},t}function g(t,[n,{min:o,max:a}]){return`.fshLogColoring tr:nth-of-type(${t}n+${o}):nth-of-type(-${t}n+${a}) {background-color: ${"old"===n?"#CD9E4B":"#F5F298"};}`}function j(o,e,r,i){const m=n(r.rows,i,0).map(c(h,e))
!function(t,n){"Chat"===t&&n.filter((([,t])=>"old"!==t)).map((([t])=>s(u,t))).forEach(a)}(o,m)
const d=function(t,n){const o="Chat"===t?4:2
return f(n.filter((([,t])=>"seen"!==t)).reduce(b,{})).map(c(g,o))}(o,m)
d.length&&l(document.body,t(d.join("\n")))}function x(t,n,a,s){a.classList.add("fshLogColoring"),p=(new Date).setUTCSeconds(0,0)-1
const c=`last${t}Check`
C=function(t){return e(t)||p}(c),j(t,n,a,s),r(a,o),i(c,p)}function y(t,n,o){if(!e("enableLogColoring"))return
const a=function(t){return["Chat","Leader"].includes(t)?s("#pCC table table table table"):s("#pCC > table:last-of-type")}(t)
a&&x(t,n,a,o)}export{y as a}
//# sourceMappingURL=addLogColoring-66a33a9b.js.map