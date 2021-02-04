import{w as t,t as e,U as n}from"./calfSystem-37f70deb.js"
import{g as o,s}from"./idb-416129aa.js"
function r(){return t({cmd:"superelite"})}let i,c,u
function a(){c&&(window.clearTimeout(c),c=!1),u&&(window.clearInterval(u),u=!1)}function f(t,e){const n=t-e.time,o=e.creature.name.replace(" (Super Elite)","");(!i.se[o]||i.se[o]<n)&&(i.se[o]=n)}function l(t){(function(t){return t&&t.t})(t)&&function(t){const n=Number(t.t.split(" ")[1])
i||(i={lastUpdate:0,se:{}}),i.lastUpdate=n
const o=t.r
o&&(o.forEach(e(f,n)),s("fsh_seLog",i))}(t)}function m(){return r().then(l)}function d(){return a(),u=window.setInterval(m,3e5),m()}function p(){const t=n-(i&&i.lastUpdate||0)
t>=600?d():c=window.setTimeout(d,1e3*(600-t))}function w(t){t&&(i=t)}function h(){return o("fsh_seLog").then(w)}function U(){h().then(p)}export{a as disableBackgroundChecks,d as doBackgroundCheck,h as getFshSeLog,i as oldLog,U as seLog}
//# sourceMappingURL=seLog-ab525ffb.js.map
