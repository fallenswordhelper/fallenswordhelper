import{c as r}from"./currentGuildId-71878d37.js"
import{D as t,c6 as e,bw as n}from"./calfSystem-9942149b.js"
let s,c,f,o
function a(){return s||(c=t(`#pCC a[href^="${e}"]`),s=!0),c}function u(){return f||(o=function(){const r=a()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),f=!0),o}export{u as a,a as g}
//# sourceMappingURL=getIsOwnGuild-21b09339.js.map
