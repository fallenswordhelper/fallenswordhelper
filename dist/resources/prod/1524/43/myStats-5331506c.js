import{a7 as e,c as r}from"./calfSystem-9942149b.js"
import{g as t}from"./getProfile-ccaddef4.js"
import{p as f}from"./playerName-b83afe17.js"
import{g as n,s}from"./idb-6116f2a7.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-5331506c.js.map
