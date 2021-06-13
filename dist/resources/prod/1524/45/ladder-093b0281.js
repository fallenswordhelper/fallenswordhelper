import{c as t}from"./createTr-0bf120f4.js"
import{I as o,D as s,h as r,A as e,B as n,a5 as a,a6 as i}from"./calfSystem-e1e858cd.js"
import{i as f}from"./interceptSubmit-fde65f15.js"
import{o as c}from"./outputFormat-f49e3dd8.js"
import"./formToUrl-d7735a71.js"
function u(){const t=o(a)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${c(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,e("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",n(u(),o)}(o),o}function m(){f(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
r(t,o)}()}export default m
//# sourceMappingURL=ladder-093b0281.js.map
