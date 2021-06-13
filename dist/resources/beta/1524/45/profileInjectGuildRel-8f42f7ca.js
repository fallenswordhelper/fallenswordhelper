import{Z as e,C as s,I as t,i as o,a0 as r,ae as a}from"./calfSystem-ae2e69af.js"
import{g as i,a as n}from"./getIsOwnGuild-fe98194a.js"
import{g as f}from"./profile-edd49393.js"
import{r as l}from"./replaceDoubleSpace-c93e5cc1.js"
import{s as d}from"./shouldBeArray-7d4bb4e1.js"
import"./currentGuildId-85358166.js"
import"./colouredDots-6efa5d36.js"
import"./batch-ff866587.js"
import"./onlineDot-f14e68a8.js"
import"./doStatTotal-7fb789f5.js"
import"./executeAll-4bb3b899.js"
import"./playerName-1b929217.js"
import"./asInt-0415d444.js"
import"./intValue-a6f9b475.js"
import"./valueText-fa9d45d4.js"
import"./interceptSubmit-9058efa4.js"
import"./formToUrl-35718c02.js"
import"./csvSplit-95ff5434.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],p=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function u(e){const s=d(e)
return s?s.map(l).map(a):[]}function c(t){return n()?(e("guildSelf",s(t)),"self"):function(e){const s=p.map((([e,s])=>[u(e),s])),t=l(a(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=c(e)
s&&function(e,s){const[,a,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=i()
s?j(s):f()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-8f42f7ca.js.map
