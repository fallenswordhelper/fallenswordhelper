import{ae as s,a8 as t,ai as e,v as r,ar as o}from"./calfSystem-G1dN925O.js"
import{r as a}from"./replaceDoubleSpace-q7clL6Kd.js"
import{s as i}from"./shouldBeArray-Sig5LHGX.js"
import{g as l,a as n}from"./getIsOwnGuild-CeN3pfxP.js"
import{g as p}from"./profile-jI3i8MQO.js"
import"./csvSplit-SWeoixMs.js"
import"./colouredDots-eBcyl-KU.js"
import"./batch-0zyYgCi-.js"
import"./lastActivity-AD7TXVQF.js"
import"./now-pQzGw6vd.js"
import"./regExpGroups-4702yhMp.js"
import"./onlineDot-BePpx2CP.js"
import"./executeAll-EzEelzhH.js"
import"./interceptSubmit-Ji3kORWO.js"
import"./formToUrl--m9Zwlne.js"
import"./doStatTotal-KBtXKxVq.js"
import"./asInt-PKKHs1-a.js"
import"./valueText-890HKMma.js"
import"./intValue-JHhLnq8V.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],u=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function c(s){const t=i(s)
return t?t.map(a).map(o):[]}function f(e){return n()?(s("guildSelf",t(e)),"self"):function(s){const t=u.map((([s,t])=>[c(s),t])),e=a(o(s)),r=t.find((([s])=>s.includes(e)))
if(r)return r[1]}(t(e))}function d(s){const t=f(s)
t&&function(s,t){const[,o,a]=m.find((([s])=>s===t))
s.parentNode.classList.add(o)
const i=e(a)
var l
i&&i.length>0&&r(s.parentNode,`<br>${l=i,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(s,t)}function g(){const t=l()
t?d(t):p()&&s("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-jM169x1G.js.map
