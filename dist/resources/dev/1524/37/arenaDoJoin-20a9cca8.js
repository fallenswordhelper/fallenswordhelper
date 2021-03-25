import{z as s,am as a,D as t,t as e,X as o,V as i}from"./calfSystem-5d0c721b.js"
import{i as r}from"./arena-44e6a3e8.js"
import{g as n,s as m}from"./idb-a2aaccdb.js"
import"./allthen-e710674d.js"
import"./all-d206e4b9.js"
import"./closestTr-c75289e9.js"
import"./closest-214539bf.js"
import"./intValue-0e97c9b9.js"
import"./changeMinMax-84a626e9.js"
import"./numberIsNaN-a6723163.js"
import"./assets-48ba956a.js"
import"./lvlTests-84941b99.js"
import"./interceptSubmit-23ea3d0b.js"
import"./formToUrl-3d2d4f7c.js"
import"./loadDataTables-e951bd1f.js"
import"./currentGuildId-01b0f97a.js"
import"./setTipped-f5389fab.js"
function p(s,a){const t=a||{}
t[s]=i,m("fsh_arenaFull",t)}function l(){s("arenaTypeTabs")?r():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(p,s))}else o("arena","doJoin",s)}()}export default l
//# sourceMappingURL=arenaDoJoin-20a9cca8.js.map
