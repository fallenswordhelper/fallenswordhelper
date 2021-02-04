import{w as t,t as e,T as n}from"./calfSystem-c91a5c89.js"
import{g as o,s}from"./idb-ba7ef5fa.js"
function r(){return t({cmd:"superelite"})}let c,i,a
function u(){i&&(window.clearTimeout(i),i=!1),a&&(window.clearInterval(a),a=!1)}function f(t,e){const n=t-e.time,o=e.creature.name.replace(" (Super Elite)","");(!c.se[o]||c.se[o]<n)&&(c.se[o]=n)}function l(t){(function(t){return t&&t.t})(t)&&function(t){const n=Number(t.t.split(" ")[1])
c||(c={lastUpdate:0,se:{}}),c.lastUpdate=n
const o=t.r
o&&(o.forEach(e(f,n)),s("fsh_seLog",c))}(t)}function m(){return r().then(l)}function p(){return u(),a=window.setInterval(m,3e5),m()}function d(){const t=n-(c&&c.lastUpdate||0)
t>=600?p():i=window.setTimeout(p,1e3*(600-t))}function w(t){t&&(c=t)}function h(){return o("fsh_seLog").then(w)}function b(){h().then(d)}export{u as disableBackgroundChecks,p as doBackgroundCheck,h as getFshSeLog,c as oldLog,b as seLog}
//# sourceMappingURL=seLog-3bc9c78b.js.map
