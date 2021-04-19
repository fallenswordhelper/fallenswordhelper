import{K as e,a8 as t,ag as a}from"./calfSystem-b31aba65.js"
import{i as r}from"./intValue-f6303c59.js"
import{v as s}from"./valueText-bc9c083f.js"
import{p as o}from"./padZ-5c8671fc.js"
function n(t){return r(s(e(t)))}function m(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var n
if(s)return`<dd>${n=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(n.getHours())}:${o(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${o(n.getDate())}/${a[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{n as a,m as t}
//# sourceMappingURL=timeBox-a6b97957.js.map
