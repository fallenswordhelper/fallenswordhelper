import{av as e,l as s,aA as t,a2 as a,aW as o,cm as r}from"./calfSystem-79LsojAC.js"
import{r as n}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{g as l,a as i}from"./getIsOwnGuild-W3EIOpyf.js"
import{g as p}from"./profile-B_YzIzou.js"
import"./colouredDots-DchJRC_Z.js"
import"./batch-BGPP456i.js"
import"./onlineDot-XDIE_fQc.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-c1dihHnz.js"
import"./formToUrl-CqnZfaJL.js"
import"./doStatTotal-tBEj9xvS.js"
const c=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],d=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function f(e){const s=r(e)
return s?s.map(n).map(o):[]}function m(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=d.map(([e,s])=>[f(e),s]),t=n(o(e)),a=s.find(([e])=>e.includes(t))
if(a)return a[1]}(s(t))}function u(e){const s=m(e)
s&&function(e,s){const[,o,r]=c.find(([e])=>e===s)
e.parentNode.classList.add(o)
const n=t(r)
var l
n&&n.length>0&&a(e.parentNode,`<br>${l=n,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(e,s)}function g(){const s=l()
s?u(s):p()&&e("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-DXJbvzXO.js.map
