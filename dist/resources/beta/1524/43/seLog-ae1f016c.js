import{x as t,$ as n,t as e,V as o}from"./calfSystem-1d588248.js"
import{g as s,s as r}from"./idb-dfc3696a.js"
function i(){return t({cmd:"superelite"})}let c,u,a
function f(){u&&(window.clearTimeout(u),u=!1),a&&(window.clearInterval(a),a=!1)}function l(t,n){const e=t-n.time,o=n.creature.name.replace(" (Super Elite)","");(!c.se[o]||c.se[o]<e)&&(c.se[o]=e)}function d(t){(function(t){return t&&t.t})(t)&&function(t){const n=Number(t.t.split(" ")[1])
c||(c={lastUpdate:0,se:{}}),c.lastUpdate=n
const o=t.r
o&&(o.forEach(e(l,n)),r("fsh_seLog",c))}(t)}function m(){return n(i).then(d)}function p(){return f(),a=window.setInterval(m,3e5),m()}function w(){const t=o-(c&&c.lastUpdate||0)
t>=600?p():u=window.setTimeout(p,1e3*(600-t))}function h(t){t&&(c=t)}function g(){return s("fsh_seLog").then(h)}function U(){g().then(w)}export{f as disableBackgroundChecks,p as doBackgroundCheck,g as getFshSeLog,c as oldLog,U as seLog}
//# sourceMappingURL=seLog-ae1f016c.js.map
