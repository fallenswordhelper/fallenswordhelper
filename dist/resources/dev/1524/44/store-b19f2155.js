import{c as s}from"./closest-7cf61e52.js"
import{aB as e,E as c,H as r}from"./calfSystem-f7cf24f6.js"
import{f as t}from"./assets-bced98d7.js"
import{g as o,s as f}from"./idb-62b65e66.js"
function a(c){return/(\d)$/.exec(r((t=c,s(e,t))))[1]
var t}function n(s,e){return s[/(\d+)\.png/.exec(e.src)[1]]=Number(a(e)),s}function m(s){const e=s||{},r=c('#pCC img[vspace="4"]').slice(1)
e.moves=r.reduce(n,{}),f(t,e)}function i(){o(t).then(m)}export default i
//# sourceMappingURL=store-b19f2155.js.map
