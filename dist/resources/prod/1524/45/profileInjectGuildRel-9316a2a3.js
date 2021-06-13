import{Z as e,C as s,I as t,i as o,a0 as r,ae as a}from"./calfSystem-e1e858cd.js"
import{g as i,a as n}from"./getIsOwnGuild-d66648b0.js"
import{g as l}from"./profile-c182b097.js"
import{r as d}from"./replaceDoubleSpace-c93e5cc1.js"
import{s as f}from"./shouldBeArray-c9e77dce.js"
import"./currentGuildId-6f6caa9a.js"
import"./colouredDots-3e726085.js"
import"./batch-55db0df2.js"
import"./onlineDot-1080eb24.js"
import"./doStatTotal-dbe867ed.js"
import"./executeAll-4bb3b899.js"
import"./playerName-26e59290.js"
import"./asInt-23fa966f.js"
import"./intValue-a6f9b475.js"
import"./valueText-a6681ac9.js"
import"./interceptSubmit-fde65f15.js"
import"./formToUrl-d7735a71.js"
import"./csvSplit-95ff5434.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=f(e)
return s?s.map(d).map(a):[]}function u(t){return n()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=d(a(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=i()
s?j(s):l()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-9316a2a3.js.map
