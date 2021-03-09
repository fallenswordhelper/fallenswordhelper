import{a5 as e,c as r}from"./calfSystem-793da633.js"
import{g as t}from"./getProfile-b68e9095.js"
import{p as n}from"./playerName-5c267470.js"
import{g as s,s as f}from"./idb-e7344221.js"
function a(e){return f("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():s("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-613f3819.js.map
