import{w as t,c as o,bK as n,x as e,bQ as a,r as i,G as p,bO as s,bP as c}from"./calfSystem-2f15e074.js"
import{a as u}from"./all-414e0607.js"
import{m as l}from"./assets-64a7e0eb.js"
const r='\n<td colspan=3 style="padding-top: 2px;padding-bottom: 2px;">\n<select style="max-width: 50px;">\n<option value="x">Basic Attack</option>\n<option value="0">Block</option>\n<option value="1">Counter Attack</option>\n<option value="2">Critical Hit</option>\n<option value="3">Defend</option>\n<option value="4">Deflect</option>\n<option value="5">Dodge</option>\n<option value="6">Lunge</option>\n<option value="7">Power Attack</option>\n<option value="8">Spin Attack</option>\n<option value="9">Piercing Strike</option>\n<option value="10">Crush</option>\n<option value="11">Weaken</option>\n<option value="12">Ice Shard</option>\n<option value="13">Fire Blast</option>\n<option value="14">Poison</option>\n</select></td>',d=[]
let f=0,m=0
function v(t,o){return p({cmd:"arena",subcmd:"dopickmove",move_id:t,slot_id:o})}function g(t){return t.value}function h(t,o){if(t!==d[o])return f.eq(o).attr({src:a,width:"25",height:"25"}),v("x",o)}function b(t,o){if("x"!==t&&t!==d[o])return v(t,o)}async function k(t){const o=t.map(b)
await u(o),s(`${c}setup`)}async function x(){const t=e("select",m).map(g),o=t.map(h)
await u(o),k(t)}const C=t=>i(l,$(t).attr("src"))??"x"
function w(t,o,n){const e=C(n)
d.push(e)
const a=$(r)
$(`option[value=${e}]`,a).prop("selected",!0),t.append(a)}function y(t){$(t.target).off(),f=$('#pCC a[href*="=pickmove&"] img')
const e=f.eq(0).closest(n).parent().closest(n)
!function(t){const n=$("<tr/>")
m=n.get(0),n.append("<td/>"),f.each(o(w,n)),t.append(n)}(e),$('img[src*="arena/bar_spacer."]',e).attr({width:"15",height:"50"}),function(t){const o=$('<tr><td colspan=32 align=center style="padding-top: 2px;padding-bottom: 2px;"><input class="custombutton" value="Update" type="button"></td></tr>')
$("input",o).on("click",x),t.append(o)}(e)}function S(){if(t())return
const o=$('#pCC b:contains("Setup Combat Moves")')
1===o.length&&(o.addClass("fshLink fshGreen"),o.on("click",y))}export{S as default}
//# sourceMappingURL=setupMoves-4987c6d3.js.map
