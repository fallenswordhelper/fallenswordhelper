import{T as e,m as t,h as s,B as i,t as a,f as r,i as n,aw as o,D as c,z as l}from"./calfSystem-b31aba65.js"
import{a as m,i as f,v as p}from"./arena-e9586f8e.js"
import{i as d}from"./interceptSubmit-b313ecea.js"
import{a as u}from"./addCommas-37fb94e0.js"
import{c as v}from"./createSelect-e259893f.js"
import{i as b}from"./insertElementAfterBegin-1439c9a9.js"
import{i as j}from"./isSelected-deb32a59.js"
import"./allthen-b65a93f3.js"
import"./all-2b32eb82.js"
import"./closestTr-51be90ef.js"
import"./closest-97a04dcf.js"
import"./idb-71729176.js"
import"./intValue-f6303c59.js"
import"./changeMinMax-7a476e50.js"
import"./numberIsNaN-d0e4b349.js"
import"./assets-b1b89ba1.js"
import"./lvlTests-f49fda0d.js"
import"./loadDataTables-7c33b9c3.js"
import"./currentGuildId-c379e204.js"
import"./setTipped-70cff648.js"
import"./formToUrl-b9ac6c05.js"
import"./insertElementBefore-68b894c4.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function T(e,t){return`<option value="${String(t.id)}"${j(e.slots.join(),t.slots.join())}>${t.name}</option>`}function x(e,r){const n=function(e){return $||($=s(e,t())),$}(r)
i("",n),e.slots.forEach(a(h,n))}function S(e,t,s){var i;(i=t.target.value,m({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&x(s,e)}))}function N(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&S(t,s,i)}function _(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(a(T,e.current_set)).join("")})
r(n,"change",a(N,e,i))
const o=t({className:"flex"})
s(o,n),b(i,o)}}(e,n),x(e.current_set,n),s(i,n)}}function y(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${y("Specials",e.specials)}${y("Hell Forge",e.hellforge)}${y("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),_(e.r,t,s)}}function M(){l("arenaTypeTabs")?f():(d(),p().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-bc95e3ed.js.map
