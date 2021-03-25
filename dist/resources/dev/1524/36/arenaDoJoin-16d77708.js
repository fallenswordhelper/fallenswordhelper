import{z as a,am as s,D as t,t as e,X as o,V as i}from"./calfSystem-eeb1d862.js"
import{i as r}from"./arena-0710821f.js"
import{g as n,s as c}from"./idb-874d144e.js"
import"./allthen-a8900f54.js"
import"./all-778b38b7.js"
import"./closestTr-8d5ed3dd.js"
import"./closest-7968af48.js"
import"./intValue-ca51a3c0.js"
import"./changeMinMax-f6ae18c7.js"
import"./numberIsNaN-891c59d9.js"
import"./assets-7400169d.js"
import"./lvlTests-2d5c5936.js"
import"./interceptSubmit-6c8c8ca6.js"
import"./formToUrl-2acae37a.js"
import"./loadDataTables-0a81aa0c.js"
import"./currentGuildId-5370ff7a.js"
import"./setTipped-4c2abd3e.js"
function m(a,s){const t=s||{}
t[a]=i,c("fsh_arenaFull",t)}function p(){a("arenaTypeTabs")?r():function(){const a=s()
if(!function(a){return a&&a.includes("combat move")}(a))if(function(a){return a&&a.includes("your guild")}(a)){const a=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(m,a))}else o("arena","doJoin",a)}()}export default p
//# sourceMappingURL=arenaDoJoin-16d77708.js.map
