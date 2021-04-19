import{z as s,au as a,D as t,t as e,W as r,U as i}from"./calfSystem-26fbeaeb.js"
import{i as o}from"./arena-b33cac95.js"
import{g as n,s as m}from"./idb-7ea76af7.js"
import"./allthen-b65a93f3.js"
import"./all-2b32eb82.js"
import"./closestTr-9c98eebc.js"
import"./closest-97a04dcf.js"
import"./intValue-f6303c59.js"
import"./changeMinMax-7a476e50.js"
import"./numberIsNaN-d0e4b349.js"
import"./assets-b1b89ba1.js"
import"./lvlTests-baa56542.js"
import"./interceptSubmit-b180aeed.js"
import"./formToUrl-140d33d2.js"
import"./loadDataTables-f8882460.js"
import"./currentGuildId-5214ee19.js"
import"./isArray-f324e0ac.js"
import"./setTipped-70cff648.js"
function p(s,a){const t=a||{}
t[s]=i,m("fsh_arenaFull",t)}function c(){s("arenaTypeTabs")?o():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(p,s))}else r("arena","doJoin",s)}()}export default c
//# sourceMappingURL=arenaDoJoin-8b419f21.js.map
