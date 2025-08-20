import{V as s,W as a,q as t,h as e,p as i,X as n,o,u as r,i as l,Y as c,Z as f,s as m}from"./calfSystem-CT1aM4VG.js"
import{c as d}from"./closestTable-C24mp168.js"
import{d as h,a as p}from"./doBuffLinkClick-DAfdDNPF.js"
import{i as u}from"./interceptSubmit-D7kELBzE.js"
import{g as v,a as g,b as j,c as y}from"./levelHighlight-w_oY2gIP.js"
import"./formToUrl-zF_XLEy1.js"
const _=(s,a,t)=>`${f}&search_level_min=${s}&search_level_max=${a}&search_in_guild=${t}`
function b(s,a,t,e){const i=c({className:"fshBlue fsh-findplayer-link",href:_(s,a,t),textContent:e})
return o(i,(()=>m("findplayer",e))),i}const k=()=>b(g(),v(),"-1","Get PvP targets"),G=()=>b(y(),j(),"1","Get GvG targets")
function $(t){const e=s(a,t)
e.classList.add("fshRelative")
const i=r({className:"fsh-findplayer-div"})
l(i,k()),l(i,G()),l(e,i)}function x(){!function(){const s=t('input[value="Find Player"]')
s&&$(s)}(),function(){const s=e(n,i())
s.length&&(d(s[0]).classList.add("fsh-findplayer-table"),s.forEach(h),o(i(),p))}(),u()}export{x as default}
//# sourceMappingURL=findplayer-Db92h0Y-.js.map
