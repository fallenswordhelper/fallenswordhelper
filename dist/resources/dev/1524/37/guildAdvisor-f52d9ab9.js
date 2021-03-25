import{n as t,u as s,v as a,D as e,N as n,H as r,$ as i,m as l,h as c,a as o,t as d,a5 as u,ai as f,B as m,aj as p,i as v,y as h,b,p as j,c as g,K as y,aa as C,C as A}from"./calfSystem-5d0c721b.js"
import{g as B}from"./getMembrList-adbb0514.js"
import{a as D}from"./addCommas-e39c029a.js"
import{a as w}from"./allthen-e710674d.js"
import{g as S}from"./guild-f2d7df88.js"
import{i as k}from"./intValue-0e97c9b9.js"
import{c as T}from"./createTable-e2634048.js"
import{r as R}from"./replaceChild-464fc721.js"
import{i as x}from"./insertHtmlAfterEnd-4539e835.js"
import{l as G}from"./loadDataTables-e951bd1f.js"
import"./currentGuildId-01b0f97a.js"
import"./cmdExport-09ebfe19.js"
import"./indexAjaxJson-f1851d17.js"
import"./idb-a2aaccdb.js"
import"./all-d206e4b9.js"
function E(s){return t("tfoot",s)}function L(t){return S({subcmd:"advisor",subcmd2:"view",period:t})}function M(t){return{player:{level:0,name:r(t.cells[0])},stats:[3,4,5,6,7,9,1,2,8].map((s=>{return a=t.cells[s],k(r(a))
var a}))}}function F(t){const s=a(t),r=e("#pCC table table",s)
return{r:n(r.rows).slice(1,-1).map(M),s:!0}}function N(t){return s({cmd:"guild",subcmd:"advisor",subcmd2:"view",period:t}).then(F)}const H=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function W(t,s){return s[t]?`<a href="${u}${s[t].id}">${t}</a>`:t}function J(t,s){return s[t]?s[t].level:""}function P(t,s){return s[t]?`<div class="fshAdvRank">${s[t].rank_name.trim()}</div>`:""}function X(t,s,a){$(t).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:H,data:s,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function q(t,s){o(3,d(R,t,s))}function I(t,s,a){const e=l(),n=T({className:"fshDataTable fshXSmall hover"})
return c(e,n),c(n,s),o(3,X,[n,a,d(q,e,t)]),e}function K(t,s,a){return v(t.lastElementChild.lastElementChild,` day ${s},`),a.r}function O(t,s){return(a=s,i(L,N,a)).then(d(K,t,s))
var a}function V(t,s,a){return s+t[a]}function _(t,s,a){return{...s,stats:s.stats.map(d(V,t[a].stats))}}function z(t,s){return t.map(d(_,s))}function Q(t){return{player:t.player,stats:[t.stats[6],t.stats[7],t.stats[6]+t.stats[7],t.stats[1],t.stats[2],t.stats[3],t.stats[4],t.stats[8],t.stats[5]]}}function U(t,s){return s.stats.map(d(V,t))}function Y(t,s){return`${t}<td><u>${s}</u></td>`}function Z(t,s){const a=s.stats.map(D)
return[W(s.player.name,t),J(s.player.name,t),P(s.player.name,t)].concat(a)}function tt(t,[s,...a]){const e=function(t){return t.slice(1).reduce(z,t[0]).map(Q)}(a)
I(t,function(t){return E({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${t.slice(1).reduce(U,t[0].stats).map(D).reduce(Y,"")}</tr>`})}(e),e.map(d(Z,s)))}function st(t,s){return 0===s?r(t):A(t)}function at(t,s){const a=n(s.cells,st)
return a.splice(0,1,W(a[0],t),J(a[0],t),P(a[0],t)),a}function et(t,s){f("guildAdvisor.injectAdvisorDaily")
const a=function(t,s){return n(t.rows).slice(1,-1).map(d(at,s))}(t,s),e=function(t){const s=t.rows[t.rows.length-1].cloneNode(!0),a=E()
c(a,s)
const e=s.cells[0]
return e.className="fshRight",e.setAttribute("colspan","3"),a}(t)
I(t,e,a),function(){const t=y("custombutton",j)
0!==t.length&&x(t[0],`<span> <a href="${C}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}(),p("guildAdvisor.injectAdvisorDaily")}function nt(t){"weekly"===g.subcmd2?function(t){f("guildAdvisor.injectAdvisorWeekly"),m('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const s=[B(!1)].concat([1,2,3,4,5,6,7].map(d(O,t)))
w(s,d(tt,t)),p("guildAdvisor.injectAdvisorWeekly")}(t):B(!1).then(d(et,t))}function rt(){if(h())return
const t=b("table",j)[1]
t&&G().then((()=>nt(t)))}export default rt
//# sourceMappingURL=guildAdvisor-f52d9ab9.js.map
