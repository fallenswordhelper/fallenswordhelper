import{c as s}from"./closestTd-3249f5a4.js"
import{f as e}from"./assets-4b152e49.js"
import{D as t,G as o}from"./calfSystem-c91a5c89.js"
import{g as c,s as r}from"./idb-ba7ef5fa.js"
import"./closest-8b679b7a.js"
function a(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(o(s(e)))[1]}(t)),e}function f(s){const o=s||{},c=t('#pCC img[vspace="4"]').slice(1)
o.moves=c.reduce(a,{}),r(e,o)}function m(){c(e).then(f)}export default m
//# sourceMappingURL=store-9e17f4cd.js.map
