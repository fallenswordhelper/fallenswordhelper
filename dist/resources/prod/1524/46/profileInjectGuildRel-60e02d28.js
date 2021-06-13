import{Z as e,C as s,I as t,i as o,a0 as r,ae as a}from"./calfSystem-7991d843.js"
import{g as i,a as n}from"./getIsOwnGuild-a68999f6.js"
import{g as l}from"./profile-cdab2947.js"
import{r as d}from"./replaceDoubleSpace-6ee06bc8.js"
import{s as f}from"./shouldBeArray-5e3f8541.js"
import"./currentGuildId-abfe3237.js"
import"./colouredDots-8db91b1b.js"
import"./batch-44f9cf79.js"
import"./onlineDot-de1b774d.js"
import"./doStatTotal-2b4372d2.js"
import"./executeAll-9a33204f.js"
import"./playerName-541d216c.js"
import"./asInt-2a37aa61.js"
import"./intValue-19726e4b.js"
import"./valueText-9648dc4e.js"
import"./interceptSubmit-b3275ec5.js"
import"./formToUrl-33c970fe.js"
import"./csvSplit-d0e27857.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=f(e)
return s?s.map(d).map(a):[]}function u(t){return n()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=d(a(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=i()
s?j(s):l()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-60e02d28.js.map
