import{T as e,m as t,h as s,B as i,t as a,f as r,i as n,an as o,D as c,z as l}from"./calfSystem-eeb1d862.js"
import{a as m,i as d,v as f}from"./arena-0710821f.js"
import{i as p}from"./interceptSubmit-6c8c8ca6.js"
import{a as u}from"./addCommas-fc2f471e.js"
import{c as v}from"./createSelect-8010a0a9.js"
import{i as j}from"./insertElementAfterBegin-f3c5ddc0.js"
import{i as g}from"./isSelected-ec34c747.js"
import"./allthen-a8900f54.js"
import"./all-778b38b7.js"
import"./closestTr-8d5ed3dd.js"
import"./closest-7968af48.js"
import"./idb-874d144e.js"
import"./intValue-ca51a3c0.js"
import"./changeMinMax-f6ae18c7.js"
import"./numberIsNaN-891c59d9.js"
import"./assets-7400169d.js"
import"./lvlTests-2d5c5936.js"
import"./loadDataTables-0a81aa0c.js"
import"./currentGuildId-5370ff7a.js"
import"./setTipped-4c2abd3e.js"
import"./formToUrl-2acae37a.js"
import"./insertElementBefore-42a90ba9.js"
function b(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function T(e,t){return`<option value="${String(t.id)}"${g(e.slots.join(),t.slots.join())}>${t.name}</option>`}function x(e,r){const n=function(e){return $||($=s(e,t())),$}(r)
i("",n),e.slots.forEach(a(h,n))}function S(e,t,s){var i;(i=t.target.value,m({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&x(s,e)}))}function N(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&S(t,s,i)}function _(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(a(T,e.current_set)).join("")})
r(n,"change",a(N,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),x(e.current_set,n),s(i,n)}}function y(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=b(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${y("Specials",e.specials)}${y("Hell Forge",e.hellforge)}${y("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),_(e.r,t,s)}}function M(){l("arenaTypeTabs")?d():(p(),f().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-cec02fbe.js.map
