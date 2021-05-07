import{c as r}from"./currentGuildId-9fdd6aa9.js"
import{D as t,bv as e,bz as n}from"./calfSystem-1d588248.js"
let a,f,s,o
function c(){return a||(f=t(`#pCC a[href^="${e}"]`),a=!0),f}function u(){return s||(o=function(){const r=c()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),s=!0),o}export{u as a,c as g}
//# sourceMappingURL=getIsOwnGuild-7c692e69.js.map
