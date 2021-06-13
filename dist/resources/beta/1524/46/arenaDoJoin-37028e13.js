import{z as s,ax as t,D as a,t as e,S as r,U as i}from"./calfSystem-cbf77dd7.js"
import{i as o}from"./arena-27984f49.js"
import{g as n,s as c}from"./idb-82a91df1.js"
import"./allthen-34d3fc07.js"
import"./all-3768003b.js"
import"./closestTr-205327ed.js"
import"./closest-d38ca7fc.js"
import"./intValue-19726e4b.js"
import"./changeMinMax-847fc3f2.js"
import"./numberIsNaN-c0e87dea.js"
import"./assets-57c269a1.js"
import"./lvlTests-f0348094.js"
import"./interceptSubmit-b6d9986f.js"
import"./formToUrl-5189bcfb.js"
import"./loadDataTables-e315eea0.js"
import"./currentGuildId-96726c8f.js"
import"./isArray-e47504c9.js"
import"./setTipped-c38098a5.js"
function m(s,t){const a=t||{}
a[s]=i,c("fsh_arenaFull",a)}function p(){s("arenaTypeTabs")?o():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(m,s))}else r("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-37028e13.js.map
