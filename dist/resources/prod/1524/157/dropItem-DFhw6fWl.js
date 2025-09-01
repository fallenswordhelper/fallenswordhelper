import{a1 as a,az as t,aA as s,$ as n}from"./calfSystem-CQOGdqPv.js"
import{d as e}from"./dialog-BW-ZNw6R.js"
import{s as i,a as o}from"./sendItems-Cnqsnjio.js"
async function r(s,n){const i=await a({cmd:"profile",subcmd:"sendtofolder",inv_list:t(s),folder_id:n,ajax:1})
return e(i)}function m(a){return i(s("itemRecipient"),a)}function c(a){return o(s("itemRecipient"),a)}function d(a){return n(m,c,a)}async function f(t){const s=await a({cmd:"profile",subcmd:"dodropitems",removeIndex:t,ajax:1})
return e(s)}export{f as a,d,r as m}
//# sourceMappingURL=dropItem-DFhw6fWl.js.map
