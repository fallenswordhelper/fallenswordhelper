import{g as s}from"./getMembrList-Zu5hjTzC.js"
import{t,u as a,i as e,bp as n,c as r,by as c,s as i,bL as l,$ as o,e as d,q as u,bx as f,aT as m,aO as p,d as v,a0 as h,ad as b,a2 as y,aN as g,a3 as w,b6 as C,p as B,ay as T,br as S,Z as L,aQ as R,o as j,l as k}from"./calfSystem-CQOGdqPv.js"
import{i as D}from"./interceptSubmit-B-ce898B.js"
import{l as N}from"./loadDataTables-AKoQZyAz.js"
import{p as M}from"./playerLinkFromMembrList-CqaTqgsg.js"
import{c as x}from"./createTable-ZYcS2hxf.js"
import{c as F}from"./chromeHandlers-Bmn24ZDU.js"
import"./formToUrl-BAYKyqXO.js"
function G(s){return t("tfoot",s)}const E=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function A(s,t){return t[s]?t[s].level:""}function H(s,t){return t[s]?`<div class="fshAdvRank">${c(t[s].rank_name)}</div>`:""}function q(s,t,a){$(s).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:E,data:t,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}const O=s=>i("advisor",s),P=s=>()=>{i("advisor",s)}
function X(s,t,a){var e,n
e=t,n=s,n?.parentNode?.replaceChild?.(e,n),F(a,P,O)}function J(s,t,a){n(3,X,[s,t,a])}function Q(s,t,c){const i=a(),l=x({className:"fshDataTable fshXSmall hover"})
return e(i,l),e(l,t),n(3,q,[l,c,r(J,s,i,l)]),i}function U(s){return l({subcmd:"advisor",subcmd2:"view",period:s})}function W(s){return{player:{level:0,name:m(s.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map(t=>{return a=s.cells[t],p(m(a))
var a})}}async function Z(s){return function(s){if(!s)return{s:!1}
const t=u("#pCC table table",s)
return{r:f(t.rows).slice(1,-1).map(W),s:!0}}(await d({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:s}))}async function _(s,t){var a
return function(s,t,a){return y(s.lastElementChild.lastElementChild,` day ${t},`),a.r}(s,t,await(a=t,o(U,Z,a)))}function z(s,t,a){return t+s[a]}function I(s,t,a){return{...t,stats:t.stats.map(r(z,s[a].stats))}}function K(s,t){return s.map(r(I,t))}function V(s){return{player:s.player,stats:[s.stats[6],s.stats[7],s.stats[6]+s.stats[7],s.stats[1],s.stats[2],s.stats[3],s.stats[4],s.stats[8],s.stats[5]]}}function Y(s,t){return t.stats.map(r(z,s))}function ss(s,t){return`${s}<td><u>${t}</u></td>`}function ts(s,t){const a=t.stats.map(g)
return[M(s,t.player.name),A(t.player.name,s),H(t.player.name,s)].concat(a)}function as(s,[t,...a]){if(!a.every(s=>b(s)))return
const e=function(s){return s.slice(1).reduce(K,s[0]).map(V)}(a)
Q(s,function(s){return G({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${s.slice(1).reduce(Y,s[0].stats).map(g).reduce(ss,"")}</tr>`})}(e),e.map(r(ts,t)))}function es(t){!async function(t){v('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const a=[s(!1)].concat([1,2,3,4,5,6,7,8].map(r(_,t)))
as(t,await h(a))}(t)}function ns(s,t){return 0===t?m(s):k(s)}function rs(s,t){const a=f(t.cells,ns)
return a.splice(0,1,M(s,a[0]),A(a[0],s),H(a[0],s)),a}function cs(s,t){const a=function(s,t){return f(s.rows).slice(1,-1).map(r(rs,t))}(s,t),n=function(s){const t=s.rows[s.rows.length-1].cloneNode(!0),a=G()
e(a,t)
const n=t.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),a}(s)
Q(s,n,a),function(){const s=S("custombutton",B())
if(!s.length)return
const t=s[0].parentNode
t.classList.add("fshRelative")
const a=L({className:"summary-link",href:`${R}guild&subcmd=advisor&subcmd2=weekly`,textContent:"7-Day Summary"})
j(a,()=>i("advisor","summary")),e(t,a)}()}async function is(){if(w())return
const t=C("table",B())[1]
t&&(D(),await N(),async function(t){if("weekly"===T.subcmd2)es(t)
else{const a=await s(!1)
if(!a)return
cs(t,a)}}(t))}export{is as default}
//# sourceMappingURL=guildAdvisor-CB3Dj3Y0.js.map
