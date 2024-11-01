import{ae as s,a8 as t,ai as e,v as r,at as o}from"./calfSystem-BjarbvkO.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-CaZujvJm.js"
import{g as l,a as n}from"./getIsOwnGuild-BsrjvJ7K.js"
import{g as p}from"./profile-CwPW2j-I.js"
import"./csvSplit-BbgpYa-P.js"
import"./colouredDots-CCSWkiz-.js"
import"./batch-DNAt5oaQ.js"
import"./lastActivity-D4KeqlKY.js"
import"./regExpGroups-DF34eiOE.js"
import"./onlineDot-DLOEPTK5.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-YMLQpszw.js"
import"./formToUrl-UxWlznNu.js"
import"./doStatTotal-Cc6iDyVn.js"
import"./asInt-CfdXMnIc.js"
import"./valueText-Ba9x5OW3.js"
import"./intValue-C7nTQec1.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function u(s){const t=i(s)
return t?t.map(a).map(o):[]}function f(e){return n()?(s("guildSelf",t(e)),"self"):function(s){const t=c.map((([s,t])=>[u(s),t])),e=a(o(s)),r=t.find((([s])=>s.includes(e)))
if(r)return r[1]}(t(e))}function d(s){const t=f(s)
t&&function(s,t){const[,o,a]=m.find((([s])=>s===t))
s.parentNode.classList.add(o)
const i=e(a)
var l
i&&i.length>0&&r(s.parentNode,`<br>${l=i,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(s,t)}function g(){const t=l()
t?d(t):p()&&s("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-B1pyXwjK.js.map
