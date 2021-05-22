import{z as s,aw as a,D as t,t as e,S as r,U as i}from"./calfSystem-a8d582b6.js"
import{i as o}from"./arena-6f998d14.js"
import{g as n,s as m}from"./idb-d8c9a883.js"
import"./allthen-c5cfa8a4.js"
import"./all-8d04560c.js"
import"./closestTr-9db047d3.js"
import"./closest-7cf61e52.js"
import"./intValue-66f66ba9.js"
import"./changeMinMax-1ab4ee0d.js"
import"./numberIsNaN-11f99b26.js"
import"./assets-bced98d7.js"
import"./lvlTests-85cb2d7f.js"
import"./interceptSubmit-6afbec2a.js"
import"./formToUrl-4aa25bca.js"
import"./loadDataTables-b7d1e76f.js"
import"./currentGuildId-6d2e1d9d.js"
import"./isArray-e57269b2.js"
import"./setTipped-92acd4eb.js"
function c(s,a){const t=a||{}
t[s]=i,m("fsh_arenaFull",t)}function p(){s("arenaTypeTabs")?o():function(){const s=a()
if(!function(s){return s&&s.includes("combat move")}(s))if(function(s){return s&&s.includes("your guild")}(s)){const s=t('#pCC input[name="pvp_id"]').value
n("fsh_arenaFull").then(e(c,s))}else r("arena","doJoin",s)}()}export default p
//# sourceMappingURL=arenaDoJoin-c3de24f7.js.map
