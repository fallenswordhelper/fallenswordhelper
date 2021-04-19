import{g as t}from"./guild-eb2d8b6c.js"
import{B as i,p as e,t as n,aJ as r,aA as l,bu as a}from"./calfSystem-26fbeaeb.js"
import{p as s}from"./padZ-5c8671fc.js"
import{s as c}from"./splitTime-078928e8.js"
async function d(i=0,e=100){const n=await function(i,e,n){const r={subcmd:"reliclist",offset:e,limit:n}
return i&&(r.guild_id=i),t(r)}(null,i,e)
return n.r.remaining_relics?n.r.relics.concat(await d(i+n.r.relics.length,Math.min(100,n.r.remaining_relics))):n.r.relics}function o(t,i){return i.id===t}function u(t){return t.attributes&&t.attributes.find(n(o,6))}function h(t,i){if(t){const e=t.find(n(o,i))
if(e)return e.value}return""}function f(t){return`<tr><td>${t.min_level}</td><td>${function(t){return`<a href="${r}relics${l}view&relic_id=${t.id}">${t.name}</a>`}(t)}</td><td>${e=t.guild,e?`<a href="${a}${e.id}">${e.name}</a>`:""}</td><td>${i=t.attributes,[6,0,4,5,7,8].map(n(h,i)).join("</td><td>")}</td><td>${function(t){if(!t)return""
const i=c(t)
return`${s(i[0])}d ${s(i[1])}h ${s(i[2])}m ${s(i[3])}s`}(t.time)}</td></tr>`
var i,e}function m(t){t.sort(((t,i)=>t.min_level-i.min_level)),i(function(t){return`<style>#pCC .reliclist {\n        border-collapse: collapse;\n        border-spacing: 0;\n        table-layout: fixed;\n      }\n      .reliclist, .reliclist th, .reliclist td {\n        border: 1px solid black;\n      }\n      .reliclist th, .reliclist td {\n        padding: 5px;\n      }\n      .reliclist th:nth-of-type(10), .reliclist td:nth-of-type(10) {\n        width: 100px;\n      }</style><table class="reliclist"><thead><tr><th>Level</th><th>Name</th><th>Guild</th><th>Stam<br>Gain</th><th>Atk</th><th>Dmg</th><th>Stam</th><th>Gold<br>Gain</th><th>XP<br>Gain</th><th>Time</th></tr></thead><tbody>${t.filter(u).map(f).join("")}</tbody></table>`}(t),e)}function b(){i("Loading...",e),d().then(m)}export default b
//# sourceMappingURL=reliclist-bac22478.js.map
