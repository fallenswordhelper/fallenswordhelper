import{ae as s,a8 as t,ai as e,v as r,at as o}from"./calfSystem-CyLCrHqa.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-COn0EJfA.js"
import{g as l,a as n}from"./getIsOwnGuild--HK11-aH.js"
import{g as p}from"./profile-CAWVMiR9.js"
import"./csvSplit-C11e1rAj.js"
import"./colouredDots-CnrxCdAU.js"
import"./batch-jdMtKUfP.js"
import"./lastActivity-CmZHrtR_.js"
import"./regExpGroups-mnVKS3rG.js"
import"./onlineDot-B3Dg-XBc.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-BRkBno07.js"
import"./formToUrl-BrsMM7SZ.js"
import"./doStatTotal-B9WUQYOt.js"
import"./asInt-4JuHFs_W.js"
import"./valueText-Dp42oFDO.js"
import"./intValue-C7nTQec1.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],u=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function f(s){const t=i(s)
return t?t.map(a).map(o):[]}function c(e){return n()?(s("guildSelf",t(e)),"self"):function(s){const t=u.map((([s,t])=>[f(s),t])),e=a(o(s)),r=t.find((([s])=>s.includes(e)))
if(r)return r[1]}(t(e))}function d(s){const t=c(s)
t&&function(s,t){const[,o,a]=m.find((([s])=>s===t))
s.parentNode.classList.add(o)
const i=e(a)
var l
i&&i.length>0&&r(s.parentNode,`<br>${l=i,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(s,t)}function g(){const t=l()
t?d(t):p()&&s("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-BRYXAek5.js.map
