import{a2 as n,aA as a,h as e,ae as t,aB as s,$ as i}from"./calfSystem-BlPuMQGT.js"
import{d as r}from"./dialog-BW-ZNw6R.js"
import{s as o,a as m}from"./sendItems-2xtTmXd1.js"
async function c(e,t){const s=await n({cmd:"profile",subcmd:"sendtofolder",inv_list:a(e),folder_id:t,ajax:1})
return r(s)}const d=({id:n,name:a})=>[n,a]
function f(n){return t(n?.inventories)?e(n.inventories.filter((({id:n})=>-1!==n)).map(d)):[]}function u(n){return o(s("itemRecipient"),n)}function p(n){return m(s("itemRecipient"),n)}function l(n){return i(u,p,n)}async function j(a){const e=await n({cmd:"profile",subcmd:"dodropitems",removeIndex:a,ajax:1})
return r(e)}export{j as a,l as d,f as e,c as m}
//# sourceMappingURL=dropItem-DHLlzUYq.js.map
