import{$ as n,z as e,c2 as t,o as s,p as a,E as i,b as o,h as r,i as l,S as c,t as u,A as m,an as f}from"./calfSystem-5d0c721b.js"
import{c as p}from"./createInput-73c334d2.js"
import{t as d,g}from"./takeItem-55915665.js"
import"./guild-f2d7df88.js"
import"./dialog-8dd3ba22.js"
import"./dialogMsg-f2f50c63.js"
import"./indexAjaxJson-f1851d17.js"
function b(n){return 0===n.r?{s:!0}:{e:{message:n.m},s:!1}}function h(n){return d(n).then(b)}function j(n){return g({subcmd2:"takeitem",guildstore_id:n})}function k(n){l(n.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(n,e){e.s&&(n.removeAttribute("style"),n.className="fshGreen",m("Taken",n))}function E(e){const t=e.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,n(j,h,s)).then(u(v,e)),m("",e),e.className="guildTagSpinner",e.style.backgroundImage=`url('${f}ui/misc/spinner.gif')`}function S(n){const{target:e}=n
"Check All"===e.value&&i('#pCC input[name="tagIndex[]"]').forEach(c),"sendLink"===e.className&&E(e)}function x(){s(a,S),i('#pCC input[name="tagIndex[]"]').forEach(k),function(){const n=p({type:"button",value:"Check All"}),e=o("form",a)
1===e.length&&r(e[0].previousElementSibling.cells[0],n)}()}function C(){e("tagging_cost")?x():t()}export default C
//# sourceMappingURL=injectGuildAddTagsWidgets-5307ca6c.js.map
