import{X as s,Y as a,q as t,h as e,p as i,Z as n,o,v as r,i as l,_ as f,a0 as c,s as m}from"./calfSystem-CIdPz3EO.js"
import{c as d}from"./closestTable-CLMP9U5y.js"
import{d as h,a as p}from"./doBuffLinkClick-BdS404my.js"
import{i as u}from"./interceptSubmit-Dg8BOmTG.js"
import{g as v,a as g,b as _,c as j}from"./levelHighlight-Bpke8aZ8.js"
import"./formToUrl-JPHWbAvp.js"
const y=(s,a,t)=>`${c}&search_level_min=${s}&search_level_max=${a}&search_in_guild=${t}`
function b(s,a,t,e){const i=f({className:"fshBlue fsh-findplayer-link",href:y(s,a,t),textContent:e})
return o(i,()=>m("findplayer",e)),i}function G(t){const e=s(a,t)
e.classList.add("fshRelative")
const i=r({className:"fsh-findplayer-div"})
l(i,b(g(),v(),"-1","Get PvP targets")),l(i,b(j(),_(),"1","Get GvG targets")),l(e,i)}function $(){!function(){const s=t('input[value="Find Player"]')
s&&G(s)}(),function(){const s=e(n,i())
s.length&&(d(s[0]).classList.add("fsh-findplayer-table"),s.forEach(h),o(i(),p))}(),u()}export{$ as default}
//# sourceMappingURL=findplayer-C86GI6AK.js.map
