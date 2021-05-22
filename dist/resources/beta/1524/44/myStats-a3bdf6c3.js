import{a6 as e,c as r}from"./calfSystem-a8d582b6.js"
import{g as t}from"./getProfile-d9b6d52e.js"
import{p as n}from"./playerName-9ba8ea6b.js"
import{g as a,s}from"./idb-d8c9a883.js"
function f(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(f)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():a("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-a3bdf6c3.js.map
