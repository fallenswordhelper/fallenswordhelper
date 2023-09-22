import{u as i,ac as n,f as s,ad as t,$ as a}from"./calfSystem-4830a18d.js"
import{d as e}from"./dialog-9896baf4.js"
import{i as r}from"./isArray-09a53da7.js"
import{s as o,a as m}from"./sendItems-2a530a59.js"
async function c(s,t){const a=await i({cmd:"profile",subcmd:"sendtofolder",inv_list:n(s),folder_id:t,ajax:1})
return e(a)}const d=({id:i,name:n})=>[i,n]
function f(i){return r(i?.inventories)?s(i.inventories.filter((({id:i})=>-1!==i)).map(d)):[]}function u(i){return o(t("itemRecipient"),i)}function p(i){return m(t("itemRecipient"),i)}function l(i){return a(u,p,i)}async function j(n){const s=await i({cmd:"profile",subcmd:"dodropitems",removeIndex:n,ajax:1})
return e(s)}export{j as a,l as d,f as e,c as m}
//# sourceMappingURL=dropItem-09106184.js.map
