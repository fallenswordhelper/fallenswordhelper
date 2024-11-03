import{ae as s,a8 as t,ai as e,v as r,at as o}from"./calfSystem-B_VkFJhM.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-CXMC8hic.js"
import{g as l,a as n}from"./getIsOwnGuild-B7Zd2w4F.js"
import{g as p}from"./profile-Cx8TsjIG.js"
import"./csvSplit-wR_rfRRJ.js"
import"./colouredDots-DAmwta2S.js"
import"./batch-BvxFKdw5.js"
import"./lastActivity-DivsWk_X.js"
import"./regExpGroups-BcqTkRdL.js"
import"./onlineDot-B1ly2VXn.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-BOGv1eqT.js"
import"./formToUrl-BPQhKqIq.js"
import"./doStatTotal-CkWIgUdm.js"
import"./asInt-CypzCRLi.js"
import"./valueText-ChzwPMf9.js"
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
//# sourceMappingURL=profileInjectGuildRel-CSpixlJ0.js.map
