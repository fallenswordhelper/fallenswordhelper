import{y as s,ah as a,C as t,t as r,V as i,T as o}from"./calfSystem-793da633.js"
import{i as e}from"./arena-ad0d7983.js"
import{g as n,s as m}from"./idb-e7344221.js"
import"./allthen-9dd15411.js"
import"./all-3246a95f.js"
import"./closestTr-5dabd71f.js"
import"./closest-f906514d.js"
import"./intValue-d2a6f461.js"
import"./changeMinMax-cbb09af7.js"
import"./numberIsNaN-738f2a3f.js"
import"./assets-1497d9b7.js"
import"./lvlTests-f2381b66.js"
import"./interceptSubmit-c2811ec0.js"
import"./formToUrl-97034a23.js"
import"./loadDataTables-90a93506.js"
import"./currentGuildId-1aba3c9c.js"
import"./isArray-3d9d6e31.js"
import"./setTipped-bbdd0d20.js"
function p(s,a){const t=a||{}
t[s]=o,m("fsh_arenaFull",t)}function d(){s("arenaTypeTabs")?e():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(r(p,s))}else i("arena","doJoin",s)}()}export default d
//# sourceMappingURL=arenaDoJoin-2f302a6a.js.map
