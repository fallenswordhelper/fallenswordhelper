import{aj as e,aa as s,ao as t,z as a,aL as o,cd as r}from"./calfSystem-BGW9cdWN.js"
import{r as n}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{g as l,a as i}from"./getIsOwnGuild-UDEIYbvy.js"
import{g as d}from"./profile-C0BRtbZB.js"
import"./colouredDots-CgtLsOzx.js"
import"./batch-CqnDRKjm.js"
import"./onlineDot-CgFdovI4.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-CcvGNLGd.js"
import"./formToUrl-BkW6Pnxi.js"
import"./doStatTotal-BqmXubRh.js"
const c=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],f=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=r(e)
return s?s.map(n).map(o):[]}function m(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=f.map((([e,s])=>[p(e),s])),t=n(o(e)),a=s.find((([e])=>e.includes(t)))
if(a)return a[1]}(s(t))}function u(e){const s=m(e)
s&&function(e,s){const[,o,r]=c.find((([e])=>e===s))
e.parentNode.classList.add(o)
const n=t(r)
var l
n&&n.length>0&&a(e.parentNode,`<br>${l=n,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(e,s)}function g(){const s=l()
s?u(s):d()&&e("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-BxPmr5Ty.js.map
