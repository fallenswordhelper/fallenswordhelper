import{ae as s,a8 as e,ai as t,v as r,ar as o}from"./calfSystem-Bit7wh4p.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-CVwykJMd.js"
import{g as l,a as n}from"./getIsOwnGuild-DiFQPooP.js"
import{g as p}from"./profile-D8Xfao1H.js"
import"./csvSplit-CYiESOK8.js"
import"./colouredDots-CbB6pxg8.js"
import"./batch-DXm8fBED.js"
import"./lastActivity-MmXMGhBe.js"
import"./now-Cx4PsKjI.js"
import"./regExpGroups-B2dSaIn_.js"
import"./onlineDot-BBzPFxBZ.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-Cdswf9c6.js"
import"./formToUrl-DqKPCJuq.js"
import"./doStatTotal-BMszkFli.js"
import"./asInt-ChOO1BWT.js"
import"./valueText-BctNKhqv.js"
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
//# sourceMappingURL=profileInjectGuildRel-Dez0uPqM.js.map
