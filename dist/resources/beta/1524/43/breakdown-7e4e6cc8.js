import{r as e,y as t,I as o,i as s,p as a,o as n,z as i,l as r,_ as m,t as c,O as d,aA as p,aB as g}from"./calfSystem-1d588248.js"
import{p as l}from"./perfFilter-db5b65e4.js"
import{s as b}from"./simpleCheckbox-f6900a79.js"
import"./getArrayByClassName-8fef58fe.js"
import"./getInventoryById-5ab299aa.js"
import"./getInventory-1268b5ea.js"
import"./cmdExport-a5395bb5.js"
import"./indexAjaxJson-7770951b.js"
import"./isChecked-987a8a1c.js"
let f
const u=[]
function h(e){e.hide()}function y(e,t){e.animate({height:0},500,t)}function j(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,c(y,e,c(h,e)))}function k(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(j,5e3)}function x(e){0!==e.error?k(`Error: ${e.msg}`,"rgb(164, 28, 28)"):d(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(u).then(x)}function B(e){f&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==u.length?w():k("Error: No items selected.","rgb(164, 28, 28)")}(e)}function C(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=u.indexOf(t);-1===o?u.push(t):u.splice(o,1)}function P(){f=!f,m("disableBreakdownPrompts",f)}function v(){t()||(l("composing"),f=o("disableBreakdownPrompts"),s(a,`<table class="fshTblCenter"><tbody>${b("disableBreakdownPrompts")}</tbody></table>`),n(i("breakdown-selected-items").parentNode,B,!0),n(i("composing-items"),C),n(i("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-7e4e6cc8.js.map
