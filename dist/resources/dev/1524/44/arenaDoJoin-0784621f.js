import{z as s,ax as t,D as a,t as e,T as o,V as i}from"./calfSystem-f7cf24f6.js"
import{i as r}from"./arena-3b333308.js"
import{g as n,s as c}from"./idb-62b65e66.js"
import"./allthen-c5cfa8a4.js"
import"./all-8d04560c.js"
import"./closestTr-6cca472b.js"
import"./closest-7cf61e52.js"
import"./intValue-66f66ba9.js"
import"./changeMinMax-1ab4ee0d.js"
import"./numberIsNaN-11f99b26.js"
import"./assets-bced98d7.js"
import"./lvlTests-8d407121.js"
import"./interceptSubmit-2265e54d.js"
import"./formToUrl-2761f769.js"
import"./loadDataTables-699492d9.js"
import"./currentGuildId-d5258e6c.js"
import"./setTipped-92acd4eb.js"
function m(s,t){const a=t||{}
a[s]=i,c("fsh_arenaFull",a)}function p(){s("arenaTypeTabs")?r():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(m,s))}else o("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-0784621f.js.map
