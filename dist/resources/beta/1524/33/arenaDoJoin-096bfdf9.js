import{y as s,aj as a,C as t,t as r,V as e,T as i}from"./calfSystem-c91a5c89.js"
import{i as o}from"./arena-1104495f.js"
import{g as n,s as c}from"./idb-ba7ef5fa.js"
import"./allthen-259c1952.js"
import"./all-978030c9.js"
import"./closestTr-1719adc3.js"
import"./closest-8b679b7a.js"
import"./intValue-55d66e09.js"
import"./changeMinMax-ab03a69d.js"
import"./numberIsNaN-c188f177.js"
import"./assets-4b152e49.js"
import"./lvlTests-6fc40d85.js"
import"./interceptSubmit-910866a3.js"
import"./formToUrl-3cd8bc13.js"
import"./loadDataTables-fbe68d5e.js"
import"./currentGuildId-1acce0c7.js"
import"./isArray-91e28808.js"
import"./setTipped-90ca799b.js"
function m(s,a){const t=a||{}
t[s]=i,c("fsh_arenaFull",t)}function p(){s("arenaTypeTabs")?o():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(r(m,s))}else e("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-096bfdf9.js.map
