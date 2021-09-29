import{d as f}from"./chunk-XXQGZCEQ.js";import{a}from"./chunk-AFCJ6IYJ.js";import"./chunk-YRH7FGLK.js";import{a as d}from"./chunk-KFUQAFNA.js";import"./chunk-ZUHJWTKY.js";import{a as l}from"./chunk-G6VG7VOM.js";import{a as v}from"./chunk-WHCAESHL.js";import"./chunk-QGKEDUO2.js";import"./chunk-M5ZN4Z2N.js";import{a as m}from"./chunk-UU6HXUOC.js";import"./chunk-4KMRATSZ.js";import"./chunk-BSKCRAT3.js";import"./chunk-MDOXDTXF.js";import"./chunk-PX7MLT6T.js";import"./chunk-QPRB5F5E.js";import"./chunk-QHU4ICCH.js";import"./chunk-JROAODNJ.js";import"./chunk-N56IAE2U.js";import"./chunk-ISL3KEXS.js";import"./chunk-VMJ6DXBZ.js";import"./chunk-3PDILZ3R.js";import"./chunk-3WAX2TNR.js";import{Ha as u,sa as i,z as s}from"./chunk-4P4O4YGO.js";import"./chunk-KTAAKVTB.js";import{a as n}from"./chunk-RH5336H4.js";var M=`
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
//# sourceMappingURL=setupMoves-SIO26QED.js.map
