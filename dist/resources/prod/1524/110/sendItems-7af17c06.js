import{t as s}from"./basicItem-932eb681.js"
import{F as t}from"./calfSystem-929ac228.js"
import{h as a}from"./htmlResult-4cbe3787.js"
function e(t,a){return s({subcmd:"senditems",xc:window.ajaxXC,target_username:t,items:a})}async function m(s,e){const m=await t({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:s,sendItemList:e})
return a(m)}export{m as a,e as s}
//# sourceMappingURL=sendItems-7af17c06.js.map
