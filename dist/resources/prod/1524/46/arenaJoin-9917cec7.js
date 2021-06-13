import{R as e,m as t,h as s,B as i,t as r,f as a,i as n,aw as o,D as c,z as m}from"./calfSystem-7991d843.js"
import{a as l,i as p,v as f}from"./arena-eea7de89.js"
import{i as d}from"./interceptSubmit-b3275ec5.js"
import{a as u}from"./addCommas-8af578e2.js"
import{c as v}from"./createSelect-c31e6ee4.js"
import{i as j}from"./insertElementAfterBegin-4cb03648.js"
import{i as b}from"./isSelected-c1b89a16.js"
import"./allthen-34d3fc07.js"
import"./all-3768003b.js"
import"./closestTr-31d65692.js"
import"./closest-d38ca7fc.js"
import"./idb-89606f1a.js"
import"./intValue-19726e4b.js"
import"./changeMinMax-847fc3f2.js"
import"./numberIsNaN-c0e87dea.js"
import"./assets-57c269a1.js"
import"./lvlTests-8268cc0a.js"
import"./loadDataTables-2e8487b2.js"
import"./currentGuildId-abfe3237.js"
import"./isArray-e47504c9.js"
import"./setTipped-c38098a5.js"
import"./formToUrl-33c970fe.js"
import"./insertElementBefore-c2bb9234.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function x(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function S(e,a){const n=function(e){return $||($=s(e,t())),$}(a)
i("",n),e.slots.forEach(r(h,n))}function T(e,t,s){var i;(i=t.target.value,l({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&S(s,e)}))}function y(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(r(x,e.current_set)).join("")})
a(n,"change",r(y,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),S(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function M(){m("arenaTypeTabs")?p():(d(),f().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-9917cec7.js.map
