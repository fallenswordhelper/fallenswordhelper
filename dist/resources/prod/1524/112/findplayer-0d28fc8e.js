import{e as s,h as t,q as a,j as e,p as i,k as o,o as n,l as r,i as l,m as f,n as c,t as m}from"./calfSystem-4830a18d.js"
import{c as p}from"./closestTable-082cc634.js"
import{d as u,a as d}from"./doBuffLinkClick-416757d3.js"
import{i as h}from"./interceptSubmit-0ca01d03.js"
import{g as j,a as v,b as g,c as y}from"./levelHighlight-193b24b6.js"
import"./getPlayerId-283e8a7a.js"
import"./openQuickBuffById-8cca49b4.js"
import"./fshOpen-c0e91392.js"
import"./formToUrl-824efe66.js"
import"./asInt-e2e2488f.js"
import"./valueText-ddd10c6c.js"
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
//# sourceMappingURL=findplayer-0d28fc8e.js.map
