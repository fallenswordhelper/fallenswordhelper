import{_ as e,C as s,I as t,i as o,a1 as a}from"./calfSystem-9942149b.js"
import{g as r,a as i}from"./getIsOwnGuild-21b09339.js"
import{g as n}from"./profile-e2573352.js"
import{r as f}from"./replaceDoubleSpace-a61a4542.js"
import{s as l}from"./shouldBeArray-e5f9dc4e.js"
import{t as d}from"./toLowerCase-999f3196.js"
import"./currentGuildId-71878d37.js"
import"./colouredDots-dd8928ce.js"
import"./batch-0f6a856b.js"
import"./onlineDot-62998a2d.js"
import"./doStatTotal-abb93346.js"
import"./executeAll-f002e740.js"
import"./playerName-b83afe17.js"
import"./asInt-cfaa0140.js"
import"./intValue-fefb28df.js"
import"./valueText-5ef907af.js"
import"./interceptSubmit-13aed0cb.js"
import"./formToUrl-26ed3a6b.js"
import"./csvSplit-4a4cc559.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],p=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function c(e){const s=l(e)
return s?s.map(f).map(d):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=p.map((([e,s])=>[c(e),s])),t=f(d(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,r,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(r)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${a(n)}`)}(e,s)}function g(){const s=r()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-9810f824.js.map
