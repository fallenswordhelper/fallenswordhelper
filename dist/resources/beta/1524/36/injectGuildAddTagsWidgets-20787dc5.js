import{$ as e,z as n,c1 as t,o as s,p as a,E as i,b as o,h as r,i as c,R as l,t as u,A as m,am as p}from"./calfSystem-4a40365f.js"
import{c as g}from"./createInput-7fa974b4.js"
import{t as f,g as d}from"./takeItem-141bec0c.js"
import"./guild-973c4909.js"
import"./dialog-92c3ed6b.js"
import"./dialogMsg-716cf657.js"
import"./indexAjaxJson-6d511c0e.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return f(e).then(b)}function j(e){return d({subcmd2:"takeitem",guildstore_id:e})}function k(e){c(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function E(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(j,h,s)).then(u(v,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}function x(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(l),"sendLink"===n.className&&E(n)}function S(){s(a,x),i('#pCC input[name="tagIndex[]"]').forEach(k),function(){const e=g({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function C(){n("tagging_cost")?S():t()}export default C
//# sourceMappingURL=injectGuildAddTagsWidgets-20787dc5.js.map
