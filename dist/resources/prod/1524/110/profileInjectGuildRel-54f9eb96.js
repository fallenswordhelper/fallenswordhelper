import{aa as s,a4 as t,ae as e,v as o,an as r}from"./calfSystem-929ac228.js"
import{r as a}from"./replaceDoubleSpace-e5ff7e70.js"
import{s as i}from"./shouldBeArray-5710399f.js"
import{g as n,a as l}from"./getIsOwnGuild-7f9bd025.js"
import{g as p}from"./profile-feed58ab.js"
import"./csvSplit-c32f193d.js"
import"./colouredDots-984f2cd0.js"
import"./batch-30d5e16a.js"
import"./lastActivity-422d41fa.js"
import"./now-6f22aec9.js"
import"./regExpGroups-9d5b9f10.js"
import"./onlineDot-2726d9a2.js"
import"./executeAll-ef9da8be.js"
import"./interceptSubmit-9ec04868.js"
import"./formToUrl-25253a60.js"
import"./doStatTotal-aca339cc.js"
import"./asInt-116907f9.js"
import"./valueText-2acfe155.js"
import"./intValue-e1798d0a.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],u=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function c(s){const t=i(s)
return t?t.map(a).map(r):[]}function f(e){return l()?(s("guildSelf",t(e)),"self"):function(s){const t=u.map((([s,t])=>[c(s),t])),e=a(r(s)),o=t.find((([s])=>s.includes(e)))
if(o)return o[1]}(t(e))}function d(s){const t=f(s)
t&&function(s,t){const[,r,a]=m.find((([s])=>s===t))
s.parentNode.classList.add(r)
const i=e(a)
var n
i&&i.length>0&&o(s.parentNode,`<br>${n=i,n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(s,t)}function g(){const t=n()
t?d(t):p()&&s("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-54f9eb96.js.map
