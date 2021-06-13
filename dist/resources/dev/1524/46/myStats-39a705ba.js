import{a7 as e,c as r}from"./calfSystem-d3f0a380.js"
import{g as t}from"./getProfile-31c8f504.js"
import{p as f}from"./playerName-9d5fb2c2.js"
import{g as n,s}from"./idb-13440348.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-39a705ba.js.map
