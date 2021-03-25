import{c as t}from"./createTr-7e2ba72e.js"
import{I as a,D as e,h as o,A as s,B as r,a7 as n,a8 as i}from"./calfSystem-eeb1d862.js"
import{i as c}from"./interceptSubmit-6c8c8ca6.js"
import{o as u}from"./outputFormat-01edbae6.js"
import"./formToUrl-2acae37a.js"
function f(){const t=a(n)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let a=Math.floor((i-t)/6e4)
const e=Math.floor(a/60)
return a%=60,`${u(e," hours, ")+a} mins`}(t)}function l(){const a=t()
return function(t){const a=t.insertCell(-1)
a.height=25,s("Last Reset:",a)}(a),function(t){const a=t.insertCell(-1)
a.align="right",r(f(),a)}(a),a}function m(){c(),a("trackLadderReset")&&function(){const t=e("#pCC table"),a=l()
o(t,a)}()}export default m
//# sourceMappingURL=ladder-38608757.js.map
