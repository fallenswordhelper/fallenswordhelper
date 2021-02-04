import{Z as s,B as e,H as t,i as o,$ as r}from"./calfSystem-0708a9bb.js"
import{g as i,a}from"./getIsOwnGuild-0ca408d5.js"
import{g as n}from"./profile-f0a476c3.js"
import{r as l}from"./replaceDoubleSpace-1171b4a9.js"
import{s as d}from"./shouldBeArray-6746477e.js"
import{t as f}from"./toLowerCase-abb30c3b.js"
import"./currentGuildId-c383c2b8.js"
import"./colouredDots-e0a02d3a.js"
import"./batch-479f98d0.js"
import"./onlineDot-84509222.js"
import"./doStatTotal-16d23c05.js"
import"./executeAll-f0c9235d.js"
import"./playerName-e75bbf9f.js"
import"./intValue-55d66e09.js"
import"./valueText-365bf09c.js"
import"./interceptSubmit-b52f1e00.js"
import"./formToUrl-25c06939.js"
import"./csvSplit-d4535156.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(s){const e=d(s)
return e?e.map(l).map(f):[]}function u(t){return a()?(s("guildSelf",e(t)),"self"):function(s){const e=c.map((([s,e])=>[p(s),e])),t=l(f(s)),o=e.find((([s])=>s.includes(t)))
if(o)return o[1]}(e(t))}function j(s){const e=u(s)
e&&function(s,e){const[,i,a]=m.find((([s])=>s===e))
s.parentNode.classList.add(i)
const n=t(a)
n&&n.length>0&&o(s.parentNode,`<br>${r(n)}`)}(s,e)}function g(){const e=i()
e?j(e):n()&&s("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-7b8b32fb.js.map
