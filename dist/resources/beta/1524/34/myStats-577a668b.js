import{a5 as e,c as r}from"./calfSystem-dfa26790.js"
import{g as t}from"./getProfile-097c83cc.js"
import{p as n}from"./playerName-b7be03d7.js"
import{g as f,s}from"./idb-93f11a94.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():f("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-577a668b.js.map
