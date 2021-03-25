import{z as s,aj as a,D as t,t as e,W as r,U as i}from"./calfSystem-e7bde0c3.js"
import{i as o}from"./arena-5c28238a.js"
import{g as n,s as c}from"./idb-47978eaa.js"
import"./allthen-a8900f54.js"
import"./all-778b38b7.js"
import"./closestTr-d6d5777f.js"
import"./closest-7968af48.js"
import"./intValue-ca51a3c0.js"
import"./changeMinMax-f6ae18c7.js"
import"./numberIsNaN-891c59d9.js"
import"./assets-7400169d.js"
import"./lvlTests-ecebb1ad.js"
import"./interceptSubmit-41d1852c.js"
import"./formToUrl-aa476074.js"
import"./loadDataTables-67d6b8f1.js"
import"./currentGuildId-24e90d79.js"
import"./isArray-c961431c.js"
import"./setTipped-4c2abd3e.js"
function m(s,a){const t=a||{}
t[s]=i,c("fsh_arenaFull",t)}function p(){s("arenaTypeTabs")?o():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(m,s))}else r("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-580f250d.js.map
