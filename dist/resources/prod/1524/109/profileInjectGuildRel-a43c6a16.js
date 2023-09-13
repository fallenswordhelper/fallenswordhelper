import{ab as s,a5 as t,af as e,v as o,ao as r}from"./calfSystem-2f15e074.js"
import{r as a}from"./replaceDoubleSpace-e5ff7e70.js"
import{s as i}from"./shouldBeArray-fbeee315.js"
import{g as l,a as n}from"./getIsOwnGuild-88b195a2.js"
import{g as p}from"./profile-ce111955.js"
import"./csvSplit-448857a3.js"
import"./colouredDots-9ffa12ec.js"
import"./batch-70cc157a.js"
import"./lastActivity-f32257d7.js"
import"./now-6f22aec9.js"
import"./regExpGroups-54cf6a6f.js"
import"./onlineDot-5faca2a7.js"
import"./executeAll-ef9da8be.js"
import"./interceptSubmit-1b6c609a.js"
import"./formToUrl-c2b3e14d.js"
import"./doStatTotal-86e70b40.js"
import"./asInt-351ebcd4.js"
import"./valueText-4ae65e1f.js"
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
//# sourceMappingURL=profileInjectGuildRel-a43c6a16.js.map
