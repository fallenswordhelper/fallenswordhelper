import{c as t}from"./createTr-fd98ecc5.js"
import{I as o,D as s,h as a,A as e,B as r,a6 as n,a7 as i}from"./calfSystem-e7bde0c3.js"
import{i as c}from"./interceptSubmit-41d1852c.js"
import{o as f}from"./outputFormat-01edbae6.js"
import"./formToUrl-aa476074.js"
function u(){const t=o(n)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${f(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,e("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",r(u(),o)}(o),o}function m(){c(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
a(t,o)}()}export default m
//# sourceMappingURL=ladder-b7dda249.js.map
