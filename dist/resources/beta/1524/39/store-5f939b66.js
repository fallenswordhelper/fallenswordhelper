import{c as s}from"./closestTd-67086b9a.js"
import{f as e}from"./assets-b1b89ba1.js"
import{E as t,H as o}from"./calfSystem-26fbeaeb.js"
import{g as r,s as a}from"./idb-7ea76af7.js"
import"./closest-97a04dcf.js"
function c(e,t){return e[/(\d+)\.png/.exec(t.src)[1]]=Number(function(e){return/(\d)$/.exec(o(s(e)))[1]}(t)),e}function f(s){const o=s||{},r=t('#pCC img[vspace="4"]').slice(1)
o.moves=r.reduce(c,{}),a(e,o)}function m(){r(e).then(f)}export default m
//# sourceMappingURL=store-5f939b66.js.map
