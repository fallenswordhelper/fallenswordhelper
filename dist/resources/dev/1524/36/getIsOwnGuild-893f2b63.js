import{c as r}from"./currentGuildId-5370ff7a.js"
import{D as e,bv as t,bz as f}from"./calfSystem-eeb1d862.js"
let n,s,a,o
function c(){return n||(s=e(`#pCC a[href^="${t}"]`),n=!0),s}function u(){return a||(o=function(){const r=c()
if(r){const e=f.exec(r.href)
if(e)return Number(e[1])}}()===r(),a=!0),o}export{u as a,c as g}
//# sourceMappingURL=getIsOwnGuild-893f2b63.js.map
