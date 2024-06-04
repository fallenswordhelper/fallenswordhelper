import{g as s}from"./getMembrList-D9Ne3e-s.js"
import{c3 as t,m as a,i as e,aT as n,c as r,a$ as i,s as o,e as c,q as l,a_ as d,aq as u,$ as f,bR as m,bS as p,d as v,v as h,w as y,az as b,p as j,ag as g,aU as w,n as C,ap as S,o as k,a8 as B}from"./calfSystem-wTzwei3t.js"
import{i as L}from"./interceptSubmit-BOa9u4Un.js"
import{l as T}from"./loadDataTables-D5u8DInA.js"
import{p as D}from"./playerLinkFromMembrList-DRmudj2w.js"
import{c as R}from"./createTable-CzF-CXSd.js"
import{c as A}from"./chromeHandlers-lFLX5iZi.js"
import{g as G}from"./guild-BZ--WBHn.js"
import{i as M}from"./intValue-C7nTQec1.js"
import{a as N}from"./all-YfMtr2SN.js"
import{a as P}from"./addCommas-C_h2HN8s.js"
import"./guildMembers-BAg60jqP.js"
import"./isArray-eVldfhw1.js"
import"./now-Cx4PsKjI.js"
import"./formToUrl-n7bzGaSs.js"
import"./playerLink-CNEe7Z7w.js"
function F(s){return t("tfoot",s)}const J=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function x(s,t){return t[s]?t[s].level:""}function q(s,t){return t[s]?`<div class="fshAdvRank">${i(t[s].rank_name)}</div>`:""}function E(s,t,a){$(s).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:J,data:t,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}const H=s=>o("advisor",s),U=s=>()=>{o("advisor",s)}
function W(s,t,a){var e,n
e=t,n=s,n?.parentNode?.replaceChild?.(e,n),A(a,U,H)}function _(s,t,a){n(3,W,[s,t,a])}function X(s,t,i){const o=a(),c=R({className:"fshDataTable fshXSmall hover"})
return e(o,c),e(c,t),n(3,E,[c,i,r(_,s,o,c)]),o}function z(s){return G({subcmd:"advisor",subcmd2:"view",period:s})}const O=s=>M(u(s))
function Q(s){return{player:{level:0,name:u(s.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((t=>O(s.cells[t])))}}async function V(s){return function(s){if(!s)return{s:!1}
const t=l("#pCC table table",s)
return{r:d(t.rows).slice(1,-1).map(Q),s:!0}}(await c({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:s}))}async function Z(s,t){var a
return function(s,t,a){return h(s.lastElementChild.lastElementChild,` day ${t},`),a.r}(s,t,await(a=t,f(z,V,a)))}function I(s,t,a){return t+s[a]}function K(s,t,a){return{...t,stats:t.stats.map(r(I,s[a].stats))}}function Y(s,t){return s.map(r(K,t))}function ss(s){return{player:s.player,stats:[s.stats[6],s.stats[7],s.stats[6]+s.stats[7],s.stats[1],s.stats[2],s.stats[3],s.stats[4],s.stats[8],s.stats[5]]}}function ts(s,t){return t.stats.map(r(I,s))}function as(s,t){return`${s}<td><u>${t}</u></td>`}function es(s,t){const a=t.stats.map(P)
return[D(s,t.player.name),x(t.player.name,s),q(t.player.name,s)].concat(a)}function ns(s,[t,...a]){const e=function(s){return s.slice(1).reduce(Y,s[0]).map(ss)}(a)
X(s,function(s){return F({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${s.slice(1).reduce(ts,s[0].stats).map(P).reduce(as,"")}</tr>`})}(e),e.map(r(es,t)))}function rs(t){m("JS Perf","injectAdvisorWeekly"),async function(t){v('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const a=[s(!1)].concat([1,2,3,4,5,6,7,8].map(r(Z,t)))
ns(t,await N(a))}(t),p("JS Perf","injectAdvisorWeekly")}function is(s,t){return 0===t?u(s):B(s)}function os(s,t){const a=d(t.cells,is)
return a.splice(0,1,D(s,a[0]),x(a[0],s),q(a[0],s)),a}function cs(s,t){m("JS Perf","injectAdvisorDaily")
const a=function(s,t){return d(s.rows).slice(1,-1).map(r(os,t))}(s,t),n=function(s){const t=s.rows[s.rows.length-1].cloneNode(!0),a=F()
e(a,t)
const n=t.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),a}(s)
X(s,n,a),function(){const s=w("custombutton",j())
if(!s.length)return
const t=s[0].parentNode
t.classList.add("fshRelative")
const a=C({className:"summary-link",href:`${S}guild&subcmd=advisor&subcmd2=weekly`,textContent:"7-Day Summary"})
k(a,(()=>o("advisor","summary"))),e(t,a)}(),p("JS Perf","injectAdvisorDaily")}async function ls(){if(y())return
const t=b("table",j())[1]
t&&(L(),await T(),async function(t){if("weekly"===g.subcmd2)rs(t)
else{const a=await s(!1)
if(!a)return
cs(t,a)}}(t))}export{ls as default}
//# sourceMappingURL=guildAdvisor-Cv9_parA.js.map
