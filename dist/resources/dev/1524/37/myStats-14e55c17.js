import{a8 as e,c as r}from"./calfSystem-5d0c721b.js"
import{g as t}from"./getProfile-982b1370.js"
import{p as n}from"./playerName-6d380f14.js"
import{g as s,s as a}from"./idb-a2aaccdb.js"
function f(e){return a("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(f)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():s("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-14e55c17.js.map
