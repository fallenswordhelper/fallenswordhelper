import{a as s,G as t}from"./calfSystem-2fff342b.js"
import{h as a}from"./htmlResult-0a0ff9a0.js"
function e(t,a){return s({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:t,items:a})}async function m(s,e){const m=await t({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:s,sendItemList:e})
return a(m)}export{m as a,e as s}
//# sourceMappingURL=sendItems-423ab9b4.js.map
