import{n as t,m as s,h as a,a as e,t as n,a2 as r,af as i,A as c,ag as l,i as o,x as d,b as u,p as f,c as m,M as p,J as v,a7 as h,G as b,B as g}from"./calfSystem-c91a5c89.js"
import{g as j}from"./getMembrList-fa867d4f.js"
import{a as y}from"./addCommas-20414553.js"
import{a as A}from"./allthen-259c1952.js"
import{g as B}from"./guild-8eb115eb.js"
import{c as C}from"./createTable-443d89cd.js"
import{r as D}from"./replaceChild-39c1023b.js"
import{i as S}from"./insertHtmlAfterEnd-3d170c1c.js"
import{l as k}from"./loadDataTables-fbe68d5e.js"
import"./currentGuildId-1acce0c7.js"
import"./cmdExport-6ed03a19.js"
import"./indexAjaxJson-6b76870e.js"
import"./idb-ba7ef5fa.js"
import"./all-978030c9.js"
function T(s){return t("tfoot",s)}function w(t){return function(t){return B({subcmd:"advisor",subcmd2:"view",period:t})}(t)}const x=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function G(t,s){return s[t]?`<a href="${r}${s[t].id}">${t}</a>`:t}function R(t,s){return s[t]?s[t].level:""}function M(t,s){return s[t]?`<div class="fshAdvRank">${s[t].rank_name.trim()}</div>`:""}function E(t,s,a){$(t).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:x,data:s,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function L(t,s){e(3,n(D,t,s))}function F(t,r,i){const c=s(),l=C({className:"fshDataTable fshXSmall hover"})
return a(c,l),a(l,r),e(3,E,[l,i,n(L,c,t)]),c}function J(t,s,a){return o(t.lastElementChild.lastElementChild,` day ${s},`),a.r}function N(t,s){return w(s).then(n(J,t,s))}function W(t,s,a){return s+t[a]}function H(t,s,a){return{...s,stats:s.stats.map(n(W,t[a].stats))}}function P(t,s){return t.map(n(H,s))}function X(t){return{player:t.player,stats:[t.stats[6],t.stats[7],t.stats[6]+t.stats[7],t.stats[1],t.stats[2],t.stats[3],t.stats[4],t.stats[8],t.stats[5]]}}function q(t,s){return s.stats.map(n(W,t))}function I(t,s){return`${t}<td><u>${s}</u></td>`}function O(t,s){const a=s.stats.map(y)
return[G(s.player.name,t),R(s.player.name,t),M(s.player.name,t)].concat(a)}function _(t,[s,...a]){const e=function(t){return t.slice(1).reduce(P,t[0]).map(X)}(a)
F(t,function(t){return T({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${t.slice(1).reduce(q,t[0].stats).map(y).reduce(I,"")}</tr>`})}(e),e.map(n(O,s)))}function z(t,s){return 0===s?b(t):g(t)}function K(t,s){const a=p(s.cells,z)
return a.splice(0,1,G(a[0],t),R(a[0],t),M(a[0],t)),a}function Q(t,s){i("guildAdvisor.injectAdvisorDaily")
const e=function(t,s){return p(t.rows).slice(1,-1).map(n(K,s))}(t,s),r=function(t){const s=t.rows[t.rows.length-1].cloneNode(!0),e=T()
a(e,s)
const n=s.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),e}(t)
F(t,r,e),function(){const t=v("custombutton",f)
0!==t.length&&S(t[0],`<span> <a href="${h}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}(),l("guildAdvisor.injectAdvisorDaily")}function U(t){"weekly"===m.subcmd2?function(t){i("guildAdvisor.injectAdvisorWeekly"),c('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const s=[j(!1)].concat([1,2,3,4,5,6,7].map(n(N,t)))
A(s,n(_,t)),l("guildAdvisor.injectAdvisorWeekly")}(t):j(!1).then(n(Q,t))}function V(){if(d())return
const t=u("table",f)[1]
t&&k().then((()=>U(t)))}export default V
//# sourceMappingURL=guildAdvisor-898a33a4.js.map
