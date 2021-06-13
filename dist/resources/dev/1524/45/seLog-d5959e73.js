import{x as t,$ as e,t as n,V as o}from"./calfSystem-6a3c85e0.js"
import{g as s,s as r}from"./idb-66004b57.js"
function i(){return t({cmd:"superelite"})}let c,u,a
function f(){u&&(window.clearTimeout(u),u=!1),a&&(window.clearInterval(a),a=!1)}function l(t,e){const n=t-e.time,o=e.creature.name.replace(" (Super Elite)","");(!c.se[o]||c.se[o]<n)&&(c.se[o]=n)}function m(t){(function(t){return t&&t.t})(t)&&function(t){const e=Number(t.t.split(" ")[1])
c||(c={lastUpdate:0,se:{}}),c.lastUpdate=e
const o=t.r
o&&(o.forEach(n(l,e)),r("fsh_seLog",c))}(t)}function p(){return e(i).then(m)}function d(){return f(),a=window.setInterval(p,3e5),p()}function w(){const t=o-(c&&c.lastUpdate||0)
t>=600?d():u=window.setTimeout(d,1e3*(600-t))}function h(t){t&&(c=t)}function b(){return s("fsh_seLog").then(h)}function g(){b().then(w)}export{f as disableBackgroundChecks,d as doBackgroundCheck,b as getFshSeLog,c as oldLog,g as seLog}
//# sourceMappingURL=seLog-d5959e73.js.map
