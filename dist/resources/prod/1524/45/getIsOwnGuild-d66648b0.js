import{c as r}from"./currentGuildId-6f6caa9a.js"
import{D as e,c7 as t,bA as a}from"./calfSystem-e1e858cd.js"
let c,n,f,s
function o(){return c||(n=e(`#pCC a[href^="${t}"]`),c=!0),n}function u(){return f||(s=function(){const r=o()
if(r){const e=a.exec(r.href)
if(e)return Number(e[1])}}()===r(),f=!0),s}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-d66648b0.js.map
