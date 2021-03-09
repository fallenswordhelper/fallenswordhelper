import{c as r}from"./currentGuildId-1aba3c9c.js"
import{C as t,c5 as a,br as c}from"./calfSystem-793da633.js"
let e,n,s,f
function o(){return e||(n=t(`#pCC a[href^="${a}"]`),e=!0),n}function u(){return s||(f=function(){const r=o()
if(r){const t=c.exec(r.href)
if(t)return Number(t[1])}}()===r(),s=!0),f}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-e3da6151.js.map
