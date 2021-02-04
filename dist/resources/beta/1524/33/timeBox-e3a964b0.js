import{J as e,a5 as t,au as a}from"./calfSystem-c91a5c89.js"
import{i as r}from"./intValue-55d66e09.js"
import{v as s}from"./valueText-4040d1ec.js"
import{p as o}from"./padZ-df568ed6.js"
function n(t){return r(s(e(t)))}function m(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var n
if(s)return`<dd>${n=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(n.getHours())}:${o(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${o(n.getDate())}/${a[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{n as a,m as t}
//# sourceMappingURL=timeBox-e3a964b0.js.map
