import{R as e,m as t,h as s,B as i,t as a,f as r,i as n,aw as o,D as c,z as f}from"./calfSystem-e1e858cd.js"
import{a as m,i as l,v as p}from"./arena-69f42bb7.js"
import{i as d}from"./interceptSubmit-fde65f15.js"
import{a as u}from"./addCommas-c0fbc0a2.js"
import{c as v}from"./createSelect-ca52a6a2.js"
import{i as j}from"./insertElementAfterBegin-4f7e454a.js"
import{i as b}from"./isSelected-f063e2cb.js"
import"./allthen-b379c12a.js"
import"./all-47be5400.js"
import"./closestTr-1393a128.js"
import"./closest-8e46d454.js"
import"./idb-ef443609.js"
import"./intValue-a6f9b475.js"
import"./changeMinMax-62835ba1.js"
import"./numberIsNaN-c7db67d0.js"
import"./assets-38ff398f.js"
import"./lvlTests-31ff11aa.js"
import"./loadDataTables-ed4d6cff.js"
import"./currentGuildId-6f6caa9a.js"
import"./isArray-332d93eb.js"
import"./setTipped-031e6715.js"
import"./formToUrl-d7735a71.js"
import"./insertElementBefore-c442a2a7.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function x(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function S(e,r){const n=function(e){return $||($=s(e,t())),$}(r)
i("",n),e.slots.forEach(a(h,n))}function T(e,t,s){var i;(i=t.target.value,m({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&S(s,e)}))}function y(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(a(x,e.current_set)).join("")})
r(n,"change",a(y,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),S(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function M(){f("arenaTypeTabs")?l():(d(),p().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-9c4e20e5.js.map
