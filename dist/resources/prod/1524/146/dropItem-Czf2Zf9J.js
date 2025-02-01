import{w as n,ap as t,f as e,I as s,aq as a,$ as i}from"./calfSystem-DiXGAkgN.js"
import{d as r}from"./dialog-nv9HUVDL.js"
import{s as o,a as m}from"./sendItems-CwPHFt3g.js"
async function c(e,s){const a=await n({cmd:"profile",subcmd:"sendtofolder",inv_list:t(e),folder_id:s,ajax:1})
return r(a)}const d=({id:n,name:t})=>[n,t]
function f(n){return s(n?.inventories)?e(n.inventories.filter((({id:n})=>-1!==n)).map(d)):[]}function u(n){return o(a("itemRecipient"),n)}function p(n){return m(a("itemRecipient"),n)}function l(n){return i(u,p,n)}async function j(t){const e=await n({cmd:"profile",subcmd:"dodropitems",removeIndex:t,ajax:1})
return r(e)}export{j as a,l as d,f as e,c as m}
//# sourceMappingURL=dropItem-Czf2Zf9J.js.map
