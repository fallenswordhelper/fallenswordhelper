import{Z as e,C as s,I as t,i as o,a0 as r,ae as i}from"./calfSystem-cbf77dd7.js"
import{g as a,a as n}from"./getIsOwnGuild-9059ab98.js"
import{g as f}from"./profile-df60cc07.js"
import{r as l}from"./replaceDoubleSpace-6ee06bc8.js"
import{s as d}from"./shouldBeArray-0e85836d.js"
import"./currentGuildId-96726c8f.js"
import"./colouredDots-9edfaf4c.js"
import"./batch-996e914c.js"
import"./onlineDot-25d2c122.js"
import"./doStatTotal-94b8b51b.js"
import"./executeAll-9a33204f.js"
import"./playerName-448aa7ca.js"
import"./asInt-f1541708.js"
import"./intValue-19726e4b.js"
import"./valueText-068fe53f.js"
import"./interceptSubmit-b6d9986f.js"
import"./formToUrl-5189bcfb.js"
import"./csvSplit-d0e27857.js"
const c=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=d(e)
return s?s.map(l).map(i):[]}function u(t){return n()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=l(i(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,i,a]=c.find((([e])=>e===s))
e.parentNode.classList.add(i)
const n=t(a)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=a()
s?j(s):f()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-aa7f8a95.js.map
