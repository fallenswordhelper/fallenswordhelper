import{h as s,j as t,q as a,k as e,p as i,l as o,o as n,m as r,i as l,n as f,s as c,t as m}from"./calfSystem-wTzwei3t.js"
import{c as p}from"./closestTable-D1tzatJG.js"
import{d as u,a as d}from"./doBuffLinkClick-BQ7puGd3.js"
import{i as h}from"./interceptSubmit-BOa9u4Un.js"
import{g as j,a as v,b as g,c as y}from"./levelHighlight--LzzvzYB.js"
import"./getPlayerId-DXzgWTxI.js"
import"./openQuickBuffById-BBtUx2eO.js"
import"./fshOpen-AuKioUPF.js"
import"./formToUrl-n7bzGaSs.js"
import"./asInt-DcpIJRg8.js"
import"./valueText-CDmZqpbc.js"
import"./intValue-C7nTQec1.js"
const _=(s,t,a)=>`${m}&search_level_min=${s}&search_level_max=${t}&search_in_guild=${a}`
function k(s,t,a,e){const i=f({className:"fshBlue fsh-findplayer-link",href:_(s,t,a),textContent:e})
return n(i,(()=>c("findplayer",e))),i}const P=()=>k(v(),j(),"-1","Get PvP targets"),b=()=>k(y(),g(),"1","Get GvG targets")
function x(a){const e=s(t,a)
e.classList.add("fshRelative")
const i=r({className:"fsh-findplayer-div"})
l(i,P()),l(i,b()),l(e,i)}function B(){!function(){const s=a('input[value="Find Player"]')
s&&x(s)}(),function(){const s=e(o,i())
s.length&&(p(s[0]).classList.add("fsh-findplayer-table"),s.forEach(u),n(i(),d))}(),h()}export{B as default}
//# sourceMappingURL=findplayer-fKj9eLHk.js.map
