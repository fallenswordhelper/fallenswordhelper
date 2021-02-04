import{a5 as e,c as r}from"./calfSystem-0708a9bb.js"
import{g as t}from"./getProfile-16796490.js"
import{p as n}from"./playerName-e75bbf9f.js"
import{g as f,s}from"./idb-9ebd251c.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():f("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-aba8e6da.js.map
