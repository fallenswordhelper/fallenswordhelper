import{a0 as a,ay as t,az as s,$ as n}from"./calfSystem-CT1aM4VG.js"
import{d as e}from"./dialog-CiSCF2So.js"
import{s as i,a as o}from"./sendItems-pa-aKwib.js"
async function r(s,n){const i=await a({cmd:"profile",subcmd:"sendtofolder",inv_list:t(s),folder_id:n,ajax:1})
return e(i)}function c(a){return i(s("itemRecipient"),a)}function m(a){return o(s("itemRecipient"),a)}function d(a){return n(c,m,a)}async function f(t){const s=await a({cmd:"profile",subcmd:"dodropitems",removeIndex:t,ajax:1})
return e(s)}export{f as a,d,r as m}
//# sourceMappingURL=dropItem-n_LbOoQu.js.map
