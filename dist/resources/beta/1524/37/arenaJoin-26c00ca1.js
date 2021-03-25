import{S as e,m as t,h as s,B as i,t as r,f as a,i as n,am as o,D as c,z as m}from"./calfSystem-cb2a6f39.js"
import{a as l,i as d,v as p}from"./arena-dc34e408.js"
import{i as f}from"./interceptSubmit-5c6ee190.js"
import{a as u}from"./addCommas-e39c029a.js"
import{c as v}from"./createSelect-2cad11ae.js"
import{i as j}from"./insertElementAfterBegin-b0467547.js"
import{i as b}from"./isSelected-0bb734dd.js"
import"./allthen-e710674d.js"
import"./all-d206e4b9.js"
import"./closestTr-e78cd215.js"
import"./closest-214539bf.js"
import"./idb-b27e17a7.js"
import"./intValue-0e97c9b9.js"
import"./changeMinMax-84a626e9.js"
import"./numberIsNaN-a6723163.js"
import"./assets-48ba956a.js"
import"./lvlTests-87fbde54.js"
import"./loadDataTables-55d5a709.js"
import"./currentGuildId-32ce2428.js"
import"./isArray-dcd15679.js"
import"./setTipped-f5389fab.js"
import"./formToUrl-09695de7.js"
import"./insertElementBefore-656c48d5.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function S(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function x(e,a){const n=function(e){return $||($=s(e,t())),$}(a)
i("",n),e.slots.forEach(r(h,n))}function T(e,t,s){var i;(i=t.target.value,l({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&x(s,e)}))}function y(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(r(S,e.current_set)).join("")})
a(n,"change",r(y,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),x(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function M(){m("arenaTypeTabs")?d():(f(),p().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-26c00ca1.js.map
