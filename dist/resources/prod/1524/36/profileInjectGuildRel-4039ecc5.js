import{_ as e,C as s,I as t,i as a,a1 as o}from"./calfSystem-e7bde0c3.js"
import{g as r,a as i}from"./getIsOwnGuild-e6dc0717.js"
import{g as n}from"./profile-0394673a.js"
import{r as l}from"./replaceDoubleSpace-35387d1e.js"
import{s as d}from"./shouldBeArray-fe886b3b.js"
import{t as c}from"./toLowerCase-fa335220.js"
import"./currentGuildId-24e90d79.js"
import"./colouredDots-766af245.js"
import"./batch-cbe16ea5.js"
import"./onlineDot-7bb4a617.js"
import"./doStatTotal-bda8a776.js"
import"./executeAll-a7ad7ece.js"
import"./playerName-523ac3f3.js"
import"./intValue-ca51a3c0.js"
import"./valueText-550b31ac.js"
import"./interceptSubmit-41d1852c.js"
import"./formToUrl-aa476074.js"
import"./csvSplit-482f2ccd.js"
const f=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=d(e)
return s?s.map(l).map(c):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=l(c(e)),a=s.find((([e])=>e.includes(t)))
if(a)return a[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,r,i]=f.find((([e])=>e===s))
e.parentNode.classList.add(r)
const n=t(i)
n&&n.length>0&&a(e.parentNode,`<br>${o(n)}`)}(e,s)}function g(){const s=r()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-4039ecc5.js.map
