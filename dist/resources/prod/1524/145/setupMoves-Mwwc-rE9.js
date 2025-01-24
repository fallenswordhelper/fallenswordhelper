import{x as t,c as n,cl as o,u as e,y as a,cp as i,r as p,J as c,cn as s,co as u}from"./calfSystem-CvwhhJv4.js"
import{m as l}from"./assets-DPlwo2nm.js"
const r='\n<td colspan=3 style="padding-top: 2px;padding-bottom: 2px;">\n<select style="max-width: 50px;">\n<option value="x">Basic Attack</option>\n<option value="0">Block</option>\n<option value="1">Counter Attack</option>\n<option value="2">Critical Hit</option>\n<option value="3">Defend</option>\n<option value="4">Deflect</option>\n<option value="5">Dodge</option>\n<option value="6">Lunge</option>\n<option value="7">Power Attack</option>\n<option value="8">Spin Attack</option>\n<option value="9">Piercing Strike</option>\n<option value="10">Crush</option>\n<option value="11">Weaken</option>\n<option value="12">Ice Shard</option>\n<option value="13">Fire Blast</option>\n<option value="14">Poison</option>\n</select></td>',d=[]
let f=0,v=0
function m(t,n){return c({cmd:"arena",subcmd:"dopickmove",move_id:t,slot_id:n})}function g(t){return t.value}function h(t,n){if(t!==d[n])return f.eq(n).attr({src:i,width:"25",height:"25"}),m("x",n)}function k(t,n){if("x"!==t&&t!==d[n])return m(t,n)}async function x(t){const n=t.map(k)
await e(n),s(`${u}setup`)}async function b(){const t=a("select",v).map(g),n=t.map(h)
await e(n),x(t)}const C=t=>p(l,$(t).attr("src"))??"x"
function y(t,n,o){const e=C(o)
d.push(e)
const a=$(r)
$(`option[value=${e}]`,a).prop("selected",!0),t.append(a)}function w(t){$(t.target).off(),f=$('#pCC a[href*="=pickmove&"] img')
const e=f.eq(0).closest(o).parent().closest(o)
!function(t){const o=$("<tr/>")
v=o.get(0),o.append("<td/>"),f.each(n(y,o)),t.append(o)}(e),$('img[src*="arena/bar_spacer."]',e).attr({width:"15",height:"50"}),function(t){const n=$('<tr><td colspan=32 align=center style="padding-top: 2px;padding-bottom: 2px;"><input class="custombutton" value="Update" type="button"></td></tr>')
$("input",n).on("click",b),t.append(n)}(e)}function S(){if(t())return
const n=$('#pCC b:contains("Setup Combat Moves")')
1===n.length&&(n.addClass("fshLink fshGreen"),n.on("click",w))}export{S as default}
//# sourceMappingURL=setupMoves-Mwwc-rE9.js.map
