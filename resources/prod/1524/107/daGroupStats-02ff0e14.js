import{g as r}from"./guildGroups-50c9cd23.js"
import{d as t,$ as a}from"./calfSystem-2fff342b.js"
import{g as s}from"./attribsToArray-404ecaf6.js"
function u(t){return r({subcmd2:"viewstats",group_id:t})}async function i(r){return function(r){const t=s(r)
return{r:{attributes:[{id:0,value:t.attack},{id:1,value:t.defense},{id:2,value:t.armor},{id:4,value:t.damage},{id:3,value:t.hp}]}}}(await t({cmd:"guild",subcmd:"groups",subcmd2:"viewstats",group_id:r}))}function e(r){return a(u,i,r)}export{e as d}
//# sourceMappingURL=daGroupStats-02ff0e14.js.map
