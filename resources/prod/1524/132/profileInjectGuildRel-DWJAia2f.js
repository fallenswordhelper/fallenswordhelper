import{ae as s,a8 as t,ai as e,v as r,at as o}from"./calfSystem-Dh7h0wep.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-B8PKPURg.js"
import{g as l,a as n}from"./getIsOwnGuild-Nv4Z1UKt.js"
import{g as p}from"./profile-JZ0bTAPs.js"
import"./csvSplit-Cunw4Oqp.js"
import"./colouredDots-aquXZFo8.js"
import"./batch-vzbqJUpX.js"
import"./lastActivity-B15cvFkN.js"
import"./regExpGroups-RxvH_Sj4.js"
import"./onlineDot-Df2mwIiq.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-D5K_4yIl.js"
import"./formToUrl-BkoYGugZ.js"
import"./doStatTotal-9DHaKp1F.js"
import"./asInt-DPj71rxF.js"
import"./valueText-oM1uOCPH.js"
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
//# sourceMappingURL=profileInjectGuildRel-DWJAia2f.js.map
