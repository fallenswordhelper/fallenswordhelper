import{z as a,al as s,D as t,t as r,W as i,U as o}from"./calfSystem-4a40365f.js"
import{i as e}from"./arena-f9b92b24.js"
import{g as n,s as c}from"./idb-2c15fd0c.js"
import"./allthen-a8900f54.js"
import"./all-778b38b7.js"
import"./closestTr-7b3a3d25.js"
import"./closest-7968af48.js"
import"./intValue-ca51a3c0.js"
import"./changeMinMax-f6ae18c7.js"
import"./numberIsNaN-891c59d9.js"
import"./assets-7400169d.js"
import"./lvlTests-aa479c64.js"
import"./interceptSubmit-c8d517a3.js"
import"./formToUrl-8ffaa75b.js"
import"./loadDataTables-90dfd205.js"
import"./currentGuildId-014a0323.js"
import"./isArray-c961431c.js"
import"./setTipped-4c2abd3e.js"
function m(a,s){const t=s||{}
t[a]=o,c("fsh_arenaFull",t)}function p(){a("arenaTypeTabs")?e():function(){const a=s()
if(!function(a){return a&&a.includes("combat move")}(a))if(function(a){return a&&a.includes("your guild")}(a)){const a=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(r(m,a))}else i("arena","doJoin",a)}()}export default p
//# sourceMappingURL=arenaDoJoin-12a2d52c.js.map
