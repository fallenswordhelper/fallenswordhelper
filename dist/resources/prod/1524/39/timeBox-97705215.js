import{K as e,a7 as t,af as a}from"./calfSystem-fe534823.js"
import{i as r}from"./intValue-f6303c59.js"
import{v as s}from"./valueText-322f7b12.js"
import{p as o}from"./padZ-5c8671fc.js"
function f(t){return r(s(e(t)))}function n(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var f
if(s)return`<dd>${f=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(f.getHours())}:${o(f.getMinutes())} ${f.toLocaleString("en",{weekday:"short"})} ${o(f.getDate())}/${a[f.getMonth()]}/${f.getFullYear()}`}</dd>`}export{f as a,n as t}
//# sourceMappingURL=timeBox-97705215.js.map
