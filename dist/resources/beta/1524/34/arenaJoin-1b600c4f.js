import{R as t,m as s,h as e,A as i,t as a,f as r,i as n,ak as o,C as d,y as c}from"./calfSystem-dfa26790.js"
import{a as m,i as l,v as f}from"./arena-ebdca8a4.js"
import{i as p}from"./interceptSubmit-c18e4478.js"
import{a as u}from"./addCommas-4b913655.js"
import{c as v}from"./createSelect-2d56df4a.js"
import{i as j}from"./insertElementAfterBegin-549a1b31.js"
import{i as b}from"./isSelected-2ed90a64.js"
import"./allthen-9dd15411.js"
import"./all-3246a95f.js"
import"./closestTr-d7616f33.js"
import"./closest-f906514d.js"
import"./idb-93f11a94.js"
import"./intValue-d2a6f461.js"
import"./changeMinMax-cbb09af7.js"
import"./numberIsNaN-738f2a3f.js"
import"./assets-1497d9b7.js"
import"./lvlTests-6a094b9e.js"
import"./loadDataTables-56d4f322.js"
import"./currentGuildId-8fb4e32d.js"
import"./isArray-3d9d6e31.js"
import"./setTipped-bbdd0d20.js"
import"./formToUrl-4975483d.js"
import"./insertElementBefore-9e5d02cd.js"
function g(s){const e=Number(t("pvp_id"))
return s.arenas.find((t=>t.id===e))}let $
function h(t,s){let e=String(s-1)
0===s&&(e="x"),n(t,`<img src="${o}arena/${e}.png" class="moveImg">`)}function x(t,s){return`<option value="${String(s.id)}"${b(t.slots.join(),s.slots.join())}>${s.name}</option>`}function y(t,r){const n=function(t){return $||($=e(t,s())),$}(r)
i("",n),t.slots.forEach(a(h,n))}function S(t,s,e){var i;(i=s.target.value,m({subcmd:"usesetup",set_id:i})).then((s=>{s.s&&y(e,t)}))}function T(t,s,e){const i=t.sets.find((t=>t.id===Number(e.target.value)))
i&&S(s,e,i)}function N(t,i,n){if(n.specials){const n=s({className:"flex"})
!function(t,i){if(t.sets.length>0){const n=v({innerHTML:t.sets.map(a(x,t.current_set)).join("")})
r(n,"change",a(T,t,i))
const o=s({className:"flex"})
e(o,n),j(i,o)}}(t,n),y(t.current_set,n),e(i,n)}}function _(t,s){return`<div><div>${t}</div><div><img src="${o}ui/arena/specials_${e=s,String(Number(e))}.png"></div></div>`
var e}function E(t){const s=d("#pCC > form > table tr:nth-of-type(4) td")
if(t.r&&s){s.setAttribute("align","center")
const e=g(t.r)
n(s,function(t){return`<div class="flex"><div><div>Players</div><div>${t.players.length} / ${t.max_players}</div></div>${_("Specials",t.specials)}${_("Hell Forge",t.hellforge)}${_("Epic",t.epic)}<div><div>Max Equip Level</div><div>${u(t.equip_level)}</div></div></div>`}(e)),N(t.r,s,e)}}function A(){c("arenaTypeTabs")?l():(p(),f().catch((()=>({}))).then(E))}export default A
//# sourceMappingURL=arenaJoin-1b600c4f.js.map
