import{c as r}from"./currentGuildId-cf47b942.js"
import{D as t,c6 as e,bv as f}from"./calfSystem-fe534823.js"
let n,c,s,o
function a(){return n||(c=t(`#pCC a[href^="${e}"]`),n=!0),c}function u(){return s||(o=function(){const r=a()
if(r){const t=f.exec(r.href)
if(t)return Number(t[1])}}()===r(),s=!0),o}export{u as a,a as g}
//# sourceMappingURL=getIsOwnGuild-133e4158.js.map
