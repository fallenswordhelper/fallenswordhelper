import{av as e,m as s,aA as t,a3 as a,aX as o,cm as r}from"./calfSystem-Cs6CSxoU.js"
import{r as n}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{g as l,a as i}from"./getIsOwnGuild-Tt3zgeJK.js"
import{g as m}from"./profile-Bvs71yyO.js"
import"./colouredDots-C2Y_m1RP.js"
import"./batch-BtMyX_wP.js"
import"./onlineDot-DmNFHAz9.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-Bhotwi5X.js"
import"./formToUrl-CAPzQx_Y.js"
import"./doStatTotal-CYFlRYmG.js"
const c=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],f=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=r(e)
return s?s.map(n).map(o):[]}function d(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=f.map(([e,s])=>[p(e),s]),t=n(o(e)),a=s.find(([e])=>e.includes(t))
if(a)return a[1]}(s(t))}function u(e){const s=d(e)
s&&function(e,s){const[,o,r]=c.find(([e])=>e===s)
e.parentNode.classList.add(o)
const n=t(r)
var l
n&&n.length>0&&a(e.parentNode,`<br>${l=n,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(e,s)}function g(){const s=l()
s?u(s):m()&&e("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-1qLhdGMQ.js.map
