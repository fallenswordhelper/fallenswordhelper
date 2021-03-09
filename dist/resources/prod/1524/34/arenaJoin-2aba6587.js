import{R as t,m as s,h as e,A as i,t as a,f as r,i as n,ai as o,C as c,y as d}from"./calfSystem-793da633.js"
import{a as m,i as l,v as p}from"./arena-ad0d7983.js"
import{i as f}from"./interceptSubmit-c2811ec0.js"
import{a as u}from"./addCommas-4b913655.js"
import{c as v}from"./createSelect-f100125e.js"
import{i as j}from"./insertElementAfterBegin-eac20cdb.js"
import{i as b}from"./isSelected-2ed90a64.js"
import"./allthen-9dd15411.js"
import"./all-3246a95f.js"
import"./closestTr-5dabd71f.js"
import"./closest-f906514d.js"
import"./idb-e7344221.js"
import"./intValue-d2a6f461.js"
import"./changeMinMax-cbb09af7.js"
import"./numberIsNaN-738f2a3f.js"
import"./assets-1497d9b7.js"
import"./lvlTests-f2381b66.js"
import"./loadDataTables-90a93506.js"
import"./currentGuildId-1aba3c9c.js"
import"./isArray-3d9d6e31.js"
import"./setTipped-bbdd0d20.js"
import"./formToUrl-97034a23.js"
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
var e}function E(t){const s=c("#pCC > form > table tr:nth-of-type(4) td")
if(t.r&&s){s.setAttribute("align","center")
const e=g(t.r)
n(s,function(t){return`<div class="flex"><div><div>Players</div><div>${t.players.length} / ${t.max_players}</div></div>${_("Specials",t.specials)}${_("Hell Forge",t.hellforge)}${_("Epic",t.epic)}<div><div>Max Equip Level</div><div>${u(t.equip_level)}</div></div></div>`}(e)),N(t.r,s,e)}}function A(){d("arenaTypeTabs")?l():(f(),p().catch((()=>({}))).then(E))}export default A
//# sourceMappingURL=arenaJoin-2aba6587.js.map
