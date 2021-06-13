import{S as t,m as e,h as s,B as i,t as a,f as r,i as n,az as o,D as c,z as l}from"./calfSystem-6a3c85e0.js"
import{a as m,i as f,v as p}from"./arena-cf8d889d.js"
import{i as d}from"./interceptSubmit-72e26708.js"
import{a as u}from"./addCommas-c0fbc0a2.js"
import{c as v}from"./createSelect-b818c7c0.js"
import{i as b}from"./insertElementAfterBegin-808a95bf.js"
import{i as j}from"./isSelected-f063e2cb.js"
import"./allthen-b379c12a.js"
import"./all-47be5400.js"
import"./closestTr-3df2da21.js"
import"./closest-8e46d454.js"
import"./idb-66004b57.js"
import"./intValue-a6f9b475.js"
import"./changeMinMax-62835ba1.js"
import"./numberIsNaN-c7db67d0.js"
import"./assets-38ff398f.js"
import"./lvlTests-b486c6aa.js"
import"./loadDataTables-a27cef97.js"
import"./currentGuildId-3f5ba5ad.js"
import"./setTipped-031e6715.js"
import"./formToUrl-8a7bb14c.js"
import"./insertElementBefore-c442a2a7.js"
function g(e){const s=Number(t("pvp_id"))
return e.arenas.find((t=>t.id===s))}let $
function h(t,e){let s=String(e-1)
0===e&&(s="x"),n(t,`<img src="${o}arena/${s}.png" class="moveImg">`)}function S(t,e){return`<option value="${String(e.id)}"${j(t.slots.join(),e.slots.join())}>${e.name}</option>`}function x(t,r){const n=function(t){return $||($=s(t,e())),$}(r)
i("",n),t.slots.forEach(a(h,n))}function T(t,e,s){var i;(i=e.target.value,m({subcmd:"usesetup",set_id:i})).then((e=>{e.s&&x(s,t)}))}function N(t,e,s){const i=t.sets.find((t=>t.id===Number(s.target.value)))
i&&T(e,s,i)}function _(t,i,n){if(n.specials){const n=e({className:"flex"})
!function(t,i){if(t.sets.length>0){const n=v({innerHTML:t.sets.map(a(S,t.current_set)).join("")})
r(n,"change",a(N,t,i))
const o=e({className:"flex"})
s(o,n),b(i,o)}}(t,n),x(t.current_set,n),s(i,n)}}function y(t,e){return`<div><div>${t}</div><div><img src="${o}ui/arena/specials_${s=e,String(Number(s))}.png"></div></div>`
var s}function E(t){const e=c("#pCC > form > table tr:nth-of-type(4) td")
if(t.r&&e){e.setAttribute("align","center")
const s=g(t.r)
n(e,function(t){return`<div class="flex"><div><div>Players</div><div>${t.players.length} / ${t.max_players}</div></div>${y("Specials",t.specials)}${y("Hell Forge",t.hellforge)}${y("Epic",t.epic)}<div><div>Max Equip Level</div><div>${u(t.equip_level)}</div></div></div>`}(s)),_(t.r,e,s)}}function M(){l("arenaTypeTabs")?f():(d(),p().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-71bc8e1e.js.map
