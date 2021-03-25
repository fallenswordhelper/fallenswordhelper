import{S as e,m as t,h as s,B as i,t as a,f as r,i as n,ak as o,D as c,z as m}from"./calfSystem-e7bde0c3.js"
import{a as l,i as d,v as p}from"./arena-5c28238a.js"
import{i as f}from"./interceptSubmit-41d1852c.js"
import{a as u}from"./addCommas-fc2f471e.js"
import{c as v}from"./createSelect-736cb892.js"
import{i as j}from"./insertElementAfterBegin-9b535417.js"
import{i as b}from"./isSelected-ec34c747.js"
import"./allthen-a8900f54.js"
import"./all-778b38b7.js"
import"./closestTr-d6d5777f.js"
import"./closest-7968af48.js"
import"./idb-47978eaa.js"
import"./intValue-ca51a3c0.js"
import"./changeMinMax-f6ae18c7.js"
import"./numberIsNaN-891c59d9.js"
import"./assets-7400169d.js"
import"./lvlTests-ecebb1ad.js"
import"./loadDataTables-67d6b8f1.js"
import"./currentGuildId-24e90d79.js"
import"./isArray-c961431c.js"
import"./setTipped-4c2abd3e.js"
import"./formToUrl-aa476074.js"
import"./insertElementBefore-42a90ba9.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function S(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function x(e,r){const n=function(e){return $||($=s(e,t())),$}(r)
i("",n),e.slots.forEach(a(h,n))}function T(e,t,s){var i;(i=t.target.value,l({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&x(s,e)}))}function y(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(a(S,e.current_set)).join("")})
r(n,"change",a(y,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),x(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function M(){m("arenaTypeTabs")?d():(f(),p().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-bb0b7427.js.map
