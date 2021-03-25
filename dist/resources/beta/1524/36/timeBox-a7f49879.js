import{K as e,a7 as t,aw as a}from"./calfSystem-4a40365f.js"
import{i as r}from"./intValue-ca51a3c0.js"
import{v as s}from"./valueText-1577f4a8.js"
import{p as o}from"./padZ-0374e903.js"
function n(t){return r(s(e(t)))}function m(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var n
if(s)return`<dd>${n=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(n.getHours())}:${o(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${o(n.getDate())}/${a[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{n as a,m as t}
//# sourceMappingURL=timeBox-a7f49879.js.map
