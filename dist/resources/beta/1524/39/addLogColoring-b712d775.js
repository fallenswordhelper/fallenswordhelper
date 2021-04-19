import{c as t}from"./createStyle-3d60b537.js"
import{d as n}from"./dataRows-9546bc1b.js"
import{a as o,d as a}from"./doBuffLinkClick-fa3c06a7.js"
import{I as e,D as s,o as r,_ as c,t as i,e as f,h as l,H as m,F as u}from"./calfSystem-26fbeaeb.js"
import{p as d}from"./parseDateAsTimestamp-eeab87a4.js"
let p,b
function C(t,n){let o="old"
const a=d(m(n.cells[t]))
return function(t,n){return t>20&&n<=b}((p-a)/6e4,a)||(o=a>b?"new":"seen"),[n,o]}function h(t,[n,o]){const a=n.rowIndex+1
return t[o]?t[o]={min:Math.min(t[o].min,a),max:Math.max(t[o].min,a)}:t[o]={min:a,max:a},t}function g(t,[n,{min:o,max:a}]){return`.fshLogColoring tr:nth-of-type(${t}n+${o}):nth-of-type(-${t}n+${a}) {background-color: ${"old"===n?"#CD9E4B":"#F5F298"};}`}function j(o,e,r,c){const m=n(r.rows,c,0).map(i(C,e))
!function(t,n){"Chat"===t&&n.filter((([,t])=>"old"!==t)).map((([t])=>s(u,t))).forEach(a)}(o,m)
const d=function(t,n){const o="Chat"===t?4:2
return f(n.filter((([,t])=>"seen"!==t)).reduce(h,{})).map(i(g,o))}(o,m)
d.length&&l(document.body,t(d.join("\n")))}function x(t,n,a,s){a.classList.add("fshLogColoring"),p=(new Date).setUTCSeconds(0,0)-1
const i=`last${t}Check`
b=function(t){return e(t)||p}(i),j(t,n,a,s),r(a,o),c(i,p)}function y(t,n,o){if(!e("enableLogColoring"))return
const a=function(t){return["Chat","Leader"].includes(t)?s("#pCC table table table table"):s("#pCC > table:last-of-type")}(t)
a&&x(t,n,a,o)}export{y as a}
//# sourceMappingURL=addLogColoring-b712d775.js.map
