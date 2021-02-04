import{c as r}from"./currentGuildId-5ba5aa94.js"
import{C as t,bt as e,bv as a}from"./calfSystem-37f70deb.js"
let n,f,s,o
function c(){return n||(f=t(`#pCC a[href^="${e}"]`),n=!0),f}function u(){return s||(o=function(){const r=c()
if(r){const t=a.exec(r.href)
if(t)return Number(t[1])}}()===r(),s=!0),o}export{u as a,c as g}
//# sourceMappingURL=getIsOwnGuild-84f9a15b.js.map
