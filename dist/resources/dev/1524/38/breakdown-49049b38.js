import{r as e,y as t,I as o,i as s,p as n,o as i,z as a,l as r,a0 as c,t as d,O as m,as as p,at as g}from"./calfSystem-d56087e1.js"
import{p as f}from"./perfFilter-61846c87.js"
import{s as l}from"./simpleCheckbox-8b0bdf14.js"
import"./getArrayByClassName-e1c1fd86.js"
import"./getInventoryById-5ccedf1f.js"
import"./getInventory-4e810bc2.js"
import"./guildStore-170e918c.js"
import"./cmdExport-58f360a9.js"
import"./indexAjaxJson-976f4bdd.js"
import"./isChecked-16fc7684.js"
let b
const u=[]
function h(e){e.hide()}function j(e,t){e.animate({height:0},500,t)}function y(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,d(j,e,d(h,e)))}function k(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(y,5e3)}function x(e){0!==e.error?k(`Error: ${e.msg}`,"rgb(164, 28, 28)"):m(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(u).then(x)}function C(e){b&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==u.length?w():k("Error: No items selected.","rgb(164, 28, 28)")}(e)}function B(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=u.indexOf(t);-1===o?u.push(t):u.splice(o,1)}function P(){b=!b,c("disableBreakdownPrompts",b)}function v(){t()||(f("composing"),b=o("disableBreakdownPrompts"),s(n,`<table class="fshTblCenter"><tbody>${l("disableBreakdownPrompts")}</tbody></table>`),i(a("breakdown-selected-items").parentNode,C,!0),i(a("composing-items"),B),i(a("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-49049b38.js.map