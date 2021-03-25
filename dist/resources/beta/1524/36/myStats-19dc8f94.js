import{a7 as e,c as r}from"./calfSystem-4a40365f.js"
import{g as t}from"./getProfile-e1217259.js"
import{p as f}from"./playerName-9305cfda.js"
import{g as n,s}from"./idb-2c15fd0c.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-19dc8f94.js.map
