import{g as s}from"./getMembrList-CKfpQ-Zy.js"
import{cE as t,u as a,i as e,bc as n,e as r,bl as c,s as i,bz as l,$ as o,k as d,q as u,bk as f,aH as m,aC as p,h as v,x as h,K as b,z as y,aB as C,A as g,aW as w,p as B,am as k,be as S,v as j,aE as L,o as T,aa as R}from"./calfSystem-BGW9cdWN.js"
import{i as D}from"./interceptSubmit-CcvGNLGd.js"
import{l as x}from"./loadDataTables-Bs0m668o.js"
import{p as E}from"./playerLinkFromMembrList-D_z3vLqV.js"
import{c as M}from"./createTable-BAtu4Ri8.js"
import{c as N}from"./chromeHandlers-ChwkC07Z.js"
import"./formToUrl-BkW6Pnxi.js"
function F(s){return t("tfoot",s)}const G=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function A(s,t){return t[s]?t[s].level:""}function H(s,t){return t[s]?`<div class="fshAdvRank">${c(t[s].rank_name)}</div>`:""}function q(s,t,a){$(s).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:G,data:t,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}const z=s=>i("advisor",s),O=s=>()=>{i("advisor",s)}
function P(s,t,a){var e,n
e=t,n=s,n?.parentNode?.replaceChild?.(e,n),N(a,O,z)}function W(s,t,a){n(3,P,[s,t,a])}function X(s,t,c){const i=a(),l=M({className:"fshDataTable fshXSmall hover"})
return e(i,l),e(l,t),n(3,q,[l,c,r(W,s,i,l)]),i}function _(s){return l({subcmd:"advisor",subcmd2:"view",period:s})}const J=s=>p(m(s))
function K(s){return{player:{level:0,name:m(s.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((t=>J(s.cells[t])))}}async function U(s){return function(s){if(!s)return{s:!1}
const t=u("#pCC table table",s)
return{r:f(t.rows).slice(1,-1).map(K),s:!0}}(await d({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:s}))}async function I(s,t){var a
return function(s,t,a){return y(s.lastElementChild.lastElementChild,` day ${t},`),a.r}(s,t,await(a=t,o(_,U,a)))}function Q(s,t,a){return t+s[a]}function V(s,t,a){return{...t,stats:t.stats.map(r(Q,s[a].stats))}}function Y(s,t){return s.map(r(V,t))}function Z(s){return{player:s.player,stats:[s.stats[6],s.stats[7],s.stats[6]+s.stats[7],s.stats[1],s.stats[2],s.stats[3],s.stats[4],s.stats[8],s.stats[5]]}}function ss(s,t){return t.stats.map(r(Q,s))}function ts(s,t){return`${s}<td><u>${t}</u></td>`}function as(s,t){const a=t.stats.map(C)
return[E(s,t.player.name),A(t.player.name,s),H(t.player.name,s)].concat(a)}function es(s,[t,...a]){if(!a.every((s=>b(s))))return
const e=function(s){return s.slice(1).reduce(Y,s[0]).map(Z)}(a)
X(s,function(s){return F({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${s.slice(1).reduce(ss,s[0].stats).map(C).reduce(ts,"")}</tr>`})}(e),e.map(r(as,t)))}function ns(t){!async function(t){v('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const a=[s(!1)].concat([1,2,3,4,5,6,7,8].map(r(I,t)))
es(t,await h(a))}(t)}function rs(s,t){return 0===t?m(s):R(s)}function cs(s,t){const a=f(t.cells,rs)
return a.splice(0,1,E(s,a[0]),A(a[0],s),H(a[0],s)),a}function is(s,t){const a=function(s,t){return f(s.rows).slice(1,-1).map(r(cs,t))}(s,t),n=function(s){const t=s.rows[s.rows.length-1].cloneNode(!0),a=F()
e(a,t)
const n=t.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),a}(s)
X(s,n,a),function(){const s=S("custombutton",B())
if(!s.length)return
const t=s[0].parentNode
t.classList.add("fshRelative")
const a=j({className:"summary-link",href:`${L}guild&subcmd=advisor&subcmd2=weekly`,textContent:"7-Day Summary"})
T(a,(()=>i("advisor","summary"))),e(t,a)}()}async function ls(){if(g())return
const t=w("table",B())[1]
t&&(D(),await x(),async function(t){if("weekly"===k.subcmd2)ns(t)
else{const a=await s(!1)
if(!a)return
is(t,a)}}(t))}export{ls as default}
//# sourceMappingURL=guildAdvisor-DvveqfV3.js.map
