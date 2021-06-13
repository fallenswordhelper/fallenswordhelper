import{c as a}from"./createAnchor-0fa218c7.js"
import{z as t,h as e,o as r,bP as s,ab as n,aF as o,bW as i,bX as f,a9 as c}from"./calfSystem-6a3c85e0.js"
import{i as m}from"./insertElementAfterBegin-808a95bf.js"
import"./insertElementBefore-c442a2a7.js"
function p(a){a.stopPropagation()}function b(s,n){const o=t(`statbar-${n}`)
if(!o)return
const i=a({href:s}),f=o.parentNode
e(i,o),m(f,i),r(i,p,!0)}function u(){b(s,"character"),b(`${n+o}reserve`,"stamina"),b(i,"equipment"),b(f,"inventory"),b(n,"fsp"),b(`${c}bank`,"gold")}export default u
//# sourceMappingURL=statBar-9e50a5e5.js.map
