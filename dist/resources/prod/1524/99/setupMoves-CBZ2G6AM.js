import{d as g}from"./chunk-CISXKYEH.js";import{a as v}from"./chunk-IC2PU3H4.js";import{a as i}from"./chunk-XOISOZY7.js";import{a as l}from"./chunk-BNXETKRM.js";import"./chunk-ZYSUV7P2.js";import{a as f}from"./chunk-N3BAHO2U.js";import"./chunk-MCKCLPTM.js";import"./chunk-3M4JV256.js";import"./chunk-3VGCM7V6.js";import"./chunk-5AMVPEUS.js";import{a as d}from"./chunk-U2RDL7AF.js";import"./chunk-YERAUQ3J.js";import"./chunk-OC2AAQPF.js";import{C as s,La as u,wa as n}from"./chunk-LGYGKPKS.js";import"./chunk-VX5V3MQE.js";import"./chunk-U5QRCCLA.js";import{a as m}from"./chunk-DG6P646J.js";import{a as c}from"./chunk-MC4TDBQ5.js";import"./chunk-HN4Q5DUC.js";import"./chunk-WWWWNWRL.js";var M=`
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
//# sourceMappingURL=setupMoves-CBZ2G6AM.js.map
