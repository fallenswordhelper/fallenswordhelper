import{g as s}from"./getMembrList-DJNIR1Ub.js"
import{v as t,w as a,i as e,bo as n,c as r,bx as c,s as i,bK as l,$ as o,j as d,q as u,bw as f,aT as m,aO as p,e as v,a1 as h,ae as b,a3 as y,aN as w,a4 as g,b6 as C,p as B,az as S,bq as T,_ as j,aQ as R,o as k,n as D}from"./calfSystem-C1X5YxJZ.js"
import{i as L}from"./interceptSubmit-D-IYqL1u.js"
import{l as N}from"./loadDataTables-vs2_7T4b.js"
import{p as G}from"./playerLinkFromMembrList-B0VOxuxm.js"
import{c as M}from"./createTable-DbW82SsR.js"
import{c as x}from"./chromeHandlers-BrtL-oSq.js"
import"./formToUrl-BjgGWW4H.js"
function F(s){return t("tfoot",s)}const q=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function A(s,t){return t[s]?t[s].level:""}function E(s,t){return t[s]?`<div class="fshAdvRank">${c(t[s].rank_name)}</div>`:""}function H(s,t,a){$(s).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:q,data:t,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}const O=s=>i("advisor",s),P=s=>()=>{i("advisor",s)}
function Q(s,t,a){var e,n
e=t,n=s,n?.parentNode?.replaceChild?.(e,n),x(a,P,O)}function X(s,t,a){n(3,Q,[s,t,a])}function _(s,t,c){const i=a(),l=M({className:"fshDataTable fshXSmall hover"})
return e(i,l),e(l,t),n(3,H,[l,c,r(X,s,i,l)]),i}function z(s){return l({subcmd:"advisor",subcmd2:"view",period:s})}const J=s=>p(m(s))
function K(s){return{player:{level:0,name:m(s.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((t=>J(s.cells[t])))}}async function U(s){return function(s){if(!s)return{s:!1}
const t=u("#pCC table table",s)
return{r:f(t.rows).slice(1,-1).map(K),s:!0}}(await d({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:s}))}async function W(s,t){var a
return function(s,t,a){return y(s.lastElementChild.lastElementChild,` day ${t},`),a.r}(s,t,await(a=t,o(z,U,a)))}function I(s,t,a){return t+s[a]}function V(s,t,a){return{...t,stats:t.stats.map(r(I,s[a].stats))}}function Y(s,t){return s.map(r(V,t))}function Z(s){return{player:s.player,stats:[s.stats[6],s.stats[7],s.stats[6]+s.stats[7],s.stats[1],s.stats[2],s.stats[3],s.stats[4],s.stats[8],s.stats[5]]}}function ss(s,t){return t.stats.map(r(I,s))}function ts(s,t){return`${s}<td><u>${t}</u></td>`}function as(s,t){const a=t.stats.map(w)
return[G(s,t.player.name),A(t.player.name,s),E(t.player.name,s)].concat(a)}function es(s,[t,...a]){if(!a.every((s=>b(s))))return
const e=function(s){return s.slice(1).reduce(Y,s[0]).map(Z)}(a)
_(s,function(s){return F({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${s.slice(1).reduce(ss,s[0].stats).map(w).reduce(ts,"")}</tr>`})}(e),e.map(r(as,t)))}function ns(t){!async function(t){v('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const a=[s(!1)].concat([1,2,3,4,5,6,7,8].map(r(W,t)))
es(t,await h(a))}(t)}function rs(s,t){return 0===t?m(s):D(s)}function cs(s,t){const a=f(t.cells,rs)
return a.splice(0,1,G(s,a[0]),A(a[0],s),E(a[0],s)),a}function is(s,t){const a=function(s,t){return f(s.rows).slice(1,-1).map(r(cs,t))}(s,t),n=function(s){const t=s.rows[s.rows.length-1].cloneNode(!0),a=F()
e(a,t)
const n=t.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),a}(s)
_(s,n,a),function(){const s=T("custombutton",B())
if(!s.length)return
const t=s[0].parentNode
t.classList.add("fshRelative")
const a=j({className:"summary-link",href:`${R}guild&subcmd=advisor&subcmd2=weekly`,textContent:"7-Day Summary"})
k(a,(()=>i("advisor","summary"))),e(t,a)}()}async function ls(){if(g())return
const t=C("table",B())[1]
t&&(L(),await N(),async function(t){if("weekly"===S.subcmd2)ns(t)
else{const a=await s(!1)
if(!a)return
is(t,a)}}(t))}export{ls as default}
//# sourceMappingURL=guildAdvisor-BH2DP7Gt.js.map
