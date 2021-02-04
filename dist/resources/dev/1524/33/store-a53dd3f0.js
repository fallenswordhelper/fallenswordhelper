import{c as s}from"./closestTd-aefd4747.js"
import{f as e}from"./assets-4b152e49.js"
import{D as t,G as o}from"./calfSystem-37f70deb.js"
import{g as r,s as c}from"./idb-416129aa.js"
import"./closest-8b679b7a.js"
function a(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(o(s(e)))[1]}(t)),e}function f(s){const o=s||{},r=t('#pCC img[vspace="4"]').slice(1)
o.moves=r.reduce(a,{}),c(e,o)}function m(){r(e).then(f)}export default m
//# sourceMappingURL=store-a53dd3f0.js.map
