import{ab as s,a5 as t,af as e,v as o,ao as r}from"./calfSystem-34913441.js"
import{r as a}from"./replaceDoubleSpace-e5ff7e70.js"
import{s as i}from"./shouldBeArray-4329f859.js"
import{g as l,a as n}from"./getIsOwnGuild-3288533d.js"
import{g as p}from"./profile-3af3aeca.js"
import"./csvSplit-21d1e5f2.js"
import"./colouredDots-13be7fed.js"
import"./batch-868086f2.js"
import"./lastActivity-75095e08.js"
import"./now-6f22aec9.js"
import"./regExpGroups-e9c1f885.js"
import"./onlineDot-82a20501.js"
import"./executeAll-ef9da8be.js"
import"./interceptSubmit-2c6bfafb.js"
import"./formToUrl-4ee925a6.js"
import"./doStatTotal-feca30dd.js"
import"./asInt-f990b3d0.js"
import"./valueText-238d2284.js"
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
//# sourceMappingURL=profileInjectGuildRel-342a338c.js.map
