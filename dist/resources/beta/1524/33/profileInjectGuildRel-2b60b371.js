import{Z as e,B as s,H as t,i as o,$ as r}from"./calfSystem-c91a5c89.js"
import{g as i,a}from"./getIsOwnGuild-3e09dc38.js"
import{g as c}from"./profile-4f0c63ac.js"
import{r as n}from"./replaceDoubleSpace-1171b4a9.js"
import{s as d}from"./shouldBeArray-557dccff.js"
import{t as l}from"./toLowerCase-abb30c3b.js"
import"./currentGuildId-1acce0c7.js"
import"./colouredDots-9ccccd14.js"
import"./batch-4aceb3c4.js"
import"./onlineDot-d9085600.js"
import"./doStatTotal-424f589d.js"
import"./executeAll-f0c9235d.js"
import"./playerName-542e8d11.js"
import"./intValue-55d66e09.js"
import"./valueText-4040d1ec.js"
import"./interceptSubmit-910866a3.js"
import"./formToUrl-3cd8bc13.js"
import"./csvSplit-d4535156.js"
const f=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=d(e)
return s?s.map(n).map(l):[]}function u(t){return a()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=n(l(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,i,a]=f.find((([e])=>e===s))
e.parentNode.classList.add(i)
const c=t(a)
c&&c.length>0&&o(e.parentNode,`<br>${r(c)}`)}(e,s)}function g(){const s=i()
s?j(s):c()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-2b60b371.js.map
