import{c as a}from"./createAnchor-e48d6052.js"
import{y as e,h as t,o as r,bF as s,a9 as o,ao as n,bO as i,bP as c,a7 as f}from"./calfSystem-793da633.js"
import{i as m}from"./insertElementAfterBegin-eac20cdb.js"
import"./insertElementBefore-9e5d02cd.js"
function p(a){a.stopPropagation()}function d(s,o){const n=e(`statbar-${o}`)
if(!n)return
const i=a({href:s}),c=n.parentNode
t(i,n),m(c,i),r(i,p,!0)}function b(){d(s,"character"),d(`${o+n}reserve`,"stamina"),d(i,"equipment"),d(c,"inventory"),d(o,"fsp"),d(`${f}bank`,"gold")}export default b
//# sourceMappingURL=statBar-06dc067a.js.map
