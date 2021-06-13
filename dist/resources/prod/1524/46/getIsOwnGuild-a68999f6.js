import{c as r}from"./currentGuildId-abfe3237.js"
import{D as t,c7 as e,bA as n}from"./calfSystem-7991d843.js"
let f,s,a,c
function o(){return f||(s=t(`#pCC a[href^="${e}"]`),f=!0),s}function u(){return a||(c=function(){const r=o()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),a=!0),c}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-a68999f6.js.map
