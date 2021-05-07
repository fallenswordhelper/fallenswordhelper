import{c as t}from"./createTr-a65a0ac0.js"
import{I as o,D as s,h as a,A as r,B as n,a6 as e,a7 as i}from"./calfSystem-1d588248.js"
import{i as c}from"./interceptSubmit-60e593a5.js"
import{o as u}from"./outputFormat-c52c3250.js"
import"./formToUrl-0d0c488d.js"
function f(){const t=o(e)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${u(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,r("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",n(f(),o)}(o),o}function m(){c(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
a(t,o)}()}export default m
//# sourceMappingURL=ladder-3265f6fc.js.map
