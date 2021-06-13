import{a7 as e,c as r}from"./calfSystem-6a3c85e0.js"
import{g as t}from"./getProfile-b9c4b8d7.js"
import{p as n}from"./playerName-338c35a7.js"
import{g as s,s as a}from"./idb-66004b57.js"
function f(e){return a("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(f)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():s("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-bf697fe1.js.map
