import{z as s,aw as t,D as a,t as e,U as o,W as i}from"./calfSystem-3cb2f93e.js"
import{i as r}from"./arena-79fdb9b1.js"
import{g as n,s as c}from"./idb-c9ce87e3.js"
import"./allthen-0f84efe6.js"
import"./all-0d44a747.js"
import"./closestTr-0cdbb46f.js"
import"./closest-bc1fafe7.js"
import"./intValue-fefb28df.js"
import"./changeMinMax-54c36996.js"
import"./numberIsNaN-885a5556.js"
import"./assets-c96edcaf.js"
import"./lvlTests-948a22c7.js"
import"./interceptSubmit-4878d2e6.js"
import"./formToUrl-deef0cd3.js"
import"./loadDataTables-351ff0a1.js"
import"./currentGuildId-a71d60fb.js"
import"./setTipped-2c9c4c64.js"
function f(s,t){const a=t||{}
a[s]=i,c("fsh_arenaFull",a)}function m(){s("arenaTypeTabs")?r():function(){const s=t()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=a('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(f,s))}else o("arena","doJoin",s)}()}export default m
//# sourceMappingURL=arenaDoJoin-3738a8e2.js.map
