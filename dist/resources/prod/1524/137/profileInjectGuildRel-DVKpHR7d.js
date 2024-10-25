import{ae as s,a8 as t,ai as e,v as r,at as o}from"./calfSystem-DZGU7L1H.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-CIWCoW3n.js"
import{g as l,a as n}from"./getIsOwnGuild-COx02dfm.js"
import{g as p}from"./profile-DETzIrR5.js"
import"./csvSplit-BFxz8yXC.js"
import"./colouredDots-BjlEZWIT.js"
import"./batch-C43pMbNt.js"
import"./lastActivity-BMLtWljO.js"
import"./regExpGroups-Dx0dzQVf.js"
import"./onlineDot-DjK5n5WS.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-ee1pG6cx.js"
import"./formToUrl-BOvZ_tnn.js"
import"./doStatTotal-BQCP8rxV.js"
import"./asInt-BEghcCcW.js"
import"./valueText-BpUI1ICU.js"
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
//# sourceMappingURL=profileInjectGuildRel-DVKpHR7d.js.map
