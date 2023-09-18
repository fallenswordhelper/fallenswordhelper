import{bC as s,d as t,bB as e,n,r as o,cE as r,$ as u}from"./calfSystem-929ac228.js"
function i(t){return s({subcmd:"useitem",inventory_id:t})}const a=(s,t)=>({r:{[t]:[{n:o(/'(?<id>.*)'/,s)}]},s:!0})
function c(s){const t=s.split(" x ")
return{amount:t[0],type:r.indexOf(t[1])}}const f=[["You successfully used",()=>({s:!0})],["You successfully extracted",s=>a(s,"components")],["You failed to extract",()=>({r:{},s:!0})],["You gained",function(s){const t=o(/You gained {1,2}}(?<fragList>.*) Fragment\(s\)/,s)
if(t){return{r:{frags:t.split(", ").map(c)},s:!0}}n("da/useItem","Bad Msg",s)}],["You received",s=>a(s,"mailbox_items")]]
async function d(s){return function(s){const t=e(s)
if(!t)return n("da/useItem","No Info"),{e:{message:"No Info"},s:!1}
{const s=f.find((s=>t.startsWith(s[0])))
if(s)return s[1](t)}return{e:{message:t},s:!1}}(await t({cmd:"profile",subcmd:"useitem",inventory_id:s}))}function m(s){return u(i,d,s)}export{m as d}
//# sourceMappingURL=daUseItem-fb5310a4.js.map
