import{a6 as e,c as r}from"./calfSystem-e1e858cd.js"
import{g as t}from"./getProfile-bf79b6fb.js"
import{p as f}from"./playerName-26e59290.js"
import{g as n,s}from"./idb-ef443609.js"
function o(e){return s("fsh_selfProfile",e),e}function a(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(a).then(o)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-a8dc19ff.js.map
