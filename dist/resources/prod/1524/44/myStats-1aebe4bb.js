import{a6 as e,c as r}from"./calfSystem-6ad077b7.js"
import{g as t}from"./getProfile-dbf285d8.js"
import{p as n}from"./playerName-7e6569ce.js"
import{g as s,s as a}from"./idb-9caca870.js"
function f(e){return a("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(f)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():s("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-1aebe4bb.js.map
