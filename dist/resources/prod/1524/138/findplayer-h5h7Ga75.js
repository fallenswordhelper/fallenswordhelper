import{h as s,j as t,q as a,k as e,p as i,l as o,o as n,m as r,i as l,n as f,s as c,t as m}from"./calfSystem-BjarbvkO.js"
import{c as p}from"./closestTable-QYAgm0UB.js"
import{d as u,a as d}from"./doBuffLinkClick-DBS6jRGO.js"
import{i as h}from"./interceptSubmit-YMLQpszw.js"
import{g as j,a as v,b as g,c as y}from"./levelHighlight-C97C8Ugv.js"
import"./getPlayerId-CzqY3CZe.js"
import"./openQuickBuffById-BQUusfkO.js"
import"./fshOpen-AuKioUPF.js"
import"./formToUrl-UxWlznNu.js"
import"./asInt-CfdXMnIc.js"
import"./valueText-Ba9x5OW3.js"
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
//# sourceMappingURL=findplayer-h5h7Ga75.js.map
