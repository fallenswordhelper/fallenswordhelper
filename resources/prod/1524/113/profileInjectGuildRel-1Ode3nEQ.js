import{a9 as s,a3 as t,ad as e,v as o,am as r}from"./calfSystem-VUa7wwu1.js"
import{r as a}from"./replaceDoubleSpace-q7clL6Kd.js"
import{s as i}from"./shouldBeArray-t5sXrRGh.js"
import{g as l,a as n}from"./getIsOwnGuild-mWGmzJWI.js"
import{g as p}from"./profile-j3XQijSD.js"
import"./csvSplit-5pKrKSoh.js"
import"./colouredDots-xGnG8MgF.js"
import"./batch-FSQCcN8K.js"
import"./lastActivity-SSyND1j3.js"
import"./now-pQzGw6vd.js"
import"./regExpGroups-Qkm3EIP8.js"
import"./onlineDot-BYFicYeL.js"
import"./executeAll-EzEelzhH.js"
import"./interceptSubmit-fATfmTUY.js"
import"./formToUrl-y6DXfC2j.js"
import"./doStatTotal-WVN9Mr37.js"
import"./asInt-X0f7ehmu.js"
import"./valueText-13w7MOtM.js"
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
//# sourceMappingURL=profileInjectGuildRel-1Ode3nEQ.js.map
