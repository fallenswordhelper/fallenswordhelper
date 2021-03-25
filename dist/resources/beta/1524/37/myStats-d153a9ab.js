import{a7 as e,c as r}from"./calfSystem-cb2a6f39.js"
import{g as t}from"./getProfile-35a7ea32.js"
import{p as n}from"./playerName-809cf32e.js"
import{g as a,s as f}from"./idb-b27e17a7.js"
function s(e){return f("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(s)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():a("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-d153a9ab.js.map
