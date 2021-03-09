import{y as s,ak as a,C as t,t as e,W as o,U as i}from"./calfSystem-c07e3259.js"
import{i as r}from"./arena-4f60a533.js"
import{g as n,s as m}from"./idb-dd65ea6c.js"
import"./allthen-9dd15411.js"
import"./all-3246a95f.js"
import"./closestTr-51c4677a.js"
import"./closest-f906514d.js"
import"./intValue-d2a6f461.js"
import"./changeMinMax-cbb09af7.js"
import"./numberIsNaN-738f2a3f.js"
import"./assets-1497d9b7.js"
import"./lvlTests-1eaecd7f.js"
import"./interceptSubmit-a2751cf6.js"
import"./formToUrl-f2549b88.js"
import"./loadDataTables-c4cf29b5.js"
import"./currentGuildId-0e53e6a7.js"
import"./setTipped-bbdd0d20.js"
function f(s,a){const t=a||{}
t[s]=i,m("fsh_arenaFull",t)}function p(){s("arenaTypeTabs")?r():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(f,s))}else o("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-e7d78eb9.js.map
