import{h as s,j as t,q as a,k as e,p as i,l as o,o as n,m as r,i as l,n as f,s as c,t as m}from"./calfSystem-ZGMc097r.js"
import{c as p}from"./closestTable-ell7c3Dx.js"
import{d as u,a as d}from"./doBuffLinkClick-Pg5n3rIL.js"
import{i as h}from"./interceptSubmit-6P3g4nmT.js"
import{g as j,a as v,b as g,c as y}from"./levelHighlight-1IOee2k5.js"
import"./getPlayerId-VyYlcjgL.js"
import"./openQuickBuffById-XiybVNf_.js"
import"./fshOpen-16hNCxKt.js"
import"./formToUrl-2nuKtQzv.js"
import"./asInt-KJiq9-ya.js"
import"./valueText-qMjYFyOd.js"
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
//# sourceMappingURL=findplayer-MRNK_g2n.js.map
