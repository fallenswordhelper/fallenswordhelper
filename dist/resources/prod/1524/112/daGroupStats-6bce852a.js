import{g as r}from"./guildGroups-c61054e3.js"
import{d as t,$ as a}from"./calfSystem-4830a18d.js"
import{g as s}from"./attribsToArray-a01ba54f.js"
function u(t){return r({subcmd2:"viewstats",group_id:t})}async function i(r){return function(r){const t=s(r)
return{r:{attributes:[{id:0,value:t.attack},{id:1,value:t.defense},{id:2,value:t.armor},{id:4,value:t.damage},{id:3,value:t.hp}]}}}(await t({cmd:"guild",subcmd:"groups",subcmd2:"viewstats",group_id:r}))}function e(r){return a(u,i,r)}export{e as d}
//# sourceMappingURL=daGroupStats-6bce852a.js.map
