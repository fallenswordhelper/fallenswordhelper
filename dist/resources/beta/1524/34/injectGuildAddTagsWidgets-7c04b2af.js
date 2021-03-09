import{y as n,c0 as e,o as t,p as a,D as s,b as i,h as l,i as o,Q as r,t as c,z as u,ak as m}from"./calfSystem-dfa26790.js"
import{c as f}from"./createInput-5893fb83.js"
import{g as p}from"./guildInventory-f29c590b.js"
import"./guild-1fa2374c.js"
function g(n){return function(n){return p({subcmd2:"takeitem",guildstore_id:n})}(n)}function d(n){o(n.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function b(n,e){e.s&&(n.removeAttribute("style"),n.className="fshGreen",u("Taken",n))}function h(n){const{target:e}=n
var t
"Check All"===e.value&&s('#pCC input[name="tagIndex[]"]').forEach(r),"sendLink"===e.className&&(g((t=e).parentNode.previousElementSibling.previousElementSibling.children[0].value).then(c(b,t)),u("",t),t.className="guildTagSpinner",t.style.backgroundImage=`url('${m}ui/misc/spinner.gif')`)}function v(){t(a,h),s('#pCC input[name="tagIndex[]"]').forEach(d),function(){const n=f({type:"button",value:"Check All"}),e=i("form",a)
1===e.length&&l(e[0].previousElementSibling.cells[0],n)}()}function k(){n("tagging_cost")?v():e()}export default k
//# sourceMappingURL=injectGuildAddTagsWidgets-7c04b2af.js.map
