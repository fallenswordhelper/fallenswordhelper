import{g as s}from"./getMembrList-DbSAMBC0.js"
import{cE as t,n as a,i as e,bc as n,d as r,bl as i,s as c,by as l,$ as o,h as d,q as u,bk as f,aH as m,aC as p,e as v,v as h,I as b,x as y,y as C,aV as g,p as w,ao as B,be as j,t as k,aE as S,o as T,ad as L}from"./calfSystem-BAeDn21M.js"
import{i as R}from"./interceptSubmit-CqzbaM3V.js"
import{l as D}from"./loadDataTables-Dp2zJ2PZ.js"
import{p as F}from"./playerLinkFromMembrList-DiyVuDm0.js"
import{c as M}from"./createTable-CxtktJCV.js"
import{c as N}from"./chromeHandlers-8UUxK1kM.js"
import{a as x}from"./addCommas-C_h2HN8s.js"
import"./formToUrl-Bym6lubv.js"
import"./playerLink-CoWq8U0k.js"
function E(s){return t("tfoot",s)}const G=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function q(s,t){return t[s]?t[s].level:""}function A(s,t){return t[s]?`<div class="fshAdvRank">${i(t[s].rank_name)}</div>`:""}function H(s,t,a){$(s).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:G,data:t,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}const P=s=>c("advisor",s),U=s=>()=>{c("advisor",s)}
function X(s,t,a){var e,n
e=t,n=s,n?.parentNode?.replaceChild?.(e,n),N(a,U,P)}function I(s,t,a){n(3,X,[s,t,a])}function J(s,t,i){const c=a(),l=M({className:"fshDataTable fshXSmall hover"})
return e(c,l),e(l,t),n(3,H,[l,i,r(I,s,c,l)]),c}function O(s){return l({subcmd:"advisor",subcmd2:"view",period:s})}const V=s=>p(m(s))
function W(s){return{player:{level:0,name:m(s.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((t=>V(s.cells[t])))}}async function _(s){return function(s){if(!s)return{s:!1}
const t=u("#pCC table table",s)
return{r:f(t.rows).slice(1,-1).map(W),s:!0}}(await d({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:s}))}async function z(s,t){var a
return function(s,t,a){return y(s.lastElementChild.lastElementChild,` day ${t},`),a.r}(s,t,await(a=t,o(O,_,a)))}function K(s,t,a){return t+s[a]}function Q(s,t,a){return{...t,stats:t.stats.map(r(K,s[a].stats))}}function Y(s,t){return s.map(r(Q,t))}function Z(s){return{player:s.player,stats:[s.stats[6],s.stats[7],s.stats[6]+s.stats[7],s.stats[1],s.stats[2],s.stats[3],s.stats[4],s.stats[8],s.stats[5]]}}function ss(s,t){return t.stats.map(r(K,s))}function ts(s,t){return`${s}<td><u>${t}</u></td>`}function as(s,t){const a=t.stats.map(x)
return[F(s,t.player.name),q(t.player.name,s),A(t.player.name,s)].concat(a)}function es(s,[t,...a]){if(!a.every((s=>b(s))))return
const e=function(s){return s.slice(1).reduce(Y,s[0]).map(Z)}(a)
J(s,function(s){return E({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${s.slice(1).reduce(ss,s[0].stats).map(x).reduce(ts,"")}</tr>`})}(e),e.map(r(as,t)))}function ns(t){!async function(t){v('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const a=[s(!1)].concat([1,2,3,4,5,6,7,8].map(r(z,t)))
es(t,await h(a))}(t)}function rs(s,t){return 0===t?m(s):L(s)}function is(s,t){const a=f(t.cells,rs)
return a.splice(0,1,F(s,a[0]),q(a[0],s),A(a[0],s)),a}function cs(s,t){const a=function(s,t){return f(s.rows).slice(1,-1).map(r(is,t))}(s,t),n=function(s){const t=s.rows[s.rows.length-1].cloneNode(!0),a=E()
e(a,t)
const n=t.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),a}(s)
J(s,n,a),function(){const s=j("custombutton",w())
if(!s.length)return
const t=s[0].parentNode
t.classList.add("fshRelative")
const a=k({className:"summary-link",href:`${S}guild&subcmd=advisor&subcmd2=weekly`,textContent:"7-Day Summary"})
T(a,(()=>c("advisor","summary"))),e(t,a)}()}async function ls(){if(C())return
const t=g("table",w())[1]
t&&(R(),await D(),async function(t){if("weekly"===B.subcmd2)ns(t)
else{const a=await s(!1)
if(!a)return
cs(t,a)}}(t))}export{ls as default}
//# sourceMappingURL=guildAdvisor-C4l3rFCh.js.map
