import{y as n,bZ as e,o as t,p as a,D as s,b as i,h as l,i as o,Q as r,t as u,z as c,ai as m}from"./calfSystem-0708a9bb.js"
import{c as p}from"./createInput-d5428169.js"
import{g}from"./guildInventory-33410a14.js"
import"./guild-17d1b334.js"
function f(n){return function(n){return g({subcmd2:"takeitem",guildstore_id:n})}(n)}function d(n){o(n.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function b(n,e){e.s&&(n.removeAttribute("style"),n.className="fshGreen",c("Taken",n))}function h(n){const{target:e}=n
var t
"Check All"===e.value&&s('#pCC input[name="tagIndex[]"]').forEach(r),"sendLink"===e.className&&(f((t=e).parentNode.previousElementSibling.previousElementSibling.children[0].value).then(u(b,t)),c("",t),t.className="guildTagSpinner",t.style.backgroundImage=`url('${m}ui/misc/spinner.gif')`)}function v(){t(a,h),s('#pCC input[name="tagIndex[]"]').forEach(d),function(){const n=p({type:"button",value:"Check All"}),e=i("form",a)
1===e.length&&l(e[0].previousElementSibling.cells[0],n)}()}function k(){n("tagging_cost")?v():e()}export default k
//# sourceMappingURL=injectGuildAddTagsWidgets-fd0c54b2.js.map
