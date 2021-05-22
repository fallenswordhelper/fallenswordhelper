import{z as s,au as a,D as t,t as e,S as r,U as i}from"./calfSystem-6ad077b7.js"
import{i as o}from"./arena-a81827b5.js"
import{g as n,s as m}from"./idb-9caca870.js"
import"./allthen-c5cfa8a4.js"
import"./all-8d04560c.js"
import"./closestTr-49841bb4.js"
import"./closest-7cf61e52.js"
import"./intValue-66f66ba9.js"
import"./changeMinMax-1ab4ee0d.js"
import"./numberIsNaN-11f99b26.js"
import"./assets-bced98d7.js"
import"./lvlTests-7c87f638.js"
import"./interceptSubmit-efbdb1e0.js"
import"./formToUrl-a21852b2.js"
import"./loadDataTables-4a821f8f.js"
import"./currentGuildId-e0011880.js"
import"./isArray-e57269b2.js"
import"./setTipped-92acd4eb.js"
function p(s,a){const t=a||{}
t[s]=i,m("fsh_arenaFull",t)}function c(){s("arenaTypeTabs")?o():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(p,s))}else r("arena","doJoin",s)}()}export default c
//# sourceMappingURL=arenaDoJoin-f92c2e3a.js.map
