import{R as t,m as s,h as e,A as i,t as r,f as a,i as n,ai as o,C as c,y as m}from"./calfSystem-0708a9bb.js"
import{a as l,i as p,v as d}from"./arena-a4349e4d.js"
import{i as f}from"./interceptSubmit-b52f1e00.js"
import{a as u}from"./addCommas-20414553.js"
import{c as v}from"./createSelect-d10939aa.js"
import{i as j}from"./insertElementAfterBegin-20400e4d.js"
import{i as b}from"./isSelected-c160c6b1.js"
import"./allthen-259c1952.js"
import"./all-978030c9.js"
import"./closestTr-33960a32.js"
import"./closest-8b679b7a.js"
import"./idb-9ebd251c.js"
import"./intValue-55d66e09.js"
import"./changeMinMax-ab03a69d.js"
import"./numberIsNaN-c188f177.js"
import"./assets-4b152e49.js"
import"./lvlTests-184d3908.js"
import"./loadDataTables-2cf1d95b.js"
import"./currentGuildId-c383c2b8.js"
import"./isArray-91e28808.js"
import"./setTipped-90ca799b.js"
import"./formToUrl-25c06939.js"
import"./insertElementBefore-0a7f2602.js"
function g(s){const e=Number(t("pvp_id"))
return s.arenas.find((t=>t.id===e))}let $
function h(t,s){let e=String(s-1)
0===s&&(e="x"),n(t,`<img src="${o}arena/${e}.png" class="moveImg">`)}function x(t,s){return`<option value="${String(s.id)}"${b(t.slots.join(),s.slots.join())}>${s.name}</option>`}function y(t,a){const n=function(t){return $||($=e(t,s())),$}(a)
i("",n),t.slots.forEach(r(h,n))}function S(t,s,e){var i;(i=s.target.value,l({subcmd:"usesetup",set_id:i})).then((s=>{s.s&&y(e,t)}))}function T(t,s,e){const i=t.sets.find((t=>t.id===Number(e.target.value)))
i&&S(s,e,i)}function N(t,i,n){if(n.specials){const n=s({className:"flex"})
!function(t,i){if(t.sets.length>0){const n=v({innerHTML:t.sets.map(r(x,t.current_set)).join("")})
a(n,"change",r(T,t,i))
const o=s({className:"flex"})
e(o,n),j(i,o)}}(t,n),y(t.current_set,n),e(i,n)}}function _(t,s){return`<div><div>${t}</div><div><img src="${o}ui/arena/specials_${e=s,String(Number(e))}.png"></div></div>`
var e}function E(t){const s=c("#pCC > form > table tr:nth-of-type(4) td")
if(t.r&&s){s.setAttribute("align","center")
const e=g(t.r)
n(s,function(t){return`<div class="flex"><div><div>Players</div><div>${t.players.length} / ${t.max_players}</div></div>${_("Specials",t.specials)}${_("Hell Forge",t.hellforge)}${_("Epic",t.epic)}<div><div>Max Equip Level</div><div>${u(t.equip_level)}</div></div></div>`}(e)),N(t.r,s,e)}}function A(){m("arenaTypeTabs")?p():(f(),d().catch((()=>({}))).then(E))}export default A
//# sourceMappingURL=arenaJoin-114a59b4.js.map
