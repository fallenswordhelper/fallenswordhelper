import{b2 as t}from"./calfSystem-4830a18d.js"
import{n as e}from"./now-6f22aec9.js"
import{p as r}from"./padZ-e55b66a2.js"
function o(o,s){const a=o.split(" ").map((t=>t.slice(0,-1)))
var n
if(a)return`<dd>${n=new Date(e()+1e3*(60*(60*s+Number(a[0]))+Number(a[1]))),`${r(n.getHours())}:${r(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${r(n.getDate())}/${t[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{o as t}
//# sourceMappingURL=timeBox-119f80e4.js.map