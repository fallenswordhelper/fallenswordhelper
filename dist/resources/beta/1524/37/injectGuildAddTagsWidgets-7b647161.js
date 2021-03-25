import{$ as e,z as n,c1 as t,o as s,p as a,E as i,b as o,h as r,i as c,R as l,t as u,A as m,am as f}from"./calfSystem-cb2a6f39.js"
import{c as p}from"./createInput-9311ddf5.js"
import{t as g,g as d}from"./takeItem-47b738c3.js"
import"./guild-a2e2fb1a.js"
import"./dialog-8dd3ba22.js"
import"./dialogMsg-f2f50c63.js"
import"./indexAjaxJson-6c7e44df.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return g(e).then(b)}function j(e){return d({subcmd2:"takeitem",guildstore_id:e})}function k(e){c(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function E(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(j,h,s)).then(u(v,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${f}ui/misc/spinner.gif')`}function x(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(l),"sendLink"===n.className&&E(n)}function S(){s(a,x),i('#pCC input[name="tagIndex[]"]').forEach(k),function(){const e=p({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function C(){n("tagging_cost")?S():t()}export default C
//# sourceMappingURL=injectGuildAddTagsWidgets-7b647161.js.map
