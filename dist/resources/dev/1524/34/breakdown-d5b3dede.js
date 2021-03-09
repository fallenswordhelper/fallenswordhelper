import{r as e,x as t,H as o,i as s,p as a,o as n,y as i,l as r,_ as d,t as c,N as m,aq as p,ar as g}from"./calfSystem-c07e3259.js"
import{p as l}from"./perfFilter-1bc134d3.js"
import{s as f}from"./simpleCheckbox-d4a4dee5.js"
import"./getArrayByClassName-abf6bba3.js"
import"./getInventoryById-78665853.js"
import"./getInventory-a7a4a959.js"
import"./guildStore-574f6b62.js"
import"./cmdExport-73f6ff02.js"
import"./indexAjaxJson-18a12ea8.js"
import"./isChecked-d96c8dec.js"
let b
const u=[]
function h(e){e.hide()}function j(e,t){e.animate({height:0},500,t)}function x(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,c(j,e,c(h,e)))}function y(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(x,5e3)}function k(e){0!==e.error?y(`Error: ${e.msg}`,"rgb(164, 28, 28)"):m(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(u).then(k)}function C(e){b&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==u.length?w():y("Error: No items selected.","rgb(164, 28, 28)")}(e)}function B(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=u.indexOf(t);-1===o?u.push(t):u.splice(o,1)}function P(){b=!b,d("disableBreakdownPrompts",b)}function v(){t()||(l("composing"),b=o("disableBreakdownPrompts"),s(a,`<table class="fshTblCenter"><tbody>${f("disableBreakdownPrompts")}</tbody></table>`),n(i("breakdown-selected-items").parentNode,C,!0),n(i("composing-items"),B),n(i("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-d5b3dede.js.map
