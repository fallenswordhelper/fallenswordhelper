import{S as e,m as t,h as s,B as i,t as r,f as a,i as n,aw as o,D as c,z as m}from"./calfSystem-1d588248.js"
import{a as l,i as f,v as d}from"./arena-89b9eb2c.js"
import{i as p}from"./interceptSubmit-60e593a5.js"
import{a as u}from"./addCommas-5b74e836.js"
import{c as v}from"./createSelect-e920e507.js"
import{i as j}from"./insertElementAfterBegin-38e30afe.js"
import{i as b}from"./isSelected-7dbc97c6.js"
import"./allthen-0f84efe6.js"
import"./all-0d44a747.js"
import"./closestTr-40749289.js"
import"./closest-bc1fafe7.js"
import"./idb-dfc3696a.js"
import"./intValue-fefb28df.js"
import"./changeMinMax-54c36996.js"
import"./numberIsNaN-885a5556.js"
import"./assets-c96edcaf.js"
import"./lvlTests-44fb2b54.js"
import"./loadDataTables-1972bbb5.js"
import"./currentGuildId-9fdd6aa9.js"
import"./isArray-a3f24c76.js"
import"./setTipped-2c9c4c64.js"
import"./formToUrl-0d0c488d.js"
import"./insertElementBefore-23d4e956.js"
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
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function M(){m("arenaTypeTabs")?f():(p(),d().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-66d369d9.js.map
