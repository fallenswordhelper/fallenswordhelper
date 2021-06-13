import{c as s}from"./closest-8e46d454.js"
import{az as e,E as r,H as t}from"./calfSystem-e1e858cd.js"
import{f as o}from"./assets-38ff398f.js"
import{g as c,s as f}from"./idb-ef443609.js"
function a(r){return/(\d)$/.exec(t((o=r,s(e,o))))[1]
var o}function n(s,e){return s[/(\d+)\.png/.exec(e.src)[1]]=Number(a(e)),s}function m(s){const e=s||{},t=r('#pCC img[vspace="4"]').slice(1)
e.moves=t.reduce(n,{}),f(o,e)}function i(){c(o).then(m)}export default i
//# sourceMappingURL=store-e5697156.js.map
