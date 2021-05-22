import{c as s}from"./closest-7cf61e52.js"
import{ay as e,E as c,H as r}from"./calfSystem-6ad077b7.js"
import{f as t}from"./assets-bced98d7.js"
import{g as a,s as o}from"./idb-9caca870.js"
function n(c){return/(\d)$/.exec(r((t=c,s(e,t))))[1]
var t}function f(s,e){return s[/(\d+)\.png/.exec(e.src)[1]]=Number(n(e)),s}function m(s){const e=s||{},r=c('#pCC img[vspace="4"]').slice(1)
e.moves=r.reduce(f,{}),o(t,e)}function i(){a(t).then(m)}export default i
//# sourceMappingURL=store-4f94b8df.js.map
