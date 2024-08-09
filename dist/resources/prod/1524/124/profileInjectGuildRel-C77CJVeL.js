import{ae as s,a8 as e,ai as t,v as r,ar as o}from"./calfSystem-0LeC9ahe.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-BQeS0A9Y.js"
import{g as l,a as n}from"./getIsOwnGuild-Cc4zE1fn.js"
import{g as p}from"./profile-BTdkvsIo.js"
import"./csvSplit-BSbyjvRF.js"
import"./colouredDots-B3kprS4h.js"
import"./batch-BmEiLSO-.js"
import"./lastActivity-D8ZKXgKD.js"
import"./now-Cx4PsKjI.js"
import"./regExpGroups-CFPzvfcg.js"
import"./onlineDot-C-l5Czb-.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-CbRQMY1Y.js"
import"./formToUrl-i63RwstJ.js"
import"./doStatTotal-9geuW1Px.js"
import"./asInt-BgNTeMBE.js"
import"./valueText-BpMXba0C.js"
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
//# sourceMappingURL=profileInjectGuildRel-C77CJVeL.js.map
