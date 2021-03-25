import{x as t,$ as n,t as e,V as o}from"./calfSystem-5d0c721b.js"
import{g as s,s as r}from"./idb-a2aaccdb.js"
function c(){return t({cmd:"superelite"})}let i,a,u
function f(){a&&(window.clearTimeout(a),a=!1),u&&(window.clearInterval(u),u=!1)}function l(t,n){const e=t-n.time,o=n.creature.name.replace(" (Super Elite)","");(!i.se[o]||i.se[o]<e)&&(i.se[o]=e)}function d(t){(function(t){return t&&t.t})(t)&&function(t){const n=Number(t.t.split(" ")[1])
i||(i={lastUpdate:0,se:{}}),i.lastUpdate=n
const o=t.r
o&&(o.forEach(e(l,n)),r("fsh_seLog",i))}(t)}function m(){return n(c).then(d)}function p(){return f(),u=window.setInterval(m,3e5),m()}function w(){const t=o-(i&&i.lastUpdate||0)
t>=600?p():a=window.setTimeout(p,1e3*(600-t))}function h(t){t&&(i=t)}function b(){return s("fsh_seLog").then(h)}function g(){b().then(w)}export{f as disableBackgroundChecks,p as doBackgroundCheck,b as getFshSeLog,i as oldLog,g as seLog}
//# sourceMappingURL=seLog-a4f51115.js.map
