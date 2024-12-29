import{h as s,j as a,q as t,k as e,p as n,l as i,o,m as l,i as r,n as c,s as f,t as m}from"./calfSystem-ChzN4Q-P.js"
import{c as p}from"./closestTable-DvVVJKGM.js"
import{d,a as h}from"./doBuffLinkClick-DSYIGj9V.js"
import{i as u}from"./interceptSubmit-CmNeM6n-.js"
import{g as v,a as g,b as j,c as y}from"./levelHighlight-DCaL97MF.js"
import"./formToUrl-DpqdMGU9.js"
const _=(s,a,t)=>`${m}&search_level_min=${s}&search_level_max=${a}&search_in_guild=${t}`
function b(s,a,t,e){const n=c({className:"fshBlue fsh-findplayer-link",href:_(s,a,t),textContent:e})
return o(n,(()=>f("findplayer",e))),n}const k=()=>b(g(),v(),"-1","Get PvP targets"),G=()=>b(y(),j(),"1","Get GvG targets")
function $(t){const e=s(a,t)
e.classList.add("fshRelative")
const n=l({className:"fsh-findplayer-div"})
r(n,k()),r(n,G()),r(e,n)}function x(){!function(){const s=t('input[value="Find Player"]')
s&&$(s)}(),function(){const s=e(i,n())
s.length&&(p(s[0]).classList.add("fsh-findplayer-table"),s.forEach(d),o(n(),h))}(),u()}export{x as default}
//# sourceMappingURL=findplayer-wmOqEPYI.js.map
