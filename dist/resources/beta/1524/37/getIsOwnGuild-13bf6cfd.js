import{c as r}from"./currentGuildId-32ce2428.js"
import{D as t,bu as e,by as n}from"./calfSystem-cb2a6f39.js"
let c,f,s,a
function o(){return c||(f=t(`#pCC a[href^="${e}"]`),c=!0),f}function u(){return s||(a=function(){const r=o()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),s=!0),a}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-13bf6cfd.js.map
