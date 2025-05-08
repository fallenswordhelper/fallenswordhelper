import{cS as t,$ as r,k as a}from"./calfSystem-BGOTz8de.js"
import{g as s}from"./attribsToArray-zsQ4234G.js"
function u(r){return t({subcmd2:"viewstats",group_id:r})}async function i(t){return function(t){if(!t)return{s:!1}
const r=s(t)
return{r:{attributes:[{id:0,value:r.attack},{id:1,value:r.defense},{id:2,value:r.armor},{id:4,value:r.damage},{id:3,value:r.hp}]}}}(await a({cmd:"guild",subcmd:"groups",subcmd2:"viewstats",group_id:t}))}function e(t){return r(u,i,t)}export{e as d}
//# sourceMappingURL=daGroupStats-PZ6GXdzg.js.map
