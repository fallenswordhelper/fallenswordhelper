import{c as s}from"./closestTd-7cb23105.js"
import{f as e}from"./assets-4b152e49.js"
import{D as t,G as o}from"./calfSystem-0708a9bb.js"
import{g as c,s as r}from"./idb-9ebd251c.js"
import"./closest-8b679b7a.js"
function m(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(o(s(e)))[1]}(t)),e}function n(s){const o=s||{},c=t('#pCC img[vspace="4"]').slice(1)
o.moves=c.reduce(m,{}),r(e,o)}function a(){c(e).then(n)}export default a
//# sourceMappingURL=store-3ad3b0ef.js.map
