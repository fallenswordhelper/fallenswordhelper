import{c as t}from"./createTr-c94bd2f0.js"
import{I as o,D as s,h as a,A as r,B as e,a5 as n,a6 as i}from"./calfSystem-ae2e69af.js"
import{i as f}from"./interceptSubmit-9058efa4.js"
import{o as c}from"./outputFormat-f49e3dd8.js"
import"./formToUrl-35718c02.js"
function u(){const t=o(n)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${c(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,r("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",e(u(),o)}(o),o}function m(){f(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
a(t,o)}()}export default m
//# sourceMappingURL=ladder-d18235c6.js.map
