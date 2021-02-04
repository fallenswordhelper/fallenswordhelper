import{a5 as e,c as r}from"./calfSystem-c91a5c89.js"
import{g as t}from"./getProfile-6ab0dd0e.js"
import{p as n}from"./playerName-542e8d11.js"
import{g as a,s as f}from"./idb-ba7ef5fa.js"
function s(e){return f("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(s)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():a("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-2e0ed997.js.map
