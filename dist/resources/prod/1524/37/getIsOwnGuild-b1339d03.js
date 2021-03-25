import{c as r}from"./currentGuildId-a7e07ffc.js"
import{D as e,c6 as t,bv as c}from"./calfSystem-60c20ae9.js"
let f,n,a,s
function o(){return f||(n=e(`#pCC a[href^="${t}"]`),f=!0),n}function u(){return a||(s=function(){const r=o()
if(r){const e=c.exec(r.href)
if(e)return Number(e[1])}}()===r(),a=!0),s}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-b1339d03.js.map
