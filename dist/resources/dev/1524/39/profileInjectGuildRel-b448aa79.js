import{a0 as e,C as s,I as t,i as a,a2 as o}from"./calfSystem-b31aba65.js"
import{g as r,a as i}from"./getIsOwnGuild-56564d2a.js"
import{g as n}from"./profile-799c3625.js"
import{r as l}from"./replaceDoubleSpace-1fa15913.js"
import{s as d}from"./shouldBeArray-e5480f3d.js"
import{t as c}from"./toLowerCase-179aa35f.js"
import"./currentGuildId-c379e204.js"
import"./colouredDots-a508d2d8.js"
import"./batch-4b6ac500.js"
import"./onlineDot-fc24824d.js"
import"./doStatTotal-b22ced68.js"
import"./executeAll-ed9a2868.js"
import"./playerName-68c14b2a.js"
import"./intValue-f6303c59.js"
import"./valueText-bc9c083f.js"
import"./interceptSubmit-b313ecea.js"
import"./formToUrl-b9ac6c05.js"
import"./csvSplit-ec367ad9.js"
const f=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=d(e)
return s?s.map(l).map(c):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=l(c(e)),a=s.find((([e])=>e.includes(t)))
if(a)return a[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,r,i]=f.find((([e])=>e===s))
e.parentNode.classList.add(r)
const n=t(i)
n&&n.length>0&&a(e.parentNode,`<br>${o(n)}`)}(e,s)}function g(){const s=r()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-b448aa79.js.map
