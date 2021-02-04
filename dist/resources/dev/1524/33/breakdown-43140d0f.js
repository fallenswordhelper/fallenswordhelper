import{r as e,x as t,H as o,i as s,p as n,o as i,y as a,l as r,_ as d,t as c,N as m,aq as p,ar as g}from"./calfSystem-37f70deb.js"
import{p as l}from"./perfFilter-7b23448e.js"
import{s as b}from"./simpleCheckbox-329b4550.js"
import"./getArrayByClassName-6d0c056d.js"
import"./getInventoryById-63c97c31.js"
import"./getInventory-bdf0965e.js"
import"./guildStore-48dcb633.js"
import"./cmdExport-de9079b1.js"
import"./indexAjaxJson-82f32240.js"
import"./isChecked-622b73bf.js"
let f
const u=[]
function h(e){e.hide()}function j(e,t){e.animate({height:0},500,t)}function x(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,c(j,e,c(h,e)))}function y(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(x,5e3)}function k(e){0!==e.error?y(`Error: ${e.msg}`,"rgb(164, 28, 28)"):m(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(u).then(k)}function C(e){f&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==u.length?w():y("Error: No items selected.","rgb(164, 28, 28)")}(e)}function B(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=u.indexOf(t);-1===o?u.push(t):u.splice(o,1)}function P(){f=!f,d("disableBreakdownPrompts",f)}function v(){t()||(l("composing"),f=o("disableBreakdownPrompts"),s(n,`<table class="fshTblCenter"><tbody>${b("disableBreakdownPrompts")}</tbody></table>`),i(a("breakdown-selected-items").parentNode,C,!0),i(a("composing-items"),B),i(a("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-43140d0f.js.map
