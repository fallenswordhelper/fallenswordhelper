import{u as t,w as e,X as s,br as n,bq as o,$ as u}from"./calfSystem-eeb1d862.js"
function r(t){const e=t.match(/(\d+) x (.*)/)
return{amount:e[1],type:n.indexOf(e[2])}}const a=[["You successfully used",()=>({s:!0})],["You successfully extracted",t=>({r:{item:{n:t.match(/'(.*)'/)[1]}},s:!0})],["You failed to extract",()=>({r:{},s:!0})],["You gained",function(t){const e=t.match(/You gained (.*) Fragments/)
if(e){return{r:{frags:e[1].split(", ").map(r)},s:!0}}s("da/useItem","Bad Msg",t),console.log("da/useItem","Bad Msg",t)}]]
function c(t){const n=e(t)
if(!n)return s("da/useItem","No Info"),console.log("da/useItem","No Info"),{s:!1}
{const t=a.find((t=>n.startsWith(t[0])))
if(t)return t[1](n)}return{e:{message:n},s:!1}}function i(e){return t({cmd:"profile",subcmd:"useitem",inventory_id:e}).then(c)}function d(t){return o({subcmd:"useitem",inventory_id:t})}function f(t){return u(d,i,t)}export{f as d}
//# sourceMappingURL=daUseItem-44d35487.js.map
