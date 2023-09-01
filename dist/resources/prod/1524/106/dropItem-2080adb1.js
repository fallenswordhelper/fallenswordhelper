import{u as t,ae as a,af as s,$ as e}from"./calfSystem-076d7a01.js"
import{d as n}from"./dialog-9896baf4.js"
import{s as i,a as o}from"./sendItems-e8b1b119.js"
async function r(s,e){const i=await t({cmd:"profile",subcmd:"sendtofolder",inv_list:a(s),folder_id:e,ajax:1})
return n(i)}function m(t){return i(s("itemRecipient"),t)}function c(t){return o(s("itemRecipient"),t)}function d(t){return e(m,c,t)}async function f(a){const s=await t({cmd:"profile",subcmd:"dodropitems",removeIndex:a,ajax:1})
return n(s)}export{f as a,d,r as m}
//# sourceMappingURL=dropItem-2080adb1.js.map
