import{a as t}from"./arena-DYYYOsxL.js"
import{K as n,$ as o,y as e,s as a,co as i,d as p,r as s,v as c,z as u,cs as r,cq as l,cr as d}from"./calfSystem-DiXGAkgN.js"
import{m as f}from"./assets-DPlwo2nm.js"
function v(n,o){return t({subcmd:"dopickmove",move_id:n,slot_id:o})}function m(t,o){return n({cmd:"arena",subcmd:"dopickmove",move_id:0===t?"x":t-1,slot_id:o})}const g='\n<td colspan=3 style="padding-top: 2px;padding-bottom: 2px;">\n<select style="max-width: 50px;">\n<option value="x">Basic Attack</option>\n<option value="0">Block</option>\n<option value="1">Counter Attack</option>\n<option value="2">Critical Hit</option>\n<option value="3">Defend</option>\n<option value="4">Deflect</option>\n<option value="5">Dodge</option>\n<option value="6">Lunge</option>\n<option value="7">Power Attack</option>\n<option value="8">Spin Attack</option>\n<option value="9">Piercing Strike</option>\n<option value="10">Crush</option>\n<option value="11">Weaken</option>\n<option value="12">Ice Shard</option>\n<option value="13">Fire Blast</option>\n<option value="14">Poison</option>\n</select></td>',h=[]
let k=0,x=0
function b(t,n){return function(t,n){return o(v,m,t,n)}("x"===t?0:Number(t)+1,n)}function C(t){return t.value}function _(t,n){if(t!==h[n])return k.eq(n).attr({src:r,width:"25",height:"25"}),b("x",n)}function y(t,n){if("x"!==t&&t!==h[n])return b(t,n)}async function w(t){const n=t.map(y)
await c(n),l(`${d}setup`)}async function S(){a("arena__setup","updateMoves")
const t=u("select",x).map(C),n=t.map(_)
await c(n),w(t)}const A=t=>s(f,$(t).attr("src"))??"x"
function j(t,n,o){const e=A(o)
h.push(e)
const a=$(g)
$(`option[value=${e}]`,a).prop("selected",!0),t.append(a)}function q(t){a("arena__setup","setupMoves"),$(t.target).off(),k=$('#pCC a[href*="=pickmove&"] img')
const n=k.eq(0).closest(i).parent().closest(i)
!function(t){const n=$("<tr/>")
x=n.get(0),n.append("<td/>"),k.each(p(j,n)),t.append(n)}(n),$('img[src*="arena/bar_spacer."]',n).attr({width:"15",height:"50"}),function(t){const n=$('<tr><td colspan=32 align=center style="padding-top: 2px;padding-bottom: 2px;"><input class="custombutton" value="Update" type="button"></td></tr>')
$("input",n).on("click",S),t.append(n)}(n)}function B(){if(e())return
const t=$('#pCC b:contains("Setup Combat Moves")')
1===t.length&&(t.addClass("fshLink fshGreen"),t.on("click",q))}export{B as default}
//# sourceMappingURL=setupMoves-q9DYHTJk.js.map
