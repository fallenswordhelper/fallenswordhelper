import{J as e,a5 as t,au as a}from"./calfSystem-dfa26790.js"
import{i as r}from"./intValue-d2a6f461.js"
import{v as s}from"./valueText-6c17ddd6.js"
import{p as o}from"./padZ-d4e02992.js"
function n(t){return r(s(e(t)))}function d(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var n
if(s)return`<dd>${n=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(n.getHours())}:${o(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${o(n.getDate())}/${a[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{n as a,d as t}
//# sourceMappingURL=timeBox-67b3c53e.js.map
