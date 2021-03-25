import{x as t,I as e,u as n,$ as r}from"./calfSystem-4a40365f.js"
import{h as s}from"./htmlResult-bb7a88e2.js"
function a(n){return function(e,n){return t({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:e,items:n})}(e("itemRecipient"),n)}function i(t){return function(t,e){return n({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:t,sendItemList:e}).then(s)}(e("itemRecipient"),t)}function m(t){return r(a,i,t)}export{m as d}
//# sourceMappingURL=daAjaxSendItemsToRecipient-c5ce7292.js.map
