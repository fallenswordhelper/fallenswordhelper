import{D as t,N as n,o,X as e,a4 as a,s,l as r,f as i,i as l}from"./calfSystem-5545a3e6.js"
import{o as c}from"./openQuickBuffByName-790a8d74.js"
import{d as f}from"./dataRows-7b7ef266.js"
import{c as m}from"./createStyle-b74477ed.js"
import{p as u}from"./parseDateAsTimestamp-d25abda3.js"
let p,d
function b(t){l(t.cells[1],' <button class="fshBl fshBls">[b]</button>')}function h(t){var n;(n=t.target).classList.contains("fshBl")&&n.previousElementSibling&&c(a(t.target.previousElementSibling))}function C(t,n){let o="old"
const e=u(a(n.cells[t]))
return function(t,n){return t>20&&n<=d}((p-e)/6e4,e)||(o=e>d?"new":"seen"),[n,o]}function g(t,[n,o]){const e=n.rowIndex+1
return t[o]?t[o]={min:Math.min(t[o].min,e),max:Math.max(t[o].min,e)}:t[o]={min:e,max:e},t}function y(t,[n,{min:o,max:e}]){return`.fshLogColoring tr:nth-of-type(${t}n+${o}):nth-of-type(-${t}n+${e}) {background-color: ${"old"===n?"#CD9E4B":"#F5F298"};}`}function j(t,n,o){const e=f(o.rows,3,0).map(s(C,n))
!function(t,n){"Chat"===t&&n.filter(([,t])=>"old"!==t).map(([t])=>t).forEach(b)}(t,e)
const a=e.filter(([,t])=>"seen"!==t).reduce(g,{}),l="Chat"===t?4:2,c=r(a).map(s(y,l))
c.length&&i(document.body,m(c.join("\n")))}function x(n,a,s){s.classList.add("fshLogColoring"),p=(new Date).setUTCSeconds(0,0)-1
const r=`last${n}Check`
d=function(n){return t(n)||p}(r),j(n,a,s),o(s,h),e(r,p)}function B(o,e){if(!t("enableLogColoring"))return
const a=function(t){return n("Chat"===t?"#pCC table table table table":"#pCC > table:last-of-type")}(o)
a&&x(o,e,a)}export{B as a}
//# sourceMappingURL=addLogColoring-f20275fa.js.map
