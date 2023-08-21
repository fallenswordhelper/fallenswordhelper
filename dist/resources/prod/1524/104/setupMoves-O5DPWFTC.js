import{d as g}from"./chunk-FUPTFVPM.js";import{a as v}from"./chunk-XKHB7DNW.js";import{a as i}from"./chunk-X6FEZLDJ.js";import{a as f}from"./chunk-RIMALT5Z.js";import"./chunk-MG45P7RB.js";import"./chunk-CQKCIFA5.js";import{a as d}from"./chunk-5JOFCACO.js";import{a as l}from"./chunk-NPERBP7A.js";import"./chunk-SPFEL7UW.js";import"./chunk-327LTRO2.js";import"./chunk-27TM5UBE.js";import"./chunk-SY4GQ6JX.js";import"./chunk-THRA3S6L.js";import"./chunk-TM7HV6I4.js";import"./chunk-ZS2ZYLXC.js";import{a as c}from"./chunk-ACU3ECUK.js";import{C as s,La as u,wa as n}from"./chunk-S2DS6Q2Q.js";import"./chunk-DPOGJLEK.js";import{a as m}from"./chunk-JVNW5U7Y.js";import"./chunk-57NIVQFE.js";var M=`
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
</select></td>`,h=M;var p=[],e=0,k=0;function x(t,o){return d({cmd:"arena",subcmd:"dopickmove",move_id:t,slot_id:o})}function b(t){return t.value}function C(){return l("select",k).map(b)}function y(t,o){if(t!==p[o])return e.eq(o).attr({src:u,width:"25",height:"25"}),x("x",o)}function A(t,o){if(!(t==="x"||t===p[o]))return x(t,o)}function D(){v(`${s}setup`)}async function B(t){let o=t.map(A);await i(o),D()}async function P(){let t=C(),o=t.map(y);await i(o),B(t)}function S(t){let o=$('<tr><td colspan=32 align=center style="padding-top: 2px;padding-bottom: 2px;"><input class="custombutton" value="Update" type="button"></td></tr>');$("input",o).on("click",P),t.append(o)}var R=t=>c(g,$(t).attr("src"))??"x";function T(t,o,w){let a=R(w);p.push(a);let r=$(h);$(`option[value=${a}]`,r).prop("selected",!0),t.append(r)}function _(t){let o=$("<tr/>");k=o.get(0),o.append("<td/>"),e.each(m(T,o)),t.append(o)}function N(){return e.eq(0).closest(n).parent().closest(n)}function j(t){$(t.target).off(),e=$('#pCC a[href*="=pickmove&"] img');let o=N();_(o),$('img[src*="arena/bar_spacer."]',o).attr({width:"15",height:"50"}),S(o)}function q(){if(f())return;let t=$('#pCC b:contains("Setup Combat Moves")');t.length===1&&(t.addClass("fshLink fshGreen"),t.on("click",j))}export{q as default};
//# sourceMappingURL=setupMoves-O5DPWFTC.js.map
