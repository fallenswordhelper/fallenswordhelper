import{Z as e,C as s,I as t,i as o,a0 as r}from"./calfSystem-a8d582b6.js"
import{g as a,a as i}from"./getIsOwnGuild-16920611.js"
import{g as n}from"./profile-6ffdfc9f.js"
import{r as d}from"./replaceDoubleSpace-5ade2d89.js"
import{s as l}from"./shouldBeArray-70713134.js"
import{t as f}from"./toLowerCase-c964d32b.js"
import"./currentGuildId-6d2e1d9d.js"
import"./colouredDots-9f3a15ef.js"
import"./batch-b787972d.js"
import"./onlineDot-76ee782e.js"
import"./doStatTotal-11c05b30.js"
import"./executeAll-4e27c022.js"
import"./playerName-9ba8ea6b.js"
import"./asInt-ed8ceed1.js"
import"./intValue-66f66ba9.js"
import"./valueText-27359b90.js"
import"./interceptSubmit-6afbec2a.js"
import"./formToUrl-4aa25bca.js"
import"./csvSplit-d22d07ed.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(d).map(f):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=d(f(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=a()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-290a9598.js.map
