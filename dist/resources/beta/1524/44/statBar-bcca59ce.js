import{c as a}from"./createAnchor-9cd6b523.js"
import{z as t,h as e,o as r,bM as s,aa as n,aD as o,bT as f,bU as i,a8 as c}from"./calfSystem-a8d582b6.js"
import{i as m}from"./insertElementAfterBegin-f2f74df6.js"
import"./insertElementBefore-7c440c87.js"
function p(a){a.stopPropagation()}function b(s,n){const o=t(`statbar-${n}`)
if(!o)return
const f=a({href:s}),i=o.parentNode
e(f,o),m(i,f),r(f,p,!0)}function d(){b(s,"character"),b(`${n+o}reserve`,"stamina"),b(f,"equipment"),b(i,"inventory"),b(n,"fsp"),b(`${c}bank`,"gold")}export default d
//# sourceMappingURL=statBar-bcca59ce.js.map
