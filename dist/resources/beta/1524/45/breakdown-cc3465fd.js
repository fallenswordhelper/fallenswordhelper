import{r as e,y as t,I as o,i as a,p as s,o as n,z as i,l as r,Z as c,t as d,N as m,aD as p,aE as g}from"./calfSystem-ae2e69af.js"
import{p as l}from"./perfFilter-963870ec.js"
import{s as b}from"./simpleCheckbox-b27e4a45.js"
import"./getArrayByClassName-84652cc1.js"
import"./getInventoryById-53b88638.js"
import"./getInventory-ce8ab76d.js"
import"./cmdExport-aa80361b.js"
import"./indexAjaxJson-6eadb7fa.js"
import"./isChecked-1aa3d1a2.js"
let f
const u=[]
function h(e){e.hide()}function y(e,t){e.animate({height:0},500,t)}function j(){const e=$("#composingMessageContainer")
e.animate({opacity:0},500,d(y,e,d(h,e)))}function k(e,t){$("#composingMessageContainer").remove(),$("#composingMessage").append($("<div/>",{id:"composingMessageContainer",width:"100%"}).append(function(e,t){return $("<div/>",{id:"composingMessageText"}).css({width:"90%","text-align":"center","background-color":t,color:"rgb(255, 255, 255)",margin:"5px auto 5px auto",padding:"2px"}).html(e)}(e,t))),setTimeout(j,5e3)}function x(e){0!==e.error?k(`Error: ${e.msg}`,"rgb(164, 28, 28)"):m(`${p+g}breakdown&m=1`)}function w(){(function(t){return e({type:"POST",data:{cmd:"composing",subcmd:"dobreakdown",item_list:t},dataType:"json"})})(u).then(x)}function C(e){f&&"breakdown-selected-items"===e.target.id&&function(e){e.stopPropagation(),0!==u.length?w():k("Error: No items selected.","rgb(164, 28, 28)")}(e)}function B(e){if(!r("selectable-item",e.target))return
const t=e.target.id.replace("composing-item-",""),o=u.indexOf(t);-1===o?u.push(t):u.splice(o,1)}function P(){f=!f,c("disableBreakdownPrompts",f)}function v(){t()||(l("composing"),f=o("disableBreakdownPrompts"),a(s,`<table class="fshTblCenter"><tbody>${b("disableBreakdownPrompts")}</tbody></table>`),n(i("breakdown-selected-items").parentNode,C,!0),n(i("composing-items"),B),n(i("disableBreakdownPrompts"),P))}export default v
//# sourceMappingURL=breakdown-cc3465fd.js.map
