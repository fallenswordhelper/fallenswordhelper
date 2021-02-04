import{y as a,ak as s,C as t,t as o,W as e,U as i}from"./calfSystem-37f70deb.js"
import{i as r}from"./arena-9ede9b2a.js"
import{g as n,s as m}from"./idb-416129aa.js"
import"./allthen-259c1952.js"
import"./all-978030c9.js"
import"./closestTr-8453785a.js"
import"./closest-8b679b7a.js"
import"./intValue-55d66e09.js"
import"./changeMinMax-ab03a69d.js"
import"./numberIsNaN-c188f177.js"
import"./assets-4b152e49.js"
import"./lvlTests-dc675116.js"
import"./interceptSubmit-8392a331.js"
import"./formToUrl-2a960512.js"
import"./loadDataTables-11148935.js"
import"./currentGuildId-5ba5aa94.js"
import"./setTipped-90ca799b.js"
function p(a,s){const t=s||{}
t[a]=i,m("fsh_arenaFull",t)}function l(){a("arenaTypeTabs")?r():function(){const a=s()
if(!function(a){return a&&a.includes("combat move")}(a))if(function(a){return a&&a.includes("your guild")}(a)){const a=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(o(p,a))}else e("arena","doJoin",a)}()}export default l
//# sourceMappingURL=arenaDoJoin-4a5a3e45.js.map
