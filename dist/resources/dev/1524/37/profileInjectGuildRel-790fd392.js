import{a0 as e,C as s,I as t,i as o,a2 as r}from"./calfSystem-5d0c721b.js"
import{g as a,a as i}from"./getIsOwnGuild-2800222e.js"
import{g as n}from"./profile-876cc238.js"
import{r as f}from"./replaceDoubleSpace-41145c5b.js"
import{s as l}from"./shouldBeArray-198ea56a.js"
import{t as d}from"./toLowerCase-9d38da0b.js"
import"./currentGuildId-01b0f97a.js"
import"./colouredDots-cfaa58e3.js"
import"./batch-388cd4bf.js"
import"./onlineDot-4f47efa5.js"
import"./doStatTotal-ef38bd0b.js"
import"./executeAll-30ce254f.js"
import"./playerName-6d380f14.js"
import"./intValue-0e97c9b9.js"
import"./valueText-5c4b34ff.js"
import"./interceptSubmit-23ea3d0b.js"
import"./formToUrl-3d2d4f7c.js"
import"./csvSplit-0c234404.js"
const c=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],m=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=l(e)
return s?s.map(f).map(d):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=m.map((([e,s])=>[p(e),s])),t=f(d(e)),o=s.find((([e])=>e.includes(t)))
if(o)return o[1]}(s(t))}function j(e){const s=u(e)
s&&function(e,s){const[,a,i]=c.find((([e])=>e===s))
e.parentNode.classList.add(a)
const n=t(i)
n&&n.length>0&&o(e.parentNode,`<br>${r(n)}`)}(e,s)}function g(){const s=a()
s?j(s):n()&&e("guildSelf","")}export default g
//# sourceMappingURL=profileInjectGuildRel-790fd392.js.map
