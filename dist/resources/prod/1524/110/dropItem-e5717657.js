import{u as e,ad as i,f as n,ae as s,$ as t}from"./calfSystem-929ac228.js"
import{d as a}from"./dialog-9896baf4.js"
import{i as r}from"./isArray-09a53da7.js"
import{s as o,a as m}from"./sendItems-7af17c06.js"
async function c(n,s){const t=await e({cmd:"profile",subcmd:"sendtofolder",inv_list:i(n),folder_id:s,ajax:1})
return a(t)}const d=({id:e,name:i})=>[e,i]
function f(e){return r(e?.inventories)?n(e.inventories.filter((({id:e})=>-1!==e)).map(d)):[]}function u(e){return o(s("itemRecipient"),e)}function p(e){return m(s("itemRecipient"),e)}function l(e){return t(u,p,e)}async function j(i){const n=await e({cmd:"profile",subcmd:"dodropitems",removeIndex:i,ajax:1})
return a(n)}export{j as a,l as d,f as e,c as m}
//# sourceMappingURL=dropItem-e5717657.js.map
