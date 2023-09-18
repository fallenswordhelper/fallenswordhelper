import{t as s}from"./basicItem-890121ae.js"
import{F as t}from"./calfSystem-abb16b0d.js"
import{h as a}from"./htmlResult-6b7c7e7e.js"
function e(t,a){return s({subcmd:"senditems",xc:window.ajaxXC,target_username:t,items:a})}async function m(s,e){const m=await t({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:s,sendItemList:e})
return a(m)}export{m as a,e as s}
//# sourceMappingURL=sendItems-ad34279c.js.map
