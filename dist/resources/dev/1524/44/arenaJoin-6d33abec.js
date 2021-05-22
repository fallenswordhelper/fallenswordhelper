import{S as e,m as t,h as s,B as i,t as r,f as a,i as n,ay as o,D as c,z as l}from"./calfSystem-f7cf24f6.js"
import{a as m,i as d,v as f}from"./arena-3b333308.js"
import{i as p}from"./interceptSubmit-2265e54d.js"
import{a as u}from"./addCommas-aab57e5e.js"
import{c as v}from"./createSelect-cac00317.js"
import{i as j}from"./insertElementAfterBegin-b6d22612.js"
import{i as b}from"./isSelected-fb883928.js"
import"./allthen-c5cfa8a4.js"
import"./all-8d04560c.js"
import"./closestTr-6cca472b.js"
import"./closest-7cf61e52.js"
import"./idb-62b65e66.js"
import"./intValue-66f66ba9.js"
import"./changeMinMax-1ab4ee0d.js"
import"./numberIsNaN-11f99b26.js"
import"./assets-bced98d7.js"
import"./lvlTests-8d407121.js"
import"./loadDataTables-699492d9.js"
import"./currentGuildId-d5258e6c.js"
import"./setTipped-92acd4eb.js"
import"./formToUrl-2761f769.js"
import"./insertElementBefore-7c440c87.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function S(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function x(e,a){const n=function(e){return $||($=s(e,t())),$}(a)
i("",n),e.slots.forEach(r(h,n))}function T(e,t,s){var i;(i=t.target.value,m({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&x(s,e)}))}function y(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(r(S,e.current_set)).join("")})
a(n,"change",r(y,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),x(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function M(){l("arenaTypeTabs")?d():(p(),f().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-6d33abec.js.map
