import{ci as s,$ as t,h as e,cg as n,r as o,s as r,ds as i}from"./calfSystem-BldO1y8X.js"
function u(t){return s({subcmd:"useitem",inventory_id:t})}const a=(s,t)=>({r:{[t]:[{n:o(/'(?<id>.*)'/,s)}]},s:!0})
function c(s){const t=s.split(" x ")
return{amount:t[0],type:i.indexOf(t[1])}}const f=[["You successfully used",()=>({s:!0})],["You successfully extracted",s=>a(s,"components")],["You failed to extract",()=>({r:{},s:!0})],["You gained",function(s){const t=o(/You gained {1,2}}(?<fragList>.*) Fragment\(s\)/,s)
if(t){return{r:{frags:t.split(", ").map(c)},s:!0}}r("da/useItem","Bad Msg",s)}],["You received",s=>a(s,"mailbox_items")]]
async function d(s){const t=await e({cmd:"profile",subcmd:"useitem",inventory_id:s})
return t?function(s){const t=n(s)
if(!t)return r("da/useItem","No Info"),{e:{message:"No Info"},s:!1}
{const s=f.find((s=>t.startsWith(s[0])))
if(s)return s[1](t)}return{e:{message:t},s:!1}}(t):{s:!1}}function m(s){return t(u,d,s)}export{m as d}
//# sourceMappingURL=daUseItem-Deu1zmzV.js.map
