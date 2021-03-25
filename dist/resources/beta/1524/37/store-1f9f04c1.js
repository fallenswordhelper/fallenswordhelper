import{c as s}from"./closestTd-47c4a94b.js"
import{f as e}from"./assets-48ba956a.js"
import{E as t,H as o}from"./calfSystem-cb2a6f39.js"
import{g as c,s as r}from"./idb-b27e17a7.js"
import"./closest-214539bf.js"
function a(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(o(s(e)))[1]}(t)),e}function f(s){const o=s||{},c=t('#pCC img[vspace="4"]').slice(1)
o.moves=c.reduce(a,{}),r(e,o)}function m(){c(e).then(f)}export default m
//# sourceMappingURL=store-1f9f04c1.js.map
