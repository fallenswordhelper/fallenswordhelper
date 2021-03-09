import{c as s}from"./closestTd-61af6bb5.js"
import{f as e}from"./assets-1497d9b7.js"
import{D as t,G as o}from"./calfSystem-c07e3259.js"
import{g as c,s as r}from"./idb-dd65ea6c.js"
import"./closest-f906514d.js"
function f(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(o(s(e)))[1]}(t)),e}function m(s){const o=s||{},c=t('#pCC img[vspace="4"]').slice(1)
o.moves=c.reduce(f,{}),r(e,o)}function n(){c(e).then(m)}export default n
//# sourceMappingURL=store-599e1eed.js.map
