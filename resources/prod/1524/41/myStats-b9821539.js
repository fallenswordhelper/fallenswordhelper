import{a7 as e,c as r}from"./calfSystem-030d7057.js"
import{g as t}from"./getProfile-99ed2671.js"
import{p as n}from"./playerName-3b098b7d.js"
import{g as s,s as f}from"./idb-ab72cbe2.js"
function a(e){return f("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():s("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-b9821539.js.map
