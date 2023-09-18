import{aa as s,a4 as t,ae as e,v as o,an as r}from"./calfSystem-abb16b0d.js"
import{r as a}from"./replaceDoubleSpace-e5ff7e70.js"
import{s as i}from"./shouldBeArray-9bb1ec5d.js"
import{g as n,a as l}from"./getIsOwnGuild-780e7751.js"
import{g as p}from"./profile-366ec6e6.js"
import"./csvSplit-cb685270.js"
import"./colouredDots-c4afc6e5.js"
import"./batch-49be00bd.js"
import"./lastActivity-dd91c076.js"
import"./now-6f22aec9.js"
import"./regExpGroups-40baae8f.js"
import"./onlineDot-3da6ec33.js"
import"./executeAll-ef9da8be.js"
import"./interceptSubmit-2c452287.js"
import"./formToUrl-3ea94a32.js"
import"./doStatTotal-7ecf6088.js"
import"./asInt-030fcf94.js"
import"./valueText-fc266edc.js"
import"./intValue-e1798d0a.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],u=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function c(s){const t=i(s)
return t?t.map(a).map(r):[]}function f(e){return l()?(s("guildSelf",t(e)),"self"):function(s){const t=u.map((([s,t])=>[c(s),t])),e=a(r(s)),o=t.find((([s])=>s.includes(e)))
if(o)return o[1]}(t(e))}function d(s){const t=f(s)
t&&function(s,t){const[,r,a]=m.find((([s])=>s===t))
s.parentNode.classList.add(r)
const i=e(a)
var n
i&&i.length>0&&o(s.parentNode,`<br>${n=i,n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(s,t)}function g(){const t=n()
t?d(t):p()&&s("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-b255e2aa.js.map
