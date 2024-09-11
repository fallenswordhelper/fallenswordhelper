import{ae as s,a8 as e,ai as t,v as r,ar as o}from"./calfSystem-C2EM0fGB.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-CVd3_fcU.js"
import{g as l,a as n}from"./getIsOwnGuild-DRtEfJVk.js"
import{g as p}from"./profile-BzsMbACb.js"
import"./csvSplit-BlWngceZ.js"
import"./colouredDots-hIq88A1v.js"
import"./batch-Bh5OB5Bp.js"
import"./lastActivity-BUvNxIDp.js"
import"./now-Cx4PsKjI.js"
import"./regExpGroups-kkIKVC9T.js"
import"./onlineDot-CVYaMVZd.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-BnohDH-5.js"
import"./formToUrl-JDke7RK0.js"
import"./doStatTotal-WVZIrVzr.js"
import"./asInt-CqC0IFb9.js"
import"./valueText-Djm-SckY.js"
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
//# sourceMappingURL=profileInjectGuildRel-oLEZTfFE.js.map
