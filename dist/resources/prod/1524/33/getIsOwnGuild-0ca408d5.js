import{c as r}from"./currentGuildId-c383c2b8.js"
import{C as t,c5 as c,br as e}from"./calfSystem-0708a9bb.js"
let n,s,a,f
function o(){return n||(s=t(`#pCC a[href^="${c}"]`),n=!0),s}function u(){return a||(f=function(){const r=o()
if(r){const t=e.exec(r.href)
if(t)return Number(t[1])}}()===r(),a=!0),f}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-0ca408d5.js.map
