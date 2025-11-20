import{g as s}from"./getMembrList-ByvYTXtZ.js"
import{u as t,v as a,i as e,bq as n,c as r,bz as i,s as c,bM as l,$ as o,e as d,q as u,by as f,aT as m,aO as p,d as v,a1 as h,ad as b,a3 as y,aN as g,a4 as w,b6 as C,p as B,ay as S,bs as T,_ as j,aQ as k,o as L,m as M}from"./calfSystem-HVCiy-VV.js"
import{i as R}from"./interceptSubmit-rdUGIp5j.js"
import{l as D}from"./loadDataTables-BV3m4OGe.js"
import{p as N}from"./playerLinkFromMembrList-CWBKWbKe.js"
import{c as F}from"./createTable-DbiNhQ4p.js"
import{c as G}from"./chromeHandlers-CCgofiNT.js"
import"./guildMembers-DswVgOFV.js"
import"./formToUrl-BMkQD7VR.js"
function x(s){return t("tfoot",s)}const q=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function A(s,t){return t[s]?t[s].level:""}function E(s,t){return t[s]?`<div class="fshAdvRank">${i(t[s].rank_name)}</div>`:""}function H(s,t,a){$(s).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:q,data:t,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}const J=s=>c("advisor",s),O=s=>()=>{c("advisor",s)}
function P(s,t,a){var e,n
e=t,n=s,n?.parentNode?.replaceChild?.(e,n),G(a,O,J)}function U(s,t,a){n(3,P,[s,t,a])}function W(s,t,i){const c=a(),l=F({className:"fshDataTable fshXSmall hover"})
return e(c,l),e(l,t),n(3,H,[l,i,r(U,s,c,l)]),c}function X(s){return l({subcmd:"advisor",subcmd2:"view",period:s})}function _(s){return{player:{level:0,name:m(s.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map(t=>{return a=s.cells[t],p(m(a))
var a})}}async function z(s){return function(s){if(!s)return{s:!1}
const t=u("#pCC table table",s)
return{r:f(t.rows).slice(1,-1).map(_),s:!0}}(await d({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:s}))}async function Q(s,t){var a
return function(s,t,a){return y(s.lastElementChild.lastElementChild,` day ${t},`),a.r}(s,t,await(a=t,o(X,z,a)))}function I(s,t,a){return t+s[a]}function K(s,t,a){return{...t,stats:t.stats.map(r(I,s[a].stats))}}function V(s,t){return s.map(r(K,t))}function Y(s){return{player:s.player,stats:[s.stats[6],s.stats[7],s.stats[6]+s.stats[7],s.stats[1],s.stats[2],s.stats[3],s.stats[4],s.stats[8],s.stats[5]]}}function Z(s,t){return t.stats.map(r(I,s))}function ss(s,t){return`${s}<td><u>${t}</u></td>`}function ts(s,t){const a=t.stats.map(g)
return[N(s,t.player.name),A(t.player.name,s),E(t.player.name,s)].concat(a)}function as(s,[t,...a]){if(!a.every(s=>b(s)))return
const e=function(s){return s.slice(1).reduce(V,s[0]).map(Y)}(a)
W(s,function(s){return x({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${s.slice(1).reduce(Z,s[0].stats).map(g).reduce(ss,"")}</tr>`})}(e),e.map(r(ts,t)))}function es(t){!async function(t){v('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const a=[s(!1)].concat([1,2,3,4,5,6,7,8].map(r(Q,t)))
as(t,await h(a))}(t)}function ns(s,t){return 0===t?m(s):M(s)}function rs(s,t){const a=f(t.cells,ns)
return a.splice(0,1,N(s,a[0]),A(a[0],s),E(a[0],s)),a}function is(s,t){const a=function(s,t){return f(s.rows).slice(1,-1).map(r(rs,t))}(s,t),n=function(s){const t=s.rows[s.rows.length-1].cloneNode(!0),a=x()
e(a,t)
const n=t.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),a}(s)
W(s,n,a),function(){const s=T("custombutton",B())
if(!s.length)return
const t=s[0].parentNode
t.classList.add("fshRelative")
const a=j({className:"summary-link",href:`${k}guild&subcmd=advisor&subcmd2=weekly`,textContent:"7-Day Summary"})
L(a,()=>c("advisor","summary")),e(t,a)}()}async function cs(){if(w())return
const t=C("table",B())[1]
t&&(R(),await D(),async function(t){if("weekly"===S.subcmd2)es(t)
else{const a=await s(!1)
if(!a)return
is(t,a)}}(t))}export{cs as default}
//# sourceMappingURL=guildAdvisor-BMpbC6xZ.js.map
