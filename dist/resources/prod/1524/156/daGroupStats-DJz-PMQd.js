import{cZ as t,$ as r,e as a}from"./calfSystem-79LsojAC.js"
import{g as s}from"./attribsToArray-DNO7bh5q.js"
function u(r){return t({subcmd2:"viewstats",group_id:r})}async function e(t){return function(t){if(!t)return{s:!1}
const r=s(t)
return{r:{attributes:[{id:0,value:r.attack},{id:1,value:r.defense},{id:2,value:r.armor},{id:4,value:r.damage},{id:3,value:r.hp}]}}}(await a({cmd:"guild",subcmd:"groups",subcmd2:"viewstats",group_id:t}))}function i(t){return r(u,e,t)}export{i as d}
//# sourceMappingURL=daGroupStats-DJz-PMQd.js.map
