import{c as s}from"./closestTd-4f374c1d.js"
import{f as e}from"./assets-1497d9b7.js"
import{D as t,G as o}from"./calfSystem-dfa26790.js"
import{g as r,s as c}from"./idb-93f11a94.js"
import"./closest-f906514d.js"
function f(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(o(s(e)))[1]}(t)),e}function m(s){const o=s||{},r=t('#pCC img[vspace="4"]').slice(1)
o.moves=r.reduce(f,{}),c(e,o)}function n(){r(e).then(m)}export default n
//# sourceMappingURL=store-e0704e60.js.map
