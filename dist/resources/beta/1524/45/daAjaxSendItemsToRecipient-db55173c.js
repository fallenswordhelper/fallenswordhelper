import{x as e,I as t,u as n,$ as r}from"./calfSystem-ae2e69af.js"
import{h as s}from"./htmlResult-a2f95549.js"
function a(n){return function(t,n){return e({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:t,items:n})}(t("itemRecipient"),n)}function i(e){return function(e,t){return n({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:e,sendItemList:t}).then(s)}(t("itemRecipient"),e)}function m(e){return r(a,i,e)}export{m as d}
//# sourceMappingURL=daAjaxSendItemsToRecipient-db55173c.js.map
