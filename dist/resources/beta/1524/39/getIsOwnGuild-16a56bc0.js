import{c as e}from"./currentGuildId-5214ee19.js"
import{D as r,bu as t,by as n}from"./calfSystem-26fbeaeb.js"
let f,s,a,o
function u(){return f||(s=r(`#pCC a[href^="${t}"]`),f=!0),s}function c(){return a||(o=function(){const e=u()
if(e){const r=n.exec(e.href)
if(r)return Number(r[1])}}()===e(),a=!0),o}export{c as a,u as g}
//# sourceMappingURL=getIsOwnGuild-16a56bc0.js.map
