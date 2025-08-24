import{W as s,X as a,q as t,h as e,p as i,Y as n,o,u as r,i as l,Z as f,_ as c,s as m}from"./calfSystem-79LsojAC.js"
import{c as p}from"./closestTable-BuyyntoH.js"
import{d,a as h}from"./doBuffLinkClick-BwOlpk8H.js"
import{i as u}from"./interceptSubmit-c1dihHnz.js"
import{g as v,a as g,b as _,c as j}from"./levelHighlight-DiLR0cOI.js"
import"./formToUrl-CqnZfaJL.js"
const y=(s,a,t)=>`${c}&search_level_min=${s}&search_level_max=${a}&search_in_guild=${t}`
function b(s,a,t,e){const i=f({className:"fshBlue fsh-findplayer-link",href:y(s,a,t),textContent:e})
return o(i,()=>m("findplayer",e)),i}function k(t){const e=s(a,t)
e.classList.add("fshRelative")
const i=r({className:"fsh-findplayer-div"})
l(i,b(g(),v(),"-1","Get PvP targets")),l(i,b(j(),_(),"1","Get GvG targets")),l(e,i)}function G(){!function(){const s=t('input[value="Find Player"]')
s&&k(s)}(),function(){const s=e(n,i())
s.length&&(p(s[0]).classList.add("fsh-findplayer-table"),s.forEach(d),o(i(),h))}(),u()}export{G as default}
//# sourceMappingURL=findplayer-BncUsi9B.js.map
