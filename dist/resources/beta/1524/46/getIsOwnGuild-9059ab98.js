import{c as r}from"./currentGuildId-96726c8f.js"
import{D as t,by as e,bD as f}from"./calfSystem-cbf77dd7.js"
let n,c,s,o
function a(){return n||(c=t(`#pCC a[href^="${e}"]`),n=!0),c}function u(){return s||(o=function(){const r=a()
if(r){const t=f.exec(r.href)
if(t)return Number(t[1])}}()===r(),s=!0),o}export{u as a,a as g}
//# sourceMappingURL=getIsOwnGuild-9059ab98.js.map
