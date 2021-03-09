import{a as t}from"./alpha-18b53f44.js"
import{aG as s,a3 as a,ad as r,c as n}from"./calfSystem-793da633.js"
function o(t,n,o){const c=function(t,s,n){let o=t
const c=s.split("."),e=c.length
for(let t=0;t<e;t+=1){if(a(!o,!r(o)))return n
o=o[c[t]]}return o}(t,n,o)
return s(c)?o:c}function c(t){return n.sortAsc?t:-t}function e(s,a){const r=o(s,n.sortBy,"a"),e=o(a,n.sortBy,"a")
return c(t(r,e))}export{e as a,o as p,c as s}
//# sourceMappingURL=stringSort-943e88a1.js.map
