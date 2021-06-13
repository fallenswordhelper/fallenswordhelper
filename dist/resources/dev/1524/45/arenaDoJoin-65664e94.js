import{z as s,ay as a,D as t,t as e,T as o,V as i}from"./calfSystem-6a3c85e0.js"
import{i as r}from"./arena-cf8d889d.js"
import{g as n,s as m}from"./idb-66004b57.js"
import"./allthen-b379c12a.js"
import"./all-47be5400.js"
import"./closestTr-3df2da21.js"
import"./closest-8e46d454.js"
import"./intValue-a6f9b475.js"
import"./changeMinMax-62835ba1.js"
import"./numberIsNaN-c7db67d0.js"
import"./assets-38ff398f.js"
import"./lvlTests-b486c6aa.js"
import"./interceptSubmit-72e26708.js"
import"./formToUrl-8a7bb14c.js"
import"./loadDataTables-a27cef97.js"
import"./currentGuildId-3f5ba5ad.js"
import"./setTipped-031e6715.js"
function p(s,a){const t=a||{}
t[s]=i,m("fsh_arenaFull",t)}function c(){s("arenaTypeTabs")?r():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(p,s))}else o("arena","doJoin",s)}()}export default c
//# sourceMappingURL=arenaDoJoin-65664e94.js.map
