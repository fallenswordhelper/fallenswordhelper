import{c as r}from"./currentGuildId-3f5ba5ad.js"
import{D as t,aW as a,bE as e}from"./calfSystem-6a3c85e0.js"
let n,f,s,c
function o(){return n||(f=t(`#pCC a[href^="${a}"]`),n=!0),f}function u(){return s||(c=function(){const r=o()
if(r){const t=e.exec(r.href)
if(t)return Number(t[1])}}()===r(),s=!0),c}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-156821e7.js.map
