import{c as t}from"./createTr-f500fe98.js"
import{I as o,D as s,h as e,A as r,B as a,a6 as n,a7 as i}from"./calfSystem-26fbeaeb.js"
import{i as f}from"./interceptSubmit-b180aeed.js"
import{o as c}from"./outputFormat-d3c3754d.js"
import"./formToUrl-140d33d2.js"
function u(){const t=o(n)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${c(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,r("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",a(u(),o)}(o),o}function m(){f(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
e(t,o)}()}export default m
//# sourceMappingURL=ladder-e91fc3ac.js.map
