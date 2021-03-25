import{S as t,m as s,h as e,B as i,t as a,f as r,i as n,am as o,D as c,z as m}from"./calfSystem-4a40365f.js"
import{a as l,i as f,v as p}from"./arena-f9b92b24.js"
import{i as d}from"./interceptSubmit-c8d517a3.js"
import{a as u}from"./addCommas-fc2f471e.js"
import{c as v}from"./createSelect-d3370ffe.js"
import{i as j}from"./insertElementAfterBegin-b3eb6927.js"
import{i as b}from"./isSelected-ec34c747.js"
import"./allthen-a8900f54.js"
import"./all-778b38b7.js"
import"./closestTr-7b3a3d25.js"
import"./closest-7968af48.js"
import"./idb-2c15fd0c.js"
import"./intValue-ca51a3c0.js"
import"./changeMinMax-f6ae18c7.js"
import"./numberIsNaN-891c59d9.js"
import"./assets-7400169d.js"
import"./lvlTests-aa479c64.js"
import"./loadDataTables-90dfd205.js"
import"./currentGuildId-014a0323.js"
import"./isArray-c961431c.js"
import"./setTipped-4c2abd3e.js"
import"./formToUrl-8ffaa75b.js"
import"./insertElementBefore-42a90ba9.js"
function g(s){const e=Number(t("pvp_id"))
return s.arenas.find((t=>t.id===e))}let $
function h(t,s){let e=String(s-1)
0===s&&(e="x"),n(t,`<img src="${o}arena/${e}.png" class="moveImg">`)}function S(t,s){return`<option value="${String(s.id)}"${b(t.slots.join(),s.slots.join())}>${s.name}</option>`}function x(t,r){const n=function(t){return $||($=e(t,s())),$}(r)
i("",n),t.slots.forEach(a(h,n))}function T(t,s,e){var i;(i=s.target.value,l({subcmd:"usesetup",set_id:i})).then((s=>{s.s&&x(e,t)}))}function y(t,s,e){const i=t.sets.find((t=>t.id===Number(e.target.value)))
i&&T(s,e,i)}function N(t,i,n){if(n.specials){const n=s({className:"flex"})
!function(t,i){if(t.sets.length>0){const n=v({innerHTML:t.sets.map(a(S,t.current_set)).join("")})
r(n,"change",a(y,t,i))
const o=s({className:"flex"})
e(o,n),j(i,o)}}(t,n),x(t.current_set,n),e(i,n)}}function _(t,s){return`<div><div>${t}</div><div><img src="${o}ui/arena/specials_${e=s,String(Number(e))}.png"></div></div>`
var e}function E(t){const s=c("#pCC > form > table tr:nth-of-type(4) td")
if(t.r&&s){s.setAttribute("align","center")
const e=g(t.r)
n(s,function(t){return`<div class="flex"><div><div>Players</div><div>${t.players.length} / ${t.max_players}</div></div>${_("Specials",t.specials)}${_("Hell Forge",t.hellforge)}${_("Epic",t.epic)}<div><div>Max Equip Level</div><div>${u(t.equip_level)}</div></div></div>`}(e)),N(t.r,s,e)}}function M(){m("arenaTypeTabs")?f():(d(),p().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-e68c2d6a.js.map
