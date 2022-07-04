import{d as v}from"./chunk-R42E3HYH.js";import{a as p}from"./chunk-DZTKXZD6.js";import{a as f}from"./chunk-UKK4PLUM.js";import"./chunk-CUYHYJME.js";import{a as l}from"./chunk-UCL5WC26.js";import"./chunk-ZUUQECWA.js";import{a as d}from"./chunk-4XBIOIJL.js";import"./chunk-XCW5GYL4.js";import"./chunk-YSVAFZPB.js";import"./chunk-ULCOJYQQ.js";import"./chunk-TJDS7E3Q.js";import{a as m}from"./chunk-QC67ERFU.js";import"./chunk-JUUMQFPG.js";import"./chunk-OPXVQRDJ.js";import{a as n}from"./chunk-KQGQROK7.js";import"./chunk-3JJXNX5O.js";import"./chunk-4G6P2W32.js";import"./chunk-HSKCJVE7.js";import"./chunk-WT2NGKU2.js";import"./chunk-ET6NKS7B.js";import"./chunk-QMAERS6H.js";import"./chunk-AJ22QQIT.js";import{A as u,Ia as s,ta as i}from"./chunk-I6XFTTZH.js";import"./chunk-6IFYCYYR.js";var M=`
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
//# sourceMappingURL=setupMoves-ZY4ZN7GN.js.map
