import{au as e,l as s,az as t,a2 as a,aW as o,cn as r}from"./calfSystem-CIuUjh4H.js"
import{r as n}from"./replaceDoubleSpace-Bwn6uaSy.js"
import{g as l,a as i}from"./getIsOwnGuild-BTMMVdx8.js"
import{g as c}from"./profile-CaBVP_jT.js"
import"./colouredDots-BfpJMcdJ.js"
import"./batch-BqkctEiX.js"
import"./onlineDot-ixY_oy9C.js"
import"./executeAll-DIAWIge1.js"
import"./interceptSubmit-UQt2BX0g.js"
import"./formToUrl-BcjoMJ8T.js"
import"./doStatTotal-CiVM0LYo.js"
const d=[["self","fshGreen","guildSelfMessage"],["friendly","fshOliveDrab","guildFrndMessage"],["old","fshDarkCyan","guildPastMessage"],["enemy","fshRed","guildEnmyMessage"]],f=[["guildFrnd","friendly"],["guildPast","old"],["guildEnmy","enemy"]]
function p(e){const s=r(e)
return s?s.map(n).map(o):[]}function u(t){return i()?(e("guildSelf",s(t)),"self"):function(e){const s=f.map(([e,s])=>[p(e),s]),t=n(o(e)),a=s.find(([e])=>e.includes(t))
if(a)return a[1]}(s(t))}function m(e){const s=u(e)
s&&function(e,s){const[,o,r]=d.find(([e])=>e===s)
e.parentNode.classList.add(o)
const n=t(r)
var l
n&&n.length>0&&a(e.parentNode,`<br>${l=n,l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}`)}(e,s)}function g(){const s=l()
s?m(s):c()&&e("guildSelf","")}export{g as default}
//# sourceMappingURL=profileInjectGuildRel-C9mYTu0J.js.map
