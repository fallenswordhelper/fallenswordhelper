import{h as s,j as t,q as a,k as e,p as i,l as o,o as n,m as r,i as l,n as f,s as c,t as m}from"./calfSystem-rn9Rc_nF.js"
import{c as p}from"./closestTable-CpAyN3ci.js"
import{d as u,a as d}from"./doBuffLinkClick-GZiEbyyh.js"
import{i as h}from"./interceptSubmit-cB4BJ9ys.js"
import{g as j,a as v,b as g,c as y}from"./levelHighlight-fOCuROyg.js"
import"./getPlayerId-kFPa1sEG.js"
import"./openQuickBuffById-shBuZQr_.js"
import"./fshOpen-16hNCxKt.js"
import"./formToUrl-gDJQKQU4.js"
import"./asInt-NFaqrHrG.js"
import"./valueText-CeLZBdVf.js"
import"./intValue-JHhLnq8V.js"
const _=(s,t,a)=>`${m}&search_level_min=${s}&search_level_max=${t}&search_in_guild=${a}`
function k(s,t,a,e){const i=f({className:"fshBlue fsh-findplayer-link",href:_(s,t,a),textContent:e})
return n(i,(()=>c("findplayer",e))),i}const P=()=>k(v(),j(),"-1","Get PvP targets"),b=()=>k(y(),g(),"1","Get GvG targets")
function x(a){const e=s(t,a)
e.classList.add("fshRelative")
const i=r({className:"fsh-findplayer-div"})
l(i,P()),l(i,b()),l(e,i)}function B(){!function(){const s=a('input[value="Find Player"]')
s&&x(s)}(),function(){const s=e(o,i())
s.length&&(p(s[0]).classList.add("fsh-findplayer-table"),s.forEach(u),n(i(),d))}(),h()}export{B as default}
//# sourceMappingURL=findplayer-WF8KytEU.js.map
