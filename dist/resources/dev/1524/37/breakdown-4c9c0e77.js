import{r as e,y as t,I as o,i as s,p as n,o as a,z as i,l as r,a0 as d,t as c,O as m,as as p,at as g}from"./calfSystem-5d0c721b.js"
import{p as b}from"./perfFilter-ba6135c1.js"
import{s as l}from"./simpleCheckbox-8efd9853.js"
import"./getArrayByClassName-b9fdeb7c.js"
import"./getInventoryById-c1d4b56a.js"
import"./getInventory-181e0bd8.js"
import"./guildStore-117197b7.js"
import"./cmdExport-09ebfe19.js"
import"./indexAjaxJson-f1851d17.js"
import"./isChecked-7bdba1ab.js"
let f
const u=[]
function h(e){e.hide()}function j(e,t){e.animate({height:0},500,t)}function y(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,c(j,e,c(h,e)))}function k(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(y,5e3)}function x(e){0!==e.error?k(`Error: ${e.msg}`,"rgb(164, 28, 28)"):m(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(u).then(x)}function C(e){f&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==u.length?w():k("Error: No items selected.","rgb(164, 28, 28)")}(e)}function B(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=u.indexOf(t);-1===o?u.push(t):u.splice(o,1)}function P(){f=!f,d("disableBreakdownPrompts",f)}function v(){t()||(b("composing"),f=o("disableBreakdownPrompts"),s(n,`<table class="fshTblCenter"><tbody>${l("disableBreakdownPrompts")}</tbody></table>`),a(i("breakdown-selected-items").parentNode,C,!0),a(i("composing-items"),B),a(i("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-4c9c0e77.js.map
