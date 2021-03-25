import{z as s,aj as a,D as t,t as e,W as r,U as i}from"./calfSystem-60c20ae9.js"
import{i as o}from"./arena-8607c4fb.js"
import{g as n,s as m}from"./idb-a07bf138.js"
import"./allthen-e710674d.js"
import"./all-d206e4b9.js"
import"./closestTr-3fe9cf12.js"
import"./closest-214539bf.js"
import"./intValue-0e97c9b9.js"
import"./changeMinMax-84a626e9.js"
import"./numberIsNaN-a6723163.js"
import"./assets-48ba956a.js"
import"./lvlTests-f9650e2d.js"
import"./interceptSubmit-0497cf12.js"
import"./formToUrl-dae90b24.js"
import"./loadDataTables-be60444d.js"
import"./currentGuildId-a7e07ffc.js"
import"./isArray-dcd15679.js"
import"./setTipped-f5389fab.js"
function p(s,a){const t=a||{}
t[s]=i,m("fsh_arenaFull",t)}function f(){s("arenaTypeTabs")?o():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(p,s))}else r("arena","doJoin",s)}()}export default f
//# sourceMappingURL=arenaDoJoin-f636b1e4.js.map
