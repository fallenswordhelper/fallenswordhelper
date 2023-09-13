import{e as s,h as t,q as a,j as e,p as i,k as o,o as n,l as r,i as l,m as f,n as c,t as m}from"./calfSystem-2f15e074.js"
import{c as p}from"./closestTable-23acbcda.js"
import{d as u,a as d}from"./doBuffLinkClick-9c90fdeb.js"
import{i as h}from"./interceptSubmit-1b6c609a.js"
import{g as j,a as v,b as g,c as y}from"./levelHighlight-f54178c9.js"
import"./getPlayerId-9d2ae5c7.js"
import"./openQuickBuffById-ce43fee8.js"
import"./fshOpen-c0e91392.js"
import"./formToUrl-c2b3e14d.js"
import"./asInt-351ebcd4.js"
import"./valueText-4ae65e1f.js"
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
//# sourceMappingURL=findplayer-9dde5716.js.map
