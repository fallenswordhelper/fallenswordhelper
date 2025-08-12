import{X as s,Y as a,q as t,k as e,p as i,Z as n,o,w as r,i as l,_ as c,a0 as f,s as m}from"./calfSystem-BlPuMQGT.js"
import{c as p}from"./closestTable-gY6pXvyq.js"
import{d,a as h}from"./doBuffLinkClick-JOmJeMPh.js"
import{i as u}from"./interceptSubmit-Cvm926dN.js"
import{g as v,a as g,b as j,c as _}from"./levelHighlight-zWITRPw2.js"
import"./formToUrl-Dy2RFM47.js"
const y=(s,a,t)=>`${f}&search_level_min=${s}&search_level_max=${a}&search_in_guild=${t}`
function b(s,a,t,e){const i=c({className:"fshBlue fsh-findplayer-link",href:y(s,a,t),textContent:e})
return o(i,(()=>m("findplayer",e))),i}const k=()=>b(g(),v(),"-1","Get PvP targets"),G=()=>b(_(),j(),"1","Get GvG targets")
function $(t){const e=s(a,t)
e.classList.add("fshRelative")
const i=r({className:"fsh-findplayer-div"})
l(i,k()),l(i,G()),l(e,i)}function x(){!function(){const s=t('input[value="Find Player"]')
s&&$(s)}(),function(){const s=e(n,i())
s.length&&(p(s[0]).classList.add("fsh-findplayer-table"),s.forEach(d),o(i(),h))}(),u()}export{x as default}
//# sourceMappingURL=findplayer-D6As6me0.js.map
