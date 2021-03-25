import{z as s,al as t,D as a,t as e,W as r,U as i}from"./calfSystem-cb2a6f39.js"
import{i as o}from"./arena-dc34e408.js"
import{g as n,s as m}from"./idb-b27e17a7.js"
import"./allthen-e710674d.js"
import"./all-d206e4b9.js"
import"./closestTr-e78cd215.js"
import"./closest-214539bf.js"
import"./intValue-0e97c9b9.js"
import"./changeMinMax-84a626e9.js"
import"./numberIsNaN-a6723163.js"
import"./assets-48ba956a.js"
import"./lvlTests-87fbde54.js"
import"./interceptSubmit-5c6ee190.js"
import"./formToUrl-09695de7.js"
import"./loadDataTables-55d5a709.js"
import"./currentGuildId-32ce2428.js"
import"./isArray-dcd15679.js"
import"./setTipped-f5389fab.js"
function p(s,t){const a=t||{}
a[s]=i,m("fsh_arenaFull",a)}function l(){s("arenaTypeTabs")?o():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(p,s))}else r("arena","doJoin",s)}()}export default l
//# sourceMappingURL=arenaDoJoin-06c25ccd.js.map
