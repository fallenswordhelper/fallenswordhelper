import{aj as e,ac as s,ao as t,w as a,aJ as o,cc as r}from"./calfSystem-CvwhhJv4.js"
import{r as n}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{g as i,a as l}from"./getIsOwnGuild-CDekpp-P.js"
import{g as c}from"./profile-I4Wlbmg7.js"
import"./colouredDots-C-EPKG_P.js"
import"./batch-CmNsoLM6.js"
import"./onlineDot-BuW2-RLs.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-BwEZyHDv.js"
import"./formToUrl-DiUV76OP.js"
import"./doStatTotal-CKI0MEYY.js"
const f=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],p=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function d(e){const s=r(e)
return s?s.map(n).map(o):[]}function m(t){return l()?(e("guildSelf",s(t)),"self"):function(e){const s=p.map((([e,s])=>[d(e),s])),t=n(o(e)),a=s.find((([e])=>e.includes(t)))
if(a)return a[1]}(s(t))}function u(e){const s=m(e)
s&&function(e,s){const[,o,r]=f.find((([e])=>e===s))
e.parentNode.classList.add(o)
const n=t(r)
var i
n&&n.length>0&&a(e.parentNode,`<br>${i=n,i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(e,s)}function g(){const s=i()
s?u(s):c()&&e("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-CRf4NeOp.js.map
