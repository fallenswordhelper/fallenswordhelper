import{a as s,G as t}from"./calfSystem-076d7a01.js"
import{h as a}from"./htmlResult-0d37532a.js"
function e(t,a){return s({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:t,items:a})}async function m(s,e){const m=await t({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:s,sendItemList:e})
return a(m)}export{m as a,e as s}
//# sourceMappingURL=sendItems-e8b1b119.js.map
