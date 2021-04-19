import{a7 as e,c as r}from"./calfSystem-fe534823.js"
import{g as t}from"./getProfile-03c58c40.js"
import{p as a}from"./playerName-faaca46a.js"
import{g as f,s as n}from"./idb-1aaf30fa.js"
function s(e){return n("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(a()).then(o).then(s)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():f("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-ee336f33.js.map
