import{a as t}from"./allthen-9dd15411.js"
import{x as n,d as o,t as e,g as i,ak as a,u as p,N as s,aj as c}from"./calfSystem-793da633.js"
import{m as u}from"./assets-1497d9b7.js"
import"./all-3246a95f.js"
const l=[]
let r,d
function f(t,n){return p({cmd:"arena",subcmd:"dopickmove",move_id:t,slot_id:n})}function m(t){return t.value}function v(t,n){if(t!==l[n])return r.eq(n).attr({src:a,width:"25",height:"25"}),f("x",n)}function h(t,n){if("x"!==t&&t!==l[n])return f(t,n)}function g(){s(`${c}setup`)}function k(n){const o=n.map(h)
t(o,g)}function x(){const n=i("select",d).map(m),o=n.map(v)
t(o,e(k,n))}function b(t,n,o){const e=function(t){const n=$(t).attr("src").match(u)
return n?n[1]:"x"}(o)
l.push(e)
const i=$('\n<td colspan=3 style="padding-top: 2px;padding-bottom: 2px;">\n<select style="max-width: 50px;">\n<option value="x">Basic Attack</option>\n<option value="0">Block</option>\n<option value="1">Counter Attack</option>\n<option value="2">Critical Hit</option>\n<option value="3">Defend</option>\n<option value="4">Deflect</option>\n<option value="5">Dodge</option>\n<option value="6">Lunge</option>\n<option value="7">Power Attack</option>\n<option value="8">Spin Attack</option>\n<option value="9">Piercing Strike</option>\n<option value="10">Crush</option>\n<option value="11">Weaken</option>\n<option value="12">Ice Shard</option>\n<option value="13">Fire Blast</option>\n<option value="14">Poison</option>\n</select></td>')
$(`option[value=${e}]`,i).prop("selected",!0),t.append(i)}function C(t){$(t.target).off(),r=$('#pCC a[href*="=pickmove&"] img')
const n=r.eq(0).closest(o).parent().closest(o)
!function(t){const n=$("<tr/>")
d=n.get(0),n.append("<td/>"),r.each(e(b,n)),t.append(n)}(n),$('img[src*="arena/bar_spacer."]',n).attr({width:"15",height:"50"}),function(t){const n=$('<tr><td colspan=32 align=center style="padding-top: 2px;padding-bottom: 2px;"><input class="custombutton" value="Update" type="button"></td></tr>')
$("input",n).on("click",x),t.append(n)}(n)}function j(){if(n())return
const t=$('#pCC b:contains("Setup Combat Moves")')
1===t.length&&(t.addClass("fshLink fshGreen"),t.on("click",C))}export default j
//# sourceMappingURL=setup-449e6a60.js.map
