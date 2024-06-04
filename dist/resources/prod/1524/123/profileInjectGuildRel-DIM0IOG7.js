import{ae as s,a8 as e,ai as t,v as r,ar as o}from"./calfSystem-wTzwei3t.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-DxgWryvT.js"
import{g as l,a as n}from"./getIsOwnGuild-DN83XkEn.js"
import{g as p}from"./profile-BWglVUkX.js"
import"./csvSplit-DqsViCLn.js"
import"./colouredDots-DmxXrKj6.js"
import"./batch-B2xhIuNE.js"
import"./lastActivity-BAN2lPMa.js"
import"./now-Cx4PsKjI.js"
import"./regExpGroups-B8v1pE-x.js"
import"./onlineDot-Cp1ex2F9.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-BOa9u4Un.js"
import"./formToUrl-n7bzGaSs.js"
import"./doStatTotal-D5BIInIA.js"
import"./asInt-DcpIJRg8.js"
import"./valueText-CDmZqpbc.js"
import"./intValue-C7nTQec1.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],u=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function c(s){const e=i(s)
return e?e.map(a).map(o):[]}function f(t){return n()?(s("guildSelf",e(t)),"self"):function(s){const e=u.map((([s,e])=>[c(s),e])),t=a(o(s)),r=e.find((([s])=>s.includes(t)))
if(r)return r[1]}(e(t))}function d(s){const e=f(s)
e&&function(s,e){const[,o,a]=m.find((([s])=>s===e))
s.parentNode.classList.add(o)
const i=t(a)
var l
i&&i.length>0&&r(s.parentNode,`<br>${l=i,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(s,e)}function g(){const e=l()
e?d(e):p()&&s("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-DIM0IOG7.js.map
