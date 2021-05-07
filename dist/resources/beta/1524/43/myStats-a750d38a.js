import{a7 as e,c as r}from"./calfSystem-1d588248.js"
import{g as t}from"./getProfile-76213cf6.js"
import{p as f}from"./playerName-95f1f2a8.js"
import{g as n,s}from"./idb-dfc3696a.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(f()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():n("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-a750d38a.js.map
