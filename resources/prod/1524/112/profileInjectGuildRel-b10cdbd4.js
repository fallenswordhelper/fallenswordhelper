import{a9 as s,a3 as t,ad as e,v as o,am as r}from"./calfSystem-4830a18d.js"
import{r as a}from"./replaceDoubleSpace-e5ff7e70.js"
import{s as i}from"./shouldBeArray-7acde5b3.js"
import{g as l,a as n}from"./getIsOwnGuild-ccc04378.js"
import{g as p}from"./profile-83af1ff4.js"
import"./csvSplit-81e99601.js"
import"./colouredDots-ee35ff24.js"
import"./batch-54067b0c.js"
import"./lastActivity-1c838a76.js"
import"./now-6f22aec9.js"
import"./regExpGroups-9a4124f3.js"
import"./onlineDot-64ef932a.js"
import"./executeAll-ef9da8be.js"
import"./interceptSubmit-0ca01d03.js"
import"./formToUrl-824efe66.js"
import"./doStatTotal-331c56c0.js"
import"./asInt-e2e2488f.js"
import"./valueText-ddd10c6c.js"
import"./intValue-e1798d0a.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],u=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function c(s){const t=i(s)
return t?t.map(a).map(r):[]}function d(e){return n()?(s("guildSelf",t(e)),"self"):function(s){const t=u.map((([s,t])=>[c(s),t])),e=a(r(s)),o=t.find((([s])=>s.includes(e)))
if(o)return o[1]}(t(e))}function f(s){const t=d(s)
t&&function(s,t){const[,r,a]=m.find((([s])=>s===t))
s.parentNode.classList.add(r)
const i=e(a)
var l
i&&i.length>0&&o(s.parentNode,`<br>${l=i,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(s,t)}function g(){const t=l()
t?f(t):p()&&s("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-b10cdbd4.js.map
