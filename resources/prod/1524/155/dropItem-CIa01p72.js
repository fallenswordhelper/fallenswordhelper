import{a0 as a,ay as t,az as s,$ as e}from"./calfSystem-UyQ_FKFu.js"
import{d as n}from"./dialog-BW-ZNw6R.js"
import{s as i,a as o}from"./sendItems-BQXqHcQL.js"
async function r(s,e){const i=await a({cmd:"profile",subcmd:"sendtofolder",inv_list:t(s),folder_id:e,ajax:1})
return n(i)}function m(a){return i(s("itemRecipient"),a)}function c(a){return o(s("itemRecipient"),a)}function d(a){return e(m,c,a)}async function f(t){const s=await a({cmd:"profile",subcmd:"dodropitems",removeIndex:t,ajax:1})
return n(s)}export{f as a,d,r as m}
//# sourceMappingURL=dropItem-CIa01p72.js.map
