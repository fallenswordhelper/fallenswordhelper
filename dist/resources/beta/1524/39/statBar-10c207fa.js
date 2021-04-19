import{c as a}from"./createAnchor-1d68225c.js"
import{z as e,h as t,o as r,bK as s,ab as n,aA as o,bT as i,bU as f,a9 as c}from"./calfSystem-26fbeaeb.js"
import{i as m}from"./insertElementAfterBegin-959856fa.js"
import"./insertElementBefore-68b894c4.js"
function p(a){a.stopPropagation()}function b(s,n){const o=e(`statbar-${n}`)
if(!o)return
const i=a({href:s}),f=o.parentNode
t(i,o),m(f,i),r(i,p,!0)}function u(){b(s,"character"),b(`${n+o}reserve`,"stamina"),b(i,"equipment"),b(f,"inventory"),b(n,"fsp"),b(`${c}bank`,"gold")}export default u
//# sourceMappingURL=statBar-10c207fa.js.map
