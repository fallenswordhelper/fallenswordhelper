import{c as r}from"./currentGuildId-0e53e6a7.js"
import{C as e,bt as t,bv as n}from"./calfSystem-c07e3259.js"
let s,a,c,f
function o(){return s||(a=e(`#pCC a[href^="${t}"]`),s=!0),a}function u(){return c||(f=function(){const r=o()
if(r){const e=n.exec(r.href)
if(e)return Number(e[1])}}()===r(),c=!0),f}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-66002b4d.js.map
