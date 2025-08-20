import{V as s,W as a,q as t,h as e,p as i,X as n,o as l,u as o,i as r,Y as f,Z as c,s as m}from"./calfSystem-UyQ_FKFu.js"
import{c as u}from"./closestTable-DwwUFwTi.js"
import{d,a as h}from"./doBuffLinkClick-CrNehDqU.js"
import{i as p}from"./interceptSubmit-ChmNlDoQ.js"
import{g as v,a as g,b as j,c as y}from"./levelHighlight-DqGXAREP.js"
import"./formToUrl-et7r_Ml7.js"
const _=(s,a,t)=>`${c}&search_level_min=${s}&search_level_max=${a}&search_in_guild=${t}`
function b(s,a,t,e){const i=f({className:"fshBlue fsh-findplayer-link",href:_(s,a,t),textContent:e})
return l(i,()=>m("findplayer",e)),i}function G(t){const e=s(a,t)
e.classList.add("fshRelative")
const i=o({className:"fsh-findplayer-div"})
r(i,b(g(),v(),"-1","Get PvP targets")),r(i,b(y(),j(),"1","Get GvG targets")),r(e,i)}function $(){!function(){const s=t('input[value="Find Player"]')
s&&G(s)}(),function(){const s=e(n,i())
s.length&&(u(s[0]).classList.add("fsh-findplayer-table"),s.forEach(d),l(i(),h))}(),p()}export{$ as default}
//# sourceMappingURL=findplayer-fUqWbIVE.js.map
