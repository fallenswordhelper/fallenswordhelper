import{_ as e,B as s,H as t,i as o,a0 as r}from"./calfSystem-c07e3259.js"
import{g as a,a as i}from"./getIsOwnGuild-66002b4d.js"
import{g as n}from"./profile-8add95ac.js"
import{r as d}from"./replaceDoubleSpace-847b7e5a.js"
import{s as l}from"./shouldBeArray-ed4cac04.js"
import{t as f}from"./toLowerCase-82b2a5d7.js"
import"./currentGuildId-0e53e6a7.js"
import"./colouredDots-70ba9990.js"
import"./batch-13a297b0.js"
import"./onlineDot-d60087d6.js"
import"./doStatTotal-f7d22e98.js"
import"./executeAll-7837be0f.js"
import"./playerName-54b31a1f.js"
import"./intValue-d2a6f461.js"
import"./valueText-5b814802.js"
import"./interceptSubmit-a2751cf6.js"
import"./formToUrl-f2549b88.js"
import"./csvSplit-5e072bd9.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],p=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function u(e){const s=l(e)
return s?s.map(d).map(f):[]}function c(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=p.map((([e,s])=>[u(e),s])),t=d(f(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=c(e)
s&&function(e,s){const[,a,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=a()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-16da497b.js.map
