import{c as r}from"./currentGuildId-d5258e6c.js"
import{D as t,by as e,bC as f}from"./calfSystem-f7cf24f6.js"
let n,c,s,o
function a(){return n||(c=t(`#pCC a[href^="${e}"]`),n=!0),c}function u(){return s||(o=function(){const r=a()
if(r){const t=f.exec(r.href)
if(t)return Number(t[1])}}()===r(),s=!0),o}export{u as a,a as g}
//# sourceMappingURL=getIsOwnGuild-28f77b14.js.map
