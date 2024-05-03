import{ae as s,a8 as e,ai as t,v as r,ar as o}from"./calfSystem-BtgQSp8m.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-D614_dMQ.js"
import{g as l,a as n}from"./getIsOwnGuild-DCNA733B.js"
import{g as p}from"./profile-DIZG4-PV.js"
import"./csvSplit-DwRexoZT.js"
import"./colouredDots-BHWRDT2U.js"
import"./batch-CfE5wARI.js"
import"./lastActivity-lRDWjF63.js"
import"./now-Cx4PsKjI.js"
import"./regExpGroups-UYEi9658.js"
import"./onlineDot-BQqsyz3I.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-CjRw20o2.js"
import"./formToUrl-xm59AL7B.js"
import"./doStatTotal-C-BP9n92.js"
import"./asInt-DAijoojz.js"
import"./valueText-DbyxEUl6.js"
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
//# sourceMappingURL=profileInjectGuildRel-i8-cG5eU.js.map
