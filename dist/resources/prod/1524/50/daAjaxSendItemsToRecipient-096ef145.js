import{x as t,I as e,u as n,$ as r}from"./calfSystem-365d90f3.js"
import{h as s}from"./htmlResult-5e5c71a8.js"
function i(n){return function(e,n){return t({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:e,items:n})}(e("itemRecipient"),n)}function a(t){return function(t,e){return n({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:t,sendItemList:e}).then(s)}(e("itemRecipient"),t)}function m(t){return r(i,a,t)}export{m as d}
//# sourceMappingURL=daAjaxSendItemsToRecipient-096ef145.js.map