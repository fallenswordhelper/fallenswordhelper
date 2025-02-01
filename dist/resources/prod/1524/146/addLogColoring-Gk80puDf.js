import{c as n}from"./createStyle-D_fU25GK.js"
import{q as t,aq as o,o as a,al as e,aN as s,d as r,i,aH as c,m as f,F as l}from"./calfSystem-DiXGAkgN.js"
import{a as m,d as u}from"./doBuffLinkClick-DtK5GKtp.js"
import{p}from"./parseDateAsTimestamp-DjTMzBBD.js"
function d(){return t("#pCC > table:last-of-type")}let C=0,h=0
function g(n,t){let o="old"
const a=p(c(t.cells[n]))
return function(n,t){return n>20&&t<=h}((C-a)/6e4,a)||(o=a>h?"new":"seen"),[t,o]}function b(n,[t,o]){const a=t.rowIndex+1
return n[o]?n[o]={min:Math.min(n[o].min,a),max:Math.max(n[o].min,a)}:n[o]={min:a,max:a},n}function x(n,[t,{min:o,max:a}]){return`.fshLogColoring tr:nth-of-type(${n}n+${o}):nth-of-type(-${n}n+${a}) {background-color: ${"old"===t?"#CD9E4B":"#F5F298"};}`}function y(o,a,e,c){const m=s(e,c,0).map(r(g,a))
!function(n,o){"Chat"===n&&o.filter((([,n])=>"old"!==n)).map((([n])=>t(f,n))).forEach(u)}(o,m)
const p=function(n,t){const o="Chat"===n?4:2
return l(t.filter((([,n])=>"seen"!==n)).reduce(b,{})).map(r(x,o))}(o,m)
p.length&&i(document.body,n(p.join("\n")))}function L(n,t,s,r){s.classList.add("fshLogColoring"),C=(new Date).setUTCSeconds(0,0)-1
const i=`last${n}Check`
h=function(n){return o(n)||C}(i),y(n,t,s,r),a(s,m),e(i,C)}function $(n,a,e){if(!o("enableLogColoring"))return
const s=function(n){return["Chat","Leader"].includes(n)?t("#pCC table table table table"):d()}(n)
s&&L(n,a,s,e)}export{$ as a,d as g}
//# sourceMappingURL=addLogColoring-Gk80puDf.js.map
