import{r as e,y as t,I as o,i as s,p as n,o as a,z as i,l as r,_ as d,t as c,O as m,aA as p,aB as g}from"./calfSystem-587dd8d3.js"
import{p as l}from"./perfFilter-59b069cc.js"
import{s as f}from"./simpleCheckbox-1f4413f8.js"
import"./getArrayByClassName-7140e93a.js"
import"./getInventoryById-e512680f.js"
import"./getInventory-86af4251.js"
import"./cmdExport-8bedb500.js"
import"./indexAjaxJson-a5185e0b.js"
import"./isChecked-0eb4a700.js"
let b
const u=[]
function h(e){e.hide()}function y(e,t){e.animate({height:0},500,t)}function j(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,c(y,e,c(h,e)))}function k(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(j,5e3)}function x(e){0!==e.error?k(`Error: ${e.msg}`,"rgb(164, 28, 28)"):m(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(u).then(x)}function B(e){b&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==u.length?w():k("Error: No items selected.","rgb(164, 28, 28)")}(e)}function C(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=u.indexOf(t);-1===o?u.push(t):u.splice(o,1)}function P(){b=!b,d("disableBreakdownPrompts",b)}function v(){t()||(l("composing"),b=o("disableBreakdownPrompts"),s(n,`<table class="fshTblCenter"><tbody>${f("disableBreakdownPrompts")}</tbody></table>`),a(i("breakdown-selected-items").parentNode,B,!0),a(i("composing-items"),C),a(i("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-a63e6b50.js.map