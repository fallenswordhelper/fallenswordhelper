import{a7 as e,c as r}from"./calfSystem-60c20ae9.js"
import{g as t}from"./getProfile-a21f618e.js"
import{p as n}from"./playerName-c88ee86b.js"
import{g as f,s}from"./idb-a07bf138.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():f("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-6f8e6371.js.map
