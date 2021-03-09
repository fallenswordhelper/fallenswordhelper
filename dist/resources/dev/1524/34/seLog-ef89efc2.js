import{w as t,t as e,U as n}from"./calfSystem-c07e3259.js"
import{g as o,s}from"./idb-dd65ea6c.js"
function r(){return t({cmd:"superelite"})}let c,i,u
function a(){i&&(window.clearTimeout(i),i=!1),u&&(window.clearInterval(u),u=!1)}function f(t,e){const n=t-e.time,o=e.creature.name.replace(" (Super Elite)","");(!c.se[o]||c.se[o]<n)&&(c.se[o]=n)}function l(t){(function(t){return t&&t.t})(t)&&function(t){const n=Number(t.t.split(" ")[1])
c||(c={lastUpdate:0,se:{}}),c.lastUpdate=n
const o=t.r
o&&(o.forEach(e(f,n)),s("fsh_seLog",c))}(t)}function d(){return r().then(l)}function m(){return a(),u=window.setInterval(d,3e5),d()}function p(){const t=n-(c&&c.lastUpdate||0)
t>=600?m():i=window.setTimeout(m,1e3*(600-t))}function w(t){t&&(c=t)}function h(){return o("fsh_seLog").then(w)}function U(){h().then(p)}export{a as disableBackgroundChecks,m as doBackgroundCheck,h as getFshSeLog,c as oldLog,U as seLog}
//# sourceMappingURL=seLog-ef89efc2.js.map
