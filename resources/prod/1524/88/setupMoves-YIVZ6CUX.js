import{d as g}from"./chunk-5W5JHRA6.js";import{a as p}from"./chunk-7BTPRGD4.js";import{a as v}from"./chunk-ZDGYIEO3.js";import"./chunk-DNPXZIXP.js";import{a as m}from"./chunk-PGEAU7BE.js";import"./chunk-RPQRAYS7.js";import{a as f}from"./chunk-4VG4DFKD.js";import"./chunk-EFYYJBIY.js";import"./chunk-DXTBWQDH.js";import"./chunk-Y25KTRBX.js";import"./chunk-C5OL3C5E.js";import{a as d}from"./chunk-4QCWA2KR.js";import"./chunk-N3IQY6XI.js";import"./chunk-YDFKUGEP.js";import"./chunk-DPQVBB2M.js";import"./chunk-YIUTYHR2.js";import{a as i}from"./chunk-PDKME2CZ.js";import"./chunk-S2QHLOQ6.js";import"./chunk-ZLYAP3OF.js";import{a as u}from"./chunk-W5N63RWR.js";import"./chunk-5P435J5Q.js";import"./chunk-PJBH3ZC7.js";import"./chunk-GHLTWNNP.js";import{C as s,Ka as l,va as n}from"./chunk-JLE65JRD.js";import"./chunk-C3WFXZUW.js";import"./chunk-TM6O52J7.js";var b=`
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
//# sourceMappingURL=setupMoves-YIVZ6CUX.js.map
