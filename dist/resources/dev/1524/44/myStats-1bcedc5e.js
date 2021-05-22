import{a7 as e,c as r}from"./calfSystem-f7cf24f6.js"
import{g as t}from"./getProfile-9279556b.js"
import{p as f}from"./playerName-c3c6c732.js"
import{g as n,s}from"./idb-62b65e66.js"
function o(e){return s("fsh_selfProfile",e),e}function a(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(a).then(o)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-1bcedc5e.js.map
