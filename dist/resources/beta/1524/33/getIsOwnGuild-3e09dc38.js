import{c as r}from"./currentGuildId-1acce0c7.js"
import{C as c,bs as t,bu as e}from"./calfSystem-c91a5c89.js"
let n,s,a,f
function o(){return n||(s=c(`#pCC a[href^="${t}"]`),n=!0),s}function u(){return a||(f=function(){const r=o()
if(r){const c=e.exec(r.href)
if(c)return Number(c[1])}}()===r(),a=!0),f}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-3e09dc38.js.map
