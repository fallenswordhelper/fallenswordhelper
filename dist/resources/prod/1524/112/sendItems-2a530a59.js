import{t as s}from"./basicItem-cb072d2b.js"
import{E as t}from"./calfSystem-4830a18d.js"
import{h as a}from"./htmlResult-7fa1a7c5.js"
function e(t,a){return s({subcmd:"senditems",xc:window.ajaxXC,target_username:t,items:a})}async function m(s,e){const m=await t({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:s,sendItemList:e})
return a(m)}export{m as a,e as s}
//# sourceMappingURL=sendItems-2a530a59.js.map
