import{u as i,ah as n,f as s,ai as t,$ as a}from"./calfSystem-Bit7wh4p.js"
import{d as e}from"./dialog-BW-ZNw6R.js"
import{i as r}from"./isArray-eVldfhw1.js"
import{s as o,a as m}from"./sendItems-LdjNuxgR.js"
async function c(s,t){const a=await i({cmd:"profile",subcmd:"sendtofolder",inv_list:n(s),folder_id:t,ajax:1})
return e(a)}const f=({id:i,name:n})=>[i,n]
function d(i){return r(i?.inventories)?s(i.inventories.filter((({id:i})=>-1!==i)).map(f)):[]}function u(i){return o(t("itemRecipient"),i)}function p(i){return m(t("itemRecipient"),i)}function l(i){return a(u,p,i)}async function j(n){const s=await i({cmd:"profile",subcmd:"dodropitems",removeIndex:n,ajax:1})
return e(s)}export{j as a,l as d,d as e,c as m}
//# sourceMappingURL=dropItem-CTgJ-63J.js.map
