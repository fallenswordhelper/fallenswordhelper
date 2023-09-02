import{ab as s,a5 as t,af as e,v as o,ao as r}from"./calfSystem-2fff342b.js"
import{r as a}from"./replaceDoubleSpace-e5ff7e70.js"
import{s as i}from"./shouldBeArray-c74e5bdf.js"
import{g as l,a as n}from"./getIsOwnGuild-adb6bf6b.js"
import{g as p}from"./profile-6f240b96.js"
import"./csvSplit-130c4743.js"
import"./colouredDots-9496dfbc.js"
import"./batch-02a48250.js"
import"./lastActivity-051eff5d.js"
import"./now-6f22aec9.js"
import"./regExpGroups-2038386a.js"
import"./onlineDot-0b9da3a6.js"
import"./executeAll-ef9da8be.js"
import"./interceptSubmit-fde9f84f.js"
import"./formToUrl-cfc572ea.js"
import"./doStatTotal-94a01fa9.js"
import"./asInt-45536bb6.js"
import"./valueText-77aa5799.js"
import"./intValue-e1798d0a.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],f=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function u(s){const t=i(s)
return t?t.map(a).map(r):[]}function c(e){return n()?(s("guildSelf",t(e)),"self"):function(s){const t=f.map((([s,t])=>[u(s),t])),e=a(r(s)),o=t.find((([s])=>s.includes(e)))
if(o)return o[1]}(t(e))}function d(s){const t=c(s)
t&&function(s,t){const[,r,a]=m.find((([s])=>s===t))
s.parentNode.classList.add(r)
const i=e(a)
var l
i&&i.length>0&&o(s.parentNode,`<br>${l=i,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(s,t)}function g(){const t=l()
t?d(t):p()&&s("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-d36f9aa2.js.map
