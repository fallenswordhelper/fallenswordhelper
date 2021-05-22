import{c as r}from"./currentGuildId-e0011880.js"
import{D as t,c5 as e,by as n}from"./calfSystem-6ad077b7.js"
let s,a,c,f
function o(){return s||(a=t(`#pCC a[href^="${e}"]`),s=!0),a}function u(){return c||(f=function(){const r=o()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),c=!0),f}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-434e3a23.js.map
