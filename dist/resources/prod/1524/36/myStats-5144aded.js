import{a7 as e,c as r}from"./calfSystem-e7bde0c3.js"
import{g as t}from"./getProfile-74316bba.js"
import{p as n}from"./playerName-523ac3f3.js"
import{g as a,s}from"./idb-47978eaa.js"
function f(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(f)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():a("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-5144aded.js.map
