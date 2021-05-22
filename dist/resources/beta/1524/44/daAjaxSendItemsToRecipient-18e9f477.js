import{x as t,I as e,u as n,$ as r}from"./calfSystem-a8d582b6.js"
import{h as s}from"./htmlResult-1c39a82b.js"
function a(n){return function(e,n){return t({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:e,items:n})}(e("itemRecipient"),n)}function i(t){return function(t,e){return n({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:t,sendItemList:e}).then(s)}(e("itemRecipient"),t)}function m(t){return r(a,i,t)}export{m as d}
//# sourceMappingURL=daAjaxSendItemsToRecipient-18e9f477.js.map
