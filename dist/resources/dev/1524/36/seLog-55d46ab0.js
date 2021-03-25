import{x as t,$ as e,t as n,V as o}from"./calfSystem-eeb1d862.js"
import{g as s,s as r}from"./idb-874d144e.js"
function i(){return t({cmd:"superelite"})}let c,u,a
function f(){u&&(window.clearTimeout(u),u=!1),a&&(window.clearInterval(a),a=!1)}function l(t,e){const n=t-e.time,o=e.creature.name.replace(" (Super Elite)","");(!c.se[o]||c.se[o]<n)&&(c.se[o]=n)}function d(t){(function(t){return t&&t.t})(t)&&function(t){const e=Number(t.t.split(" ")[1])
c||(c={lastUpdate:0,se:{}}),c.lastUpdate=e
const o=t.r
o&&(o.forEach(n(l,e)),r("fsh_seLog",c))}(t)}function m(){return e(i).then(d)}function p(){return f(),a=window.setInterval(m,3e5),m()}function w(){const t=o-(c&&c.lastUpdate||0)
t>=600?p():u=window.setTimeout(p,1e3*(600-t))}function h(t){t&&(c=t)}function b(){return s("fsh_seLog").then(h)}function g(){b().then(w)}export{f as disableBackgroundChecks,p as doBackgroundCheck,b as getFshSeLog,c as oldLog,g as seLog}
//# sourceMappingURL=seLog-55d46ab0.js.map
