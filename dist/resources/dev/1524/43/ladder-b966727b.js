import{c as t}from"./createTr-e2aab541.js"
import{I as o,D as s,h as e,A as r,B as a,a7 as n,a8 as i}from"./calfSystem-3cb2f93e.js"
import{i as c}from"./interceptSubmit-4878d2e6.js"
import{o as f}from"./outputFormat-c52c3250.js"
import"./formToUrl-deef0cd3.js"
function u(){const t=o(n)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${f(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,r("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",a(u(),o)}(o),o}function m(){c(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
e(t,o)}()}export default m
//# sourceMappingURL=ladder-b966727b.js.map
