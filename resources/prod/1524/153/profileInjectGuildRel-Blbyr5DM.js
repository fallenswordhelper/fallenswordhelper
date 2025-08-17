import{au as e,l as s,az as t,a1 as a,aV as o,cl as r}from"./calfSystem-CT1aM4VG.js"
import{r as l}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{g as n,a as i}from"./getIsOwnGuild-DKkasN6V.js"
import{g as f}from"./profile-CCVSB3hZ.js"
import"./colouredDots-B_REpQ9x.js"
import"./batch-CVoa0La2.js"
import"./onlineDot-rvpUtCt8.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-D7kELBzE.js"
import"./formToUrl-zF_XLEy1.js"
import"./doStatTotal--TaVGr_k.js"
const c=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],p=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function d(e){const s=r(e)
return s?s.map(l).map(o):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=p.map((([e,s])=>[d(e),s])),t=l(o(e)),a=s.find((([e])=>e.includes(t)))
if(a)return a[1]}(s(t))}function m(e){const s=u(e)
s&&function(e,s){const[,o,r]=c.find((([e])=>e===s))
e.parentNode.classList.add(o)
const l=t(r)
var n
l&&l.length>0&&a(e.parentNode,`<br>${n=l,n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(e,s)}function g(){const s=n()
s?m(s):f()&&e("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-Blbyr5DM.js.map
