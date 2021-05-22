import{c as r}from"./currentGuildId-6d2e1d9d.js"
import{D as t,bx as e,bB as n}from"./calfSystem-a8d582b6.js"
let s,a,f,o
function c(){return s||(a=t(`#pCC a[href^="${e}"]`),s=!0),a}function u(){return f||(o=function(){const r=c()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),f=!0),o}export{u as a,c as g}
//# sourceMappingURL=getIsOwnGuild-16920611.js.map
