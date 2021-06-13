import{z as s,ay as t,D as a,t as e,T as o,V as i}from"./calfSystem-d3f0a380.js"
import{i as r}from"./arena-28a9eed6.js"
import{g as n,s as c}from"./idb-13440348.js"
import"./allthen-34d3fc07.js"
import"./all-3768003b.js"
import"./closestTr-fd5f5074.js"
import"./closest-d38ca7fc.js"
import"./intValue-19726e4b.js"
import"./changeMinMax-847fc3f2.js"
import"./numberIsNaN-c0e87dea.js"
import"./assets-57c269a1.js"
import"./lvlTests-8a65e876.js"
import"./interceptSubmit-96252bbe.js"
import"./formToUrl-d90c5ff1.js"
import"./loadDataTables-e8db81cb.js"
import"./currentGuildId-574c8e9f.js"
import"./setTipped-c38098a5.js"
function m(s,t){const a=t||{}
a[s]=i,c("fsh_arenaFull",a)}function p(){s("arenaTypeTabs")?r():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(m,s))}else o("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-b00ea4d2.js.map
