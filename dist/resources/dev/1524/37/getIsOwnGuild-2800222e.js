import{c as r}from"./currentGuildId-01b0f97a.js"
import{D as t,bv as e,bz as n}from"./calfSystem-5d0c721b.js"
let f,s,a,c
function o(){return f||(s=t(`#pCC a[href^="${e}"]`),f=!0),s}function u(){return a||(c=function(){const r=o()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),a=!0),c}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-2800222e.js.map
