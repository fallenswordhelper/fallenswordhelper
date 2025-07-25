import{X as s,Y as a,q as t,k as e,p as i,Z as n,o,w as r,i as l,_ as c,a0 as f,s as m}from"./calfSystem-C1X5YxJZ.js"
import{c as p}from"./closestTable-STrxtv_E.js"
import{d,a as h}from"./doBuffLinkClick-BI7P2cNU.js"
import{i as u}from"./interceptSubmit-D-IYqL1u.js"
import{g as v,a as g,b as j,c as _}from"./levelHighlight-DXwvwD_Y.js"
import"./formToUrl-BjgGWW4H.js"
const y=(s,a,t)=>`${f}&search_level_min=${s}&search_level_max=${a}&search_in_guild=${t}`
function b(s,a,t,e){const i=c({className:"fshBlue fsh-findplayer-link",href:y(s,a,t),textContent:e})
return o(i,(()=>m("findplayer",e))),i}const k=()=>b(g(),v(),"-1","Get PvP targets"),G=()=>b(_(),j(),"1","Get GvG targets")
function $(t){const e=s(a,t)
e.classList.add("fshRelative")
const i=r({className:"fsh-findplayer-div"})
l(i,k()),l(i,G()),l(e,i)}function x(){!function(){const s=t('input[value="Find Player"]')
s&&$(s)}(),function(){const s=e(n,i())
s.length&&(p(s[0]).classList.add("fsh-findplayer-table"),s.forEach(d),o(i(),h))}(),u()}export{x as default}
//# sourceMappingURL=findplayer-C_ntngFk.js.map
