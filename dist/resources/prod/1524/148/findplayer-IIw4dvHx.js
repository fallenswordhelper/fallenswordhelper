import{j as s,k as a,q as t,l as e,p as i,m as n,o,n as l,i as r,t as c,u as f,s as m}from"./calfSystem-BldO1y8X.js"
import{c as p}from"./closestTable-BUebhZUa.js"
import{d,a as u}from"./doBuffLinkClick-B9cHS8o0.js"
import{i as h}from"./interceptSubmit-DRfjQ-m1.js"
import{g as v,a as g,b as j,c as y}from"./levelHighlight-WTMV1LFX.js"
import"./formToUrl-BEp0G_53.js"
const _=(s,a,t)=>`${f}&search_level_min=${s}&search_level_max=${a}&search_in_guild=${t}`
function b(s,a,t,e){const i=c({className:"fshBlue fsh-findplayer-link",href:_(s,a,t),textContent:e})
return o(i,(()=>m("findplayer",e))),i}const k=()=>b(g(),v(),"-1","Get PvP targets"),G=()=>b(y(),j(),"1","Get GvG targets")
function $(t){const e=s(a,t)
e.classList.add("fshRelative")
const i=l({className:"fsh-findplayer-div"})
r(i,k()),r(i,G()),r(e,i)}function x(){!function(){const s=t('input[value="Find Player"]')
s&&$(s)}(),function(){const s=e(n,i())
s.length&&(p(s[0]).classList.add("fsh-findplayer-table"),s.forEach(d),o(i(),u))}(),h()}export{x as default}
//# sourceMappingURL=findplayer-IIw4dvHx.js.map
