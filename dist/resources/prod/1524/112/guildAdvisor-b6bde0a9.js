import{g as s}from"./getMembrList-d2aebe41.js"
import{bX as t,l as a,i as e,aM as n,c as r,aU as i,d as l,q as o,aT as c,al as d,$ as u,bJ as f,bK as m,s as p,v,w as h,au as b,p as y,ab as j,aN as g,ak as w,a3 as S}from"./calfSystem-4830a18d.js"
import{i as C}from"./insertHtmlAfterEnd-52cca1f4.js"
import{i as B}from"./interceptSubmit-0ca01d03.js"
import{l as T}from"./loadDataTables-893ea24d.js"
import{p as k}from"./playerLinkFromMembrList-c96051cd.js"
import{c as A}from"./createTable-67896158.js"
import{g as D}from"./guild-8e58b9bf.js"
import{i as M}from"./intValue-e1798d0a.js"
import{a as L}from"./all-414e0607.js"
import{a as P}from"./addCommas-47d6aaa1.js"
import"./guildMembers-7edbe4e6.js"
import"./isArray-09a53da7.js"
import"./now-6f22aec9.js"
import"./idb-7e56faaa.js"
import"./formToUrl-824efe66.js"
function R(s){return t("tfoot",s)}function F(s,t){return t?.parentNode?.replaceChild?.(s,t)}const J=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function G(s,t){return t[s]?t[s].level:""}function N(s,t){return t[s]?`<div class="fshAdvRank">${i(t[s].rank_name)}</div>`:""}function E(s,t,a){$(s).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:J,data:t,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function x(s,t){n(3,r(F,s,t))}function H(s,t,i){const l=a(),o=A({className:"fshDataTable fshXSmall hover"})
return e(l,o),e(o,t),n(3,E,[o,i,r(x,l,s)]),l}function W(s){return D({subcmd:"advisor",subcmd2:"view",period:s})}const X=s=>M(d(s))
function q(s){return{player:{level:0,name:d(s.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((t=>X(s.cells[t])))}}async function K(s){return function(s){const t=o("#pCC table table",s)
return{r:c(t.rows).slice(1,-1).map(q),s:!0}}(await l({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:s}))}async function U(s,t){var a
return function(s,t,a){return v(s.lastElementChild.lastElementChild,` day ${t},`),a.r}(s,t,await(a=t,u(W,K,a)))}function I(s,t,a){return t+s[a]}function O(s,t,a){return{...t,stats:t.stats.map(r(I,s[a].stats))}}function V(s,t){return s.map(r(O,t))}function Y(s){return{player:s.player,stats:[s.stats[6],s.stats[7],s.stats[6]+s.stats[7],s.stats[1],s.stats[2],s.stats[3],s.stats[4],s.stats[8],s.stats[5]]}}function _(s,t){return t.stats.map(r(I,s))}function z(s,t){return`${s}<td><u>${t}</u></td>`}function Q(s,t){const a=t.stats.map(P)
return[k(s,t.player.name),G(t.player.name,s),N(t.player.name,s)].concat(a)}function Z(s,[t,...a]){const e=function(s){return s.slice(1).reduce(V,s[0]).map(Y)}(a)
H(s,function(s){return R({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${s.slice(1).reduce(_,s[0].stats).map(P).reduce(z,"")}</tr>`})}(e),e.map(r(Q,t)))}function ss(t){f("JS Perf","injectAdvisorWeekly"),async function(t){p('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const a=[s(!1)].concat([1,2,3,4,5,6,7,8].map(r(U,t)))
Z(t,await L(a))}(t),m("JS Perf","injectAdvisorWeekly")}function ts(s,t){return 0===t?d(s):S(s)}function as(s,t){const a=c(t.cells,ts)
return a.splice(0,1,k(s,a[0]),G(a[0],s),N(a[0],s)),a}function es(s,t){f("JS Perf","injectAdvisorDaily")
const a=function(s,t){return c(s.rows).slice(1,-1).map(r(as,t))}(s,t),n=function(s){const t=s.rows[s.rows.length-1].cloneNode(!0),a=R()
e(a,t)
const n=t.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),a}(s)
H(s,n,a),function(){const s=g("custombutton",y())
0!==s.length&&C(s[0],`<span> <a href="${w}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}(),m("JS Perf","injectAdvisorDaily")}async function ns(){if(h())return
const t=b("table",y())[1]
t&&(B(),await T(),async function(t){"weekly"===j.subcmd2?ss(t):es(t,await s(!1))}(t))}export{ns as default}
//# sourceMappingURL=guildAdvisor-b6bde0a9.js.map
