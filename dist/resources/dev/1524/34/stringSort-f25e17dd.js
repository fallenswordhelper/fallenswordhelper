import{a as t}from"./alpha-18b53f44.js"
import{aJ as s,a4 as r,ae as a,c as n}from"./calfSystem-c07e3259.js"
function o(t,n,o){const e=function(t,s,n){let o=t
const e=s.split("."),c=e.length
for(let t=0;t<c;t+=1){if(r(!o,!a(o)))return n
o=o[e[t]]}return o}(t,n,o)
return s(e)?o:e}function e(t){return n.sortAsc?t:-t}function c(s,r){const a=o(s,n.sortBy,"a"),c=o(r,n.sortBy,"a")
return e(t(a,c))}export{c as a,o as p,e as s}
//# sourceMappingURL=stringSort-f25e17dd.js.map
