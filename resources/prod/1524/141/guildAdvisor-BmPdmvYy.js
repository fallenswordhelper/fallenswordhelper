import{g as s}from"./getMembrList-BJkT4B-E.js"
import{c7 as t,k as a,i as e,aV as n,b as r,s as i,b1 as l,q as o,b0 as c,as as d,d as u,$ as f,c as m,v as p,w as v,aB as h,p as b,ag as y,a8 as g,aW as C,l as j,ar as w,e as B}from"./calfSystem-Blt4DbaE.js"
import{i as S}from"./interceptSubmit-DTfrwUG-.js"
import{l as k}from"./loadDataTables-CByWfiDg.js"
import{p as L}from"./playerLinkFromMembrList-X6zW-QiT.js"
import{c as R}from"./createTable-C810iJm_.js"
import{c as T}from"./chromeHandlers-cXls4oHX.js"
import{g as D}from"./guild-hKlLzHll.js"
import{i as M}from"./intValue-C7nTQec1.js"
import{a as N}from"./all-YfMtr2SN.js"
import{i as F}from"./isArray-eVldfhw1.js"
import{a as G}from"./addCommas-C_h2HN8s.js"
import"./guildMembers-B5MxM4J7.js"
import"./formToUrl-Bfgg_ioA.js"
import"./playerLink-Wzb2L39d.js"
function x(s){return t("tfoot",s)}const A=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function E(s,t){return t[s]?t[s].level:""}function V(s,t){return t[s]?`<div class="fshAdvRank">${l(t[s].rank_name)}</div>`:""}function W(s,t,a){$(s).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:A,data:t,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}const q=s=>i("advisor",s),H=s=>()=>{i("advisor",s)}
function J(s,t,a){var e,n
e=t,n=s,n?.parentNode?.replaceChild?.(e,n),T(a,H,q)}function O(s,t,a){n(3,J,[s,t,a])}function P(s,t,i){const l=a(),o=R({className:"fshDataTable fshXSmall hover"})
return e(l,o),e(o,t),n(3,W,[o,i,r(O,s,l,o)]),l}function X(s){return D({subcmd:"advisor",subcmd2:"view",period:s})}const I=s=>M(d(s))
function U(s){return{player:{level:0,name:d(s.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((t=>I(s.cells[t])))}}async function _(s){return function(s){if(!s)return{s:!1}
const t=o("#pCC table table",s)
return{r:c(t.rows).slice(1,-1).map(U),s:!0}}(await u({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:s}))}async function z(s,t){var a
return function(s,t,a){return p(s.lastElementChild.lastElementChild,` day ${t},`),a.r}(s,t,await(a=t,f(X,_,a)))}function K(s,t,a){return t+s[a]}function Q(s,t,a){return{...t,stats:t.stats.map(r(K,s[a].stats))}}function Y(s,t){return s.map(r(Q,t))}function Z(s){return{player:s.player,stats:[s.stats[6],s.stats[7],s.stats[6]+s.stats[7],s.stats[1],s.stats[2],s.stats[3],s.stats[4],s.stats[8],s.stats[5]]}}function ss(s,t){return t.stats.map(r(K,s))}function ts(s,t){return`${s}<td><u>${t}</u></td>`}function as(s,t){const a=t.stats.map(G)
return[L(s,t.player.name),E(t.player.name,s),V(t.player.name,s)].concat(a)}function es(s,[t,...a]){if(!a.every((s=>F(s))))return
const e=function(s){return s.slice(1).reduce(Y,s[0]).map(Z)}(a)
P(s,function(s){return x({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${s.slice(1).reduce(ss,s[0].stats).map(G).reduce(ts,"")}</tr>`})}(e),e.map(r(as,t)))}function ns(t){!async function(t){m('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const a=[s(!1)].concat([1,2,3,4,5,6,7,8].map(r(z,t)))
es(t,await N(a))}(t)}function rs(s,t){return 0===t?d(s):g(s)}function is(s,t){const a=c(t.cells,rs)
return a.splice(0,1,L(s,a[0]),E(a[0],s),V(a[0],s)),a}function ls(s,t){const a=function(s,t){return c(s.rows).slice(1,-1).map(r(is,t))}(s,t),n=function(s){const t=s.rows[s.rows.length-1].cloneNode(!0),a=x()
e(a,t)
const n=t.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),a}(s)
P(s,n,a),function(){const s=C("custombutton",b())
if(!s.length)return
const t=s[0].parentNode
t.classList.add("fshRelative")
const a=j({className:"summary-link",href:`${w}guild&subcmd=advisor&subcmd2=weekly`,textContent:"7-Day Summary"})
B(a,(()=>i("advisor","summary"))),e(t,a)}()}async function os(){if(v())return
const t=h("table",b())[1]
t&&(S(),await k(),async function(t){if("weekly"===y.subcmd2)ns(t)
else{const a=await s(!1)
if(!a)return
ls(t,a)}}(t))}export{os as default}
//# sourceMappingURL=guildAdvisor-BmPdmvYy.js.map
