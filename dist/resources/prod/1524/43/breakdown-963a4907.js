import{r as e,y as t,I as o,i as s,p as n,o as a,z as i,l as r,_ as c,t as d,O as m,ay as p,az as g}from"./calfSystem-9942149b.js"
import{p as l}from"./perfFilter-9467c4dc.js"
import{s as b}from"./simpleCheckbox-b43d710c.js"
import"./getArrayByClassName-2c97d5ec.js"
import"./getInventoryById-446225e7.js"
import"./getInventory-0cdb2477.js"
import"./cmdExport-ded2df3e.js"
import"./indexAjaxJson-21b8f9a5.js"
import"./isChecked-987a8a1c.js"
let f
const u=[]
function y(e){e.hide()}function h(e,t){e.animate({height:0},500,t)}function j(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,d(h,e,d(y,e)))}function k(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(j,5e3)}function x(e){0!==e.error?k(`Error: ${e.msg}`,"rgb(164, 28, 28)"):m(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(u).then(x)}function C(e){f&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==u.length?w():k("Error: No items selected.","rgb(164, 28, 28)")}(e)}function B(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=u.indexOf(t);-1===o?u.push(t):u.splice(o,1)}function P(){f=!f,c("disableBreakdownPrompts",f)}function v(){t()||(l("composing"),f=o("disableBreakdownPrompts"),s(n,`<table class="fshTblCenter"><tbody>${b("disableBreakdownPrompts")}</tbody></table>`),a(i("breakdown-selected-items").parentNode,C,!0),a(i("composing-items"),B),a(i("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-963a4907.js.map
