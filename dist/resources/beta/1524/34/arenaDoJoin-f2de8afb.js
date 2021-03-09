import{y as s,aj as a,C as t,t as r,V as i,T as o}from"./calfSystem-dfa26790.js"
import{i as e}from"./arena-ebdca8a4.js"
import{g as n,s as m}from"./idb-93f11a94.js"
import"./allthen-9dd15411.js"
import"./all-3246a95f.js"
import"./closestTr-d7616f33.js"
import"./closest-f906514d.js"
import"./intValue-d2a6f461.js"
import"./changeMinMax-cbb09af7.js"
import"./numberIsNaN-738f2a3f.js"
import"./assets-1497d9b7.js"
import"./lvlTests-6a094b9e.js"
import"./interceptSubmit-c18e4478.js"
import"./formToUrl-4975483d.js"
import"./loadDataTables-56d4f322.js"
import"./currentGuildId-8fb4e32d.js"
import"./isArray-3d9d6e31.js"
import"./setTipped-bbdd0d20.js"
function d(s,a){const t=a||{}
t[s]=o,m("fsh_arenaFull",t)}function p(){s("arenaTypeTabs")?e():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(r(d,s))}else i("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-f2de8afb.js.map
