import{g as r}from"./guildGroups-cd88d256.js"
import{d as t,$ as a}from"./calfSystem-2f15e074.js"
import{g as s}from"./attribsToArray-6fd164f1.js"
function u(t){return r({subcmd2:"viewstats",group_id:t})}async function i(r){return function(r){const t=s(r)
return{r:{attributes:[{id:0,value:t.attack},{id:1,value:t.defense},{id:2,value:t.armor},{id:4,value:t.damage},{id:3,value:t.hp}]}}}(await t({cmd:"guild",subcmd:"groups",subcmd2:"viewstats",group_id:r}))}function e(r){return a(u,i,r)}export{e as d}
//# sourceMappingURL=daGroupStats-a30dbb36.js.map
