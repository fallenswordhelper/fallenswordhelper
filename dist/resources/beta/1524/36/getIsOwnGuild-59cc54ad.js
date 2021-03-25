import{c as r}from"./currentGuildId-014a0323.js"
import{D as t,bu as e,by as n}from"./calfSystem-4a40365f.js"
let a,f,s,o
function u(){return a||(f=t(`#pCC a[href^="${e}"]`),a=!0),f}function c(){return s||(o=function(){const r=u()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),s=!0),o}export{c as a,u as g}
//# sourceMappingURL=getIsOwnGuild-59cc54ad.js.map
