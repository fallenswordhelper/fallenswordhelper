import{u as i,ah as n,f as s,ai as t,$ as e}from"./calfSystem-BtgQSp8m.js"
import{d as a}from"./dialog-BW-ZNw6R.js"
import{i as r}from"./isArray-eVldfhw1.js"
import{s as o,a as m}from"./sendItems-Biy61dYh.js"
async function c(s,t){const e=await i({cmd:"profile",subcmd:"sendtofolder",inv_list:n(s),folder_id:t,ajax:1})
return a(e)}const d=({id:i,name:n})=>[i,n]
function f(i){return r(i?.inventories)?s(i.inventories.filter((({id:i})=>-1!==i)).map(d)):[]}function u(i){return o(t("itemRecipient"),i)}function p(i){return m(t("itemRecipient"),i)}function l(i){return e(u,p,i)}async function j(n){const s=await i({cmd:"profile",subcmd:"dodropitems",removeIndex:n,ajax:1})
return a(s)}export{j as a,l as d,f as e,c as m}
//# sourceMappingURL=dropItem-C17q5juc.js.map
