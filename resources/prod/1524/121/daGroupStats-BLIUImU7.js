import{g as r}from"./guildGroups-BMulbtna.js"
import{e as t,$ as a}from"./calfSystem-BtgQSp8m.js"
import{g as s}from"./attribsToArray-CS21Utdm.js"
function u(t){return r({subcmd2:"viewstats",group_id:t})}async function i(r){return function(r){if(!r)return{s:!1}
const t=s(r)
return{r:{attributes:[{id:0,value:t.attack},{id:1,value:t.defense},{id:2,value:t.armor},{id:4,value:t.damage},{id:3,value:t.hp}]}}}(await t({cmd:"guild",subcmd:"groups",subcmd2:"viewstats",group_id:r}))}function e(r){return a(u,i,r)}export{e as d}
//# sourceMappingURL=daGroupStats-BLIUImU7.js.map
