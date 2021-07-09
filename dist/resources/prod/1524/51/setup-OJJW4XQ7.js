import{d as f}from"./chunk-C7SAF7IW.js";import{a}from"./chunk-KC3JUT6W.js";import"./chunk-YW6SRUBN.js";import{a as d}from"./chunk-WHAZT5VY.js";import"./chunk-UWKUUDVQ.js";import{a as l}from"./chunk-57PZ6XJI.js";import{a as v}from"./chunk-UNW33QGP.js";import"./chunk-UWAT3VA7.js";import"./chunk-ND3XCMOS.js";import{a as m}from"./chunk-PJ32ASZ7.js";import"./chunk-F5QOVYT2.js";import"./chunk-QFSH2B2J.js";import"./chunk-2PFHY365.js";import"./chunk-GGKSIQST.js";import"./chunk-JSWEJZHY.js";import"./chunk-GHQYBWLT.js";import"./chunk-PKDG64MH.js";import"./chunk-3IGXKFMQ.js";import"./chunk-TDNJGM62.js";import"./chunk-HAINOYE5.js";import"./chunk-AN5TC666.js";import"./chunk-B7PLPUHK.js";import{Ha as u,sa as n,z as s}from"./chunk-YNXRNCRL.js";import"./chunk-7DPOBF7C.js";import{a as i}from"./chunk-DEDCEYVR.js";var M=`
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
</select></td>`,g=M;var p=[],e,h;function x(o,t){return m({cmd:"arena",subcmd:"dopickmove",move_id:o,slot_id:t})}function b(o){return o.value}function w(){return l("select",h).map(b)}function y(o,t){if(o!==p[t])return e.eq(t).attr({src:u,width:"25",height:"25"}),x("x",t)}function A(o,t){if(!(o==="x"||o===p[t]))return x(o,t)}function C(){v(`${s}setup`)}function D(o){let t=o.map(A);a(t,C)}function B(){let o=w(),t=o.map(y);a(t,i(D,o))}function P(o){let t=$('<tr><td colspan=32 align=center style="padding-top: 2px;padding-bottom: 2px;"><input class="custombutton" value="Update" type="button"></td></tr>');$("input",t).on("click",B),o.append(t)}function T(o){let t=$(o).attr("src").match(f);return t?t[1]:"x"}function j(o,t,k){let r=T(k);p.push(r);let c=$(g);$(`option[value=${r}]`,c).prop("selected",!0),o.append(c)}function N(o){let t=$("<tr/>");h=t.get(0),t.append("<td/>"),e.each(i(j,t)),o.append(t)}function S(){return e.eq(0).closest(n).parent().closest(n)}function R(o){$(o.target).off(),e=$('#pCC a[href*="=pickmove&"] img');let t=S();N(t),$('img[src*="arena/bar_spacer."]',t).attr({width:"15",height:"50"}),P(t)}function O(){if(d())return;let o=$('#pCC b:contains("Setup Combat Moves")');o.length===1&&(o.addClass("fshLink fshGreen"),o.on("click",R))}export{O as default};
//# sourceMappingURL=setup-OJJW4XQ7.js.map
