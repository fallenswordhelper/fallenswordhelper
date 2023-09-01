import{ab as s,a5 as t,af as e,v as o,ao as r}from"./calfSystem-076d7a01.js"
import{r as a}from"./replaceDoubleSpace-e5ff7e70.js"
import{s as i}from"./shouldBeArray-5c4f4d05.js"
import{g as l,a as n}from"./getIsOwnGuild-3f0d5357.js"
import{g as p}from"./profile-f952c191.js"
import"./csvSplit-e532e3e9.js"
import"./colouredDots-d7522def.js"
import"./batch-87a59312.js"
import"./lastActivity-a259f983.js"
import"./now-6f22aec9.js"
import"./regExpGroups-b1898837.js"
import"./onlineDot-08f52acc.js"
import"./executeAll-ef9da8be.js"
import"./interceptSubmit-54adf362.js"
import"./formToUrl-46584106.js"
import"./doStatTotal-5f1c8221.js"
import"./asInt-25fb7d3c.js"
import"./valueText-dd4862a9.js"
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
//# sourceMappingURL=profileInjectGuildRel-0ca228a7.js.map
