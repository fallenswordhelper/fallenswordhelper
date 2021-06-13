import{a6 as e,c as r}from"./calfSystem-cbf77dd7.js"
import{g as t}from"./getProfile-0a56bf78.js"
import{p as a}from"./playerName-448aa7ca.js"
import{g as f,s as n}from"./idb-82a91df1.js"
function s(e){return n("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(a()).then(o).then(s)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():f("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-4138d69d.js.map
