import{z as s,av as a,D as t,t as e,X as o,V as i}from"./calfSystem-b31aba65.js"
import{i as r}from"./arena-e9586f8e.js"
import{g as n,s as m}from"./idb-71729176.js"
import"./allthen-b65a93f3.js"
import"./all-2b32eb82.js"
import"./closestTr-51be90ef.js"
import"./closest-97a04dcf.js"
import"./intValue-f6303c59.js"
import"./changeMinMax-7a476e50.js"
import"./numberIsNaN-d0e4b349.js"
import"./assets-b1b89ba1.js"
import"./lvlTests-f49fda0d.js"
import"./interceptSubmit-b313ecea.js"
import"./formToUrl-b9ac6c05.js"
import"./loadDataTables-7c33b9c3.js"
import"./currentGuildId-c379e204.js"
import"./setTipped-70cff648.js"
function c(s,a){const t=a||{}
t[s]=i,m("fsh_arenaFull",t)}function p(){s("arenaTypeTabs")?r():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(c,s))}else o("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-74d7fefb.js.map
