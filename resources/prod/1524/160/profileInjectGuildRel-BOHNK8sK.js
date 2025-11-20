import{av as e,m as s,aA as t,a3 as a,aX as o,co as r}from"./calfSystem-HVCiy-VV.js"
import{r as n}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{g as l,a as i}from"./getIsOwnGuild-N_0U5kY_.js"
import{g as c}from"./profile-CCKDC0rf.js"
import"./colouredDots-Bv_n_RhI.js"
import"./batch-DqKzBoJR.js"
import"./onlineDot-Dmf4LgP_.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-rdUGIp5j.js"
import"./formToUrl-BMkQD7VR.js"
import"./doStatTotal-C5onnQLz.js"
const f=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],p=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function d(e){const s=r(e)
return s?s.map(n).map(o):[]}function m(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=p.map(([e,s])=>[d(e),s]),t=n(o(e)),a=s.find(([e])=>e.includes(t))
if(a)return a[1]}(s(t))}function u(e){const s=m(e)
s&&function(e,s){const[,o,r]=f.find(([e])=>e===s)
e.parentNode.classList.add(o)
const n=t(r)
var l
n&&n.length>0&&a(e.parentNode,`<br>${l=n,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(e,s)}function g(){const s=l()
s?u(s):c()&&e("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-BOHNK8sK.js.map
