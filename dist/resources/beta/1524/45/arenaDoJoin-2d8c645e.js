import{z as s,ax as t,D as a,t as e,S as r,U as i}from"./calfSystem-ae2e69af.js"
import{i as o}from"./arena-763ef271.js"
import{g as n,s as m}from"./idb-225659e6.js"
import"./allthen-b379c12a.js"
import"./all-47be5400.js"
import"./closestTr-eb55d944.js"
import"./closest-8e46d454.js"
import"./intValue-a6f9b475.js"
import"./changeMinMax-62835ba1.js"
import"./numberIsNaN-c7db67d0.js"
import"./assets-38ff398f.js"
import"./lvlTests-1bdf269d.js"
import"./interceptSubmit-9058efa4.js"
import"./formToUrl-35718c02.js"
import"./loadDataTables-623d90a5.js"
import"./currentGuildId-85358166.js"
import"./isArray-332d93eb.js"
import"./setTipped-031e6715.js"
function p(s,t){const a=t||{}
a[s]=i,m("fsh_arenaFull",a)}function l(){s("arenaTypeTabs")?o():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(p,s))}else r("arena","doJoin",s)}()}export default l
//# sourceMappingURL=arenaDoJoin-2d8c645e.js.map
