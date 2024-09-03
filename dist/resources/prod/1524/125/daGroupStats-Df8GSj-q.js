import{g as r}from"./guildGroups-C8_Y800J.js"
import{e as t,$ as a}from"./calfSystem-CgXU6vdM.js"
import{g as s}from"./attribsToArray-ONH3VuUl.js"
function u(t){return r({subcmd2:"viewstats",group_id:t})}async function i(r){return function(r){if(!r)return{s:!1}
const t=s(r)
return{r:{attributes:[{id:0,value:t.attack},{id:1,value:t.defense},{id:2,value:t.armor},{id:4,value:t.damage},{id:3,value:t.hp}]}}}(await t({cmd:"guild",subcmd:"groups",subcmd2:"viewstats",group_id:r}))}function e(r){return a(u,i,r)}export{e as d}
//# sourceMappingURL=daGroupStats-Df8GSj-q.js.map
