import{a7 as e,c as r}from"./calfSystem-26fbeaeb.js"
import{g as t}from"./getProfile-d835f1ae.js"
import{p as a}from"./playerName-a1b7a513.js"
import{g as f,s as n}from"./idb-7ea76af7.js"
function s(e){return n("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(a()).then(o).then(s)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():f("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-0fbbe5d0.js.map
