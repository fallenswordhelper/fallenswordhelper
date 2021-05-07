import{u as s,w as t,U as e,bs as n,br as o,$ as u}from"./calfSystem-3cb2f93e.js"
function r(s){const t=s.match(/(\d+) x (.*)/)
return{amount:t[1],type:n.indexOf(t[2])}}const a=[["You successfully used",()=>({s:!0})],["You successfully extracted",s=>({r:{item:{n:s.match(/'(.*)'/)[1]}},s:!0})],["You failed to extract",()=>({r:{},s:!0})],["You gained",function(s){const t=s.match(/You gained (.*) Fragments/)
if(t){return{r:{frags:t[1].split(", ").map(r)},s:!0}}e("da/useItem","Bad Msg",s),console.log("da/useItem","Bad Msg",s)}]]
function c(s){const n=t(s)
if(!n)return e("da/useItem","No Info"),console.log("da/useItem","No Info"),{s:!1}
{const s=a.find((s=>n.startsWith(s[0])))
if(s)return s[1](n)}return{e:{message:n},s:!1}}function i(t){return s({cmd:"profile",subcmd:"useitem",inventory_id:t}).then(c)}function f(s){return o({subcmd:"useitem",inventory_id:s})}function d(s){return u(f,i,s)}export{d}
//# sourceMappingURL=daUseItem-2c7c16fb.js.map
