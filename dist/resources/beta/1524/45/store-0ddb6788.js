import{c as s}from"./closest-8e46d454.js"
import{aB as e,E as r,H as t}from"./calfSystem-ae2e69af.js"
import{f as o}from"./assets-38ff398f.js"
import{g as a,s as f}from"./idb-225659e6.js"
function c(r){return/(\d)$/.exec(t((o=r,s(e,o))))[1]
var o}function n(s,e){return s[/(\d+)\.png/.exec(e.src)[1]]=Number(c(e)),s}function m(s){const e=s||{},t=r('#pCC img[vspace="4"]').slice(1)
e.moves=t.reduce(n,{}),f(o,e)}function i(){a(o).then(m)}export default i
//# sourceMappingURL=store-0ddb6788.js.map
