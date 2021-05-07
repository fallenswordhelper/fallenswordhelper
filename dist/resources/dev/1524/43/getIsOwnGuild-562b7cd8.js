import{c as r}from"./currentGuildId-a71d60fb.js"
import{D as t,bw as e,bA as f}from"./calfSystem-3cb2f93e.js"
let n,s,a,c
function o(){return n||(s=t(`#pCC a[href^="${e}"]`),n=!0),s}function u(){return a||(c=function(){const r=o()
if(r){const t=f.exec(r.href)
if(t)return Number(t[1])}}()===r(),a=!0),c}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-562b7cd8.js.map
