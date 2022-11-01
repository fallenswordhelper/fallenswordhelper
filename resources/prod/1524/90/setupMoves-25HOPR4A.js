import{d as g}from"./chunk-YFZRVF2D.js";import{a as p}from"./chunk-PSRRXAJ2.js";import{a as v}from"./chunk-LN77H4V4.js";import"./chunk-4WEUIOZY.js";import{a as m}from"./chunk-5WB4S5KU.js";import"./chunk-QCGEDCXW.js";import{a as f}from"./chunk-AB26ECPS.js";import"./chunk-U3JOWR4W.js";import"./chunk-NCJHTPUM.js";import"./chunk-VH2S7CSB.js";import"./chunk-3LPJKV5E.js";import{a as d}from"./chunk-52J4EBAW.js";import"./chunk-KY6XDBV6.js";import"./chunk-5JFQS7E5.js";import"./chunk-IGXYBCKR.js";import"./chunk-65QZT3K7.js";import{a as i}from"./chunk-LHP5V3M7.js";import"./chunk-57B6SJJP.js";import"./chunk-5BQ45OC2.js";import{a as u}from"./chunk-PJNUKY76.js";import"./chunk-7BHYTCY7.js";import"./chunk-QXT6DFLJ.js";import"./chunk-DCMPLE27.js";import{C as s,Ka as l,va as n}from"./chunk-SHG4I62I.js";import"./chunk-MA33RQLF.js";import"./chunk-CHNXGBZZ.js";var b=`
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
//# sourceMappingURL=setupMoves-25HOPR4A.js.map
