import{$ as e,z as n,b_ as t,o as s,p as a,E as i,b as o,h as r,i as c,R as l,t as u,A as m,ak as f}from"./calfSystem-60c20ae9.js"
import{c as p}from"./createInput-aabb8b6b.js"
import{t as g,g as b}from"./takeItem-feb8efc6.js"
import"./guild-d3cc9553.js"
import"./dialog-8dd3ba22.js"
import"./dialogMsg-f2f50c63.js"
import"./indexAjaxJson-6bb34fec.js"
function d(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return g(e).then(d)}function k(e){return b({subcmd2:"takeitem",guildstore_id:e})}function j(e){c(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function E(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(k,h,s)).then(u(v,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${f}ui/misc/spinner.gif')`}function x(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(l),"sendLink"===n.className&&E(n)}function S(){s(a,x),i('#pCC input[name="tagIndex[]"]').forEach(j),function(){const e=p({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function C(){n("tagging_cost")?S():t()}export default C
//# sourceMappingURL=injectGuildAddTagsWidgets-ef52e31f.js.map
