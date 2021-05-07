import{$ as e,z as n,c2 as t,o as s,p as a,E as i,b as o,h as r,i as c,S as l,t as u,A as m,ax as p}from"./calfSystem-3cb2f93e.js"
import{c as g}from"./createInput-c2872ef0.js"
import{t as f,g as d}from"./takeItem-c30d4506.js"
import"./guild-dbaee521.js"
import"./dialog-de7a7b58.js"
import"./dialogMsg-3c26aecb.js"
import"./indexAjaxJson-a55a7596.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return f(e).then(b)}function j(e){return d({subcmd2:"takeitem",guildstore_id:e})}function k(e){c(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function x(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(j,h,s)).then(u(v,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}function E(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(l),"sendLink"===n.className&&x(n)}function S(){s(a,E),i('#pCC input[name="tagIndex[]"]').forEach(k),function(){const e=g({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function C(){n("tagging_cost")?S():t()}export default C
//# sourceMappingURL=injectGuildAddTagsWidgets-5ff8f08f.js.map
