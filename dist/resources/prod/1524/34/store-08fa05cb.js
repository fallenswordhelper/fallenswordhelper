import{c as s}from"./closestTd-8c09bafc.js"
import{f as e}from"./assets-1497d9b7.js"
import{D as t,G as o}from"./calfSystem-793da633.js"
import{g as c,s as r}from"./idb-e7344221.js"
import"./closest-f906514d.js"
function f(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(o(s(e)))[1]}(t)),e}function m(s){const o=s||{},c=t('#pCC img[vspace="4"]').slice(1)
o.moves=c.reduce(f,{}),r(e,o)}function n(){c(e).then(m)}export default n
//# sourceMappingURL=store-08fa05cb.js.map
