import{c as t}from"./createTr-1f4adf11.js"
import{I as o,D as s,h as a,A as r,B as n,a6 as e,a7 as i}from"./calfSystem-6a3c85e0.js"
import{i as c}from"./interceptSubmit-72e26708.js"
import{o as f}from"./outputFormat-f49e3dd8.js"
import"./formToUrl-8a7bb14c.js"
function u(){const t=o(e)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${f(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,r("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",n(u(),o)}(o),o}function m(){c(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
a(t,o)}()}export default m
//# sourceMappingURL=ladder-06a0e900.js.map
