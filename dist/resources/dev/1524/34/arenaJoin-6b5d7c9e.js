import{S as t,m as e,h as s,A as i,t as a,f as r,i as n,al as o,C as c,y as d}from"./calfSystem-c07e3259.js"
import{a as l,i as m,v as f}from"./arena-4f60a533.js"
import{i as p}from"./interceptSubmit-a2751cf6.js"
import{a as u}from"./addCommas-4b913655.js"
import{c as v}from"./createSelect-1f87bd16.js"
import{i as j}from"./insertElementAfterBegin-80b20d28.js"
import{i as b}from"./isSelected-2ed90a64.js"
import"./allthen-9dd15411.js"
import"./all-3246a95f.js"
import"./closestTr-51c4677a.js"
import"./closest-f906514d.js"
import"./idb-dd65ea6c.js"
import"./intValue-d2a6f461.js"
import"./changeMinMax-cbb09af7.js"
import"./numberIsNaN-738f2a3f.js"
import"./assets-1497d9b7.js"
import"./lvlTests-1eaecd7f.js"
import"./loadDataTables-c4cf29b5.js"
import"./currentGuildId-0e53e6a7.js"
import"./setTipped-bbdd0d20.js"
import"./formToUrl-f2549b88.js"
import"./insertElementBefore-9e5d02cd.js"
function g(e){const s=Number(t("pvp_id"))
return e.arenas.find((t=>t.id===s))}let $
function h(t,e){let s=String(e-1)
0===e&&(s="x"),n(t,`<img src="${o}arena/${s}.png" class="moveImg">`)}function S(t,e){return`<option value="${String(e.id)}"${b(t.slots.join(),e.slots.join())}>${e.name}</option>`}function x(t,r){const n=function(t){return $||($=s(t,e())),$}(r)
i("",n),t.slots.forEach(a(h,n))}function T(t,e,s){var i;(i=e.target.value,l({subcmd:"usesetup",set_id:i})).then((e=>{e.s&&x(s,t)}))}function y(t,e,s){const i=t.sets.find((t=>t.id===Number(s.target.value)))
i&&T(e,s,i)}function N(t,i,n){if(n.specials){const n=e({className:"flex"})
!function(t,i){if(t.sets.length>0){const n=v({innerHTML:t.sets.map(a(S,t.current_set)).join("")})
r(n,"change",a(y,t,i))
const o=e({className:"flex"})
s(o,n),j(i,o)}}(t,n),x(t.current_set,n),s(i,n)}}function _(t,e){return`<div><div>${t}</div><div><img src="${o}ui/arena/specials_${s=e,String(Number(s))}.png"></div></div>`
var s}function E(t){const e=c("#pCC > form > table tr:nth-of-type(4) td")
if(t.r&&e){e.setAttribute("align","center")
const s=g(t.r)
n(e,function(t){return`<div class="flex"><div><div>Players</div><div>${t.players.length} / ${t.max_players}</div></div>${_("Specials",t.specials)}${_("Hell Forge",t.hellforge)}${_("Epic",t.epic)}<div><div>Max Equip Level</div><div>${u(t.equip_level)}</div></div></div>`}(s)),N(t.r,e,s)}}function C(){d("arenaTypeTabs")?m():(p(),f().catch((()=>({}))).then(E))}export default C
//# sourceMappingURL=arenaJoin-6b5d7c9e.js.map
