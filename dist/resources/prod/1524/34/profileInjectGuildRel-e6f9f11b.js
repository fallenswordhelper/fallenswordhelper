import{Z as e,B as s,H as t,i as o,$ as r}from"./calfSystem-793da633.js"
import{g as a,a as i}from"./getIsOwnGuild-e3da6151.js"
import{g as n}from"./profile-454908ad.js"
import{r as d}from"./replaceDoubleSpace-847b7e5a.js"
import{s as l}from"./shouldBeArray-9d21631b.js"
import{t as m}from"./toLowerCase-82b2a5d7.js"
import"./currentGuildId-1aba3c9c.js"
import"./colouredDots-e749d450.js"
import"./batch-87e35453.js"
import"./onlineDot-5f13de48.js"
import"./doStatTotal-7689fdcc.js"
import"./executeAll-7837be0f.js"
import"./playerName-5c267470.js"
import"./intValue-d2a6f461.js"
import"./valueText-23076c84.js"
import"./interceptSubmit-c2811ec0.js"
import"./formToUrl-97034a23.js"
import"./csvSplit-5e072bd9.js"
const f=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(d).map(m):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=d(m(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=f.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=a()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-e6f9f11b.js.map
