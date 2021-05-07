import{z as s,av as a,D as t,t as r,T as e,V as i}from"./calfSystem-1d588248.js"
import{i as o}from"./arena-89b9eb2c.js"
import{g as n,s as c}from"./idb-dfc3696a.js"
import"./allthen-0f84efe6.js"
import"./all-0d44a747.js"
import"./closestTr-40749289.js"
import"./closest-bc1fafe7.js"
import"./intValue-fefb28df.js"
import"./changeMinMax-54c36996.js"
import"./numberIsNaN-885a5556.js"
import"./assets-c96edcaf.js"
import"./lvlTests-44fb2b54.js"
import"./interceptSubmit-60e593a5.js"
import"./formToUrl-0d0c488d.js"
import"./loadDataTables-1972bbb5.js"
import"./currentGuildId-9fdd6aa9.js"
import"./isArray-a3f24c76.js"
import"./setTipped-2c9c4c64.js"
function m(s,a){const t=a||{}
t[s]=i,c("fsh_arenaFull",t)}function f(){s("arenaTypeTabs")?o():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(r(m,s))}else e("arena","doJoin",s)}()}export default f
//# sourceMappingURL=arenaDoJoin-ca8b5d70.js.map
