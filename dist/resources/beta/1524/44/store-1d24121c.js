import{c as s}from"./closest-7cf61e52.js"
import{aA as e,E as c,H as r}from"./calfSystem-a8d582b6.js"
import{f as t}from"./assets-bced98d7.js"
import{g as o,s as a}from"./idb-d8c9a883.js"
function n(c){return/(\d)$/.exec(r((t=c,s(e,t))))[1]
var t}function f(s,e){return s[/(\d+)\.png/.exec(e.src)[1]]=Number(n(e)),s}function m(s){const e=s||{},r=c('#pCC img[vspace="4"]').slice(1)
e.moves=r.reduce(f,{}),a(t,e)}function i(){o(t).then(m)}export default i
//# sourceMappingURL=store-1d24121c.js.map
