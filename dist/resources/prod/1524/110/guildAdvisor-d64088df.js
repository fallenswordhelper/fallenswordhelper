import{g as s}from"./getMembrList-d370ab65.js"
import{bY as t,l as a,i as e,aN as n,c as r,aV as i,d as l,q as c,aU as o,am as d,$ as u,bK as f,bL as m,s as p,v,w as h,av as b,p as y,ac as j,aO as g,al as w,a4 as S}from"./calfSystem-929ac228.js"
import{i as C}from"./insertHtmlAfterEnd-cbb15ee8.js"
import{i as B}from"./interceptSubmit-9ec04868.js"
import{l as k}from"./loadDataTables-b53232a5.js"
import{p as T}from"./playerLinkFromMembrList-4421f644.js"
import{c as A}from"./createTable-6b9603d1.js"
import{g as D}from"./guild-5e30924d.js"
import{i as L}from"./intValue-e1798d0a.js"
import{a as M}from"./all-414e0607.js"
import{a as P}from"./addCommas-47d6aaa1.js"
import"./guildMembers-ec6b013f.js"
import"./isArray-09a53da7.js"
import"./now-6f22aec9.js"
import"./idb-8fd6b5d1.js"
import"./formToUrl-25253a60.js"
function R(s){return t("tfoot",s)}function F(s,t){return t?.parentNode?.replaceChild?.(s,t)}const G=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function J(s,t){return t[s]?t[s].level:""}function N(s,t){return t[s]?`<div class="fshAdvRank">${i(t[s].rank_name)}</div>`:""}function E(s,t,a){$(s).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:G,data:t,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function x(s,t){n(3,r(F,s,t))}function H(s,t,i){const l=a(),c=A({className:"fshDataTable fshXSmall hover"})
return e(l,c),e(c,t),n(3,E,[c,i,r(x,l,s)]),l}function W(s){return D({subcmd:"advisor",subcmd2:"view",period:s})}const X=s=>L(d(s))
function q(s){return{player:{level:0,name:d(s.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((t=>X(s.cells[t])))}}async function K(s){return function(s){const t=c("#pCC table table",s)
return{r:o(t.rows).slice(1,-1).map(q),s:!0}}(await l({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:s}))}async function O(s,t){var a
return function(s,t,a){return v(s.lastElementChild.lastElementChild,` day ${t},`),a.r}(s,t,await(a=t,u(W,K,a)))}function U(s,t,a){return t+s[a]}function V(s,t,a){return{...t,stats:t.stats.map(r(U,s[a].stats))}}function Y(s,t){return s.map(r(V,t))}function _(s){return{player:s.player,stats:[s.stats[6],s.stats[7],s.stats[6]+s.stats[7],s.stats[1],s.stats[2],s.stats[3],s.stats[4],s.stats[8],s.stats[5]]}}function z(s,t){return t.stats.map(r(U,s))}function I(s,t){return`${s}<td><u>${t}</u></td>`}function Q(s,t){const a=t.stats.map(P)
return[T(s,t.player.name),J(t.player.name,s),N(t.player.name,s)].concat(a)}function Z(s,[t,...a]){const e=function(s){return s.slice(1).reduce(Y,s[0]).map(_)}(a)
H(s,function(s){return R({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${s.slice(1).reduce(z,s[0].stats).map(P).reduce(I,"")}</tr>`})}(e),e.map(r(Q,t)))}function ss(t){f("JS Perf","injectAdvisorWeekly"),async function(t){p('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const a=[s(!1)].concat([1,2,3,4,5,6,7,8].map(r(O,t)))
Z(t,await M(a))}(t),m("JS Perf","injectAdvisorWeekly")}function ts(s,t){return 0===t?d(s):S(s)}function as(s,t){const a=o(t.cells,ts)
return a.splice(0,1,T(s,a[0]),J(a[0],s),N(a[0],s)),a}function es(s,t){f("JS Perf","injectAdvisorDaily")
const a=function(s,t){return o(s.rows).slice(1,-1).map(r(as,t))}(s,t),n=function(s){const t=s.rows[s.rows.length-1].cloneNode(!0),a=R()
e(a,t)
const n=t.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),a}(s)
H(s,n,a),function(){const s=g("custombutton",y())
0!==s.length&&C(s[0],`<span> <a href="${w}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}(),m("JS Perf","injectAdvisorDaily")}async function ns(){if(h())return
const t=b("table",y())[1]
t&&(B(),await k(),async function(t){"weekly"===j.subcmd2?ss(t):es(t,await s(!1))}(t))}export{ns as default}
//# sourceMappingURL=guildAdvisor-d64088df.js.map
