import{_ as e,C as s,I as t,i as o,a1 as r,af as i}from"./calfSystem-d3f0a380.js"
import{g as a,a as n}from"./getIsOwnGuild-ed50976c.js"
import{g as d}from"./profile-c34144db.js"
import{r as f}from"./replaceDoubleSpace-6ee06bc8.js"
import{s as l}from"./shouldBeArray-3319227e.js"
import"./currentGuildId-574c8e9f.js"
import"./colouredDots-326f71c6.js"
import"./batch-7c0362d6.js"
import"./onlineDot-78db5edc.js"
import"./doStatTotal-af8f07c1.js"
import"./executeAll-9a33204f.js"
import"./playerName-9d5fb2c2.js"
import"./asInt-c5f8ce87.js"
import"./intValue-19726e4b.js"
import"./valueText-2dd1b1b5.js"
import"./interceptSubmit-96252bbe.js"
import"./formToUrl-d90c5ff1.js"
import"./csvSplit-d0e27857.js"
const c=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(f).map(i):[]}function u(t){return n()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=f(i(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,i,a]=c.find((([e])=>e===s))
e.parentNode.classList.add(i)
const n=t(a)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=a()
s?j(s):d()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-e94f8699.js.map
