import{a7 as e,af as t}from"./calfSystem-1d588248.js"
import{p as a}from"./padZ-7f619ae9.js"
function r(r,o){const s=/([0-9]+)m ([0-9]+)s/.exec(r)
var n
if(s)return`<dd>${n=new Date(e+1e3*(60*(60*o+Number(s[1]))+Number(s[2]))),`${a(n.getHours())}:${a(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${a(n.getDate())}/${t[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{r as t}
//# sourceMappingURL=timeBox-32c4c2bb.js.map
