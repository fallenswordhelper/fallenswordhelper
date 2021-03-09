import{a6 as e,c as r}from"./calfSystem-c07e3259.js"
import{g as t}from"./getProfile-c197091b.js"
import{p as n}from"./playerName-54b31a1f.js"
import{g as s,s as f}from"./idb-dd65ea6c.js"
function a(e){return f("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():s("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-ea8ed6db.js.map
