import{ae as s,a8 as t,ai as e,v as r,at as o}from"./calfSystem-B-q5dZfX.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-X0P-LPbh.js"
import{g as l,a as n}from"./getIsOwnGuild-BSgYtdTa.js"
import{g as p}from"./profile-p5LVJlY-.js"
import"./csvSplit-kMaeyE6L.js"
import"./colouredDots-rQi3B-oS.js"
import"./batch-Cv_UEZec.js"
import"./lastActivity-BiV7BP3z.js"
import"./regExpGroups-CG1jsUnt.js"
import"./onlineDot-DNfsGQrf.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-Cei7B88B.js"
import"./formToUrl-BlRSKkiN.js"
import"./doStatTotal-B4Wy7AjO.js"
import"./asInt-zhJPHZFv.js"
import"./valueText-CGTTk5vA.js"
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
//# sourceMappingURL=profileInjectGuildRel-CQmUlZiG.js.map
