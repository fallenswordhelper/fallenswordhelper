import{U as o}from"./calfSystem-7991d843.js"
import{o as t}from"./outputFormat-64398632.js"
function r(r){const s=function(o){let t=o,r=Math.floor(t/60)
t%=60
let s=Math.floor(r/60)
r%=60
const a=Math.floor(s/24)
return s%=24,[a,s,r,t]}(Math.abs(o-r))
return`${t(s[0]," days, ")+t(s[1]," hours, ")+t(s[2]," mins, ")+s[3]} secs`}export{r as f}
//# sourceMappingURL=formatLastActivity-5b1f43ee.js.map
