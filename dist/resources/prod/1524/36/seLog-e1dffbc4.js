import{x as t,$ as e,t as n,U as o}from"./calfSystem-e7bde0c3.js"
import{g as s,s as r}from"./idb-47978eaa.js"
function i(){return t({cmd:"superelite"})}let c,a,u
function f(){a&&(window.clearTimeout(a),a=!1),u&&(window.clearInterval(u),u=!1)}function l(t,e){const n=t-e.time,o=e.creature.name.replace(" (Super Elite)","");(!c.se[o]||c.se[o]<n)&&(c.se[o]=n)}function m(t){(function(t){return t&&t.t})(t)&&function(t){const e=Number(t.t.split(" ")[1])
c||(c={lastUpdate:0,se:{}}),c.lastUpdate=e
const o=t.r
o&&(o.forEach(n(l,e)),r("fsh_seLog",c))}(t)}function d(){return e(i).then(m)}function p(){return f(),u=window.setInterval(d,3e5),d()}function w(){const t=o-(c&&c.lastUpdate||0)
t>=600?p():a=window.setTimeout(p,1e3*(600-t))}function h(t){t&&(c=t)}function U(){return s("fsh_seLog").then(h)}function b(){U().then(w)}export{f as disableBackgroundChecks,p as doBackgroundCheck,U as getFshSeLog,c as oldLog,b as seLog}
//# sourceMappingURL=seLog-e1dffbc4.js.map
