import{r as e,y as t,I as o,i as s,p as a,o as n,z as i,l as r,_ as c,t as m,N as d,aE as p,aF as g}from"./calfSystem-d3f0a380.js"
import{p as b}from"./perfFilter-7921b716.js"
import{s as l}from"./simpleCheckbox-7afb7f1a.js"
import"./getArrayByClassName-aab7cb65.js"
import"./getInventoryById-41db4f82.js"
import"./getInventory-9586c0e4.js"
import"./guildStore-7eb2c059.js"
import"./cmdExport-2e38b85e.js"
import"./indexAjaxJson-00baab20.js"
import"./isChecked-e1880947.js"
let f
const u=[]
function h(e){e.hide()}function j(e,t){e.animate({height:0},500,t)}function y(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,m(j,e,m(h,e)))}function k(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(y,5e3)}function x(e){0!==e.error?k(`Error: ${e.msg}`,"rgb(164, 28, 28)"):d(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(u).then(x)}function C(e){f&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==u.length?w():k("Error: No items selected.","rgb(164, 28, 28)")}(e)}function B(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=u.indexOf(t);-1===o?u.push(t):u.splice(o,1)}function P(){f=!f,c("disableBreakdownPrompts",f)}function v(){t()||(b("composing"),f=o("disableBreakdownPrompts"),s(a,`<table class="fshTblCenter"><tbody>${l("disableBreakdownPrompts")}</tbody></table>`),n(i("breakdown-selected-items").parentNode,C,!0),n(i("composing-items"),B),n(i("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-b0be4387.js.map
