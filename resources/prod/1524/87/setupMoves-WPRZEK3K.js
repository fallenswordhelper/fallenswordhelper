import{d as g}from"./chunk-TQ5G5ESS.js";import{a as p}from"./chunk-SW2UEZ72.js";import{a as v}from"./chunk-X646RZEU.js";import"./chunk-M7V4TSDM.js";import{a as m}from"./chunk-6UYUVQ4L.js";import"./chunk-O4UOMZX3.js";import{a as f}from"./chunk-NDAPZI4R.js";import"./chunk-72GM4P2D.js";import"./chunk-DU2KGPGN.js";import"./chunk-DOS2ACQD.js";import"./chunk-IJW3CVBP.js";import{a as d}from"./chunk-3P7TU5MP.js";import"./chunk-WO2SKJGR.js";import"./chunk-CQ6O4A6U.js";import"./chunk-2BLOW4PA.js";import"./chunk-LZ2PTAAG.js";import{a as i}from"./chunk-WHGJMHBD.js";import"./chunk-RQPMUZUE.js";import"./chunk-GOCBTIV4.js";import{a as u}from"./chunk-X5TUSOWA.js";import"./chunk-XS3HTUXF.js";import"./chunk-EUYWEXMV.js";import"./chunk-QZKP2GOA.js";import{C as s,Ka as l,va as n}from"./chunk-WXWB6HVS.js";import"./chunk-G66VZ6GW.js";import"./chunk-MAXAIYB2.js";var b=`
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
</select></td>`,h=b;var r=[],e=0,k=0;function x(t,o){return f({cmd:"arena",subcmd:"dopickmove",move_id:t,slot_id:o})}function w(t){return t.value}function C(){return m("select",k).map(w)}function A(t,o){if(t!==r[o])return e.eq(o).attr({src:l,width:"25",height:"25"}),x("x",o)}function y(t,o){if(!(t==="x"||t===r[o]))return x(t,o)}function D(){v(`${s}setup`)}function B(t){let o=t.map(y);p(o,D)}function P(){let t=C(),o=t.map(A);p(o,i(B,t))}function S(t){let o=$('<tr><td colspan=32 align=center style="padding-top: 2px;padding-bottom: 2px;"><input class="custombutton" value="Update" type="button"></td></tr>');$("input",o).on("click",P),t.append(o)}var R=t=>u(g,$(t).attr("src"))??"x";function T(t,o,M){let a=R(M);r.push(a);let c=$(h);$(`option[value=${a}]`,c).prop("selected",!0),t.append(c)}function _(t){let o=$("<tr/>");k=o.get(0),o.append("<td/>"),e.each(i(T,o)),t.append(o)}function N(){return e.eq(0).closest(n).parent().closest(n)}function j(t){$(t.target).off(),e=$('#pCC a[href*="=pickmove&"] img');let o=N();_(o),$('img[src*="arena/bar_spacer."]',o).attr({width:"15",height:"50"}),S(o)}function q(){if(d())return;let t=$('#pCC b:contains("Setup Combat Moves")');t.length===1&&(t.addClass("fshLink fshGreen"),t.on("click",j))}export{q as default};
//# sourceMappingURL=setupMoves-WPRZEK3K.js.map
