import{g as s}from"./getMembrList-j5wWRkA6.js"
import{bW as t,m as a,i as e,aL as n,c as r,aT as i,s as o,e as l,q as c,aS as d,al as u,$ as f,bI as m,bJ as p,d as v,v as h,w as b,au as y,p as j,ab as g,aM as w,n as S,ak as C,o as B,a3 as k}from"./calfSystem-dEoRVG2S.js"
import{i as T}from"./interceptSubmit-yJRG_kb1.js"
import{l as D}from"./loadDataTables-pG18pBfu.js"
import{p as L}from"./playerLinkFromMembrList-gCQy-zZi.js"
import{c as A}from"./createTable-qmSwOKxD.js"
import{c as M}from"./chromeHandlers-kM0MWFUg.js"
import{g as R}from"./guild-_7IrY2U_.js"
import{i as J}from"./intValue-JHhLnq8V.js"
import{a as P}from"./all-TTLWag-d.js"
import{a as F}from"./addCommas-olJWnOGa.js"
import"./guildMembers-p64Dud-E.js"
import"./isArray-bNviZzJA.js"
import"./now-pQzGw6vd.js"
import"./idb-ZfKvo_GP.js"
import"./formToUrl-Yq71ksun.js"
function N(s){return t("tfoot",s)}const G=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function x(s,t){return t[s]?t[s].level:""}function W(s,t){return t[s]?`<div class="fshAdvRank">${i(t[s].rank_name)}</div>`:""}function E(s,t,a){$(s).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:G,data:t,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}const q=s=>o("advisor",s),H=s=>()=>{o("advisor",s)}
function K(s,t,a){var e,n
e=t,n=s,n?.parentNode?.replaceChild?.(e,n),M(a,H,q)}function O(s,t,a){n(3,K,[s,t,a])}function X(s,t,i){const o=a(),l=A({className:"fshDataTable fshXSmall hover"})
return e(o,l),e(l,t),n(3,E,[l,i,r(O,s,o,l)]),o}function I(s){return R({subcmd:"advisor",subcmd2:"view",period:s})}const U=s=>J(u(s))
function V(s){return{player:{level:0,name:u(s.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((t=>U(s.cells[t])))}}async function _(s){return function(s){if(!s)return{s:!1}
const t=c("#pCC table table",s)
return{r:d(t.rows).slice(1,-1).map(V),s:!0}}(await l({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:s}))}async function z(s,t){var a
return function(s,t,a){return h(s.lastElementChild.lastElementChild,` day ${t},`),a.r}(s,t,await(a=t,f(I,_,a)))}function Q(s,t,a){return t+s[a]}function Y(s,t,a){return{...t,stats:t.stats.map(r(Q,s[a].stats))}}function Z(s,t){return s.map(r(Y,t))}function ss(s){return{player:s.player,stats:[s.stats[6],s.stats[7],s.stats[6]+s.stats[7],s.stats[1],s.stats[2],s.stats[3],s.stats[4],s.stats[8],s.stats[5]]}}function ts(s,t){return t.stats.map(r(Q,s))}function as(s,t){return`${s}<td><u>${t}</u></td>`}function es(s,t){const a=t.stats.map(F)
return[L(s,t.player.name),x(t.player.name,s),W(t.player.name,s)].concat(a)}function ns(s,[t,...a]){const e=function(s){return s.slice(1).reduce(Z,s[0]).map(ss)}(a)
X(s,function(s){return N({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${s.slice(1).reduce(ts,s[0].stats).map(F).reduce(as,"")}</tr>`})}(e),e.map(r(es,t)))}function rs(t){m("JS Perf","injectAdvisorWeekly"),async function(t){v('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const a=[s(!1)].concat([1,2,3,4,5,6,7,8].map(r(z,t)))
ns(t,await P(a))}(t),p("JS Perf","injectAdvisorWeekly")}function is(s,t){return 0===t?u(s):k(s)}function os(s,t){const a=d(t.cells,is)
return a.splice(0,1,L(s,a[0]),x(a[0],s),W(a[0],s)),a}function ls(s,t){m("JS Perf","injectAdvisorDaily")
const a=function(s,t){return d(s.rows).slice(1,-1).map(r(os,t))}(s,t),n=function(s){const t=s.rows[s.rows.length-1].cloneNode(!0),a=N()
e(a,t)
const n=t.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),a}(s)
X(s,n,a),function(){const s=w("custombutton",j())
if(!s.length)return
const t=s[0].parentNode
t.classList.add("fshRelative")
const a=S({className:"summary-link",href:`${C}guild&subcmd=advisor&subcmd2=weekly`,textContent:"7-Day Summary"})
B(a,(()=>o("advisor","summary"))),e(t,a)}(),p("JS Perf","injectAdvisorDaily")}async function cs(){if(b())return
const t=y("table",j())[1]
t&&(T(),await D(),async function(t){"weekly"===g.subcmd2?rs(t):ls(t,await s(!1))}(t))}export{cs as default}
//# sourceMappingURL=guildAdvisor-kn5OTHtF.js.map
