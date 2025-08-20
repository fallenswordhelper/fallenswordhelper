import{au as e,l as s,az as t,a1 as a,aV as o,cl as r}from"./calfSystem-KFszEm2S.js"
import{r as l}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{g as n,a as i}from"./getIsOwnGuild-BdlaikFM.js"
import{g as c}from"./profile-uV9K8-sy.js"
import"./colouredDots-CinmGFx6.js"
import"./batch-CLh2C2gx.js"
import"./onlineDot-hLWANonx.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-DBzRBI1G.js"
import"./formToUrl-BOvHbqVR.js"
import"./doStatTotal-C_eoXAtI.js"
const f=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],p=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function u(e){const s=r(e)
return s?s.map(l).map(o):[]}function d(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=p.map(([e,s])=>[u(e),s]),t=l(o(e)),a=s.find(([e])=>e.includes(t))
if(a)return a[1]}(s(t))}function m(e){const s=d(e)
s&&function(e,s){const[,o,r]=f.find(([e])=>e===s)
e.parentNode.classList.add(o)
const l=t(r)
var n
l&&l.length>0&&a(e.parentNode,`<br>${n=l,n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(e,s)}function g(){const s=n()
s?m(s):c()&&e("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-Bl-RKjfw.js.map
