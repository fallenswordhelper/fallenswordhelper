import{a6 as t,a4 as s,ak as n,c as r,bB as a}from"./calfSystem-db2edbef.js"
function o(r,a,o){const e=function(t,r,a){let o=t
const e=r.split("."),c=e.length
for(let t=0;t<c;t+=1){if(s(!o,!n(o)))return a
o=o[e[t]]}return o}(r,a,o)
return t(e)?o:e}function e(t){return r.sortAsc?t:-t}function c(t,s){const n=o(t,r.sortBy,"a"),c=o(s,r.sortBy,"a")
return e(a(n,c))}export{c as a,o as p,e as s}
//# sourceMappingURL=stringSort-9c64c0cd.js.map