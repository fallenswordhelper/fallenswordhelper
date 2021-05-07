import{c as s}from"./closestTd-b89e6776.js"
import{f as e}from"./assets-c96edcaf.js"
import{E as t,H as c}from"./calfSystem-9942149b.js"
import{g as o,s as r}from"./idb-6116f2a7.js"
import"./closest-bc1fafe7.js"
function f(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(c(s(e)))[1]}(t)),e}function a(s){const c=s||{},o=t('#pCC img[vspace="4"]').slice(1)
c.moves=o.reduce(f,{}),r(e,c)}function m(){o(e).then(a)}export default m
//# sourceMappingURL=store-73f454bf.js.map
