import{$ as e,z as n,c1 as t,o as s,p as a,E as i,b as o,h as r,i as l,R as c,t as u,A as m,aw as p}from"./calfSystem-1d588248.js"
import{c as g}from"./createInput-7d18793e.js"
import{t as d,g as f}from"./takeItem-beeb9089.js"
import"./guild-7ba4aee9.js"
import"./dialog-de7a7b58.js"
import"./dialogMsg-3c26aecb.js"
import"./indexAjaxJson-7770951b.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return d(e).then(b)}function j(e){return f({subcmd2:"takeitem",guildstore_id:e})}function k(e){l(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function E(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(j,h,s)).then(u(v,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}function x(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(c),"sendLink"===n.className&&E(n)}function S(){s(a,x),i('#pCC input[name="tagIndex[]"]').forEach(k),function(){const e=g({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function C(){n("tagging_cost")?S():t()}export default C
//# sourceMappingURL=injectGuildAddTagsWidgets-ba14c82f.js.map
