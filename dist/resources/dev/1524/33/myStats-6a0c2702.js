import{a6 as e,c as r}from"./calfSystem-37f70deb.js"
import{g as t}from"./getProfile-0eddc751.js"
import{p as n}from"./playerName-fa80c59b.js"
import{g as f,s}from"./idb-416129aa.js"
function a(e){return s("fsh_selfProfile",e),e}function o(r){return r?{...r,lastUpdate:e}:r}function i(){return t(n()).then(o).then(a)}function m(t){return!t||t.lastUpdate<e-r.allyEnemyOnlineRefreshTime?i():t}function l(e){return e?i():f("fsh_selfProfile").then(m)}export{l as m}
//# sourceMappingURL=myStats-6a0c2702.js.map
