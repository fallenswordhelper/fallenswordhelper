import{v as e,D as t}from"./calfSystem-4197cc22.js"
import{d as r}from"./dialog-25ddd658.js"
import{i as n}from"./indexAjaxJson-914501b6.js"
import{a as o}from"./ajaxReturnCode-c4f90575.js"
function a(r){return function(t,r){return e({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:t,items:r})}(t("itemRecipient"),r)}function i(e){return function(e){return a(e)}(e).then(o)}function s(e){return n({cmd:"profile",subcmd:"dodropitems",removeIndex:e,ajax:1}).then(r)}export{i as a,s as d}
//# sourceMappingURL=dropItem-cac1d796.js.map
