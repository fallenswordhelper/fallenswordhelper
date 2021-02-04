import{g as t}from"./guild-8eb115eb.js"
import{A as i,p as n,t as e,aC as r,aq as l,bs as a}from"./calfSystem-c91a5c89.js"
import{p as s}from"./padZ-df568ed6.js"
import{s as d}from"./splitTime-9a7b345f.js"
async function c(i=0,n=100){const e=await function(i,n,e){const r={subcmd:"reliclist",offset:n,limit:e}
return i&&(r.guild_id=i),t(r)}(null,i,n)
return e.r.remaining_relics?e.r.relics.concat(await c(i+e.r.relics.length,Math.min(100,e.r.remaining_relics))):e.r.relics}function o(t,i){return i.id===t}function h(t){return t.attributes&&t.attributes.find(e(o,6))}function u(t,i){if(t){const n=t.find(e(o,i))
if(n)return n.value}return""}function f(t){return`<tr><td>${t.min_level}</td><td>${function(t){return`<a href="${r}relics${l}view&relic_id=${t.id}">${t.name}</a>`}(t)}</td><td>${n=t.guild,n?`<a href="${a}${n.id}">${n.name}</a>`:""}</td><td>${i=t.attributes,[6,0,4,5,7,8].map(e(u,i)).join("</td><td>")}</td><td>${function(t){if(!t)return""
const i=d(t)
return`${s(i[0])}d ${s(i[1])}h ${s(i[2])}m ${s(i[3])}s`}(t.time)}</td></tr>`
var i,n}function m(t){t.sort(((t,i)=>t.min_level-i.min_level)),i(function(t){return`<style>#pCC .reliclist {\n        border-collapse: collapse;\n        border-spacing: 0;\n        table-layout: fixed;\n      }\n      .reliclist, .reliclist th, .reliclist td {\n        border: 1px solid black;\n      }\n      .reliclist th, .reliclist td {\n        padding: 5px;\n      }\n      .reliclist th:nth-of-type(10), .reliclist td:nth-of-type(10) {\n        width: 100px;\n      }</style><table class="reliclist"><thead><tr><th>Level</th><th>Name</th><th>Guild</th><th>Stam<br>Gain</th><th>Atk</th><th>Dmg</th><th>Stam</th><th>Gold<br>Gain</th><th>XP<br>Gain</th><th>Time</th></tr></thead><tbody>${t.filter(h).map(f).join("")}</tbody></table>`}(t),n)}function p(){i("Loading...",n),c().then(m)}export default p
//# sourceMappingURL=reliclist-b47db678.js.map
