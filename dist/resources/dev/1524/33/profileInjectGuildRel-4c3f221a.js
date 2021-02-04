import{_ as e,B as s,H as t,i as o,a0 as r}from"./calfSystem-37f70deb.js"
import{g as a,a as i}from"./getIsOwnGuild-84f9a15b.js"
import{g as n}from"./profile-457061ec.js"
import{r as l}from"./replaceDoubleSpace-1171b4a9.js"
import{s as f}from"./shouldBeArray-e66dc473.js"
import{t as d}from"./toLowerCase-abb30c3b.js"
import"./currentGuildId-5ba5aa94.js"
import"./colouredDots-52d361c8.js"
import"./batch-556f2f36.js"
import"./onlineDot-1818f1ec.js"
import"./doStatTotal-a3b3e660.js"
import"./executeAll-f0c9235d.js"
import"./playerName-fa80c59b.js"
import"./intValue-55d66e09.js"
import"./valueText-6fb91f3a.js"
import"./interceptSubmit-8392a331.js"
import"./formToUrl-2a960512.js"
import"./csvSplit-d4535156.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=f(e)
return s?s.map(l).map(d):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=l(d(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=a()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-4c3f221a.js.map
