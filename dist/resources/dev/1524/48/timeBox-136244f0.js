import{aa as e,au as t}from"./calfSystem-01849445.js"
import{p as a}from"./padZ-b9e73e86.js"
function r(r,o){const s=/([0-9]+)m ([0-9]+)s/.exec(r)
var n
if(s)return`<dd>${n=new Date(e+1e3*(60*(60*o+Number(s[1]))+Number(s[2]))),`${a(n.getHours())}:${a(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${a(n.getDate())}/${t[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{r as t}
//# sourceMappingURL=timeBox-136244f0.js.map
