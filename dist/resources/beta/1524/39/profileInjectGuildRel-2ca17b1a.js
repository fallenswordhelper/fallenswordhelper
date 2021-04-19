import{_ as e,C as s,I as t,i as o,a1 as a}from"./calfSystem-26fbeaeb.js"
import{g as r,a as i}from"./getIsOwnGuild-16a56bc0.js"
import{g as n}from"./profile-5102cc2f.js"
import{r as l}from"./replaceDoubleSpace-1fa15913.js"
import{s as d}from"./shouldBeArray-d5fc9247.js"
import{t as f}from"./toLowerCase-179aa35f.js"
import"./currentGuildId-5214ee19.js"
import"./colouredDots-5b530896.js"
import"./batch-a9571296.js"
import"./onlineDot-de8a6344.js"
import"./doStatTotal-e1ab27c9.js"
import"./executeAll-ed9a2868.js"
import"./playerName-a1b7a513.js"
import"./intValue-f6303c59.js"
import"./valueText-2413577e.js"
import"./interceptSubmit-b180aeed.js"
import"./formToUrl-140d33d2.js"
import"./csvSplit-ec367ad9.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=d(e)
return s?s.map(l).map(f):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=l(f(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,r,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(r)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${a(n)}`)}(e,s)}function g(){const s=r()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-2ca17b1a.js.map
