import{c as t}from"./createTr-4643c7a9.js"
import{I as a,D as o,h as s,A as r,B as n,a6 as e,a7 as i}from"./calfSystem-4a40365f.js"
import{i as c}from"./interceptSubmit-c8d517a3.js"
import{o as f}from"./outputFormat-01edbae6.js"
import"./formToUrl-8ffaa75b.js"
function u(){const t=a(e)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let a=Math.floor((i-t)/6e4)
const o=Math.floor(a/60)
return a%=60,`${f(o," hours, ")+a} mins`}(t)}function l(){const a=t()
return function(t){const a=t.insertCell(-1)
a.height=25,r("Last Reset:",a)}(a),function(t){const a=t.insertCell(-1)
a.align="right",n(u(),a)}(a),a}function m(){c(),a("trackLadderReset")&&function(){const t=o("#pCC table"),a=l()
s(t,a)}()}export default m
//# sourceMappingURL=ladder-2c55c0bf.js.map
