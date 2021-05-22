import{n as t,u as s,v as a,D as e,ap as n,H as r,$ as i,m as l,h as c,a as o,t as d,a4 as u,at as f,B as m,au as p,i as v,y as h,b,p as g,c as j,M as y,a9 as C,C as A}from"./calfSystem-f7cf24f6.js"
import{g as B}from"./getMembrList-5ed7c7b2.js"
import{a as D}from"./addCommas-aab57e5e.js"
import{a as w}from"./allthen-c5cfa8a4.js"
import{g as S}from"./guild-587e1e6d.js"
import{i as k}from"./intValue-66f66ba9.js"
import{c as T}from"./createTable-fea82781.js"
import{r as R}from"./replaceChild-e2c92fef.js"
import{i as x}from"./insertHtmlAfterEnd-63c8758b.js"
import{l as G}from"./loadDataTables-699492d9.js"
import"./currentGuildId-d5258e6c.js"
import"./cmdExport-a23d53af.js"
import"./indexAjaxJson-57024e17.js"
import"./idb-62b65e66.js"
import"./all-8d04560c.js"
function M(s){return t("tfoot",s)}function E(t){return S({subcmd:"advisor",subcmd2:"view",period:t})}function L(t){return{player:{level:0,name:r(t.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((s=>{return a=t.cells[s],k(r(a))
var a}))}}function F(t){const s=a(t),r=e("#pCC table table",s)
return{r:n(r.rows).slice(1,-1).map(L),s:!0}}function H(t){return s({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:t}).then(F)}const N=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function W(t,s){return s[t]?`<a href="${u}${s[t].id}">${t}</a>`:t}function J(t,s){return s[t]?s[t].level:""}function P(t,s){return s[t]?`<div class="fshAdvRank">${s[t].rank_name.trim()}</div>`:""}function X(t,s,a){$(t).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:N,data:s,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function q(t,s){o(3,d(R,t,s))}function I(t,s,a){const e=l(),n=T({className:"fshDataTable fshXSmall hover"})
return c(e,n),c(n,s),o(3,X,[n,a,d(q,e,t)]),e}function O(t,s,a){return v(t.lastElementChild.lastElementChild,` day ${s},`),a.r}function V(t,s){return(a=s,i(E,H,a)).then(d(O,t,s))
var a}function _(t,s,a){return s+t[a]}function z(t,s,a){return{...s,stats:s.stats.map(d(_,t[a].stats))}}function K(t,s){return t.map(d(z,s))}function Q(t){return{player:t.player,stats:[t.stats[6],t.stats[7],t.stats[6]+t.stats[7],t.stats[1],t.stats[2],t.stats[3],t.stats[4],t.stats[8],t.stats[5]]}}function U(t,s){return s.stats.map(d(_,t))}function Y(t,s){return`${t}<td><u>${s}</u></td>`}function Z(t,s){const a=s.stats.map(D)
return[W(s.player.name,t),J(s.player.name,t),P(s.player.name,t)].concat(a)}function tt(t,[s,...a]){const e=function(t){return t.slice(1).reduce(K,t[0]).map(Q)}(a)
I(t,function(t){return M({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${t.slice(1).reduce(U,t[0].stats).map(D).reduce(Y,"")}</tr>`})}(e),e.map(d(Z,s)))}function st(t,s){return 0===s?r(t):A(t)}function at(t,s){const a=n(s.cells,st)
return a.splice(0,1,W(a[0],t),J(a[0],t),P(a[0],t)),a}function et(t,s){f("guildAdvisor.injectAdvisorDaily")
const a=function(t,s){return n(t.rows).slice(1,-1).map(d(at,s))}(t,s),e=function(t){const s=t.rows[t.rows.length-1].cloneNode(!0),a=M()
c(a,s)
const e=s.cells[0]
return e.className="fshRight",e.setAttribute("colspan","3"),a}(t)
I(t,e,a),function(){const t=y("custombutton",g)
0!==t.length&&x(t[0],`<span> <a href="${C}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}(),p("guildAdvisor.injectAdvisorDaily")}function nt(t){"weekly"===j.subcmd2?function(t){f("guildAdvisor.injectAdvisorWeekly"),m('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const s=[B(!1)].concat([1,2,3,4,5,6,7,8].map(d(V,t)))
w(s,d(tt,t)),p("guildAdvisor.injectAdvisorWeekly")}(t):B(!1).then(d(et,t))}function rt(){if(h())return
const t=b("table",g)[1]
t&&G().then((()=>nt(t)))}export default rt
//# sourceMappingURL=guildAdvisor-8f6433ba.js.map
