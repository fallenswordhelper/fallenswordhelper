import{Z as e,B as s,H as t,i as o,$ as r}from"./calfSystem-dfa26790.js"
import{g as a,a as i}from"./getIsOwnGuild-3cc694ae.js"
import{g as n}from"./profile-b3fcd6a6.js"
import{r as d}from"./replaceDoubleSpace-847b7e5a.js"
import{s as l}from"./shouldBeArray-b1529a04.js"
import{t as f}from"./toLowerCase-82b2a5d7.js"
import"./currentGuildId-8fb4e32d.js"
import"./colouredDots-4ad39f6b.js"
import"./batch-1e22305c.js"
import"./onlineDot-d83b55b4.js"
import"./doStatTotal-1aaf7cc1.js"
import"./executeAll-7837be0f.js"
import"./playerName-b7be03d7.js"
import"./intValue-d2a6f461.js"
import"./valueText-6c17ddd6.js"
import"./interceptSubmit-c18e4478.js"
import"./formToUrl-4975483d.js"
import"./csvSplit-5e072bd9.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(d).map(f):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=d(f(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function b(){const s=a()
s?j(s):n()&&e("guildSelf","")}export default b
//# sourceMappingURL=profileInjectGuildRel-74e8908c.js.map
