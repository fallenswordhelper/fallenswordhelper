import{S as t,m as e,h as s,A as i,t as a,f as r,i as n,al as o,C as c,y as l}from"./calfSystem-37f70deb.js"
import{a as m,i as p,v as d}from"./arena-9ede9b2a.js"
import{i as f}from"./interceptSubmit-8392a331.js"
import{a as u}from"./addCommas-20414553.js"
import{c as v}from"./createSelect-c89e076d.js"
import{i as j}from"./insertElementAfterBegin-98d25c7d.js"
import{i as b}from"./isSelected-c160c6b1.js"
import"./allthen-259c1952.js"
import"./all-978030c9.js"
import"./closestTr-8453785a.js"
import"./closest-8b679b7a.js"
import"./idb-416129aa.js"
import"./intValue-55d66e09.js"
import"./changeMinMax-ab03a69d.js"
import"./numberIsNaN-c188f177.js"
import"./assets-4b152e49.js"
import"./lvlTests-dc675116.js"
import"./loadDataTables-11148935.js"
import"./currentGuildId-5ba5aa94.js"
import"./setTipped-90ca799b.js"
import"./formToUrl-2a960512.js"
import"./insertElementBefore-0a7f2602.js"
function g(e){const s=Number(t("pvp_id"))
return e.arenas.find((t=>t.id===s))}let $
function h(t,e){let s=String(e-1)
0===e&&(s="x"),n(t,`<img src="${o}arena/${s}.png" class="moveImg">`)}function S(t,e){return`<option value="${String(e.id)}"${b(t.slots.join(),e.slots.join())}>${e.name}</option>`}function x(t,r){const n=function(t){return $||($=s(t,e())),$}(r)
i("",n),t.slots.forEach(a(h,n))}function T(t,e,s){var i;(i=e.target.value,m({subcmd:"usesetup",set_id:i})).then((e=>{e.s&&x(s,t)}))}function y(t,e,s){const i=t.sets.find((t=>t.id===Number(s.target.value)))
i&&T(e,s,i)}function N(t,i,n){if(n.specials){const n=e({className:"flex"})
!function(t,i){if(t.sets.length>0){const n=v({innerHTML:t.sets.map(a(S,t.current_set)).join("")})
r(n,"change",a(y,t,i))
const o=e({className:"flex"})
s(o,n),j(i,o)}}(t,n),x(t.current_set,n),s(i,n)}}function _(t,e){return`<div><div>${t}</div><div><img src="${o}ui/arena/specials_${s=e,String(Number(s))}.png"></div></div>`
var s}function E(t){const e=c("#pCC > form > table tr:nth-of-type(4) td")
if(t.r&&e){e.setAttribute("align","center")
const s=g(t.r)
n(e,function(t){return`<div class="flex"><div><div>Players</div><div>${t.players.length} / ${t.max_players}</div></div>${_("Specials",t.specials)}${_("Hell Forge",t.hellforge)}${_("Epic",t.epic)}<div><div>Max Equip Level</div><div>${u(t.equip_level)}</div></div></div>`}(s)),N(t.r,e,s)}}function C(){l("arenaTypeTabs")?p():(f(),d().catch((()=>({}))).then(E))}export default C
//# sourceMappingURL=arenaJoin-a236b287.js.map
