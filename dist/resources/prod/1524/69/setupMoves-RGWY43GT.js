import{d as v}from"./chunk-VVOKZZ3L.js";import{a as p}from"./chunk-NJ6B7L4B.js";import{a as f}from"./chunk-OYYOAYMV.js";import"./chunk-343V7Q36.js";import{a as l}from"./chunk-I6BQR2GZ.js";import"./chunk-C2EU36VT.js";import{a as d}from"./chunk-W4QLHFVR.js";import"./chunk-B3OVUKAM.js";import"./chunk-P2FYCUOG.js";import"./chunk-VUJR46HY.js";import{a as m}from"./chunk-VHX5BADE.js";import"./chunk-C6PSWFF5.js";import"./chunk-KD4PPF2P.js";import{a as n}from"./chunk-L4MPHVE4.js";import"./chunk-C3DMTIKU.js";import"./chunk-REHXFZMP.js";import"./chunk-WYX2VQXF.js";import"./chunk-KYNUAHCU.js";import"./chunk-X53ITBGR.js";import"./chunk-VB2T76EA.js";import"./chunk-B6YTNR7S.js";import"./chunk-2PDPTZUM.js";import{B as u,Ja as s,ua as i}from"./chunk-RRAQGRWM.js";import"./chunk-UMFA3PXI.js";var M=`
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
</select></td>`,g=M;var r=[],e,h;function k(t,o){return d({cmd:"arena",subcmd:"dopickmove",move_id:t,slot_id:o})}function b(t){return t.value}function w(){return l("select",h).map(b)}function C(t,o){if(t!==r[o])return e.eq(o).attr({src:s,width:"25",height:"25"}),k("x",o)}function A(t,o){if(!(t==="x"||t===r[o]))return k(t,o)}function y(){f(`${u}setup`)}function D(t){let o=t.map(A);p(o,y)}function B(){let t=w(),o=t.map(C);p(o,n(D,t))}function P(t){let o=$('<tr><td colspan=32 align=center style="padding-top: 2px;padding-bottom: 2px;"><input class="custombutton" value="Update" type="button"></td></tr>');$("input",o).on("click",B),t.append(o)}function S(t){let o=$(t).attr("src").match(v);return o?o[1]:"x"}function R(t,o,x){let a=S(x);r.push(a);let c=$(g);$(`option[value=${a}]`,c).prop("selected",!0),t.append(c)}function T(t){let o=$("<tr/>");h=o.get(0),o.append("<td/>"),e.each(n(R,o)),t.append(o)}function N(){return e.eq(0).closest(i).parent().closest(i)}function _(t){$(t.target).off(),e=$('#pCC a[href*="=pickmove&"] img');let o=N();T(o),$('img[src*="arena/bar_spacer."]',o).attr({width:"15",height:"50"}),P(o)}function j(){if(m())return;let t=$('#pCC b:contains("Setup Combat Moves")');t.length===1&&(t.addClass("fshLink fshGreen"),t.on("click",_))}export{j as default};
//# sourceMappingURL=setupMoves-RGWY43GT.js.map