import{$ as e,z as n,bZ as t,o as s,p as a,E as i,b as o,h as r,i as l,Q as u,t as c,A as m,av as p}from"./calfSystem-6ad077b7.js"
import{c as g}from"./createInput-75a73ea8.js"
import{t as d,g as f}from"./takeItem-4024bed4.js"
import"./guild-b59f329b.js"
import"./dialog-e5c57349.js"
import"./dialogMsg-227939ed.js"
import"./indexAjaxJson-d462ea95.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return d(e).then(b)}function v(e){return f({subcmd2:"takeitem",guildstore_id:e})}function j(e){l(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function k(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function E(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(v,h,s)).then(c(k,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}function x(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(u),"sendLink"===n.className&&E(n)}function S(){s(a,x),i('#pCC input[name="tagIndex[]"]').forEach(j),function(){const e=g({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function C(){n("tagging_cost")?S():t()}export default C
//# sourceMappingURL=injectGuildAddTagsWidgets-f7ff1787.js.map
