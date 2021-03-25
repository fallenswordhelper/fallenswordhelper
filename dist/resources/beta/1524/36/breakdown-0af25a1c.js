import{r as e,y as t,I as o,i as s,p as n,o as a,z as i,l as r,_ as c,t as d,O as m,ar as p,as as g}from"./calfSystem-4a40365f.js"
import{p as l}from"./perfFilter-5e6885cc.js"
import{s as f}from"./simpleCheckbox-54e3f875.js"
import"./getArrayByClassName-22f3bd68.js"
import"./getInventoryById-dae6200e.js"
import"./getInventory-658c2b33.js"
import"./cmdExport-92971757.js"
import"./indexAjaxJson-6d511c0e.js"
import"./isChecked-d75e63a5.js"
let u
const b=[]
function h(e){e.hide()}function y(e,t){e.animate({height:0},500,t)}function j(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,d(y,e,d(h,e)))}function k(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(j,5e3)}function x(e){0!==e.error?k(`Error: ${e.msg}`,"rgb(164, 28, 28)"):m(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(b).then(x)}function C(e){u&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==b.length?w():k("Error: No items selected.","rgb(164, 28, 28)")}(e)}function B(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=b.indexOf(t);-1===o?b.push(t):b.splice(o,1)}function P(){u=!u,c("disableBreakdownPrompts",u)}function v(){t()||(l("composing"),u=o("disableBreakdownPrompts"),s(n,`<table class="fshTblCenter"><tbody>${f("disableBreakdownPrompts")}</tbody></table>`),a(i("breakdown-selected-items").parentNode,C,!0),a(i("composing-items"),B),a(i("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-0af25a1c.js.map
