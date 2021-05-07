import{a8 as e,c as r}from"./calfSystem-3cb2f93e.js"
import{g as t}from"./getProfile-7ebbf2f4.js"
import{p as f}from"./playerName-9a988c39.js"
import{g as n,s}from"./idb-c9ce87e3.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-259c633e.js.map
