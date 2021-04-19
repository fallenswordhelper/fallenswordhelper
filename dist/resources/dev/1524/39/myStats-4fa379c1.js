import{a8 as e,c as r}from"./calfSystem-b31aba65.js"
import{g as t}from"./getProfile-64f99e16.js"
import{p as n}from"./playerName-68c14b2a.js"
import{g as s,s as a}from"./idb-71729176.js"
function f(e){return a("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(f)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():s("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-4fa379c1.js.map
