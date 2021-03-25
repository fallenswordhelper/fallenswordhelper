import{c as r}from"./currentGuildId-24e90d79.js"
import{D as e,c6 as t,bv as n}from"./calfSystem-e7bde0c3.js"
let c,s,f,o
function a(){return c||(s=e(`#pCC a[href^="${t}"]`),c=!0),s}function u(){return f||(o=function(){const r=a()
if(r){const e=n.exec(r.href)
if(e)return Number(e[1])}}()===r(),f=!0),o}export{u as a,a as g}
//# sourceMappingURL=getIsOwnGuild-e6dc0717.js.map
