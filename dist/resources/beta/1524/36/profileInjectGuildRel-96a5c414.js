import{_ as s,C as e,I as t,i as a,a1 as o}from"./calfSystem-4a40365f.js"
import{g as r,a as i}from"./getIsOwnGuild-59cc54ad.js"
import{g as n}from"./profile-3bbd482d.js"
import{r as l}from"./replaceDoubleSpace-35387d1e.js"
import{s as f}from"./shouldBeArray-c4a3806b.js"
import{t as d}from"./toLowerCase-fa335220.js"
import"./currentGuildId-014a0323.js"
import"./colouredDots-b9091678.js"
import"./batch-7e6fa7bc.js"
import"./onlineDot-75e133f9.js"
import"./doStatTotal-9b76c02c.js"
import"./executeAll-a7ad7ece.js"
import"./playerName-9305cfda.js"
import"./intValue-ca51a3c0.js"
import"./valueText-1577f4a8.js"
import"./interceptSubmit-c8d517a3.js"
import"./formToUrl-8ffaa75b.js"
import"./csvSplit-482f2ccd.js"
const c=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(s){const e=f(s)
return e?e.map(l).map(d):[]}function u(t){return i()?(s("guildSelf",e(t)),"self"):function(s){const e=m.map((([s,e])=>[p(s),e])),t=l(d(s)),a=e.find((([s])=>s.includes(t)))
if(a)return a[1]}(e(t))}function j(s){const e=u(s)
e&&function(s,e){const[,r,i]=c.find((([s])=>s===e))
s.parentNode.classList.add(r)
const n=t(i)
n&&n.length>0&&a(s.parentNode,`<br>${o(n)}`)}(s,e)}function g(){const e=r()
e?j(e):n()&&s("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-96a5c414.js.map
