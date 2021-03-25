import{a0 as e,C as s,I as t,i as a,a2 as o}from"./calfSystem-eeb1d862.js"
import{g as r,a as i}from"./getIsOwnGuild-893f2b63.js"
import{g as n}from"./profile-c9d026a3.js"
import{r as f}from"./replaceDoubleSpace-35387d1e.js"
import{s as l}from"./shouldBeArray-640ec982.js"
import{t as c}from"./toLowerCase-fa335220.js"
import"./currentGuildId-5370ff7a.js"
import"./colouredDots-3eba177f.js"
import"./batch-7ea0272b.js"
import"./onlineDot-b33fd599.js"
import"./doStatTotal-677e42df.js"
import"./executeAll-a7ad7ece.js"
import"./playerName-018cf18c.js"
import"./intValue-ca51a3c0.js"
import"./valueText-7c11f0d0.js"
import"./interceptSubmit-6c8c8ca6.js"
import"./formToUrl-2acae37a.js"
import"./csvSplit-482f2ccd.js"
const d=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(f).map(c):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=f(c(e)),a=s.find((([e])=>e.includes(t)))
if(a)return a[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,r,i]=d.find((([e])=>e===s))
e.parentNode.classList.add(r)
const n=t(i)
n&&n.length>0&&a(e.parentNode,`<br>${o(n)}`)}(e,s)}function g(){const s=r()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-a47d7638.js.map
