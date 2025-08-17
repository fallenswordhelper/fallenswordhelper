import{$ as t,ae as n,a2 as o,s as e,cq as a,c as i,r as p,_ as s,a3 as c,cs as u,Q as r,ct as l}from"./calfSystem-CT1aM4VG.js"
import{a as d}from"./arena-w95m6bkL.js"
import{m as f}from"./assets-DPlwo2nm.js"
function m(t,n){return d({subcmd:"dopickmove",move_id:t,slot_id:n})}function v(t,o){return n({cmd:"arena",subcmd:"dopickmove",move_id:0===t?"x":t-1,slot_id:o})}const g='\n<td colspan=3 style="padding-top: 2px;padding-bottom: 2px;">\n<select style="max-width: 50px;">\n<option value="x">Basic Attack</option>\n<option value="0">Block</option>\n<option value="1">Counter Attack</option>\n<option value="2">Critical Hit</option>\n<option value="3">Defend</option>\n<option value="4">Deflect</option>\n<option value="5">Dodge</option>\n<option value="6">Lunge</option>\n<option value="7">Power Attack</option>\n<option value="8">Spin Attack</option>\n<option value="9">Piercing Strike</option>\n<option value="10">Crush</option>\n<option value="11">Weaken</option>\n<option value="12">Ice Shard</option>\n<option value="13">Fire Blast</option>\n<option value="14">Poison</option>\n</select></td>',h=[]
let k=0,x=0
function b(n,o){return function(n,o){return t(m,v,n,o)}("x"===n?0:Number(n)+1,o)}function _(t){return t.value}function C(t,n){if(t!==h[n])return k.eq(n).attr({src:u,width:"25",height:"25"}),b("x",n)}function y(t,n){if("x"!==t&&t!==h[n])return b(t,n)}async function w(t){const n=t.map(y)
await s(n),r(`${l}setup`)}async function S(){e("arena__setup","updateMoves")
const t=c("select",x).map(_),n=t.map(C)
await s(n),w(t)}const A=t=>p(f,$(t).attr("src"))??"x"
function j(t,n,o){const e=A(o)
h.push(e)
const a=$(g)
$(`option[value=${e}]`,a).prop("selected",!0),t.append(a)}function q(t){e("arena__setup","setupMoves"),$(t.target).off(),k=$('#pCC a[href*="=pickmove&"] img')
const n=k.eq(0).closest(a).parent().closest(a)
!function(t){const n=$("<tr/>")
x=n.get(0),n.append("<td/>"),k.each(i(j,n)),t.append(n)}(n),$('img[src*="arena/bar_spacer."]',n).attr({width:"15",height:"50"}),function(t){const n=$('<tr><td colspan=32 align=center style="padding-top: 2px;padding-bottom: 2px;"><input class="custombutton" value="Update" type="button"></td></tr>')
$("input",n).on("click",S),t.append(n)}(n)}function B(){if(o())return
const t=$('#pCC b:contains("Setup Combat Moves")')
1===t.length&&(t.addClass("fshLink fshGreen"),t.on("click",q))}export{B as default}
//# sourceMappingURL=setupMoves-DrqvbzLO.js.map
