import{c as r}from"./currentGuildId-574c8e9f.js"
import{D as t,aW as e,bE as f}from"./calfSystem-d3f0a380.js"
let n,a,s,c
function o(){return n||(a=t(`#pCC a[href^="${e}"]`),n=!0),a}function u(){return s||(c=function(){const r=o()
if(r){const t=f.exec(r.href)
if(t)return Number(t[1])}}()===r(),s=!0),c}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-ed50976c.js.map
