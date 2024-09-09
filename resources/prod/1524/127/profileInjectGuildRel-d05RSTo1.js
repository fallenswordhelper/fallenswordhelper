import{ae as s,a8 as e,ai as t,v as r,ar as o}from"./calfSystem-DCvZki7i.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-mXtN5Nz0.js"
import{g as l,a as n}from"./getIsOwnGuild-N-3M7ycu.js"
import{g as p}from"./profile-DCTr2-OX.js"
import"./csvSplit-CIxHN71z.js"
import"./colouredDots-CwDFqM9T.js"
import"./batch-BRset9xq.js"
import"./lastActivity-BZsgwwgs.js"
import"./now-Cx4PsKjI.js"
import"./regExpGroups-B-1ZBIku.js"
import"./onlineDot-DwSCdsqU.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-D77JWcKR.js"
import"./formToUrl-aEq2bkmP.js"
import"./doStatTotal-_TQHAqTl.js"
import"./asInt-BrY-dWp8.js"
import"./valueText-OQDcNEBv.js"
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
//# sourceMappingURL=profileInjectGuildRel-d05RSTo1.js.map
