import{a8 as e,c as r}from"./calfSystem-eeb1d862.js"
import{g as t}from"./getProfile-52958e59.js"
import{p as n}from"./playerName-018cf18c.js"
import{g as s,s as f}from"./idb-874d144e.js"
function o(e){return f("fsh_selfProfile",e),e}function a(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(a).then(o)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():s("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-fb0c0c4d.js.map
