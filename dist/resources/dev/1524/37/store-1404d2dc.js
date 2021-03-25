import{c as s}from"./closestTd-5f0e4555.js"
import{f as e}from"./assets-48ba956a.js"
import{E as t,H as c}from"./calfSystem-5d0c721b.js"
import{g as o,s as r}from"./idb-a2aaccdb.js"
import"./closest-214539bf.js"
function a(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(c(s(e)))[1]}(t)),e}function f(s){const c=s||{},o=t('#pCC img[vspace="4"]').slice(1)
c.moves=o.reduce(a,{}),r(e,c)}function m(){o(e).then(f)}export default m
//# sourceMappingURL=store-1404d2dc.js.map
