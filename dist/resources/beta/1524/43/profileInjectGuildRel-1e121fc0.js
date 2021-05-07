import{_ as e,C as s,I as t,i as o,a1 as r}from"./calfSystem-1d588248.js"
import{g as a,a as i}from"./getIsOwnGuild-7c692e69.js"
import{g as n}from"./profile-11646294.js"
import{r as f}from"./replaceDoubleSpace-a61a4542.js"
import{s as l}from"./shouldBeArray-d0c2e549.js"
import{t as d}from"./toLowerCase-999f3196.js"
import"./currentGuildId-9fdd6aa9.js"
import"./colouredDots-6c141832.js"
import"./batch-40833b07.js"
import"./onlineDot-9745fb79.js"
import"./doStatTotal-60aece13.js"
import"./executeAll-f002e740.js"
import"./playerName-95f1f2a8.js"
import"./asInt-86489e68.js"
import"./intValue-fefb28df.js"
import"./valueText-f03f9e27.js"
import"./interceptSubmit-60e593a5.js"
import"./formToUrl-0d0c488d.js"
import"./csvSplit-4a4cc559.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(f).map(d):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=f(d(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=a()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-1e121fc0.js.map
