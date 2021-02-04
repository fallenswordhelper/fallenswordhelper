import{y as s,ah as t,C as a,t as r,V as i,T as o}from"./calfSystem-0708a9bb.js"
import{i as e}from"./arena-a4349e4d.js"
import{g as n,s as m}from"./idb-9ebd251c.js"
import"./allthen-259c1952.js"
import"./all-978030c9.js"
import"./closestTr-33960a32.js"
import"./closest-8b679b7a.js"
import"./intValue-55d66e09.js"
import"./changeMinMax-ab03a69d.js"
import"./numberIsNaN-c188f177.js"
import"./assets-4b152e49.js"
import"./lvlTests-184d3908.js"
import"./interceptSubmit-b52f1e00.js"
import"./formToUrl-25c06939.js"
import"./loadDataTables-2cf1d95b.js"
import"./currentGuildId-c383c2b8.js"
import"./isArray-91e28808.js"
import"./setTipped-90ca799b.js"
function p(s,t){const a=t||{}
a[s]=o,m("fsh_arenaFull",a)}function c(){s("arenaTypeTabs")?e():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(r(p,s))}else i("arena","doJoin",s)}()}export default c
//# sourceMappingURL=arenaDoJoin-8fc77376.js.map
