import{d as g}from"./chunk-3EBZKAYC.js";import{a as v}from"./chunk-5QRIPEH4.js";import{a as i}from"./chunk-HBZRWJQD.js";import{a as l}from"./chunk-FRO6SRPS.js";import"./chunk-KISGUHSG.js";import{a as f}from"./chunk-VOZNQMDZ.js";import"./chunk-FWKC5QHK.js";import"./chunk-PQNRX7KL.js";import"./chunk-3HA3LGRS.js";import"./chunk-PQQEFJJP.js";import{a as d}from"./chunk-LLBDB37F.js";import"./chunk-FBE7XRGY.js";import"./chunk-RXTT2WAC.js";import"./chunk-L3JPR2OA.js";import"./chunk-BOKRD7MF.js";import{a as m}from"./chunk-OX4LUTGU.js";import"./chunk-APL2ZPH4.js";import"./chunk-DUYXF4AP.js";import{a as c}from"./chunk-2AE3RW75.js";import"./chunk-4VOC3Y22.js";import"./chunk-EBYAAPUH.js";import"./chunk-OORPHTKR.js";import{C as s,La as u,wa as n}from"./chunk-7FWLR7VA.js";import"./chunk-CQMSXQA7.js";import"./chunk-YZRZJRAF.js";var M=`
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
</select></td>`,h=M;var p=[],e=0,k=0;function x(t,o){return f({cmd:"arena",subcmd:"dopickmove",move_id:t,slot_id:o})}function b(t){return t.value}function C(){return l("select",k).map(b)}function y(t,o){if(t!==p[o])return e.eq(o).attr({src:u,width:"25",height:"25"}),x("x",o)}function A(t,o){if(!(t==="x"||t===p[o]))return x(t,o)}function D(){v(`${s}setup`)}async function B(t){let o=t.map(A);await i(o),D()}async function P(){let t=C(),o=t.map(y);await i(o),B(t)}function S(t){let o=$('<tr><td colspan=32 align=center style="padding-top: 2px;padding-bottom: 2px;"><input class="custombutton" value="Update" type="button"></td></tr>');$("input",o).on("click",P),t.append(o)}var R=t=>c(g,$(t).attr("src"))??"x";function T(t,o,w){let a=R(w);p.push(a);let r=$(h);$(`option[value=${a}]`,r).prop("selected",!0),t.append(r)}function _(t){let o=$("<tr/>");k=o.get(0),o.append("<td/>"),e.each(m(T,o)),t.append(o)}function N(){return e.eq(0).closest(n).parent().closest(n)}function j(t){$(t.target).off(),e=$('#pCC a[href*="=pickmove&"] img');let o=N();_(o),$('img[src*="arena/bar_spacer."]',o).attr({width:"15",height:"50"}),S(o)}function q(){if(d())return;let t=$('#pCC b:contains("Setup Combat Moves")');t.length===1&&(t.addClass("fshLink fshGreen"),t.on("click",j))}export{q as default};
//# sourceMappingURL=setupMoves-F3SCSPFZ.js.map
