import{I as s,g as e,p as a,aG as n,aI as r,ap as o,C as i,B as t}from"./calfSystem-ae2e69af.js"
import{d as c}from"./dataRows-f9a92612.js"
import{p as l}from"./playerName-1b929217.js"
import{s as f}from"./searchPlayerHref-27702062.js"
function d(s){return s?Number(s[1]):0}function p(s){s.className=""}function m(s){(function(s){const e=s.cells[2].innerHTML,a=/member\s<a\shref="index\.php\?cmd=profile&amp;player_id=(\d+)/.exec(e),n=/<a\shref="index\.php\?cmd=profile&amp;player_id=(\d+)/.exec(e),o=d(n),i=d(a)
return n&&o!==r()&&i!==r()})(s)&&(o(s.cells).forEach(p),s.classList.add("fshGrey"),s.classList.add("fshXSmall"))}function u(s,e){const a=s.cells[2].innerHTML.split("'"),n=a[1]
a[1]=f(n),t(a.join("'"),s.cells[2]),function(s,e,a){e||a===l()||($(s).find("td").removeClass("row").css("font-size","xx-small"),s.style.color="gray")}(s,e,n)}function h(s){m(s),function(s){const e=i(s.cells[2]),a=e.includes("has invited the player");("'"===e.charAt(0)||a)&&u(s,a)}(s)}function y(){const s=e("td",a).find(n("Message"))
if(!s)return
const r=s.parentNode.parentNode.parentNode
s.innerHTML+='&nbsp;&nbsp;<span class="fshWhite">(Guild Log messages not involving self are dimmed!)</span>',c(r.rows,3,0).forEach(h)}function g(){s("hideNonPlayerGuildLogMessages")&&y()}export{g as a}
//# sourceMappingURL=addGuildLogWidgets-d5c17041.js.map
