import{u as t,ae as a,af as s,$ as e}from"./calfSystem-34913441.js"
import{d as n}from"./dialog-d1c54012.js"
import{s as i,a as o}from"./sendItems-21d6a040.js"
async function r(s,e){const i=await t({cmd:"profile",subcmd:"sendtofolder",inv_list:a(s),folder_id:e,ajax:1})
return n(i)}function m(t){return i(s("itemRecipient"),t)}function c(t){return o(s("itemRecipient"),t)}function d(t){return e(m,c,t)}async function f(a){const s=await t({cmd:"profile",subcmd:"dodropitems",removeIndex:a,ajax:1})
return n(s)}export{f as a,d,r as m}
//# sourceMappingURL=dropItem-5553463c.js.map
