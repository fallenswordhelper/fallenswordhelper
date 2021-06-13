import{c as r}from"./currentGuildId-85358166.js"
import{D as e,by as t,bD as n}from"./calfSystem-ae2e69af.js"
let a,f,s,o
function c(){return a||(f=e(`#pCC a[href^="${t}"]`),a=!0),f}function u(){return s||(o=function(){const r=c()
if(r){const e=n.exec(r.href)
if(e)return Number(e[1])}}()===r(),s=!0),o}export{u as a,c as g}
//# sourceMappingURL=getIsOwnGuild-fe98194a.js.map
