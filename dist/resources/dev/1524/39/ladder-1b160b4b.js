import{c as t}from"./createTr-c081e173.js"
import{I as o,D as s,h as a,A as r,B as n,a7 as e,a8 as i}from"./calfSystem-b31aba65.js"
import{i as c}from"./interceptSubmit-b313ecea.js"
import{o as u}from"./outputFormat-d3c3754d.js"
import"./formToUrl-b9ac6c05.js"
function f(){const t=o(e)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${u(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,r("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",n(f(),o)}(o),o}function m(){c(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
a(t,o)}()}export default m
//# sourceMappingURL=ladder-1b160b4b.js.map
