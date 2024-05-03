import{ae as s,a8 as e,ai as t,v as r,ar as o}from"./calfSystem-BpHkrDYD.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-BAARZJIh.js"
import{g as l,a as n}from"./getIsOwnGuild-Ba-ten5B.js"
import{g as p}from"./profile-Dia6g_2c.js"
import"./csvSplit-XJPlnymy.js"
import"./colouredDots-DtM594IM.js"
import"./batch-ITLa1ipA.js"
import"./lastActivity-DWVncuKA.js"
import"./now-Cx4PsKjI.js"
import"./regExpGroups-CFbNQ_Yv.js"
import"./onlineDot-Dx2wm9H-.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-CoCizFzi.js"
import"./formToUrl-CgKpxR4J.js"
import"./doStatTotal-ZdcJ2KWg.js"
import"./asInt-BQeVnH5K.js"
import"./valueText-oVBlM_Bx.js"
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
//# sourceMappingURL=profileInjectGuildRel-B-bZkTya.js.map
