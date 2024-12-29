import{aj as e,ac as s,ao as t,w as a,aJ as o,cc as r}from"./calfSystem-ChzN4Q-P.js"
import{r as n}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{g as l,a as i}from"./getIsOwnGuild-CrlT1ftb.js"
import{g as c}from"./profile-nR9pBkFJ.js"
import"./colouredDots-CLArNr5X.js"
import"./batch-CcQbYj5o.js"
import"./onlineDot-mqfQV1WG.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-CmNeM6n-.js"
import"./formToUrl-DpqdMGU9.js"
import"./doStatTotal-CXgr6RmM.js"
const d=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],f=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=r(e)
return s?s.map(n).map(o):[]}function m(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=f.map((([e,s])=>[p(e),s])),t=n(o(e)),a=s.find((([e])=>e.includes(t)))
if(a)return a[1]}(s(t))}function u(e){const s=m(e)
s&&function(e,s){const[,o,r]=d.find((([e])=>e===s))
e.parentNode.classList.add(o)
const n=t(r)
var l
n&&n.length>0&&a(e.parentNode,`<br>${l=n,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(e,s)}function g(){const s=l()
s?u(s):c()&&e("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-3YS47HVR.js.map
