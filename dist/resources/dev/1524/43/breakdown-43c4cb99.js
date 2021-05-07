import{r as e,y as t,I as o,i as s,p as a,o as n,z as i,l as r,a0 as c,t as m,O as d,aB as p,aC as g}from"./calfSystem-3cb2f93e.js"
import{p as l}from"./perfFilter-0c1ae2c5.js"
import{s as f}from"./simpleCheckbox-11592a14.js"
import"./getArrayByClassName-b128b43c.js"
import"./getInventoryById-74030f86.js"
import"./getInventory-238d3b07.js"
import"./guildStore-a425d6aa.js"
import"./cmdExport-7784a81f.js"
import"./indexAjaxJson-a55a7596.js"
import"./isChecked-987a8a1c.js"
let b
const u=[]
function h(e){e.hide()}function j(e,t){e.animate({height:0},500,t)}function y(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,m(j,e,m(h,e)))}function k(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(y,5e3)}function x(e){0!==e.error?k(`Error: ${e.msg}`,"rgb(164, 28, 28)"):d(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(u).then(x)}function C(e){b&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==u.length?w():k("Error: No items selected.","rgb(164, 28, 28)")}(e)}function B(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=u.indexOf(t);-1===o?u.push(t):u.splice(o,1)}function P(){b=!b,c("disableBreakdownPrompts",b)}function v(){t()||(l("composing"),b=o("disableBreakdownPrompts"),s(a,`<table class="fshTblCenter"><tbody>${f("disableBreakdownPrompts")}</tbody></table>`),n(i("breakdown-selected-items").parentNode,C,!0),n(i("composing-items"),B),n(i("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-43c4cb99.js.map
