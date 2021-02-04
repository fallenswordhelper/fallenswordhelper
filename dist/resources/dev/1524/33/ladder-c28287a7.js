import{c as t}from"./createTr-a58634af.js"
import{H as a,C as o,h as s,z as r,A as n,a5 as e,a6 as i}from"./calfSystem-37f70deb.js"
import{i as c}from"./interceptSubmit-8392a331.js"
import{o as f}from"./outputFormat-9aaac9e6.js"
import"./formToUrl-2a960512.js"
function u(){const t=a(e)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let a=Math.floor((i-t)/6e4)
const o=Math.floor(a/60)
return a%=60,`${f(o," hours, ")+a} mins`}(t)}function l(){const a=t()
return function(t){const a=t.insertCell(-1)
a.height=25,r("Last Reset:",a)}(a),function(t){const a=t.insertCell(-1)
a.align="right",n(u(),a)}(a),a}function m(){c(),a("trackLadderReset")&&function(){const t=o("#pCC table"),a=l()
s(t,a)}()}export default m
//# sourceMappingURL=ladder-c28287a7.js.map
