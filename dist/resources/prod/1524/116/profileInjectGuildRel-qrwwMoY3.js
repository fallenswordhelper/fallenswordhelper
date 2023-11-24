import{a9 as s,a3 as t,ad as e,v as o,am as r}from"./calfSystem-ZGMc097r.js"
import{r as a}from"./replaceDoubleSpace-q7clL6Kd.js"
import{s as i}from"./shouldBeArray-RrjCEDht.js"
import{g as l,a as n}from"./getIsOwnGuild-OfKKA-jH.js"
import{g as p}from"./profile-ieUTdzuk.js"
import"./csvSplit-jcT1ACQZ.js"
import"./colouredDots-QhnSZaDR.js"
import"./batch-uoDNe18_.js"
import"./lastActivity-rkECRO_9.js"
import"./now-pQzGw6vd.js"
import"./regExpGroups-tMD9g2Io.js"
import"./onlineDot-hg0rJ5BB.js"
import"./executeAll-EzEelzhH.js"
import"./interceptSubmit-6P3g4nmT.js"
import"./formToUrl-2nuKtQzv.js"
import"./doStatTotal-vfCasUgB.js"
import"./asInt-KJiq9-ya.js"
import"./valueText-qMjYFyOd.js"
import"./intValue-JHhLnq8V.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],u=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function c(s){const t=i(s)
return t?t.map(a).map(r):[]}function d(e){return n()?(s("guildSelf",t(e)),"self"):function(s){const t=u.map((([s,t])=>[c(s),t])),e=a(r(s)),o=t.find((([s])=>s.includes(e)))
if(o)return o[1]}(t(e))}function f(s){const t=d(s)
t&&function(s,t){const[,r,a]=m.find((([s])=>s===t))
s.parentNode.classList.add(r)
const i=e(a)
var l
i&&i.length>0&&o(s.parentNode,`<br>${l=i,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(s,t)}function g(){const t=l()
t?f(t):p()&&s("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-qrwwMoY3.js.map
