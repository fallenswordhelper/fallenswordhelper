import{c as t}from"./createTr-a413773a.js"
import{I as o,D as s,h as r,A as a,B as n,a5 as e,a6 as i}from"./calfSystem-cbf77dd7.js"
import{i as c}from"./interceptSubmit-b6d9986f.js"
import{o as f}from"./outputFormat-64398632.js"
import"./formToUrl-5189bcfb.js"
function u(){const t=o(e)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${f(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,a("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",n(u(),o)}(o),o}function m(){c(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
r(t,o)}()}export default m
//# sourceMappingURL=ladder-c19285ef.js.map
