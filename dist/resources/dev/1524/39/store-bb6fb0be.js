import{c as s}from"./closestTd-5b0d8ef3.js"
import{f as e}from"./assets-b1b89ba1.js"
import{E as t,H as o}from"./calfSystem-b31aba65.js"
import{g as r,s as c}from"./idb-71729176.js"
import"./closest-97a04dcf.js"
function a(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(o(s(e)))[1]}(t)),e}function f(s){const o=s||{},r=t('#pCC img[vspace="4"]').slice(1)
o.moves=r.reduce(a,{}),c(e,o)}function m(){r(e).then(f)}export default m
//# sourceMappingURL=store-bb6fb0be.js.map
