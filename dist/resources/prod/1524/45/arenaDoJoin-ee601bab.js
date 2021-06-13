import{z as s,av as a,D as t,t as e,S as r,U as i}from"./calfSystem-e1e858cd.js"
import{i as o}from"./arena-69f42bb7.js"
import{g as n,s as f}from"./idb-ef443609.js"
import"./allthen-b379c12a.js"
import"./all-47be5400.js"
import"./closestTr-1393a128.js"
import"./closest-8e46d454.js"
import"./intValue-a6f9b475.js"
import"./changeMinMax-62835ba1.js"
import"./numberIsNaN-c7db67d0.js"
import"./assets-38ff398f.js"
import"./lvlTests-31ff11aa.js"
import"./interceptSubmit-fde65f15.js"
import"./formToUrl-d7735a71.js"
import"./loadDataTables-ed4d6cff.js"
import"./currentGuildId-6f6caa9a.js"
import"./isArray-332d93eb.js"
import"./setTipped-031e6715.js"
function m(s,a){const t=a||{}
t[s]=i,f("fsh_arenaFull",t)}function p(){s("arenaTypeTabs")?o():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(m,s))}else r("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-ee601bab.js.map
