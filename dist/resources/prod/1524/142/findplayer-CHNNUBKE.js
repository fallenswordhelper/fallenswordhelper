import{h as s,j as t,q as a,k as e,p as i,l as o,o as n,m as r,i as l,n as f,s as c,t as m}from"./calfSystem-KuDT30_2.js"
import{c as p}from"./closestTable-BnyAbylz.js"
import{d as u,a as d}from"./doBuffLinkClick-D_VOhxyN.js"
import{i as h}from"./interceptSubmit-CGoY21WA.js"
import{g as j,a as v,b as g,c as y}from"./levelHighlight-Ckr_5ehQ.js"
import"./getPlayerId-BYtt9UT6.js"
import"./openQuickBuffById-BBkCBFOh.js"
import"./fshOpen-AuKioUPF.js"
import"./formToUrl-Ctxw0ZkJ.js"
import"./asInt-Dqcsg_oM.js"
import"./valueText-DmqsoxRt.js"
import"./intValue-C7nTQec1.js"
const _=(s,t,a)=>`${m}&search_level_min=${s}&search_level_max=${t}&search_in_guild=${a}`
function k(s,t,a,e){const i=f({className:"fshBlue fsh-findplayer-link",href:_(s,t,a),textContent:e})
return n(i,(()=>c("findplayer",e))),i}const G=()=>k(v(),j(),"-1","Get PvP targets"),P=()=>k(y(),g(),"1","Get GvG targets")
function b(a){const e=s(t,a)
e.classList.add("fshRelative")
const i=r({className:"fsh-findplayer-div"})
l(i,G()),l(i,P()),l(e,i)}function x(){!function(){const s=a('input[value="Find Player"]')
s&&b(s)}(),function(){const s=e(o,i())
s.length&&(p(s[0]).classList.add("fsh-findplayer-table"),s.forEach(u),n(i(),d))}(),h()}export{x as default}
//# sourceMappingURL=findplayer-CHNNUBKE.js.map
