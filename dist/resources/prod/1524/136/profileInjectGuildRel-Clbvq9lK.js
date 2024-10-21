import{ae as s,a8 as t,ai as e,v as r,at as o}from"./calfSystem-CUgWHLtG.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-dArQIyo9.js"
import{g as l,a as n}from"./getIsOwnGuild-CxCAO3yN.js"
import{g as p}from"./profile-lQ8sHcjZ.js"
import"./csvSplit-j_Yd0L1s.js"
import"./colouredDots-C578-IN3.js"
import"./batch-DgzuJJDl.js"
import"./lastActivity-CkJNYBKg.js"
import"./regExpGroups-BdMT6Ygg.js"
import"./onlineDot-Clfoju52.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-Cmu1wKZK.js"
import"./formToUrl-BwuflQSq.js"
import"./doStatTotal-Df1XDnrc.js"
import"./asInt-Bqhf3xYw.js"
import"./valueText-CpX32YUk.js"
import"./intValue-C7nTQec1.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],u=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function f(s){const t=i(s)
return t?t.map(a).map(o):[]}function c(e){return n()?(s("guildSelf",t(e)),"self"):function(s){const t=u.map((([s,t])=>[f(s),t])),e=a(o(s)),r=t.find((([s])=>s.includes(e)))
if(r)return r[1]}(t(e))}function d(s){const t=c(s)
t&&function(s,t){const[,o,a]=m.find((([s])=>s===t))
s.parentNode.classList.add(o)
const i=e(a)
var l
i&&i.length>0&&r(s.parentNode,`<br>${l=i,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(s,t)}function g(){const t=l()
t?d(t):p()&&s("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-Clbvq9lK.js.map
