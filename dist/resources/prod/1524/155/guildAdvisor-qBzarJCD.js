import{g as s}from"./getMembrList-BDWCwZT8.js"
import{t,u as a,i as e,bm as n,c as r,bv as c,s as i,bI as l,$ as o,e as d,q as u,bu as f,aR as m,aM as p,d as v,_ as h,ac as b,a1 as y,aL as g,a2 as w,b4 as C,p as B,ax as R,bo as S,Y as T,aO as L,o as j,l as k}from"./calfSystem-UyQ_FKFu.js"
import{i as D}from"./interceptSubmit-ChmNlDoQ.js"
import{l as M}from"./loadDataTables-Caiou-kV.js"
import{p as F}from"./playerLinkFromMembrList-Bky2tsUe.js"
import{c as N}from"./createTable-G8d3zByz.js"
import{c as x}from"./chromeHandlers-6uO6D1KI.js"
import"./formToUrl-et7r_Ml7.js"
function G(s){return t("tfoot",s)}const A=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function E(s,t){return t[s]?t[s].level:""}function H(s,t){return t[s]?`<div class="fshAdvRank">${c(t[s].rank_name)}</div>`:""}function q(s,t,a){$(s).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:A,data:t,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}const O=s=>i("advisor",s),P=s=>()=>{i("advisor",s)}
function X(s,t,a){var e,n
e=t,n=s,n?.parentNode?.replaceChild?.(e,n),x(a,P,O)}function _(s,t,a){n(3,X,[s,t,a])}function I(s,t,c){const i=a(),l=N({className:"fshDataTable fshXSmall hover"})
return e(i,l),e(l,t),n(3,q,[l,c,r(_,s,i,l)]),i}function J(s){return l({subcmd:"advisor",subcmd2:"view",period:s})}function U(s){return{player:{level:0,name:m(s.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map(t=>{return a=s.cells[t],p(m(a))
var a})}}async function W(s){return function(s){if(!s)return{s:!1}
const t=u("#pCC table table",s)
return{r:f(t.rows).slice(1,-1).map(U),s:!0}}(await d({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:s}))}async function Y(s,t){var a
return function(s,t,a){return y(s.lastElementChild.lastElementChild,` day ${t},`),a.r}(s,t,await(a=t,o(J,W,a)))}function z(s,t,a){return t+s[a]}function K(s,t,a){return{...t,stats:t.stats.map(r(z,s[a].stats))}}function Q(s,t){return s.map(r(K,t))}function V(s){return{player:s.player,stats:[s.stats[6],s.stats[7],s.stats[6]+s.stats[7],s.stats[1],s.stats[2],s.stats[3],s.stats[4],s.stats[8],s.stats[5]]}}function Z(s,t){return t.stats.map(r(z,s))}function ss(s,t){return`${s}<td><u>${t}</u></td>`}function ts(s,t){const a=t.stats.map(g)
return[F(s,t.player.name),E(t.player.name,s),H(t.player.name,s)].concat(a)}function as(s,[t,...a]){if(!a.every(s=>b(s)))return
const e=function(s){return s.slice(1).reduce(Q,s[0]).map(V)}(a)
I(s,function(s){return G({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${s.slice(1).reduce(Z,s[0].stats).map(g).reduce(ss,"")}</tr>`})}(e),e.map(r(ts,t)))}function es(t){!async function(t){v('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const a=[s(!1)].concat([1,2,3,4,5,6,7,8].map(r(Y,t)))
as(t,await h(a))}(t)}function ns(s,t){return 0===t?m(s):k(s)}function rs(s,t){const a=f(t.cells,ns)
return a.splice(0,1,F(s,a[0]),E(a[0],s),H(a[0],s)),a}function cs(s,t){const a=function(s,t){return f(s.rows).slice(1,-1).map(r(rs,t))}(s,t),n=function(s){const t=s.rows[s.rows.length-1].cloneNode(!0),a=G()
e(a,t)
const n=t.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),a}(s)
I(s,n,a),function(){const s=S("custombutton",B())
if(!s.length)return
const t=s[0].parentNode
t.classList.add("fshRelative")
const a=T({className:"summary-link",href:`${L}guild&subcmd=advisor&subcmd2=weekly`,textContent:"7-Day Summary"})
j(a,()=>i("advisor","summary")),e(t,a)}()}async function is(){if(w())return
const t=C("table",B())[1]
t&&(D(),await M(),async function(t){if("weekly"===R.subcmd2)es(t)
else{const a=await s(!1)
if(!a)return
cs(t,a)}}(t))}export{is as default}
//# sourceMappingURL=guildAdvisor-qBzarJCD.js.map
