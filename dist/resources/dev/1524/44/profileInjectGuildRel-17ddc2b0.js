import{_ as e,C as s,I as t,i as o,a1 as r}from"./calfSystem-f7cf24f6.js"
import{g as a,a as i}from"./getIsOwnGuild-28f77b14.js"
import{g as n}from"./profile-4ab708c4.js"
import{r as d}from"./replaceDoubleSpace-5ade2d89.js"
import{s as f}from"./shouldBeArray-df37b06b.js"
import{t as l}from"./toLowerCase-c964d32b.js"
import"./currentGuildId-d5258e6c.js"
import"./colouredDots-35e61ff1.js"
import"./batch-a8223d61.js"
import"./onlineDot-0a71eb09.js"
import"./doStatTotal-df5d1ab9.js"
import"./executeAll-4e27c022.js"
import"./playerName-c3c6c732.js"
import"./asInt-1c5cca46.js"
import"./intValue-66f66ba9.js"
import"./valueText-ea28f9e0.js"
import"./interceptSubmit-2265e54d.js"
import"./formToUrl-2761f769.js"
import"./csvSplit-d22d07ed.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=f(e)
return s?s.map(d).map(l):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=c.map((([e,s])=>[p(e),s])),t=d(l(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=m.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=a()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-17ddc2b0.js.map
