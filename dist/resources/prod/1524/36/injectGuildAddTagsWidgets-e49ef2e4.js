import{$ as e,z as n,b_ as t,o as s,p as a,E as i,b as o,h as r,i as l,R as c,t as u,A as m,ak as p}from"./calfSystem-e7bde0c3.js"
import{c as g}from"./createInput-563f37d2.js"
import{t as f,g as d}from"./takeItem-8abb2122.js"
import"./guild-e896510a.js"
import"./dialog-92c3ed6b.js"
import"./dialogMsg-716cf657.js"
import"./indexAjaxJson-9da74e49.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return f(e).then(b)}function k(e){return d({subcmd2:"takeitem",guildstore_id:e})}function j(e){l(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function E(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(k,h,s)).then(u(v,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}function x(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(c),"sendLink"===n.className&&E(n)}function S(){s(a,x),i('#pCC input[name="tagIndex[]"]').forEach(j),function(){const e=g({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function C(){n("tagging_cost")?S():t()}export default C
//# sourceMappingURL=injectGuildAddTagsWidgets-e49ef2e4.js.map
