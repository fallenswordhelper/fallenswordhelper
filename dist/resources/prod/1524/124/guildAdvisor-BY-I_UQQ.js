import{g as s}from"./getMembrList-DcwNFRgk.js"
import{c1 as t,m as a,i as e,aT as n,c as r,a$ as i,s as o,e as c,q as l,a_ as d,aq as u,$ as f,d as m,v as p,w as v,az as h,p as b,ag as y,aU as g,n as j,ap as w,o as C,a8 as B}from"./calfSystem-0LeC9ahe.js"
import{i as L}from"./interceptSubmit-CbRQMY1Y.js"
import{l as T}from"./loadDataTables-DYgT_d3P.js"
import{p as k}from"./playerLinkFromMembrList-DWdchkpr.js"
import{c as S}from"./createTable-CL-6ay_Y.js"
import{c as R}from"./chromeHandlers-sgOOO2Ws.js"
import{g as D}from"./guild-BNduOAoP.js"
import{i as G}from"./intValue-C7nTQec1.js"
import{a as M}from"./all-YfMtr2SN.js"
import{i as N}from"./isArray-eVldfhw1.js"
import{a as F}from"./addCommas-C_h2HN8s.js"
import"./guildMembers-CrHUiuWG.js"
import"./now-Cx4PsKjI.js"
import"./formToUrl-i63RwstJ.js"
import"./playerLink-DdiErVR9.js"
function x(s){return t("tfoot",s)}const A=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function q(s,t){return t[s]?t[s].level:""}function E(s,t){return t[s]?`<div class="fshAdvRank">${i(t[s].rank_name)}</div>`:""}function H(s,t,a){$(s).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:A,data:t,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}const U=s=>o("advisor",s),_=s=>()=>{o("advisor",s)}
function P(s,t,a){var e,n
e=t,n=s,n?.parentNode?.replaceChild?.(e,n),R(a,_,U)}function X(s,t,a){n(3,P,[s,t,a])}function z(s,t,i){const o=a(),c=S({className:"fshDataTable fshXSmall hover"})
return e(o,c),e(c,t),n(3,H,[c,i,r(X,s,o,c)]),o}function J(s){return D({subcmd:"advisor",subcmd2:"view",period:s})}const O=s=>G(u(s))
function Q(s){return{player:{level:0,name:u(s.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((t=>O(s.cells[t])))}}async function V(s){return function(s){if(!s)return{s:!1}
const t=l("#pCC table table",s)
return{r:d(t.rows).slice(1,-1).map(Q),s:!0}}(await c({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:s}))}async function W(s,t){var a
return function(s,t,a){return p(s.lastElementChild.lastElementChild,` day ${t},`),a.r}(s,t,await(a=t,f(J,V,a)))}function Z(s,t,a){return t+s[a]}function I(s,t,a){return{...t,stats:t.stats.map(r(Z,s[a].stats))}}function K(s,t){return s.map(r(I,t))}function Y(s){return{player:s.player,stats:[s.stats[6],s.stats[7],s.stats[6]+s.stats[7],s.stats[1],s.stats[2],s.stats[3],s.stats[4],s.stats[8],s.stats[5]]}}function ss(s,t){return t.stats.map(r(Z,s))}function ts(s,t){return`${s}<td><u>${t}</u></td>`}function as(s,t){const a=t.stats.map(F)
return[k(s,t.player.name),q(t.player.name,s),E(t.player.name,s)].concat(a)}function es(s,[t,...a]){if(!a.every((s=>N(s))))return
const e=function(s){return s.slice(1).reduce(K,s[0]).map(Y)}(a)
z(s,function(s){return x({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${s.slice(1).reduce(ss,s[0].stats).map(F).reduce(ts,"")}</tr>`})}(e),e.map(r(as,t)))}function ns(t){!async function(t){m('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const a=[s(!1)].concat([1,2,3,4,5,6,7,8].map(r(W,t)))
es(t,await M(a))}(t)}function rs(s,t){return 0===t?u(s):B(s)}function is(s,t){const a=d(t.cells,rs)
return a.splice(0,1,k(s,a[0]),q(a[0],s),E(a[0],s)),a}function os(s,t){const a=function(s,t){return d(s.rows).slice(1,-1).map(r(is,t))}(s,t),n=function(s){const t=s.rows[s.rows.length-1].cloneNode(!0),a=x()
e(a,t)
const n=t.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),a}(s)
z(s,n,a),function(){const s=g("custombutton",b())
if(!s.length)return
const t=s[0].parentNode
t.classList.add("fshRelative")
const a=j({className:"summary-link",href:`${w}guild&subcmd=advisor&subcmd2=weekly`,textContent:"7-Day Summary"})
C(a,(()=>o("advisor","summary"))),e(t,a)}()}async function cs(){if(v())return
const t=h("table",b())[1]
t&&(L(),await T(),async function(t){if("weekly"===y.subcmd2)ns(t)
else{const a=await s(!1)
if(!a)return
os(t,a)}}(t))}export{cs as default}
//# sourceMappingURL=guildAdvisor-BY-I_UQQ.js.map
