import{$ as t,af as n,a4 as o,s as e,cy as a,c as i,r as p,a1 as s,a5 as c,cz as u,V as r,cA as l}from"./calfSystem-HVCiy-VV.js"
import{a as d}from"./arena-3V_E__D9.js"
import{m as f}from"./assets-DPlwo2nm.js"
function m(t,n){return d({subcmd:"dopickmove",move_id:t,slot_id:n})}function v(t,o){return n({cmd:"arena",subcmd:"dopickmove",move_id:0===t?"x":t-1,slot_id:o})}const g=[]
let h=0,k=0
function x(n,o){return function(n,o){return t(m,v,n,o)}("x"===n?0:Number(n)+1,o)}function b(t){return t.value}function C(t,n){if(t!==g[n])return h.eq(n).attr({src:u,width:"25",height:"25"}),x("x",n)}function _(t,n){if("x"!==t&&t!==g[n])return x(t,n)}async function y(t){const n=t.map(_)
await s(n),r(`${l}setup`)}async function w(){e("arena__setup","updateMoves")
const t=c("select",k).map(b),n=t.map(C)
await s(n),y(t)}function A(t,n,o){const e=(t=>p(f,$(t).attr("src"))??"x")(o)
g.push(e)
const a=$('\n<td colspan=3 style="padding-top: 2px;padding-bottom: 2px;">\n<select style="max-width: 50px;">\n<option value="x">Basic Attack</option>\n<option value="0">Block</option>\n<option value="1">Counter Attack</option>\n<option value="2">Critical Hit</option>\n<option value="3">Defend</option>\n<option value="4">Deflect</option>\n<option value="5">Dodge</option>\n<option value="6">Lunge</option>\n<option value="7">Power Attack</option>\n<option value="8">Spin Attack</option>\n<option value="9">Piercing Strike</option>\n<option value="10">Crush</option>\n<option value="11">Weaken</option>\n<option value="12">Ice Shard</option>\n<option value="13">Fire Blast</option>\n<option value="14">Poison</option>\n</select></td>')
$(`option[value=${e}]`,a).prop("selected",!0),t.append(a)}function S(t){e("arena__setup","setupMoves"),$(t.target).off(),h=$('#pCC a[href*="=pickmove&"] img')
const n=h.eq(0).closest(a).parent().closest(a)
!function(t){const n=$("<tr/>")
k=n.get(0),n.append("<td/>"),h.each(i(A,n)),t.append(n)}(n),$('img[src*="arena/bar_spacer."]',n).attr({width:"15",height:"50"}),function(t){const n=$('<tr><td colspan=32 align=center style="padding-top: 2px;padding-bottom: 2px;"><input class="custombutton" value="Update" type="button"></td></tr>')
$("input",n).on("click",w),t.append(n)}(n)}function j(){if(o())return
const t=$('#pCC b:contains("Setup Combat Moves")')
1===t.length&&(t.addClass("fshLink fshGreen"),t.on("click",S))}export{j as default}
//# sourceMappingURL=setupMoves-CShZ8zmq.js.map
