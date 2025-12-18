import{g as s}from"./getMembrList-CFjzYLzE.js"
import{u as t,v as a,i as e,br as n,c as r,bA as i,s as c,bJ as l,$ as o,e as d,q as u,bz as f,aT as m,aO as p,d as v,a1 as h,ad as b,a3 as y,aN as g,a4 as w,b6 as C,p as B,ay as S,bt as T,_ as j,aQ as k,o as L,m as R}from"./calfSystem-Cs6CSxoU.js"
import{i as D}from"./interceptSubmit-Bhotwi5X.js"
import{l as M}from"./loadDataTables-Ck0U5wjM.js"
import{p as N}from"./playerLinkFromMembrList-CXosXtyI.js"
import{c as G}from"./createTable-Dj4e_Imc.js"
import{c as F}from"./chromeHandlers-BKaCuR88.js"
import"./guildMembers-Bfrwbkp_.js"
import"./formToUrl-CAPzQx_Y.js"
function x(s){return t("tfoot",s)}const A=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function E(s,t){return t[s]?t[s].level:""}function H(s,t){return t[s]?`<div class="fshAdvRank">${i(t[s].rank_name)}</div>`:""}function q(s,t,a){$(s).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:A,data:t,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}const J=s=>c("advisor",s),O=s=>()=>{c("advisor",s)}
function P(s,t,a){var e,n
e=t,n=s,n?.parentNode?.replaceChild?.(e,n),F(a,O,J)}function X(s,t,a){n(3,P,[s,t,a])}function _(s,t,i){const c=a(),l=G({className:"fshDataTable fshXSmall hover"})
return e(c,l),e(l,t),n(3,q,[l,i,r(X,s,c,l)]),c}function z(s){return l({subcmd:"advisor",subcmd2:"view",period:s})}function K(s){return{player:{level:0,name:m(s.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map(t=>{return a=s.cells[t],p(m(a))
var a})}}async function Q(s){return function(s){if(!s)return{s:!1}
const t=u("#pCC table table",s)
return{r:f(t.rows).slice(1,-1).map(K),s:!0}}(await d({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:s}))}async function U(s,t){var a
return function(s,t,a){return y(s.lastElementChild.lastElementChild,` day ${t},`),a.r}(s,t,await(a=t,o(z,Q,a)))}function V(s,t,a){return t+s[a]}function W(s,t,a){return{...t,stats:t.stats.map(r(V,s[a].stats))}}function Y(s,t){return s.map(r(W,t))}function I(s){return{player:s.player,stats:[s.stats[6],s.stats[7],s.stats[6]+s.stats[7],s.stats[1],s.stats[2],s.stats[3],s.stats[4],s.stats[8],s.stats[5]]}}function Z(s,t){return t.stats.map(r(V,s))}function ss(s,t){return`${s}<td><u>${t}</u></td>`}function ts(s,t){const a=t.stats.map(g)
return[N(s,t.player.name),E(t.player.name,s),H(t.player.name,s)].concat(a)}function as(s,[t,...a]){if(!a.every(s=>b(s)))return
const e=function(s){return s.slice(1).reduce(Y,s[0]).map(I)}(a)
_(s,function(s){return x({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${s.slice(1).reduce(Z,s[0].stats).map(g).reduce(ss,"")}</tr>`})}(e),e.map(r(ts,t)))}function es(t){!async function(t){v('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const a=[s(!1)].concat([1,2,3,4,5,6,7,8].map(r(U,t)))
as(t,await h(a))}(t)}function ns(s,t){return 0===t?m(s):R(s)}function rs(s,t){const a=f(t.cells,ns)
return a.splice(0,1,N(s,a[0]),E(a[0],s),H(a[0],s)),a}function is(s,t){const a=function(s,t){return f(s.rows).slice(1,-1).map(r(rs,t))}(s,t),n=function(s){const t=s.rows[s.rows.length-1].cloneNode(!0),a=x()
e(a,t)
const n=t.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),a}(s)
_(s,n,a),function(){const s=T("custombutton",B())
if(!s.length)return
const t=s[0].parentNode
t.classList.add("fshRelative")
const a=j({className:"summary-link",href:`${k}guild&subcmd=advisor&subcmd2=weekly`,textContent:"7-Day Summary"})
L(a,()=>c("advisor","summary")),e(t,a)}()}async function cs(){if(w())return
const t=C("table",B())[1]
t&&(D(),await M(),async function(t){if("weekly"===S.subcmd2)es(t)
else{const a=await s(!1)
if(!a)return
is(t,a)}}(t))}export{cs as default}
//# sourceMappingURL=guildAdvisor-CkcEP8Bx.js.map
