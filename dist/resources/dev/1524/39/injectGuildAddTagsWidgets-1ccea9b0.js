import{$ as e,z as n,c2 as t,o as a,p as s,E as i,b as o,h as r,i as c,S as l,t as u,A as m,aw as p}from"./calfSystem-b31aba65.js"
import{c as g}from"./createInput-d7f942e4.js"
import{t as f,g as d}from"./takeItem-d682aae7.js"
import"./guild-c7514cf3.js"
import"./dialog-181309bb.js"
import"./dialogMsg-a960ad1e.js"
import"./indexAjaxJson-0fdc3cdc.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return f(e).then(b)}function j(e){return d({subcmd2:"takeitem",guildstore_id:e})}function k(e){c(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function E(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var a;(a=t,e(j,h,a)).then(u(v,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}function S(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(l),"sendLink"===n.className&&E(n)}function x(){a(s,S),i('#pCC input[name="tagIndex[]"]').forEach(k),function(){const e=g({type:"button",value:"Check All"}),n=o("form",s)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function C(){n("tagging_cost")?x():t()}export default C
//# sourceMappingURL=injectGuildAddTagsWidgets-1ccea9b0.js.map
