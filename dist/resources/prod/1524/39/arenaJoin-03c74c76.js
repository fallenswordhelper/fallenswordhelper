import{S as e,m as t,h as s,B as i,t as r,f as a,i as n,at as o,D as c,z as f}from"./calfSystem-fe534823.js"
import{a as m,i as l,v as p}from"./arena-dd098537.js"
import{i as d}from"./interceptSubmit-bb91bdd6.js"
import{a as u}from"./addCommas-37fb94e0.js"
import{c as v}from"./createSelect-994ac5fa.js"
import{i as b}from"./insertElementAfterBegin-ff7e04b7.js"
import{i as j}from"./isSelected-deb32a59.js"
import"./allthen-b65a93f3.js"
import"./all-2b32eb82.js"
import"./closestTr-57989f73.js"
import"./closest-97a04dcf.js"
import"./idb-1aaf30fa.js"
import"./intValue-f6303c59.js"
import"./changeMinMax-7a476e50.js"
import"./numberIsNaN-d0e4b349.js"
import"./assets-b1b89ba1.js"
import"./lvlTests-c0e94680.js"
import"./loadDataTables-5f8ffe3f.js"
import"./currentGuildId-cf47b942.js"
import"./isArray-f324e0ac.js"
import"./setTipped-70cff648.js"
import"./formToUrl-e34601f4.js"
import"./insertElementBefore-68b894c4.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function S(e,t){return`<option value="${String(t.id)}"${j(e.slots.join(),t.slots.join())}>${t.name}</option>`}function x(e,a){const n=function(e){return $||($=s(e,t())),$}(a)
i("",n),e.slots.forEach(r(h,n))}function T(e,t,s){var i;(i=t.target.value,m({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&x(s,e)}))}function y(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(r(S,e.current_set)).join("")})
a(n,"change",r(y,e,i))
const o=t({className:"flex"})
s(o,n),b(i,o)}}(e,n),x(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function M(){f("arenaTypeTabs")?l():(d(),p().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-03c74c76.js.map
