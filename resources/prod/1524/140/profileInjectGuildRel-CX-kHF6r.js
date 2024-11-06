import{ae as s,a8 as t,ai as e,v as r,at as o}from"./calfSystem-BhNMi9iJ.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-MELjkPxt.js"
import{g as l,a as n}from"./getIsOwnGuild-9sh1fb-r.js"
import{g as p}from"./profile-Cds2v8CV.js"
import"./csvSplit-BTEMQbS1.js"
import"./colouredDots-92mmL_zX.js"
import"./batch-CkHJeKB_.js"
import"./lastActivity-BDr1K6RR.js"
import"./regExpGroups-Bl17VFLR.js"
import"./onlineDot-Cm6qAKSO.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-Br2DCRBv.js"
import"./formToUrl-e_E1X-JY.js"
import"./doStatTotal-CuQKuxuE.js"
import"./asInt-B9Mjft_p.js"
import"./valueText-DeyWDtTO.js"
import"./intValue-C7nTQec1.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function u(s){const t=i(s)
return t?t.map(a).map(o):[]}function f(e){return n()?(s("guildSelf",t(e)),"self"):function(s){const t=c.map((([s,t])=>[u(s),t])),e=a(o(s)),r=t.find((([s])=>s.includes(e)))
if(r)return r[1]}(t(e))}function d(s){const t=f(s)
t&&function(s,t){const[,o,a]=m.find((([s])=>s===t))
s.parentNode.classList.add(o)
const i=e(a)
var l
i&&i.length>0&&r(s.parentNode,`<br>${l=i,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(s,t)}function g(){const t=l()
t?d(t):p()&&s("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-CX-kHF6r.js.map
