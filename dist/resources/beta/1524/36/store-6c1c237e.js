import{c as s}from"./closestTd-e5b59e45.js"
import{f as e}from"./assets-7400169d.js"
import{E as t,H as o}from"./calfSystem-4a40365f.js"
import{g as c,s as r}from"./idb-2c15fd0c.js"
import"./closest-7968af48.js"
function f(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(o(s(e)))[1]}(t)),e}function m(s){const o=s||{},c=t('#pCC img[vspace="4"]').slice(1)
o.moves=c.reduce(f,{}),r(e,o)}function n(){c(e).then(m)}export default n
//# sourceMappingURL=store-6c1c237e.js.map
