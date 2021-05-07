import{z as s,at as t,D as a,t as e,T as r,V as i}from"./calfSystem-9942149b.js"
import{i as o}from"./arena-63bb5338.js"
import{g as n,s as c}from"./idb-6116f2a7.js"
import"./allthen-0f84efe6.js"
import"./all-0d44a747.js"
import"./closestTr-d871b75b.js"
import"./closest-bc1fafe7.js"
import"./intValue-fefb28df.js"
import"./changeMinMax-54c36996.js"
import"./numberIsNaN-885a5556.js"
import"./assets-c96edcaf.js"
import"./lvlTests-e8960acc.js"
import"./interceptSubmit-13aed0cb.js"
import"./formToUrl-26ed3a6b.js"
import"./loadDataTables-887fed3f.js"
import"./currentGuildId-71878d37.js"
import"./isArray-a3f24c76.js"
import"./setTipped-2c9c4c64.js"
function m(s,t){const a=t||{}
a[s]=i,c("fsh_arenaFull",a)}function f(){s("arenaTypeTabs")?o():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(m,s))}else r("arena","doJoin",s)}()}export default f
//# sourceMappingURL=arenaDoJoin-b5a1e0ca.js.map
