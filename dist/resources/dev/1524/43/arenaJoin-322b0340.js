import{T as e,m as t,h as s,B as i,t as r,f as a,i as n,ax as o,D as c,z as f}from"./calfSystem-3cb2f93e.js"
import{a as l,i as m,v as d}from"./arena-79fdb9b1.js"
import{i as p}from"./interceptSubmit-4878d2e6.js"
import{a as u}from"./addCommas-5b74e836.js"
import{c as v}from"./createSelect-89f4b773.js"
import{i as j}from"./insertElementAfterBegin-1d9bd581.js"
import{i as b}from"./isSelected-7dbc97c6.js"
import"./allthen-0f84efe6.js"
import"./all-0d44a747.js"
import"./closestTr-0cdbb46f.js"
import"./closest-bc1fafe7.js"
import"./idb-c9ce87e3.js"
import"./intValue-fefb28df.js"
import"./changeMinMax-54c36996.js"
import"./numberIsNaN-885a5556.js"
import"./assets-c96edcaf.js"
import"./lvlTests-948a22c7.js"
import"./loadDataTables-351ff0a1.js"
import"./currentGuildId-a71d60fb.js"
import"./setTipped-2c9c4c64.js"
import"./formToUrl-deef0cd3.js"
import"./insertElementBefore-23d4e956.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function x(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function T(e,a){const n=function(e){return $||($=s(e,t())),$}(a)
i("",n),e.slots.forEach(r(h,n))}function S(e,t,s){var i;(i=t.target.value,l({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&T(s,e)}))}function N(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&S(t,s,i)}function _(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(r(x,e.current_set)).join("")})
a(n,"change",r(N,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),T(e.current_set,n),s(i,n)}}function y(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${y("Specials",e.specials)}${y("Hell Forge",e.hellforge)}${y("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),_(e.r,t,s)}}function M(){f("arenaTypeTabs")?m():(p(),d().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-322b0340.js.map
