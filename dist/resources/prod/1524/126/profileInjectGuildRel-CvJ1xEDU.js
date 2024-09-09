import{ae as s,a8 as e,ai as t,v as r,ar as o}from"./calfSystem-DG-hTKTe.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-DFamSfiL.js"
import{g as l,a as n}from"./getIsOwnGuild-ezBya0MF.js"
import{g as p}from"./profile-85x1ydCH.js"
import"./csvSplit-B85I2tjH.js"
import"./colouredDots-DbrET3sQ.js"
import"./batch--CorDD1V.js"
import"./lastActivity-DptgjdnC.js"
import"./now-Cx4PsKjI.js"
import"./regExpGroups-zTlxGTTr.js"
import"./onlineDot-uW8chw7x.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-Mjd63zg8.js"
import"./formToUrl-KxVQzQM5.js"
import"./doStatTotal-DL0-MbuC.js"
import"./asInt-B79ipQ8L.js"
import"./valueText-Clywg1-j.js"
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
//# sourceMappingURL=profileInjectGuildRel-CvJ1xEDU.js.map
