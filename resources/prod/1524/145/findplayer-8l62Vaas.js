import{h as s,j as a,q as t,k as e,p as i,l as n,o,m as l,i as r,n as c,s as f,t as m}from"./calfSystem-CvwhhJv4.js"
import{c as d}from"./closestTable-DA5PEIxg.js"
import{d as h,a as p}from"./doBuffLinkClick-Zv_s4oiW.js"
import{i as u}from"./interceptSubmit-BwEZyHDv.js"
import{g as v,a as g,b as j,c as y}from"./levelHighlight-BCIkKawI.js"
import"./formToUrl-DiUV76OP.js"
const _=(s,a,t)=>`${m}&search_level_min=${s}&search_level_max=${a}&search_in_guild=${t}`
function b(s,a,t,e){const i=c({className:"fshBlue fsh-findplayer-link",href:_(s,a,t),textContent:e})
return o(i,(()=>f("findplayer",e))),i}const k=()=>b(g(),v(),"-1","Get PvP targets"),G=()=>b(y(),j(),"1","Get GvG targets")
function $(t){const e=s(a,t)
e.classList.add("fshRelative")
const i=l({className:"fsh-findplayer-div"})
r(i,k()),r(i,G()),r(e,i)}function x(){!function(){const s=t('input[value="Find Player"]')
s&&$(s)}(),function(){const s=e(n,i())
s.length&&(d(s[0]).classList.add("fsh-findplayer-table"),s.forEach(h),o(i(),p))}(),u()}export{x as default}
//# sourceMappingURL=findplayer-8l62Vaas.js.map
