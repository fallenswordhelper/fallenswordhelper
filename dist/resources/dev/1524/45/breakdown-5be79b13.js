import{r as e,y as t,I as o,i as s,p as a,o as n,z as i,l as r,_ as c,t as d,N as m,aE as p,aF as g}from"./calfSystem-6a3c85e0.js"
import{p as l}from"./perfFilter-d243820b.js"
import{s as b}from"./simpleCheckbox-9a762acc.js"
import"./getArrayByClassName-039bb6c6.js"
import"./getInventoryById-e5962aec.js"
import"./getInventory-a569507a.js"
import"./guildStore-fcb25778.js"
import"./cmdExport-cce4a501.js"
import"./indexAjaxJson-c7dd57d3.js"
import"./isChecked-1aa3d1a2.js"
let u
const f=[]
function h(e){e.hide()}function j(e,t){e.animate({height:0},500,t)}function y(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,d(j,e,d(h,e)))}function k(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(y,5e3)}function x(e){0!==e.error?k(`Error: ${e.msg}`,"rgb(164, 28, 28)"):m(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(f).then(x)}function C(e){u&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==f.length?w():k("Error: No items selected.","rgb(164, 28, 28)")}(e)}function B(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=f.indexOf(t);-1===o?f.push(t):f.splice(o,1)}function P(){u=!u,c("disableBreakdownPrompts",u)}function v(){t()||(l("composing"),u=o("disableBreakdownPrompts"),s(a,`<table class="fshTblCenter"><tbody>${b("disableBreakdownPrompts")}</tbody></table>`),n(i("breakdown-selected-items").parentNode,C,!0),n(i("composing-items"),B),n(i("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-5be79b13.js.map
