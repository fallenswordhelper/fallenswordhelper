import{a as t}from"./allthen-a8900f54.js"
import{y as o,d as n,t as e,g as i,ap as a,u as p,O as s,ao as c}from"./calfSystem-eeb1d862.js"
import{m as u}from"./assets-7400169d.js"
import"./all-778b38b7.js"
const l=[]
let r,d
function f(t,o){return p({cmd:"arena",subcmd:"dopickmove",move_id:t,slot_id:o})}function m(t){return t.value}function v(t,o){if(t!==l[o])return r.eq(o).attr({src:a,width:"25",height:"25"}),f("x",o)}function h(t,o){if("x"!==t&&t!==l[o])return f(t,o)}function g(){s(`${c}setup`)}function k(o){const n=o.map(h)
t(n,g)}function b(){const o=i("select",d).map(m),n=o.map(v)
t(n,e(k,o))}function x(t,o,n){const e=function(t){const o=$(t).attr("src").match(u)
return o?o[1]:"x"}(n)
l.push(e)
const i=$('\n<td colspan=3 style="padding-top: 2px;padding-bottom: 2px;">\n<select style="max-width: 50px;">\n<option value="x">Basic Attack</option>\n<option value="0">Block</option>\n<option value="1">Counter Attack</option>\n<option value="2">Critical Hit</option>\n<option value="3">Defend</option>\n<option value="4">Deflect</option>\n<option value="5">Dodge</option>\n<option value="6">Lunge</option>\n<option value="7">Power Attack</option>\n<option value="8">Spin Attack</option>\n<option value="9">Piercing Strike</option>\n<option value="10">Crush</option>\n<option value="11">Weaken</option>\n<option value="12">Ice Shard</option>\n<option value="13">Fire Blast</option>\n<option value="14">Poison</option>\n</select></td>')
$(`option[value=${e}]`,i).prop("selected",!0),t.append(i)}function C(t){$(t.target).off(),r=$('#pCC a[href*="=pickmove&"] img')
const o=r.eq(0).closest(n).parent().closest(n)
!function(t){const o=$("<tr/>")
d=o.get(0),o.append("<td/>"),r.each(e(x,o)),t.append(o)}(o),$('img[src*="arena/bar_spacer."]',o).attr({width:"15",height:"50"}),function(t){const o=$('<tr><td colspan=32 align=center style="padding-top: 2px;padding-bottom: 2px;"><input class="custombutton" value="Update" type="button"></td></tr>')
$("input",o).on("click",b),t.append(o)}(o)}function y(){if(o())return
const t=$('#pCC b:contains("Setup Combat Moves")')
1===t.length&&(t.addClass("fshLink fshGreen"),t.on("click",C))}export default y
//# sourceMappingURL=setup-bc067ca0.js.map
