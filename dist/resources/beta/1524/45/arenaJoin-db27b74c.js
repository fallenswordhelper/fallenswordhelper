import{R as e,m as t,h as s,B as i,t as a,f as r,i as n,ay as o,D as c,z as m}from"./calfSystem-ae2e69af.js"
import{a as l,i as f,v as p}from"./arena-763ef271.js"
import{i as d}from"./interceptSubmit-9058efa4.js"
import{a as u}from"./addCommas-c0fbc0a2.js"
import{c as v}from"./createSelect-76aed77c.js"
import{i as j}from"./insertElementAfterBegin-2a71a56b.js"
import{i as b}from"./isSelected-f063e2cb.js"
import"./allthen-b379c12a.js"
import"./all-47be5400.js"
import"./closestTr-eb55d944.js"
import"./closest-8e46d454.js"
import"./idb-225659e6.js"
import"./intValue-a6f9b475.js"
import"./changeMinMax-62835ba1.js"
import"./numberIsNaN-c7db67d0.js"
import"./assets-38ff398f.js"
import"./lvlTests-1bdf269d.js"
import"./loadDataTables-623d90a5.js"
import"./currentGuildId-85358166.js"
import"./isArray-332d93eb.js"
import"./setTipped-031e6715.js"
import"./formToUrl-35718c02.js"
import"./insertElementBefore-c442a2a7.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function x(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function y(e,r){const n=function(e){return $||($=s(e,t())),$}(r)
i("",n),e.slots.forEach(a(h,n))}function S(e,t,s){var i;(i=t.target.value,l({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&y(s,e)}))}function T(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&S(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(a(x,e.current_set)).join("")})
r(n,"change",a(T,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),y(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function M(){m("arenaTypeTabs")?f():(d(),p().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-db27b74c.js.map
