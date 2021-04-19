import{x as t,$ as n,t as e,V as o}from"./calfSystem-b31aba65.js"
import{g as s,s as r}from"./idb-71729176.js"
function i(){return t({cmd:"superelite"})}let a,c,u
function f(){c&&(window.clearTimeout(c),c=!1),u&&(window.clearInterval(u),u=!1)}function l(t,n){const e=t-n.time,o=n.creature.name.replace(" (Super Elite)","");(!a.se[o]||a.se[o]<e)&&(a.se[o]=e)}function m(t){(function(t){return t&&t.t})(t)&&function(t){const n=Number(t.t.split(" ")[1])
a||(a={lastUpdate:0,se:{}}),a.lastUpdate=n
const o=t.r
o&&(o.forEach(e(l,n)),r("fsh_seLog",a))}(t)}function p(){return n(i).then(m)}function d(){return f(),u=window.setInterval(p,3e5),p()}function w(){const t=o-(a&&a.lastUpdate||0)
t>=600?d():c=window.setTimeout(d,1e3*(600-t))}function h(t){t&&(a=t)}function b(){return s("fsh_seLog").then(h)}function g(){b().then(w)}export{f as disableBackgroundChecks,d as doBackgroundCheck,b as getFshSeLog,a as oldLog,g as seLog}
//# sourceMappingURL=seLog-1bcd910b.js.map
