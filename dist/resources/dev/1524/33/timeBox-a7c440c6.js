import{J as e,a6 as t,av as a}from"./calfSystem-37f70deb.js"
import{i as r}from"./intValue-55d66e09.js"
import{v as s}from"./valueText-6fb91f3a.js"
import{p as o}from"./padZ-df568ed6.js"
function n(t){return r(s(e(t)))}function f(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var n
if(s)return`<dd>${n=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(n.getHours())}:${o(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${o(n.getDate())}/${a[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{n as a,f as t}
//# sourceMappingURL=timeBox-a7c440c6.js.map
