import{a1 as a,ay as t,az as s,$ as n}from"./calfSystem-CIuUjh4H.js"
import{d as e}from"./dialog-DuiKsz8O.js"
import{s as i,a as o}from"./sendItems-Bk-KVFC4.js"
async function r(s,n){const i=await a({cmd:"profile",subcmd:"sendtofolder",inv_list:t(s),folder_id:n,ajax:1})
return e(i)}function m(a){return i(s("itemRecipient"),a)}function c(a){return o(s("itemRecipient"),a)}function d(a){return n(m,c,a)}async function f(t){const s=await a({cmd:"profile",subcmd:"dodropitems",removeIndex:t,ajax:1})
return e(s)}export{f as a,d,r as m}
//# sourceMappingURL=dropItem-DR1RMM8e.js.map
