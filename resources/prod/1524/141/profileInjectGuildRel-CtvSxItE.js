import{ad as s,a8 as t,at as e,ai as r,v as o}from"./calfSystem-Blt4DbaE.js"
import{r as a}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{s as i}from"./shouldBeArray-dBGFs5YM.js"
import{g as l,a as n}from"./getIsOwnGuild-VBU9Gl0G.js"
import{g as p}from"./profile-rC6r94F5.js"
import"./csvSplit-DCp-KQ1I.js"
import"./colouredDots-C78onBfn.js"
import"./batch-C_j5R0ng.js"
import"./lastActivity-E8nkj_ho.js"
import"./regExpGroups-B7iOxfb4.js"
import"./onlineDot-KmDOLCpD.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-DTfrwUG-.js"
import"./formToUrl-Bfgg_ioA.js"
import"./doStatTotal-CybaE_J0.js"
import"./asInt-CnZ3Wv3g.js"
import"./valueText-CRDZBw-0.js"
import"./intValue-C7nTQec1.js"
const m=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],c=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function u(s){const t=i(s)
return t?t.map(a).map(e):[]}function d(r){return n()?(s("guildSelf",t(r)),"self"):function(s){const t=c.map((([s,t])=>[u(s),t])),r=a(e(s)),o=t.find((([s])=>s.includes(r)))
if(o)return o[1]}(t(r))}function f(s){const t=d(s)
t&&function(s,t){const[,e,a]=m.find((([s])=>s===t))
s.parentNode.classList.add(e)
const i=r(a)
var l
i&&i.length>0&&o(s.parentNode,`<br>${l=i,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(s,t)}function g(){const t=l()
t?f(t):p()&&s("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-CtvSxItE.js.map
