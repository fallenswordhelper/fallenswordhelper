import{_ as e,C as s,I as t,i as o,a1 as r}from"./calfSystem-cb2a6f39.js"
import{g as a,a as i}from"./getIsOwnGuild-13bf6cfd.js"
import{g as d}from"./profile-c2ed0a7a.js"
import{r as n}from"./replaceDoubleSpace-41145c5b.js"
import{s as l}from"./shouldBeArray-9beca0ea.js"
import{t as c}from"./toLowerCase-9d38da0b.js"
import"./currentGuildId-32ce2428.js"
import"./colouredDots-8bb844be.js"
import"./batch-daed81fe.js"
import"./onlineDot-5a4b21dd.js"
import"./doStatTotal-cdc4dad1.js"
import"./executeAll-30ce254f.js"
import"./playerName-809cf32e.js"
import"./intValue-0e97c9b9.js"
import"./valueText-52de4ed6.js"
import"./interceptSubmit-5c6ee190.js"
import"./formToUrl-09695de7.js"
import"./csvSplit-0c234404.js"
const f=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(n).map(c):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=n(c(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=f.find((([e])=>e===s))
e.parentNode.classList.add(a)
const d=t(i)
d&&d.length>0&&o(e.parentNode,`<br>${r(d)}`)}(e,s)}function g(){const s=a()
s?j(s):d()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-49fdc69f.js.map
