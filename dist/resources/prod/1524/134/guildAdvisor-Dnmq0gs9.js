import{g as s}from"./getMembrList-CCBve77z.js"
import{c7 as t,m as a,i as e,aV as n,c as r,b1 as i,s as o,e as c,q as l,b0 as d,as as u,$ as f,d as m,v as p,w as v,aB as h,p as b,ag as y,aW as g,n as j,ar as w,o as C,a8 as B}from"./calfSystem-CyLCrHqa.js"
import{i as L}from"./interceptSubmit-BRkBno07.js"
import{l as S}from"./loadDataTables-CUx_iUlF.js"
import{p as T}from"./playerLinkFromMembrList-CV6mnBTn.js"
import{c as k}from"./createTable-CMIHEszT.js"
import{c as R}from"./chromeHandlers-Y0a5oEr4.js"
import{g as D}from"./guild-DQ2t4FWm.js"
import{i as G}from"./intValue-C7nTQec1.js"
import{a as M}from"./all-YfMtr2SN.js"
import{i as F}from"./isArray-eVldfhw1.js"
import{a as N}from"./addCommas-C_h2HN8s.js"
import"./guildMembers-C3YZ3Xen.js"
import"./formToUrl-BrsMM7SZ.js"
import"./playerLink-B18Hve4w.js"
function x(s){return t("tfoot",s)}const A=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function E(s,t){return t[s]?t[s].level:""}function q(s,t){return t[s]?`<div class="fshAdvRank">${i(t[s].rank_name)}</div>`:""}function H(s,t,a){$(s).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:A,data:t,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}const P=s=>o("advisor",s),U=s=>()=>{o("advisor",s)}
function V(s,t,a){var e,n
e=t,n=s,n?.parentNode?.replaceChild?.(e,n),R(a,U,P)}function W(s,t,a){n(3,V,[s,t,a])}function X(s,t,i){const o=a(),c=k({className:"fshDataTable fshXSmall hover"})
return e(o,c),e(c,t),n(3,H,[c,i,r(W,s,o,c)]),o}function J(s){return D({subcmd:"advisor",subcmd2:"view",period:s})}const K=s=>G(u(s))
function O(s){return{player:{level:0,name:u(s.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((t=>K(s.cells[t])))}}async function Q(s){return function(s){if(!s)return{s:!1}
const t=l("#pCC table table",s)
return{r:d(t.rows).slice(1,-1).map(O),s:!0}}(await c({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:s}))}async function Y(s,t){var a
return function(s,t,a){return p(s.lastElementChild.lastElementChild,` day ${t},`),a.r}(s,t,await(a=t,f(J,Q,a)))}function Z(s,t,a){return t+s[a]}function _(s,t,a){return{...t,stats:t.stats.map(r(Z,s[a].stats))}}function z(s,t){return s.map(r(_,t))}function I(s){return{player:s.player,stats:[s.stats[6],s.stats[7],s.stats[6]+s.stats[7],s.stats[1],s.stats[2],s.stats[3],s.stats[4],s.stats[8],s.stats[5]]}}function ss(s,t){return t.stats.map(r(Z,s))}function ts(s,t){return`${s}<td><u>${t}</u></td>`}function as(s,t){const a=t.stats.map(N)
return[T(s,t.player.name),E(t.player.name,s),q(t.player.name,s)].concat(a)}function es(s,[t,...a]){if(!a.every((s=>F(s))))return
const e=function(s){return s.slice(1).reduce(z,s[0]).map(I)}(a)
X(s,function(s){return x({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${s.slice(1).reduce(ss,s[0].stats).map(N).reduce(ts,"")}</tr>`})}(e),e.map(r(as,t)))}function ns(t){!async function(t){m('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const a=[s(!1)].concat([1,2,3,4,5,6,7,8].map(r(Y,t)))
es(t,await M(a))}(t)}function rs(s,t){return 0===t?u(s):B(s)}function is(s,t){const a=d(t.cells,rs)
return a.splice(0,1,T(s,a[0]),E(a[0],s),q(a[0],s)),a}function os(s,t){const a=function(s,t){return d(s.rows).slice(1,-1).map(r(is,t))}(s,t),n=function(s){const t=s.rows[s.rows.length-1].cloneNode(!0),a=x()
e(a,t)
const n=t.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),a}(s)
X(s,n,a),function(){const s=g("custombutton",b())
if(!s.length)return
const t=s[0].parentNode
t.classList.add("fshRelative")
const a=j({className:"summary-link",href:`${w}guild&subcmd=advisor&subcmd2=weekly`,textContent:"7-Day Summary"})
C(a,(()=>o("advisor","summary"))),e(t,a)}()}async function cs(){if(v())return
const t=h("table",b())[1]
t&&(L(),await S(),async function(t){if("weekly"===y.subcmd2)ns(t)
else{const a=await s(!1)
if(!a)return
os(t,a)}}(t))}export{cs as default}
//# sourceMappingURL=guildAdvisor-Dnmq0gs9.js.map
