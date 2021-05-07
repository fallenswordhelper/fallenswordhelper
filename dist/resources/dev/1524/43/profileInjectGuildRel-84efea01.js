import{a0 as e,C as s,I as t,i as o,a2 as r}from"./calfSystem-3cb2f93e.js"
import{g as a,a as i}from"./getIsOwnGuild-562b7cd8.js"
import{g as n}from"./profile-fc940ea0.js"
import{r as f}from"./replaceDoubleSpace-a61a4542.js"
import{s as d}from"./shouldBeArray-4c9f25ec.js"
import{t as l}from"./toLowerCase-999f3196.js"
import"./currentGuildId-a71d60fb.js"
import"./colouredDots-f88b6d7e.js"
import"./batch-60e4331a.js"
import"./onlineDot-6491af90.js"
import"./doStatTotal-2c8b26e5.js"
import"./executeAll-f002e740.js"
import"./playerName-9a988c39.js"
import"./asInt-4d75089c.js"
import"./intValue-fefb28df.js"
import"./valueText-fbd879dc.js"
import"./interceptSubmit-4878d2e6.js"
import"./formToUrl-deef0cd3.js"
import"./csvSplit-4a4cc559.js"
const c=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=d(e)
return s?s.map(f).map(l):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=f(l(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=c.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=a()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-84efea01.js.map
