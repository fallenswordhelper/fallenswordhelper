import{d as f}from"./chunk-MQIXIH45.js";import{a}from"./chunk-ATFXUHX5.js";import"./chunk-NYSXQY3D.js";import{a as d}from"./chunk-ZG7AZG2H.js";import"./chunk-WRWRVDAJ.js";import{a as l}from"./chunk-77BSQLWR.js";import{a as v}from"./chunk-XTK4EVWH.js";import"./chunk-PSQKPSME.js";import"./chunk-VXC5XTE7.js";import{a as m}from"./chunk-5IIHJLHJ.js";import"./chunk-5M4Z4TNO.js";import"./chunk-7VZZ35FX.js";import"./chunk-EWDLMFWA.js";import"./chunk-NR4PY7IS.js";import"./chunk-WKK2D5SI.js";import"./chunk-NDCVQHVH.js";import"./chunk-ZOSMVBRJ.js";import"./chunk-OUMBZBCQ.js";import"./chunk-DM72I4Z3.js";import"./chunk-I7LLJIV6.js";import"./chunk-6SHDCONG.js";import"./chunk-BWOLSDKS.js";import{Ha as u,sa as i,z as s}from"./chunk-RLOFFV7B.js";import"./chunk-XYKKLBWK.js";import{a as n}from"./chunk-BOMGPUDJ.js";var M=`
<td colspan=3 style="padding-top: 2px;padding-bottom: 2px;">
<select style="max-width: 50px;">
<option value="x">Basic Attack</option>
<option value="0">Block</option>
<option value="1">Counter Attack</option>
<option value="2">Critical Hit</option>
<option value="3">Defend</option>
<option value="4">Deflect</option>
<option value="5">Dodge</option>
<option value="6">Lunge</option>
<option value="7">Power Attack</option>
<option value="8">Spin Attack</option>
<option value="9">Piercing Strike</option>
<option value="10">Crush</option>
<option value="11">Weaken</option>
<option value="12">Ice Shard</option>
<option value="13">Fire Blast</option>
<option value="14">Poison</option>
</select></td>`,g=M;var p=[],e,h;function x(o,t){return m({cmd:"arena",subcmd:"dopickmove",move_id:o,slot_id:t})}function b(o){return o.value}function w(){return l("select",h).map(b)}function y(o,t){if(o!==p[t])return e.eq(t).attr({src:u,width:"25",height:"25"}),x("x",t)}function A(o,t){if(!(o==="x"||o===p[t]))return x(o,t)}function C(){v(`${s}setup`)}function D(o){let t=o.map(A);a(t,C)}function B(){let o=w(),t=o.map(y);a(t,n(D,o))}function P(o){let t=$('<tr><td colspan=32 align=center style="padding-top: 2px;padding-bottom: 2px;"><input class="custombutton" value="Update" type="button"></td></tr>');$("input",t).on("click",B),o.append(t)}function T(o){let t=$(o).attr("src").match(f);return t?t[1]:"x"}function j(o,t,k){let r=T(k);p.push(r);let c=$(g);$(`option[value=${r}]`,c).prop("selected",!0),o.append(c)}function N(o){let t=$("<tr/>");h=t.get(0),t.append("<td/>"),e.each(n(j,t)),o.append(t)}function S(){return e.eq(0).closest(i).parent().closest(i)}function R(o){$(o.target).off(),e=$('#pCC a[href*="=pickmove&"] img');let t=S();N(t),$('img[src*="arena/bar_spacer."]',t).attr({width:"15",height:"50"}),P(t)}function O(){if(d())return;let o=$('#pCC b:contains("Setup Combat Moves")');o.length===1&&(o.addClass("fshLink fshGreen"),o.on("click",R))}export{O as default};
//# sourceMappingURL=setupMoves-DSXG3TCR.js.map
