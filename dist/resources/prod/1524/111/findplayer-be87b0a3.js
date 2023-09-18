import{e as s,h as t,q as a,j as e,p as i,k as o,o as n,l as r,i as l,m as f,n as c,t as m}from"./calfSystem-abb16b0d.js"
import{c as p}from"./closestTable-deb533c1.js"
import{d as u,a as d}from"./doBuffLinkClick-7dc66a3f.js"
import{i as h}from"./interceptSubmit-2c452287.js"
import{g as j,a as v,b as g,c as y}from"./levelHighlight-9297ab2e.js"
import"./getPlayerId-10b4174c.js"
import"./openQuickBuffById-d429c2bc.js"
import"./fshOpen-c0e91392.js"
import"./formToUrl-3ea94a32.js"
import"./asInt-030fcf94.js"
import"./valueText-fc266edc.js"
import"./intValue-e1798d0a.js"
const _=(s,t,a)=>`${m}&search_level_min=${s}&search_level_max=${t}&search_in_guild=${a}`
function k(s,t,a,e){const i=f({className:"fshBlue fsh-findplayer-link",href:_(s,t,a),textContent:e})
return n(i,(()=>c("findplayer",e))),i}const P=()=>k(v(),j(),"-1","Get PvP targets"),b=()=>k(y(),g(),"1","Get GvG targets")
function x(a){const e=s(t,a)
e.classList.add("fshRelative")
const i=r({className:"fsh-findplayer-div"})
l(i,P()),l(i,b()),l(e,i)}function B(){!function(){const s=a('input[value="Find Player"]')
s&&x(s)}(),function(){const s=e(o,i())
s.length&&(p(s[0]).classList.add("fsh-findplayer-table"),s.forEach(u),n(i(),d))}(),h()}export{B as default}
//# sourceMappingURL=findplayer-be87b0a3.js.map
