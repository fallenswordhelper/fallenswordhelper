import{g as s}from"./getMembrList-09da0fac.js"
import{b_ as t,l as a,i as e,aP as n,c as r,aX as i,d as l,q as c,aW as o,an as d,$ as u,bM as f,bN as m,s as p,v,w as h,aw as b,p as y,ad as j,aQ as g,am as w,a5 as C}from"./calfSystem-2fff342b.js"
import{i as S}from"./insertHtmlAfterEnd-d463625c.js"
import{i as B}from"./interceptSubmit-fde9f84f.js"
import{l as T}from"./loadDataTables-ef77ceaa.js"
import{p as k}from"./playerLinkFromMembrList-9b0fa4dd.js"
import{c as D}from"./createTable-4600954c.js"
import{g as A}from"./guild-6c03a6f9.js"
import{i as L}from"./intValue-e1798d0a.js"
import{a as M}from"./all-414e0607.js"
import{a as P}from"./addCommas-47d6aaa1.js"
import"./guildMembers-0c31d405.js"
import"./now-6f22aec9.js"
import"./idb-0ebea50c.js"
import"./formToUrl-cfc572ea.js"
function R(s){return t("tfoot",s)}function J(s,t){return t?.parentNode?.replaceChild?.(s,t)}const F=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function G(s,t){return t[s]?t[s].level:""}function N(s,t){return t[s]?`<div class="fshAdvRank">${i(t[s].rank_name)}</div>`:""}function E(s,t,a){$(s).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:F,data:t,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function W(s,t){n(3,r(J,s,t))}function x(s,t,i){const l=a(),c=D({className:"fshDataTable fshXSmall hover"})
return e(l,c),e(c,t),n(3,E,[c,i,r(W,l,s)]),l}function X(s){return A({subcmd:"advisor",subcmd2:"view",period:s})}const q=s=>L(d(s))
function H(s){return{player:{level:0,name:d(s.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((t=>q(s.cells[t])))}}async function Q(s){return function(s){const t=c("#pCC table table",s)
return{r:o(t.rows).slice(1,-1).map(H),s:!0}}(await l({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:s}))}async function U(s,t){var a
return function(s,t,a){return v(s.lastElementChild.lastElementChild,` day ${t},`),a.r}(s,t,await(a=t,u(X,Q,a)))}function _(s,t,a){return t+s[a]}function I(s,t,a){return{...t,stats:t.stats.map(r(_,s[a].stats))}}function O(s,t){return s.map(r(I,t))}function V(s){return{player:s.player,stats:[s.stats[6],s.stats[7],s.stats[6]+s.stats[7],s.stats[1],s.stats[2],s.stats[3],s.stats[4],s.stats[8],s.stats[5]]}}function z(s,t){return t.stats.map(r(_,s))}function K(s,t){return`${s}<td><u>${t}</u></td>`}function Y(s,t){const a=t.stats.map(P)
return[k(s,t.player.name),G(t.player.name,s),N(t.player.name,s)].concat(a)}function Z(s,[t,...a]){const e=function(s){return s.slice(1).reduce(O,s[0]).map(V)}(a)
x(s,function(s){return R({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${s.slice(1).reduce(z,s[0].stats).map(P).reduce(K,"")}</tr>`})}(e),e.map(r(Y,t)))}function ss(t){f("JS Perf","injectAdvisorWeekly"),async function(t){p('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const a=[s(!1)].concat([1,2,3,4,5,6,7,8].map(r(U,t)))
Z(t,await M(a))}(t),m("JS Perf","injectAdvisorWeekly")}function ts(s,t){return 0===t?d(s):C(s)}function as(s,t){const a=o(t.cells,ts)
return a.splice(0,1,k(s,a[0]),G(a[0],s),N(a[0],s)),a}function es(s,t){f("JS Perf","injectAdvisorDaily")
const a=function(s,t){return o(s.rows).slice(1,-1).map(r(as,t))}(s,t),n=function(s){const t=s.rows[s.rows.length-1].cloneNode(!0),a=R()
e(a,t)
const n=t.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),a}(s)
x(s,n,a),function(){const s=g("custombutton",y())
0!==s.length&&S(s[0],`<span> <a href="${w}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}(),m("JS Perf","injectAdvisorDaily")}async function ns(){if(h())return
const t=b("table",y())[1]
t&&(B(),await T(),async function(t){"weekly"===j.subcmd2?ss(t):es(t,await s(!1))}(t))}export{ns as default}
//# sourceMappingURL=guildAdvisor-8f59a38f.js.map
