import{x as t,$ as e,t as n,U as o}from"./calfSystem-ae2e69af.js"
import{g as s,s as r}from"./idb-225659e6.js"
function i(){return t({cmd:"superelite"})}let a,c,u
function f(){c&&(window.clearTimeout(c),c=!1),u&&(window.clearInterval(u),u=!1)}function l(t,e){const n=t-e.time,o=e.creature.name.replace(" (Super Elite)","");(!a.se[o]||a.se[o]<n)&&(a.se[o]=n)}function m(t){(function(t){return t&&t.t})(t)&&function(t){const e=Number(t.t.split(" ")[1])
a||(a={lastUpdate:0,se:{}}),a.lastUpdate=e
const o=t.r
o&&(o.forEach(n(l,e)),r("fsh_seLog",a))}(t)}function p(){return e(i).then(m)}function d(){return f(),u=window.setInterval(p,3e5),p()}function w(){const t=o-(a&&a.lastUpdate||0)
t>=600?d():c=window.setTimeout(d,1e3*(600-t))}function h(t){t&&(a=t)}function U(){return s("fsh_seLog").then(h)}function g(){U().then(w)}export{f as disableBackgroundChecks,d as doBackgroundCheck,U as getFshSeLog,a as oldLog,g as seLog}
//# sourceMappingURL=seLog-b5caabd3.js.map
