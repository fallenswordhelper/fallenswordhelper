import{ae as s,a8 as e,ai as t,v as r,ar as o}from"./calfSystem-B3Rc3sVt.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-VPDpLfOz.js"
import{g as l,a as n}from"./getIsOwnGuild-PbtgMhxI.js"
import{g as p}from"./profile-Bo-BF61y.js"
import"./csvSplit-_x0dA3w4.js"
import"./colouredDots-ib5-6Jcx.js"
import"./batch-CfGkHlVT.js"
import"./lastActivity-BgsKIp89.js"
import"./now-Cx4PsKjI.js"
import"./regExpGroups-FpltS5mc.js"
import"./onlineDot-BW5panV2.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-DWgiQbkW.js"
import"./formToUrl-ed9OyMqy.js"
import"./doStatTotal-CUaKfHvk.js"
import"./asInt-Ba7iwPlc.js"
import"./valueText-DQH4h23_.js"
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
//# sourceMappingURL=profileInjectGuildRel-D9ZG01yh.js.map
