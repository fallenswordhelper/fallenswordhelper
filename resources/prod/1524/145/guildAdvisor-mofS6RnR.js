import{g as s}from"./getMembrList-BlwQHY-c.js"
import{cB as t,m as a,i as e,bb as n,c as r,bk as c,s as i,bv as l,e as o,q as d,bj as u,aF as f,aA as m,$ as p,d as v,u as h,H as b,w as y,x as C,aS as w,p as g,am as B,bd as j,n as S,aC as k,o as L,ac as T}from"./calfSystem-CvwhhJv4.js"
import{i as R}from"./interceptSubmit-BwEZyHDv.js"
import{l as D}from"./loadDataTables-Djl1XjSy.js"
import{p as F}from"./playerLinkFromMembrList-C6kPOcgr.js"
import{c as M}from"./createTable-DRk_KQFM.js"
import{c as N}from"./chromeHandlers-DccOn_OX.js"
import{a as x}from"./addCommas-C_h2HN8s.js"
import"./formToUrl-DiUV76OP.js"
import"./playerLink-CuYsne57.js"
function G(s){return t("tfoot",s)}const A=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function E(s,t){return t[s]?t[s].level:""}function H(s,t){return t[s]?`<div class="fshAdvRank">${c(t[s].rank_name)}</div>`:""}function X(s,t,a){$(s).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:A,data:t,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}const q=s=>i("advisor",s),J=s=>()=>{i("advisor",s)}
function P(s,t,a){var e,n
e=t,n=s,n?.parentNode?.replaceChild?.(e,n),N(a,J,q)}function O(s,t,a){n(3,P,[s,t,a])}function U(s,t,c){const i=a(),l=M({className:"fshDataTable fshXSmall hover"})
return e(i,l),e(l,t),n(3,X,[l,c,r(O,s,i,l)]),i}function V(s){return l({subcmd:"advisor",subcmd2:"view",period:s})}const W=s=>m(f(s))
function _(s){return{player:{level:0,name:f(s.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((t=>W(s.cells[t])))}}async function z(s){return function(s){if(!s)return{s:!1}
const t=d("#pCC table table",s)
return{r:u(t.rows).slice(1,-1).map(_),s:!0}}(await o({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:s}))}async function I(s,t){var a
return function(s,t,a){return y(s.lastElementChild.lastElementChild,` day ${t},`),a.r}(s,t,await(a=t,p(V,z,a)))}function K(s,t,a){return t+s[a]}function Q(s,t,a){return{...t,stats:t.stats.map(r(K,s[a].stats))}}function Y(s,t){return s.map(r(Q,t))}function Z(s){return{player:s.player,stats:[s.stats[6],s.stats[7],s.stats[6]+s.stats[7],s.stats[1],s.stats[2],s.stats[3],s.stats[4],s.stats[8],s.stats[5]]}}function ss(s,t){return t.stats.map(r(K,s))}function ts(s,t){return`${s}<td><u>${t}</u></td>`}function as(s,t){const a=t.stats.map(x)
return[F(s,t.player.name),E(t.player.name,s),H(t.player.name,s)].concat(a)}function es(s,[t,...a]){if(!a.every((s=>b(s))))return
const e=function(s){return s.slice(1).reduce(Y,s[0]).map(Z)}(a)
U(s,function(s){return G({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${s.slice(1).reduce(ss,s[0].stats).map(x).reduce(ts,"")}</tr>`})}(e),e.map(r(as,t)))}function ns(t){!async function(t){v('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const a=[s(!1)].concat([1,2,3,4,5,6,7,8].map(r(I,t)))
es(t,await h(a))}(t)}function rs(s,t){return 0===t?f(s):T(s)}function cs(s,t){const a=u(t.cells,rs)
return a.splice(0,1,F(s,a[0]),E(a[0],s),H(a[0],s)),a}function is(s,t){const a=function(s,t){return u(s.rows).slice(1,-1).map(r(cs,t))}(s,t),n=function(s){const t=s.rows[s.rows.length-1].cloneNode(!0),a=G()
e(a,t)
const n=t.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),a}(s)
U(s,n,a),function(){const s=j("custombutton",g())
if(!s.length)return
const t=s[0].parentNode
t.classList.add("fshRelative")
const a=S({className:"summary-link",href:`${k}guild&subcmd=advisor&subcmd2=weekly`,textContent:"7-Day Summary"})
L(a,(()=>i("advisor","summary"))),e(t,a)}()}async function ls(){if(C())return
const t=w("table",g())[1]
t&&(R(),await D(),async function(t){if("weekly"===B.subcmd2)ns(t)
else{const a=await s(!1)
if(!a)return
is(t,a)}}(t))}export{ls as default}
//# sourceMappingURL=guildAdvisor-mofS6RnR.js.map
