import{Z as e,C as s,I as t,i as o,a0 as r}from"./calfSystem-6ad077b7.js"
import{g as i,a}from"./getIsOwnGuild-434e3a23.js"
import{g as n}from"./profile-0c72bef6.js"
import{r as d}from"./replaceDoubleSpace-5ade2d89.js"
import{s as l}from"./shouldBeArray-63e75f63.js"
import{t as f}from"./toLowerCase-c964d32b.js"
import"./currentGuildId-e0011880.js"
import"./colouredDots-bf23923d.js"
import"./batch-9878d42e.js"
import"./onlineDot-465a2c69.js"
import"./doStatTotal-0d5f4ea7.js"
import"./executeAll-4e27c022.js"
import"./playerName-7e6569ce.js"
import"./asInt-4b3cfe31.js"
import"./intValue-66f66ba9.js"
import"./valueText-febd3894.js"
import"./interceptSubmit-efbdb1e0.js"
import"./formToUrl-a21852b2.js"
import"./csvSplit-d22d07ed.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],p=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function c(e){const s=l(e)
return s?s.map(d).map(f):[]}function u(t){return a()?(e("guildSelf",s(t)),"self"):function(e){const s=p.map((([e,s])=>[c(e),s])),t=d(f(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,i,a]=m.find((([e])=>e===s))
e.parentNode.classList.add(i)
const n=t(a)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=i()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-12260037.js.map
