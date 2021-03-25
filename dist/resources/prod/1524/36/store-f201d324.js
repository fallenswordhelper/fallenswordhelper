import{c as s}from"./closestTd-7a780993.js"
import{f as e}from"./assets-7400169d.js"
import{E as t,H as o}from"./calfSystem-e7bde0c3.js"
import{g as r,s as c}from"./idb-47978eaa.js"
import"./closest-7968af48.js"
function a(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(o(s(e)))[1]}(t)),e}function m(s){const o=s||{},r=t('#pCC img[vspace="4"]').slice(1)
o.moves=r.reduce(a,{}),c(e,o)}function n(){r(e).then(m)}export default n
//# sourceMappingURL=store-f201d324.js.map
