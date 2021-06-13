import{S as e,m as t,h as s,B as i,t as a,f as r,i as n,az as o,D as c,z as l}from"./calfSystem-d3f0a380.js"
import{a as m,i as f,v as d}from"./arena-28a9eed6.js"
import{i as p}from"./interceptSubmit-96252bbe.js"
import{a as u}from"./addCommas-8af578e2.js"
import{c as v}from"./createSelect-5cc05e99.js"
import{i as j}from"./insertElementAfterBegin-7b87afd6.js"
import{i as b}from"./isSelected-c1b89a16.js"
import"./allthen-34d3fc07.js"
import"./all-3768003b.js"
import"./closestTr-fd5f5074.js"
import"./closest-d38ca7fc.js"
import"./idb-13440348.js"
import"./intValue-19726e4b.js"
import"./changeMinMax-847fc3f2.js"
import"./numberIsNaN-c0e87dea.js"
import"./assets-57c269a1.js"
import"./lvlTests-8a65e876.js"
import"./loadDataTables-e8db81cb.js"
import"./currentGuildId-574c8e9f.js"
import"./setTipped-c38098a5.js"
import"./formToUrl-d90c5ff1.js"
import"./insertElementBefore-c2bb9234.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function S(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function x(e,r){const n=function(e){return $||($=s(e,t())),$}(r)
i("",n),e.slots.forEach(a(h,n))}function T(e,t,s){var i;(i=t.target.value,m({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&x(s,e)}))}function N(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function _(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(a(S,e.current_set)).join("")})
r(n,"change",a(N,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),x(e.current_set,n),s(i,n)}}function y(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${y("Specials",e.specials)}${y("Hell Forge",e.hellforge)}${y("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),_(e.r,t,s)}}function M(){l("arenaTypeTabs")?f():(p(),d().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-2bf28d09.js.map
