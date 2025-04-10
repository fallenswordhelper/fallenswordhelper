import{aj as e,aa as s,ao as t,z as a,aL as o,cd as r}from"./calfSystem-BGOTz8de.js"
import{r as n}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{g as l,a as i}from"./getIsOwnGuild-BuZdCe7Q.js"
import{g as d}from"./profile-BKTjUjcF.js"
import"./colouredDots-BUHZ6q5t.js"
import"./batch-DnPGAgm3.js"
import"./onlineDot-K2TYhqz6.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-CHnAIuBp.js"
import"./formToUrl-RzN0-7i1.js"
import"./doStatTotal-7TiKJNmH.js"
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
//# sourceMappingURL=profileInjectGuildRel-X269x_Jo.js.map
