import{_ as s,C as e,I as t,i as o,a1 as r,af as a}from"./calfSystem-6a3c85e0.js"
import{g as i,a as n}from"./getIsOwnGuild-156821e7.js"
import{g as l}from"./profile-804e9514.js"
import{r as f}from"./replaceDoubleSpace-c93e5cc1.js"
import{s as m}from"./shouldBeArray-b3f850bb.js"
import"./currentGuildId-3f5ba5ad.js"
import"./colouredDots-f934391f.js"
import"./batch-e8572a8f.js"
import"./onlineDot-24724c92.js"
import"./doStatTotal-dc259649.js"
import"./executeAll-4bb3b899.js"
import"./playerName-338c35a7.js"
import"./asInt-8d560463.js"
import"./intValue-a6f9b475.js"
import"./valueText-73e7237a.js"
import"./interceptSubmit-72e26708.js"
import"./formToUrl-8a7bb14c.js"
import"./csvSplit-95ff5434.js"
const d=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(s){const e=m(s)
return e?e.map(f).map(a):[]}function u(t){return n()?(s("guildSelf",e(t)),"self"):function(s){const e=c.map((([s,e])=>[p(s),e])),t=f(a(s)),o=e.find((([s])=>s.includes(t)))
if(o)return o[1]}(e(t))}function j(s){const e=u(s)
e&&function(s,e){const[,a,i]=d.find((([s])=>s===e))
s.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(s.parentNode,`<br>${r(n)}`)}(s,e)}function g(){const e=i()
e?j(e):l()&&s("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-44a2e5a1.js.map
