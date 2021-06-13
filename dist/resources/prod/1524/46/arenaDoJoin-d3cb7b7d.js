import{z as s,av as t,D as a,t as e,S as r,U as i}from"./calfSystem-7991d843.js"
import{i as o}from"./arena-eea7de89.js"
import{g as n,s as c}from"./idb-89606f1a.js"
import"./allthen-34d3fc07.js"
import"./all-3768003b.js"
import"./closestTr-31d65692.js"
import"./closest-d38ca7fc.js"
import"./intValue-19726e4b.js"
import"./changeMinMax-847fc3f2.js"
import"./numberIsNaN-c0e87dea.js"
import"./assets-57c269a1.js"
import"./lvlTests-8268cc0a.js"
import"./interceptSubmit-b3275ec5.js"
import"./formToUrl-33c970fe.js"
import"./loadDataTables-2e8487b2.js"
import"./currentGuildId-abfe3237.js"
import"./isArray-e47504c9.js"
import"./setTipped-c38098a5.js"
function m(s,t){const a=t||{}
a[s]=i,c("fsh_arenaFull",a)}function p(){s("arenaTypeTabs")?o():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(m,s))}else r("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-d3cb7b7d.js.map
