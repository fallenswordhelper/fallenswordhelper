import{$ as e,z as n,c2 as t,o as s,p as a,E as i,b as o,h as r,i as c,S as l,t as u,A as m,an as p}from"./calfSystem-eeb1d862.js"
import{c as g}from"./createInput-c963dc21.js"
import{t as d,g as f}from"./takeItem-a62140ee.js"
import"./guild-9a62ed17.js"
import"./dialog-92c3ed6b.js"
import"./dialogMsg-716cf657.js"
import"./indexAjaxJson-2deb257d.js"
function b(e){return 0===e.r?{s:!0}:{e:{message:e.m},s:!1}}function h(e){return d(e).then(b)}function j(e){return f({subcmd2:"takeitem",guildstore_id:e})}function k(e){c(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function v(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",m("Taken",e))}function E(n){const t=n.parentNode.previousElementSibling.previousElementSibling.children[0].value
var s;(s=t,e(j,h,s)).then(u(v,n)),m("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${p}ui/misc/spinner.gif')`}function S(e){const{target:n}=e
"Check All"===n.value&&i('#pCC input[name="tagIndex[]"]').forEach(l),"sendLink"===n.className&&E(n)}function x(){s(a,S),i('#pCC input[name="tagIndex[]"]').forEach(k),function(){const e=g({type:"button",value:"Check All"}),n=o("form",a)
1===n.length&&r(n[0].previousElementSibling.cells[0],e)}()}function C(){n("tagging_cost")?x():t()}export default C
//# sourceMappingURL=injectGuildAddTagsWidgets-e1efe270.js.map
