import{a as y}from"./chunk-BSIMDETE.js";import{a as n}from"./chunk-42GQPN6K.js";import{a as u}from"./chunk-CPUCL5KC.js";import{a as g}from"./chunk-6VZYKCGK.js";import{b as l}from"./chunk-MHANGBVH.js";import{a as c}from"./chunk-57PZ6XJI.js";import{a as f}from"./chunk-IRFQ4Q6M.js";import{a as p}from"./chunk-4OJTKSB2.js";import{a as m}from"./chunk-TDNJGM62.js";import{a as d}from"./chunk-TP7JP7VV.js";import{b as i}from"./chunk-HAINOYE5.js";function h(e){return e?Number(e[1]):0}function M(e){let s=e.cells[2].innerHTML,o=/member\s<a\shref="index\.php\?cmd=profile&amp;player_id=(\d+)/.exec(s),a=/<a\shref="index\.php\?cmd=profile&amp;player_id=(\d+)/.exec(s),N=h(a),P=h(o);return a&&N!==n()&&P!==n()}function I(e){e.className=""}function L(e){M(e)&&(m(e.cells).forEach(I),e.classList.add("fshGrey"),e.classList.add("fshXSmall"))}function x(e,s,r){!s&&r!==g()&&($(e).find("td").removeClass("row").css("font-size","xx-small"),e.style.color="gray")}function H(e,s){let o=e.cells[2].innerHTML.split("'"),t=o[1];o[1]=y(t),p(o.join("'"),e.cells[2]),x(e,s,t)}function T(e){let s=d(e.cells[2]),r=s.includes("has invited the player");(s.charAt(0)==="'"||r)&&H(e,r)}function b(e){L(e),T(e)}function v(){return c("td",l).find(f("Message"))}function E(){let e=v();if(!e)return;let s=e.parentNode.parentNode.parentNode;e.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',u(s.rows,3,0).forEach(b)}function C(){i("hideNonPlayerGuildLogMessages")&&E()}export{C as a};
//# sourceMappingURL=chunk-UZZQ76IC.js.map
