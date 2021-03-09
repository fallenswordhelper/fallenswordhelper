import{c as t}from"./createTr-245ad23b.js"
import{H as o,C as s,h as a,z as r,A as n,a5 as e,a6 as i}from"./calfSystem-c07e3259.js"
import{i as c}from"./interceptSubmit-a2751cf6.js"
import{o as f}from"./outputFormat-6a56d067.js"
import"./formToUrl-f2549b88.js"
function u(){const t=o(e)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${f(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,r("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",n(u(),o)}(o),o}function m(){c(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
a(t,o)}()}export default m
//# sourceMappingURL=ladder-bba5abc4.js.map
