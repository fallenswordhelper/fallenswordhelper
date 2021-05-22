import{R as e,m as t,h as s,B as i,t as a,f as r,i as n,ax as o,D as c,z as d}from"./calfSystem-a8d582b6.js"
import{a as m,i as l,v as f}from"./arena-6f998d14.js"
import{i as p}from"./interceptSubmit-6afbec2a.js"
import{a as u}from"./addCommas-aab57e5e.js"
import{c as v}from"./createSelect-d0f9b707.js"
import{i as b}from"./insertElementAfterBegin-f2f74df6.js"
import{i as j}from"./isSelected-fb883928.js"
import"./allthen-c5cfa8a4.js"
import"./all-8d04560c.js"
import"./closestTr-9db047d3.js"
import"./closest-7cf61e52.js"
import"./idb-d8c9a883.js"
import"./intValue-66f66ba9.js"
import"./changeMinMax-1ab4ee0d.js"
import"./numberIsNaN-11f99b26.js"
import"./assets-bced98d7.js"
import"./lvlTests-85cb2d7f.js"
import"./loadDataTables-b7d1e76f.js"
import"./currentGuildId-6d2e1d9d.js"
import"./isArray-e57269b2.js"
import"./setTipped-92acd4eb.js"
import"./formToUrl-4aa25bca.js"
import"./insertElementBefore-7c440c87.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function x(e,t){return`<option value="${String(t.id)}"${j(e.slots.join(),t.slots.join())}>${t.name}</option>`}function S(e,r){const n=function(e){return $||($=s(e,t())),$}(r)
i("",n),e.slots.forEach(a(h,n))}function T(e,t,s){var i;(i=t.target.value,m({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&S(s,e)}))}function y(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(a(x,e.current_set)).join("")})
r(n,"change",a(y,e,i))
const o=t({className:"flex"})
s(o,n),b(i,o)}}(e,n),S(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function M(){d("arenaTypeTabs")?l():(p(),f().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-5c5879af.js.map
