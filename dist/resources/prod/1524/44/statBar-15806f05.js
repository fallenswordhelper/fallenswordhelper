import{c as a}from"./createAnchor-c5a7440e.js"
import{z as t,h as e,o as r,bJ as s,aa as n,aB as o,bQ as i,bR as c,a8 as f}from"./calfSystem-6ad077b7.js"
import{i as m}from"./insertElementAfterBegin-28d006b9.js"
import"./insertElementBefore-7c440c87.js"
function p(a){a.stopPropagation()}function b(s,n){const o=t(`statbar-${n}`)
if(!o)return
const i=a({href:s}),c=o.parentNode
e(i,o),m(c,i),r(i,p,!0)}function u(){b(s,"character"),b(`${n+o}reserve`,"stamina"),b(i,"equipment"),b(c,"inventory"),b(n,"fsp"),b(`${f}bank`,"gold")}export default u
//# sourceMappingURL=statBar-15806f05.js.map
