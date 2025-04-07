import{l as s,m as a,q as t,n as e,p as i,t as n,o as l,u as o,i as r,v as c,w as f,s as m}from"./calfSystem-BGW9cdWN.js"
import{c as d}from"./closestTable-D6SfkiIx.js"
import{d as h,a as p}from"./doBuffLinkClick-CubYVCKw.js"
import{i as u}from"./interceptSubmit-CcvGNLGd.js"
import{g as v,a as g,b as j,c as y}from"./levelHighlight-BEgi_rmq.js"
import"./formToUrl-BkW6Pnxi.js"
const _=(s,a,t)=>`${f}&search_level_min=${s}&search_level_max=${a}&search_in_guild=${t}`
function b(s,a,t,e){const i=c({className:"fshBlue fsh-findplayer-link",href:_(s,a,t),textContent:e})
return l(i,(()=>m("findplayer",e))),i}const k=()=>b(g(),v(),"-1","Get PvP targets"),G=()=>b(y(),j(),"1","Get GvG targets")
function $(t){const e=s(a,t)
e.classList.add("fshRelative")
const i=o({className:"fsh-findplayer-div"})
r(i,k()),r(i,G()),r(e,i)}function x(){!function(){const s=t('input[value="Find Player"]')
s&&$(s)}(),function(){const s=e(n,i())
s.length&&(d(s[0]).classList.add("fsh-findplayer-table"),s.forEach(h),l(i(),p))}(),u()}export{x as default}
//# sourceMappingURL=findplayer-B1Rshdgc.js.map
