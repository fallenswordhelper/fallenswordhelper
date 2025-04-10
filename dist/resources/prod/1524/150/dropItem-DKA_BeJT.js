import{y as n,an as t,j as e,K as s,ao as a,$ as i}from"./calfSystem-BGOTz8de.js"
import{d as o}from"./dialog-BW-ZNw6R.js"
import{s as r,a as m}from"./sendItems-BMwt7Ul-.js"
async function c(e,s){const a=await n({cmd:"profile",subcmd:"sendtofolder",inv_list:t(e),folder_id:s,ajax:1})
return o(a)}const d=({id:n,name:t})=>[n,t]
function f(n){return s(n?.inventories)?e(n.inventories.filter((({id:n})=>-1!==n)).map(d)):[]}function u(n){return r(a("itemRecipient"),n)}function p(n){return m(a("itemRecipient"),n)}function l(n){return i(u,p,n)}async function j(t){const e=await n({cmd:"profile",subcmd:"dodropitems",removeIndex:t,ajax:1})
return o(e)}export{j as a,l as d,f as e,c as m}
//# sourceMappingURL=dropItem-DKA_BeJT.js.map
