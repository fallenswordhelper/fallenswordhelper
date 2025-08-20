import{g as s}from"./getMembrList-Ctbnv9ny.js"
import{t,u as a,i as e,bm as n,c as r,bv as c,s as i,bI as l,$ as o,e as d,q as u,bu as f,aR as m,aM as p,d as v,_ as h,ac as b,a1 as y,aL as g,a2 as w,b4 as C,p as B,ax as S,bo as L,Y as R,aO as T,o as j,l as k}from"./calfSystem-CT1aM4VG.js"
import{i as D}from"./interceptSubmit-D7kELBzE.js"
import{l as M}from"./loadDataTables-Ijv1_QQZ.js"
import{p as F}from"./playerLinkFromMembrList-Bu_suiiG.js"
import{c as N}from"./createTable-BT3sfAe8.js"
import{c as x}from"./chromeHandlers-Du0TH54Q.js"
import"./formToUrl-zF_XLEy1.js"
function G(s){return t("tfoot",s)}const E=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function A(s,t){return t[s]?t[s].level:""}function q(s,t){return t[s]?`<div class="fshAdvRank">${c(t[s].rank_name)}</div>`:""}function H(s,t,a){$(s).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:E,data:t,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}const O=s=>i("advisor",s),P=s=>()=>{i("advisor",s)}
function X(s,t,a){var e,n
e=t,n=s,n?.parentNode?.replaceChild?.(e,n),x(a,P,O)}function _(s,t,a){n(3,X,[s,t,a])}function I(s,t,c){const i=a(),l=N({className:"fshDataTable fshXSmall hover"})
return e(i,l),e(l,t),n(3,H,[l,c,r(_,s,i,l)]),i}function J(s){return l({subcmd:"advisor",subcmd2:"view",period:s})}const Q=s=>p(m(s))
function U(s){return{player:{level:0,name:m(s.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((t=>Q(s.cells[t])))}}async function W(s){return function(s){if(!s)return{s:!1}
const t=u("#pCC table table",s)
return{r:f(t.rows).slice(1,-1).map(U),s:!0}}(await d({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:s}))}async function Y(s,t){var a
return function(s,t,a){return y(s.lastElementChild.lastElementChild,` day ${t},`),a.r}(s,t,await(a=t,o(J,W,a)))}function z(s,t,a){return t+s[a]}function K(s,t,a){return{...t,stats:t.stats.map(r(z,s[a].stats))}}function V(s,t){return s.map(r(K,t))}function Z(s){return{player:s.player,stats:[s.stats[6],s.stats[7],s.stats[6]+s.stats[7],s.stats[1],s.stats[2],s.stats[3],s.stats[4],s.stats[8],s.stats[5]]}}function ss(s,t){return t.stats.map(r(z,s))}function ts(s,t){return`${s}<td><u>${t}</u></td>`}function as(s,t){const a=t.stats.map(g)
return[F(s,t.player.name),A(t.player.name,s),q(t.player.name,s)].concat(a)}function es(s,[t,...a]){if(!a.every((s=>b(s))))return
const e=function(s){return s.slice(1).reduce(V,s[0]).map(Z)}(a)
I(s,function(s){return G({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${s.slice(1).reduce(ss,s[0].stats).map(g).reduce(ts,"")}</tr>`})}(e),e.map(r(as,t)))}function ns(t){!async function(t){v('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const a=[s(!1)].concat([1,2,3,4,5,6,7,8].map(r(Y,t)))
es(t,await h(a))}(t)}function rs(s,t){return 0===t?m(s):k(s)}function cs(s,t){const a=f(t.cells,rs)
return a.splice(0,1,F(s,a[0]),A(a[0],s),q(a[0],s)),a}function is(s,t){const a=function(s,t){return f(s.rows).slice(1,-1).map(r(cs,t))}(s,t),n=function(s){const t=s.rows[s.rows.length-1].cloneNode(!0),a=G()
e(a,t)
const n=t.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),a}(s)
I(s,n,a),function(){const s=L("custombutton",B())
if(!s.length)return
const t=s[0].parentNode
t.classList.add("fshRelative")
const a=R({className:"summary-link",href:`${T}guild&subcmd=advisor&subcmd2=weekly`,textContent:"7-Day Summary"})
j(a,(()=>i("advisor","summary"))),e(t,a)}()}async function ls(){if(w())return
const t=C("table",B())[1]
t&&(D(),await M(),async function(t){if("weekly"===S.subcmd2)ns(t)
else{const a=await s(!1)
if(!a)return
is(t,a)}}(t))}export{ls as default}
//# sourceMappingURL=guildAdvisor-tkzCFaKF.js.map
