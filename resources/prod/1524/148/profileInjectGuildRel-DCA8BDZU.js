import{al as e,ad as s,aq as t,x as a,aL as o,cf as r}from"./calfSystem-BldO1y8X.js"
import{r as n}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{g as l,a as i}from"./getIsOwnGuild-0K3q2nIc.js"
import{g as d}from"./profile-DR_nIV2j.js"
import"./colouredDots-bfBoZQDA.js"
import"./batch-CbJNJscd.js"
import"./onlineDot-DorFY6zx.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-DRfjQ-m1.js"
import"./formToUrl-BEp0G_53.js"
import"./doStatTotal-B7XAt0we.js"
const f=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],p=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function c(e){const s=r(e)
return s?s.map(n).map(o):[]}function m(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=p.map((([e,s])=>[c(e),s])),t=n(o(e)),a=s.find((([e])=>e.includes(t)))
if(a)return a[1]}(s(t))}function u(e){const s=m(e)
s&&function(e,s){const[,o,r]=f.find((([e])=>e===s))
e.parentNode.classList.add(o)
const n=t(r)
var l
n&&n.length>0&&a(e.parentNode,`<br>${l=n,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(e,s)}function g(){const s=l()
s?u(s):d()&&e("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-DCA8BDZU.js.map
