import{c as r}from"./currentGuildId-c379e204.js"
import{D as t,bv as e,bz as n}from"./calfSystem-b31aba65.js"
let a,s,c,f
function o(){return a||(s=t(`#pCC a[href^="${e}"]`),a=!0),s}function u(){return c||(f=function(){const r=o()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),c=!0),f}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-56564d2a.js.map
