import{c as t}from"./createTr-c01c4f0c.js"
import{H as o,C as s,h as a,z as r,A as n,a4 as e,a5 as i}from"./calfSystem-793da633.js"
import{i as c}from"./interceptSubmit-c2811ec0.js"
import{o as f}from"./outputFormat-6a56d067.js"
import"./formToUrl-97034a23.js"
function u(){const t=o(e)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${f(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,r("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",n(u(),o)}(o),o}function m(){c(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
a(t,o)}()}export default m
//# sourceMappingURL=ladder-d072f4ae.js.map
