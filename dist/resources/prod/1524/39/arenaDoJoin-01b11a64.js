import{z as s,as as t,D as a,t as e,W as r,U as i}from"./calfSystem-fe534823.js"
import{i as o}from"./arena-dd098537.js"
import{g as n,s as f}from"./idb-1aaf30fa.js"
import"./allthen-b65a93f3.js"
import"./all-2b32eb82.js"
import"./closestTr-57989f73.js"
import"./closest-97a04dcf.js"
import"./intValue-f6303c59.js"
import"./changeMinMax-7a476e50.js"
import"./numberIsNaN-d0e4b349.js"
import"./assets-b1b89ba1.js"
import"./lvlTests-c0e94680.js"
import"./interceptSubmit-bb91bdd6.js"
import"./formToUrl-e34601f4.js"
import"./loadDataTables-5f8ffe3f.js"
import"./currentGuildId-cf47b942.js"
import"./isArray-f324e0ac.js"
import"./setTipped-70cff648.js"
function m(s,t){const a=t||{}
a[s]=i,f("fsh_arenaFull",a)}function p(){s("arenaTypeTabs")?o():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(m,s))}else r("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-01b11a64.js.map
