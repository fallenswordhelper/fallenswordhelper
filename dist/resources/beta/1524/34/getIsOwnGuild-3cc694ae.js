import{c as r}from"./currentGuildId-8fb4e32d.js"
import{C as t,bs as e,bu as f}from"./calfSystem-dfa26790.js"
let n,s,a,o
function u(){return n||(s=t(`#pCC a[href^="${e}"]`),n=!0),s}function c(){return a||(o=function(){const r=u()
if(r){const t=f.exec(r.href)
if(t)return Number(t[1])}}()===r(),a=!0),o}export{c as a,u as g}
//# sourceMappingURL=getIsOwnGuild-3cc694ae.js.map
