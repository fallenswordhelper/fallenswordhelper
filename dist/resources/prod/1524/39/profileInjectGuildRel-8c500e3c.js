import{_ as e,C as s,I as t,i as o,a1 as r}from"./calfSystem-fe534823.js"
import{g as a,a as i}from"./getIsOwnGuild-133e4158.js"
import{g as f}from"./profile-65901ce7.js"
import{r as n}from"./replaceDoubleSpace-1fa15913.js"
import{s as l}from"./shouldBeArray-73ef0cac.js"
import{t as c}from"./toLowerCase-179aa35f.js"
import"./currentGuildId-cf47b942.js"
import"./colouredDots-73024fcf.js"
import"./batch-49f23571.js"
import"./onlineDot-f8d6c5fc.js"
import"./doStatTotal-444189bc.js"
import"./executeAll-ed9a2868.js"
import"./playerName-faaca46a.js"
import"./intValue-f6303c59.js"
import"./valueText-322f7b12.js"
import"./interceptSubmit-bb91bdd6.js"
import"./formToUrl-e34601f4.js"
import"./csvSplit-ec367ad9.js"
const d=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(n).map(c):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=n(c(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=d.find((([e])=>e===s))
e.parentNode.classList.add(a)
const f=t(i)
f&&f.length>0&&o(e.parentNode,`<br>${r(f)}`)}(e,s)}function g(){const s=a()
s?j(s):f()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-8c500e3c.js.map
