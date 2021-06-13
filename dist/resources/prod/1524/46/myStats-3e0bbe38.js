import{a6 as e,c as r}from"./calfSystem-7991d843.js"
import{g as t}from"./getProfile-c6106cad.js"
import{p as n}from"./playerName-541d216c.js"
import{g as s,s as f}from"./idb-89606f1a.js"
function a(e){return f("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():s("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-3e0bbe38.js.map
