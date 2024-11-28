import{ae as s,a8 as t,ai as e,v as r,at as o}from"./calfSystem-KuDT30_2.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-1GGu5onE.js"
import{g as l,a as n}from"./getIsOwnGuild-By3c8PWl.js"
import{g as p}from"./profile-B3zI9-KB.js"
import"./csvSplit-4xUWBldR.js"
import"./colouredDots-Bm42bfVL.js"
import"./batch-DhoZhUBj.js"
import"./lastActivity-BHkXZVkm.js"
import"./regExpGroups-BrPI0Zio.js"
import"./onlineDot-BDqXjFkr.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-CGoY21WA.js"
import"./formToUrl-Ctxw0ZkJ.js"
import"./doStatTotal-D_h7gMbO.js"
import"./asInt-Dqcsg_oM.js"
import"./valueText-DmqsoxRt.js"
import"./intValue-C7nTQec1.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function u(s){const t=i(s)
return t?t.map(a).map(o):[]}function f(e){return n()?(s("guildSelf",t(e)),"self"):function(s){const t=c.map((([s,t])=>[u(s),t])),e=a(o(s)),r=t.find((([s])=>s.includes(e)))
if(r)return r[1]}(t(e))}function d(s){const t=f(s)
t&&function(s,t){const[,o,a]=m.find((([s])=>s===t))
s.parentNode.classList.add(o)
const i=e(a)
var l
i&&i.length>0&&r(s.parentNode,`<br>${l=i,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(s,t)}function g(){const t=l()
t?d(t):p()&&s("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-B1AqfAuI.js.map
