import{T as e,m as t,h as s,B as i,t as a,f as r,i as n,an as o,D as c,z as l}from"./calfSystem-5d0c721b.js"
import{a as m,i as d,v as p}from"./arena-44e6a3e8.js"
import{i as f}from"./interceptSubmit-23ea3d0b.js"
import{a as u}from"./addCommas-e39c029a.js"
import{c as v}from"./createSelect-63851c3d.js"
import{i as j}from"./insertElementAfterBegin-57f0e737.js"
import{i as b}from"./isSelected-0bb734dd.js"
import"./allthen-e710674d.js"
import"./all-d206e4b9.js"
import"./closestTr-c75289e9.js"
import"./closest-214539bf.js"
import"./idb-a2aaccdb.js"
import"./intValue-0e97c9b9.js"
import"./changeMinMax-84a626e9.js"
import"./numberIsNaN-a6723163.js"
import"./assets-48ba956a.js"
import"./lvlTests-84941b99.js"
import"./loadDataTables-e951bd1f.js"
import"./currentGuildId-01b0f97a.js"
import"./setTipped-f5389fab.js"
import"./formToUrl-3d2d4f7c.js"
import"./insertElementBefore-656c48d5.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function T(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function x(e,r){const n=function(e){return $||($=s(e,t())),$}(r)
i("",n),e.slots.forEach(a(h,n))}function S(e,t,s){var i;(i=t.target.value,m({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&x(s,e)}))}function N(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&S(t,s,i)}function _(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(a(T,e.current_set)).join("")})
r(n,"change",a(N,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),x(e.current_set,n),s(i,n)}}function y(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${y("Specials",e.specials)}${y("Hell Forge",e.hellforge)}${y("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),_(e.r,t,s)}}function M(){l("arenaTypeTabs")?d():(f(),p().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-5ea502d7.js.map
