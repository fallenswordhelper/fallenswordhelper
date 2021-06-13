import{a6 as e,c as r}from"./calfSystem-ae2e69af.js"
import{g as t}from"./getProfile-8130640f.js"
import{p as n}from"./playerName-1b929217.js"
import{g as f,s}from"./idb-225659e6.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():f("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-76b40e27.js.map
