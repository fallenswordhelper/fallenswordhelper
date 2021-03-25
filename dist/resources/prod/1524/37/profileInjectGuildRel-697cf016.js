import{_ as e,C as s,I as t,i as o,a1 as r}from"./calfSystem-60c20ae9.js"
import{g as i,a}from"./getIsOwnGuild-b1339d03.js"
import{g as n}from"./profile-4d79832b.js"
import{r as d}from"./replaceDoubleSpace-41145c5b.js"
import{s as l}from"./shouldBeArray-109613fa.js"
import{t as f}from"./toLowerCase-9d38da0b.js"
import"./currentGuildId-a7e07ffc.js"
import"./colouredDots-9df0dee5.js"
import"./batch-c11b874c.js"
import"./onlineDot-fc083d2b.js"
import"./doStatTotal-0ecb9853.js"
import"./executeAll-30ce254f.js"
import"./playerName-c88ee86b.js"
import"./intValue-0e97c9b9.js"
import"./valueText-5652dde0.js"
import"./interceptSubmit-0497cf12.js"
import"./formToUrl-dae90b24.js"
import"./csvSplit-0c234404.js"
const c=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(d).map(f):[]}function u(t){return a()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=d(f(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,i,a]=c.find((([e])=>e===s))
e.parentNode.classList.add(i)
const n=t(a)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=i()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-697cf016.js.map
