import{ae as s,a8 as e,ai as t,v as r,ar as o}from"./calfSystem-hszmVKJw.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-CXmpMNUb.js"
import{g as l,a as n}from"./getIsOwnGuild-DCAaKhpe.js"
import{g as p}from"./profile-Ce7TaNKl.js"
import"./csvSplit-DqYsaVUL.js"
import"./colouredDots-DYqpMLRA.js"
import"./batch-DXYI5I4-.js"
import"./lastActivity-BB2E-IkS.js"
import"./now-Cx4PsKjI.js"
import"./regExpGroups-DzwffQY2.js"
import"./onlineDot-Br8UW8F5.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-Fy_b1It8.js"
import"./formToUrl-BPPann-D.js"
import"./doStatTotal-B0PGURoa.js"
import"./asInt-D7uD_FES.js"
import"./valueText-uf2WlnM3.js"
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
//# sourceMappingURL=profileInjectGuildRel-B5DwiXHn.js.map
