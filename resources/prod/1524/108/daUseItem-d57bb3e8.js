import{bE as s,d as e,bD as t,n,ad as a,az as u,r as o,cF as r,$ as i}from"./calfSystem-34913441.js"
function c(e){return s({subcmd:"useitem",inventory_id:e})}const d=(s,e)=>({r:{[e]:[{n:o(/'(?<id>.*)'/,s)}]},s:!0})
function f(s){const e=s.split(" x ")
return{amount:e[0],type:r.indexOf(e[1])}}const m=[["You successfully used",()=>({s:!0})],["You successfully extracted",s=>d(s,"components")],["You failed to extract",()=>({r:{},s:!0})],["You gained",function(s){const e=o(/You gained {1,2}}(?<fragList>.*) Fragment\(s\)/,s)
if(e){return{r:{frags:e.split(", ").map(f)},s:!0}}n("da/useItem","Bad Msg",s),a.userIsDev&&u("da/useItem","Bad Msg",s)}],["You received",s=>d(s,"mailbox_items")]]
function l(s){const e=t(s)
if(!e)return n("da/useItem","No Info"),a.userIsDev&&u("da/useItem","No Info"),{e:{message:"No Info"},s:!1}
{const s=m.find((s=>e.startsWith(s[0])))
if(s)return s[1](e)}return{e:{message:e},s:!1}}async function g(s){return l(await e({cmd:"profile",subcmd:"useitem",inventory_id:s}))}function I(s){return i(c,g,s)}export{I as d}
//# sourceMappingURL=daUseItem-d57bb3e8.js.map
