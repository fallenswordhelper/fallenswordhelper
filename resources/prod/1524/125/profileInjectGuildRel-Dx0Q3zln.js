import{ae as s,a8 as e,ai as t,v as r,ar as o}from"./calfSystem-CgXU6vdM.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-D-epT-N7.js"
import{g as l,a as n}from"./getIsOwnGuild-CuSaew5O.js"
import{g as p}from"./profile-DItF9OjU.js"
import"./csvSplit-Dh0Tan4e.js"
import"./colouredDots-w5LK_vHX.js"
import"./batch-CAvBgf-e.js"
import"./lastActivity-Cym2cdjL.js"
import"./now-Cx4PsKjI.js"
import"./regExpGroups-Cu71YNpe.js"
import"./onlineDot-DrCJEIC5.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-C50X7CbQ.js"
import"./formToUrl-DRz6GnP4.js"
import"./doStatTotal-m0u9VmKt.js"
import"./asInt-DtImNBr-.js"
import"./valueText-Dy5R00Ge.js"
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
//# sourceMappingURL=profileInjectGuildRel-Dx0Q3zln.js.map
