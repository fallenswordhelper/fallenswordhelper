import{h as s,j as t,q as a,k as e,i,l as n,m as o,e as r,s as l,n as f,p as c,t as m}from"./calfSystem-Blt4DbaE.js"
import{c as p}from"./closestTable-Ddgm5m0P.js"
import{d as u,a as d}from"./doBuffLinkClick-CcIlwlsz.js"
import{i as h}from"./interceptSubmit-DTfrwUG-.js"
import{g as j,a as v,b as g,c as y}from"./levelHighlight-DkyDPktg.js"
import"./getPlayerId-Ck17Fcst.js"
import"./openQuickBuffById-AG7prqnJ.js"
import"./fshOpen-AuKioUPF.js"
import"./formToUrl-Bfgg_ioA.js"
import"./asInt-CnZ3Wv3g.js"
import"./valueText-CRDZBw-0.js"
import"./intValue-C7nTQec1.js"
const _=(s,t,a)=>`${o}&search_level_min=${s}&search_level_max=${t}&search_in_guild=${a}`
function k(s,t,a,e){const i=n({className:"fshBlue fsh-findplayer-link",href:_(s,t,a),textContent:e})
return r(i,(()=>l("findplayer",e))),i}const G=()=>k(v(),j(),"-1","Get PvP targets"),P=()=>k(y(),g(),"1","Get GvG targets")
function b(a){const n=s(t,a)
n.classList.add("fshRelative")
const o=e({className:"fsh-findplayer-div"})
i(o,G()),i(o,P()),i(n,o)}function x(){!function(){const s=a('input[value="Find Player"]')
s&&b(s)}(),function(){const s=f(m,c())
s.length&&(p(s[0]).classList.add("fsh-findplayer-table"),s.forEach(u),r(c(),d))}(),h()}export{x as default}
//# sourceMappingURL=findplayer-BhrlwkCt.js.map
